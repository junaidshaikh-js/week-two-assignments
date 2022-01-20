const navItems = document.querySelectorAll(".nav-items");
const asideNav = document.querySelector(".aside-nav");

asideNav.addEventListener("click", (e) => {
  navItems.forEach((navItem) => {
    if (navItem.classList.contains("active")) {
      navItem.classList.remove("active");
    }
  });

  if (e.target.tagName == "A") {
    let liElem = e.target.parentElement;

    liElem.classList.add("active");
  }
});
