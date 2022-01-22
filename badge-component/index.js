const toggleBadge = document.querySelector(".toggle-badge");

const notificationBadge = document.querySelector(".notification-badge");

toggleBadge.addEventListener("click", () => {
  if (notificationBadge.classList.contains("hide")) {
    notificationBadge.classList.remove("hide");
  } else {
    notificationBadge.classList.add("hide");
  }
});
