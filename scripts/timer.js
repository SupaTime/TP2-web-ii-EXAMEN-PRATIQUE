let inactiveTime = 0;
const inactiveThreshold = 30000; // 30s
let messageElement;

function resetTimer() {
    inactiveTime = 0;
    if (messageElement) {
        messageElement.remove();
        messageElement = null;
    }
}

function checkInactive() {
    inactiveTime += 1000;
    if (inactiveTime >= inactiveThreshold) {
        console.log('User is inactive');
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.textContent = 'Are you still there?';
            messageElement.style.position = 'fixed';
            messageElement.style.right = '0';
            messageElement.style.bottom = '0';
            messageElement.style.background = 'none';
            messageElement.style.padding = '10px';
            document.body.appendChild(messageElement);
        }
    }
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);

setInterval(checkInactive, 1000); // Check every second
