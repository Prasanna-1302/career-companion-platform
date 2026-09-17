const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const appController = require("../controllers/appController");
const evaluator = require("../evaluator");

// Public access interview questions & templates
router.get("/public/interview/questions", appController.getInterviewQuestions);
router.get("/public/interview/templates", appController.getInterviewTemplates);

// Learning API
router.get("/courses", appController.getCourses);
router.get("/courses/:id", appController.getCourse);
router.get("/assessments", appController.getAssessments);
router.get("/assessments/:id", appController.getAssessment);
router.get("/learning/modules", appController.getLearningModules);

router.get("/profile", authMiddleware, appController.getProfile);
router.get("/interview/questions", authMiddleware, appController.getInterviewQuestions);
router.get("/interview/templates", authMiddleware, appController.getInterviewTemplates);
router.post("/interview/custom", authMiddleware, appController.generateCustomInterview);
router.post("/public/interview/custom", appController.generateCustomInterview);
router.post("/interview/feedback", authMiddleware, appController.submitInterviewFeedback);
router.post("/public/interview/feedback", appController.submitInterviewFeedback);
// Strict keyword-based evaluation endpoint
router.post('/evaluate', (req, res) => {
	const { questionId, userAnswer, required_keywords, optional_keywords, correct_answer } = req.body;
	try {
		const result = evaluator.evaluate({ required_keywords, optional_keywords, user_answer: userAnswer, correct_answer });
		res.json({ success: true, questionId: questionId || null, evaluation: result });
	} catch (e) {
		res.status(500).json({ success: false, message: 'Evaluation failed', error: e.message });
	}
});
router.get("/roadmap", authMiddleware, appController.getSkillRoadmap);
router.get("/jobs", authMiddleware, appController.getJobTracker);
router.get("/analytics", authMiddleware, appController.getProductivityAnalytics);

module.exports = router;
