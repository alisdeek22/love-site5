const messages = [
  "بحبك موت ❤️",
  "انت كل حاجة عندي 😘",
  "مش قادر أعيش من غيرك 💖",
  "وجودك فرحة لقلبي 🌹",
  "كل يوم بحبك أكتر ❤️"
];

const messageBox = document.getElementById('message-box');
const newMessageBtn = document.getElementById('new-message-btn');

newMessageBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];
});