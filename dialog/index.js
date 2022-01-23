const dialogWrappers = document.querySelectorAll(".dialog-wrapper");

const dialogControls = document.querySelector(".dialog-controls");

dialogControls.addEventListener("click", showDialog);

document.addEventListener("click", (e) => {
  let targetElem = e.target;

  dialogWrappers.forEach((dialogWrapper) => {
    if (targetElem.contains(dialogWrapper)) {
      dialogWrapper.classList.remove("show");
    }
  });
});

// *********

function showDialog(e) {
  if (e.target.tagName == "BUTTON") {
    let dataDialog = e.target.dataset.dialog;

    let wrapper = document.querySelector(`.${dataDialog}`).parentElement;

    wrapper.classList.add("show");
  }
}
