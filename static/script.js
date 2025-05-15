// function switchToChat() {
//     document.body.classList.add('chat-active');
// }

// function sendMessage() {
//     const userInput = document.getElementById('userInput');
//     const chatBody = document.getElementById('chatBody');
//     const message = userInput.value.trim();

//     if (message === '') return;

//     // Add user message
//     appendMessage('user-message', message);
//     userInput.value = '';

//     fetch('/chat', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message: message })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.task_id) {
//             waitForResponse(data.task_id);
//         } else if (data.error) {
//             appendMessage('bot-message', `Error: ${data.error}`);
//         }
//     })
//     .catch(error => {
//         appendMessage('bot-message', 'Error sending message to the server.');
//         console.error('Error sending message:', error);
//     });
// }

// function waitForResponse(taskId) {
//     const chatBody = document.getElementById('chatBody');
//     const intervalId = setInterval(() => {
//         fetch(`/task_status/${taskId}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.status === 'done') {
//                 clearInterval(intervalId);
//                 appendMessage('bot-message', data.response);
//             } else if (data.error) {
//                 clearInterval(intervalId);
//                 appendMessage('bot-message', `Error: ${data.error}`);
//             }
//             chatBody.scrollTop = chatBody.scrollHeight;
//         })
//         .catch(error => {
//             clearInterval(intervalId);
//             appendMessage('bot-message', 'Error checking task status.');
//             console.error('Error checking task status:', error);
//         });
//     }, 500); // Check status every 500 milliseconds
// }

// // File upload trigger
// function triggerFileUpload() {
//     document.getElementById('fileInput').click();
// }

// function handleFileUpload(event) {
//     const file = event.target.files[0];
//     if (file) {
//         // Switch to chat interface if not already active
//         if (!document.body.classList.contains('chat-active')) {
//             switchToChat();
//         }

//         const chatBody = document.getElementById('chatBody');
//         const userMessage = document.createElement('div');
//         userMessage.className = 'message user-message';
//         userMessage.textContent = `Attached file: ${file.name} (${Math.round(file.size / 1024)} KB)`;
//         chatBody.appendChild(userMessage);
//         chatBody.scrollTop = chatBody.scrollHeight;

//         const formData = new FormData();
//         formData.append('file', file);

//         fetch('/upload', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.text) {
//                 appendMessage('bot-message', `Extracted Text from ${file.name}:\n${data.text}`);
//             } else if (data.error) {
//                 appendMessage('bot-message', `Error processing ${file.name}: ${data.error}`);
//             }
//             chatBody.scrollTop = chatBody.scrollHeight;
//         })
//         .catch(error => {
//             appendMessage('bot-message', `Error uploading ${file.name}.`);
//             console.error('Error uploading file:', error);
//         });
//     }
// }

// // Voice command mock (replace with actual Web Speech API integration)
// function startVoiceCommand() {
//     // Switch to chat interface if not already active
//     if (!document.body.classList.contains('chat-active')) {
//         switchToChat();
//     }

//     appendMessage('user-message', 'Voice command activated... (Mock: "Tell me about space")');

//     // Replace this mock with actual Web Speech API integration
//     setTimeout(() => {
//         appendMessage('bot-message', 'Space is vast and full of wonders! (This is a mock response for a voice command. Integrate Web Speech API for actual voice recognition.)');
//     }, 500);
// }

// // Helper function to append messages to the chat body
// function appendMessage(className, message) {
//     const chatBody = document.getElementById('chatBody');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${className}`;
//     messageDiv.textContent = message;
//     chatBody.appendChild(messageDiv);
//     chatBody.scrollTop = chatBody.scrollHeight;
// }

// // Send message on Enter key
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('userInput').addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') sendMessage();
//     });
// });






















































// let recognition; // Declare recognition object globally
// let isListening = false; // Flag to track if voice recognition is active

// function switchToChat() {
//     document.body.classList.add('chat-active');
// }

// function sendMessage() {
//     const userInput = document.getElementById('userInput');
//     const chatBody = document.getElementById('chatBody');
//     const message = userInput.value.trim();

//     if (message === '') return;

