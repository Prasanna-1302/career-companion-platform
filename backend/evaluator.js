// Strict keyword-based evaluator
function normalize(text) {
  return (text || "").toLowerCase().replace(/[\p{P}$+<=>^`|~]/gu, " ").replace(/\s+/g, " ").trim();
}

function matchKeywords(keywords = [], answer) {
  const normalized = normalize(answer);
  const matched = [];
  const missing = [];

  for (const kw of (keywords || [])) {
    if (!kw) continue;
    // normalize the keyword the same way as the answer
    const kn = normalize(kw);
    if (!kn) continue;
    // build a flexible regex that allows whitespace between keyword tokens
    const tokenRegex = kn.replace(/\s+/g, "\\s+");
    const esc = tokenRegex.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    const re = new RegExp("\\b" + esc + "\\b", "i");
    if (re.test(normalized)) matched.push(kw);
    else if (normalized.includes(kn)) matched.push(kw);
    else missing.push(kw);
  }

  return { matched, missing };
}

function evaluate({ required_keywords = [], optional_keywords = [], user_answer = "", correct_answer = "" }) {
  const req = Array.isArray(required_keywords) ? required_keywords : [];
  const opt = Array.isArray(optional_keywords) ? optional_keywords : [];

  const normalizedAnswer = normalize(user_answer);

  if (!normalizedAnswer || normalizedAnswer.length === 0) {
    return {
      score: 0,
      status: "Incorrect",
      matched_required: [],
      missing_required: req.slice(),
      matched_optional: [],
      missing_optional: opt.slice(),
      reason: "Answer empty or does not contain expected keywords.",
      ideal_answer: correct_answer || ""
    };
  }

  const reqMatch = matchKeywords(req, normalizedAnswer);
  const optMatch = matchKeywords(opt, normalizedAnswer);

  const matchedReqCount = reqMatch.matched.length;
  const totalReq = req.length;
  const matchedOptCount = optMatch.matched.length;
  const totalOpt = opt.length;

  if (totalReq === 0) {
    // If no required keywords provided, fall back to optional-only scoring
    const base = 0;
    const optBonus = totalOpt ? Math.round((matchedOptCount / totalOpt) * 100) : 0;
    const score = Math.min(100, base + optBonus);
    return {
      score,
      status: score >= 70 ? "Correct" : (score > 0 ? "Partial" : "Incorrect"),
      matched_required: [],
      missing_required: [],
      matched_optional: optMatch.matched,
      missing_optional: optMatch.missing,
      reason: "No required keywords were configured for this question.",
      ideal_answer: correct_answer || ""
    };
  }

  if (matchedReqCount === 0) {
    return {
      score: 0,
      status: "Incorrect",
      matched_required: [],
      missing_required: req.slice(),
      matched_optional: optMatch.matched,
      missing_optional: optMatch.missing,
      reason: "No required keywords matched.",
      ideal_answer: correct_answer || ""
    };
  }

  // Base scoring: required coverage => up to 80 points
  const requiredCoverage = matchedReqCount / totalReq;
  const baseScore = Math.round(requiredCoverage * 80);

  // Optional bonus up to 20 points
  const optionalBonus = totalOpt ? Math.round((matchedOptCount / totalOpt) * 20) : 0;

  let rawScore = baseScore + optionalBonus;

  // Enforce rule: never assign 70+ if any required keyword is missing
  if (matchedReqCount < totalReq) {
    rawScore = Math.min(rawScore, 69);
  }

  const score = Math.max(0, Math.min(100, rawScore));

  const status = score === 0 ? "Incorrect" : (score >= 70 ? "Correct" : "Partial");

  const reason = score === 0 ? "Required keywords not present." : (status === "Partial" ? "Some required keywords are missing or optional keywords absent." : "All required keywords present.");

  return {
    score,
    status,
    matched_required: reqMatch.matched,
    missing_required: reqMatch.missing,
    matched_optional: optMatch.matched,
    missing_optional: optMatch.missing,
    reason,
    ideal_answer: correct_answer || ""
  };
}

module.exports = { evaluate };
