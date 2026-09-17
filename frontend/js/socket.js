const socket = io();
socket.on('connect', () => {
    console.log('Socket.io connected', socket.id);
});

socket.on('feedbackUpdated', (data) => {
    const el = document.getElementById('feedbackScore');
    if (el) el.textContent = data.score ?? '';
});

socket.on('jobTrackerUpdated', (data) => {
    const el = document.getElementById('jobCount');
    if (el) el.textContent = data.count ?? '';
});

socket.on('analyticsUpdated', (data) => {
    const hoursEl = document.getElementById('hoursCount');
    if (hoursEl) hoursEl.textContent = data.hours ?? '';
    const streakEl = document.getElementById('streakCount');
    if (streakEl) streakEl.textContent = data.streak ?? '';
});