//     appendMessage('user-message', message);
//     userInput.value = '';

//     // Show typing indicator
//     showTypingIndicator();

//     fetch('/chat', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message: message })
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Hide typing indicator when response comes back
//         hideTypingIndicator();
//         if (data.task_id) {
//             waitForResponse(data.task_id);
//         } else if (data.error) {
//             appendMessage('bot-message', `Error: ${data.error}`);
//         }
//     })
//     .catch(error => {
//         hideTypingIndicator();
//         appendMessage('bot-message', 'Error sending message to the server.');
//         console.error('Error sending message:', error);
//     });
// }

// function waitForResponse(taskId) {
//     const chatBody = document.getElementById('chatBody');
//     const intervalId = setInterval(() => {
//         fetch(`/task_status/${taskId}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.status === 'done') {
//                 clearInterval(intervalId);
//                 appendMessage('bot-message', data.response);
//             } else if (data.error) {
//                 clearInterval(intervalId);
//                 appendMessage('bot-message', `Error: ${data.error}`);
//             }
//             chatBody.scrollTop = chatBody.scrollHeight;
//         })
//         .catch(error => {
//             clearInterval(intervalId);
//             appendMessage('bot-message', 'Error checking task status.');
//             console.error('Error checking task status:', error);
//         });
//     }, 500); // Check status every 500 milliseconds
// }

// // File upload trigger
// function triggerFileUpload() {
//     document.getElementById('fileInput').click();
// }

// function handleFileUpload(event) {
//     const file = event.target.files[0];
//     if (file) {
//         // Switch to chat interface if not already active
//         if (!document.body.classList.contains('chat-active')) {
//             switchToChat();
//         }

//         const chatBody = document.getElementById('chatBody');
//         const userMessage = document.createElement('div');
//         userMessage.className = 'message user-message';
//         userMessage.textContent = `Attached file: ${file.name} (${Math.round(file.size / 1024)} KB)`;
//         chatBody.appendChild(userMessage);
//         chatBody.scrollTop = chatBody.scrollHeight;

//         const formData = new FormData();
//         formData.append('file', file);

//         fetch('/upload', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.text) {
//                 appendMessage('bot-message', `Extracted Text from ${file.name}:\n${data.text}`);
//             } else if (data.error) {
//                 appendMessage('bot-message', `Error processing ${file.name}: ${data.error}`);
//             }
//             chatBody.scrollTop = chatBody.scrollHeight;
//         })
//         .catch(error => {
//             appendMessage('bot-message', `Error uploading ${file.name}.`);
//             console.error('Error uploading file:', error);
//         });
//     }
// }

// function startVoiceCommand() {
//     // Ensure browser supports SpeechRecognition
//     if ('webkitSpeechRecognition' in window) {
//         recognition = new webkitSpeechRecognition();
//         recognition.continuous = false; // Stop recognition after first phrase
//         recognition.interimResults = false; // Don't show interim results
//         recognition.lang = 'en-US'; // You can set the language

//         recognition.onstart = () => {
//             isListening = true;
//             document.querySelector('.voice-btn').classList.add('listening');
//             console.log('Voice recognition started');
//             // Switch to chat interface if not already active
//             if (!document.body.classList.contains('chat-active')) {
//                 switchToChat();
//             }
//             appendMessage('user-message', 'Listening...');
//         };

//         recognition.onresult = (event) => {
//             isListening = false;
//             document.querySelector('.voice-btn').classList.remove('listening');
//             const transcript = event.results[0][0].transcript.trim();
//             console.log('Transcript:', transcript);
//             document.getElementById('userInput').value = transcript;
//             sendMessage(); // Automatically send the transcribed message
//         };

//         recognition.onerror = (event) => {
//             isListening = false;
//             document.querySelector('.voice-btn').classList.remove('listening');
//             appendMessage('bot-message', `Voice recognition error: ${event.error}`);
//             console.error('Speech recognition error:', event);
//         };

//         recognition.onend = () => {
//             isListening = false;
//             document.querySelector('.voice-btn').classList.remove('listening');
//             console.log('Voice recognition ended');
//         };

