function switchToChat() {
    document.body.classList.add('chat-active');
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const message = userInput.value.trim();

    if (message === '') return;

    // Add user message
    appendMessage('user-message', message);
    userInput.value = '';

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.task_id) {
            waitForResponse(data.task_id);
        } else if (data.error) {
            appendMessage('bot-message', `Error: ${data.error}`);
        }
    })
    .catch(error => {
        appendMessage('bot-message', 'Error sending message to the server.');
        console.error('Error sending message:', error);
    });
}

function waitForResponse(taskId) {
    const chatBody = document.getElementById('chatBody');
    const intervalId = setInterval(() => {
        fetch(`/task_status/${taskId}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'done') {
                clearInterval(intervalId);
                appendMessage('bot-message', data.response);
            } else if (data.error) {
                clearInterval(intervalId);
                appendMessage('bot-message', `Error: ${data.error}`);
            }
            chatBody.scrollTop = chatBody.scrollHeight;
        })
        .catch(error => {
            clearInterval(intervalId);
            appendMessage('bot-message', 'Error checking task status.');
            console.error('Error checking task status:', error);
        });
    }, 500); // Check status every 500 milliseconds
}

// File upload trigger
function triggerFileUpload() {
    document.getElementById('fileInput').click();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Switch to chat interface if not already active
        if (!document.body.classList.contains('chat-active')) {
            switchToChat();
        }

        const chatBody = document.getElementById('chatBody');
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = `Attached file: ${file.name} (${Math.round(file.size / 1024)} KB)`;
        chatBody.appendChild(userMessage);
        chatBody.scrollTop = chatBody.scrollHeight;

        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.text) {
                appendMessage('bot-message', `Extracted Text from ${file.name}:\n${data.text}`);
            } else if (data.error) {
                appendMessage('bot-message', `Error processing ${file.name}: ${data.error}`);
            }
            chatBody.scrollTop = chatBody.scrollHeight;
        })
        .catch(error => {
            appendMessage('bot-message', `Error uploading ${file.name}.`);
            console.error('Error uploading file:', error);
        });
    }
}

// Voice command mock (replace with actual Web Speech API integration)
function startVoiceCommand() {
    // Switch to chat interface if not already active
    if (!document.body.classList.contains('chat-active')) {
        switchToChat();
    }

    appendMessage('user-message', 'Voice command activated... (Mock: "Tell me about space")');

    // Replace this mock with actual Web Speech API integration
    setTimeout(() => {
        appendMessage('bot-message', 'Space is vast and full of wonders! (This is a mock response for a voice command. Integrate Web Speech API for actual voice recognition.)');
    }, 500);
}

// Helper function to append messages to the chat body
function appendMessage(className, message) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Send message on Enter key
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});