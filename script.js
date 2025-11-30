const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Sample responses (you can customize for clients later)
const botResponses = {
  "hello": "Hi there! How can I help your business today?",
  "pricing": "Our AI chatbot setup starts at ₹999.",
  "contact": "You can reach us at +91-9876543210.",
  "demo": "This is a live demo of your custom AI chatbot.",
  "services": "We provide AI chatbots for startups and small tech companies.",
  "default": "Thanks for your message! We'll get back to you soon."
};


function appendMessage(message, className) {
  const div = document.createElement("div");
  div.className = `chat-message ${className}`;
  div.innerText = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(msg) {
  msg = msg.toLowerCase();
  return botResponses[msg] || botResponses["default"];
}

sendBtn.addEventListener("click", () => {
  const msg = userInput.value.trim();
  if (!msg) return;
  appendMessage(msg, "user-message");
  const botReply = getBotResponse(msg);
  setTimeout(() => appendMessage(botReply, "bot-message"), 500);
  userInput.value = "";
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