//         recognition.start();
//     } else {
//         appendMessage('bot-message', 'Your browser does not support speech recognition.');
//         console.log('Speech recognition not supported');
//     }
// }

// // Helper function to append messages to the chat body
// function appendMessage(className, message) {
//     const chatBody = document.getElementById('chatBody');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${className}`;
//     messageDiv.textContent = message;
//     const typingIndicator = document.getElementById('typingIndicator');
//     if (typingIndicator) {
//         chatBody.insertBefore(messageDiv, typingIndicator);
//     } else {
//         chatBody.appendChild(messageDiv);
//     }
//     chatBody.scrollTop = chatBody.scrollHeight;
// }

// function showTypingIndicator() {
//     const chatBody = document.getElementById('chatBody');
//     const typingDiv = document.createElement('div');
//     typingDiv.className = 'message bot-message typing-indicator';
//     typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div> Nova is typing...';
//     typingDiv.id = 'typingIndicator';
//     chatBody.appendChild(typingDiv);
//     chatBody.scrollTop = chatBody.scrollHeight;
// }

// function hideTypingIndicator() {
//     const typingDiv = document.getElementById('typingIndicator');
//     if (typingDiv) {
//         typingDiv.remove();
//     }
// }

// // Send message on Enter key
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('userInput').addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') sendMessage();
//     });
// });





















































let recognition; // Declare recognition object globally
let isListening = false; // Flag to track if voice recognition is active

function switchToChat() {
    document.body.classList.add('chat-active');
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const message = userInput.value.trim();

    if (message === '') return;

    appendMessage('user-message', message);
    userInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        // Hide typing indicator when response comes back
        hideTypingIndicator();
        if (data.task_id) {
            waitForResponse(data.task_id);
        } else if (data.error) {
            appendMessage('bot-message', `Error: ${data.error}`);
        }
    })
    .catch(error => {
        hideTypingIndicator();
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

function startVoiceCommand() {
    const userInputField = document.getElementById('userInput');

    // Ensure browser supports SpeechRecognition
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false; // Stop recognition after first phrase
        recognition.interimResults = true; // Show interim results

        recognition.lang = 'en-US'; // You can set the language

        recognition.onstart = () => {
            isListening = true;
            document.querySelector('.voice-btn').classList.add('listening');
            console.log('Voice recognition started');
            // Switch to chat interface if not already active
            if (!document.body.classList.contains('chat-active')) {
                switchToChat();
            }
            userInputField.placeholder = 'Listening...'; // Update placeholder
            userInputField.value = ''; // Clear any existing text
        };

        recognition.onresult = (event) => {
            const interimTranscript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');
            userInputField.value = interimTranscript; // Update input field with interim results
        };

        recognition.onend = () => {
            isListening = false;
            document.querySelector('.voice-btn').classList.remove('listening');
            userInputField.placeholder = 'Type your message...'; // Reset placeholder
            const finalTranscript = userInputField.value.trim();
            if (finalTranscript) {
                sendMessage(); // Automatically send the transcribed message
            }
            console.log('Voice recognition ended');
        };

        recognition.onerror = (event) => {
            isListening = false;
            document.querySelector('.voice-btn').classList.remove('listening');
            userInputField.placeholder = 'Type your message...'; // Reset placeholder
            console.error('Speech recognition error:', event);
            appendMessage('bot-message', `Voice recognition error: ${event.error}`);
        };

        recognition.start();
    } else {
        appendMessage('bot-message', 'Your browser does not support speech recognition.');
        console.log('Speech recognition not supported');
    }
}

// Helper function to append messages to the chat body
function appendMessage(className, message) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = message;
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        chatBody.insertBefore(messageDiv, typingIndicator);
    } else {
        chatBody.appendChild(messageDiv);
    }
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showTypingIndicator() {
    const chatBody = document.getElementById('chatBody');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div> Nova is typing...';
    typingDiv.id = 'typingIndicator';
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function hideTypingIndicator() {
    const typingDiv = document.getElementById('typingIndicator');
    if (typingDiv) {
        typingDiv.remove();
    }
}

// Send message on Enter key
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});