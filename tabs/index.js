const tabBtns = document.querySelectorAll(".btn-tab");
const tabBtnScroll = document.querySelectorAll(".btn-tab-scroll");

const underline = document.querySelector(".underline");
const underlineScroll = document.querySelector(".underline-scroll");

tabBtns.forEach((tabBtn, index) => {
  tabBtn.addEventListener("click", function showActiveTab() {
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });

    tabBtn.classList.add("active");

    underline.style.left = `calc(calc(100% / 3) * ${index})`;
  });
});

tabBtnScroll.forEach((tabBtn, index) => {
  tabBtn.addEventListener("click", function showActiveTab() {
    tabBtnScroll.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });

    tabBtn.classList.add("active");

    tabBtn.scrollIntoView();

    underlineScroll.style.left = `calc(100px * ${index})`;
  });
});
