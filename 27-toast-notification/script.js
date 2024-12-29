"use-strict";

const toasts = document.getElementById("toasts");
const button = document.getElementById("button");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];
button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(type ? type : getRandomType());

  notification.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages.at(Math.floor(Math.random() * messages.length));
}

function getRandomType() {
  return types.at(Math.floor(Math.random() * types.length));
}
