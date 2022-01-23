const baselineBtn = document.querySelector(".baseline");
const leadingBtn = document.querySelector(".leading");
const stackedBtn = document.querySelector(".stacked");
const snackbarContainer = document.querySelector(".snackbar-container");

let timerId;

baselineBtn.addEventListener("click", showBaseline);
leadingBtn.addEventListener("click", showLeading);
stackedBtn.addEventListener("click", showStacked);

// **********
function showBaseline() {
  clearTimeout(timerId);

  removeStacked();
  removeOldSnackbar();

  let snackbar = createSnackbar(
    "Can't send this photo. Retry in 5 seconds",
    "RETRY"
  );

  snackbar.classList.add("centered");

  snackbarContainer.append(snackbar);

  timerId = dismissSnackbar(snackbar);
}

function showLeading() {
  clearTimeout(timerId);

  removeStacked();
  removeOldSnackbar();

  let snackbar = createSnackbar("Your phtoto has been archieved", "undo");

  snackbarContainer.append(snackbar);

  timerId = dismissSnackbar(snackbar);
}

function showStacked() {
  removeOldSnackbar();

  let snackbar = createSnackbar(
    "Can't send this photo. Retry in 5 seconds",
    "RETRY"
  );

  snackbar.classList.add("stacked", "centered");

  snackbarContainer.append(snackbar);

  dismissSnackbar(snackbar);
}

function removeStacked() {
  let stackedBars = document.querySelectorAll(".snackbar.stacked");

  stackedBars.forEach((stackBar) => {
    stackBar.remove();
  });
}

function removeOldSnackbar() {
  let oldSnackbars = document.querySelectorAll(".snackbar:not(.stacked)");

  oldSnackbars.forEach((oldSnackbar) => {
    oldSnackbar.remove();
  });
}

function createSnackbar(msg, actionName) {
  let snackbar = document.createElement("div");

  snackbar.className = "snackbar";

  snackbar.innerHTML = `
     <div class="snackbar-message">
          <p>${msg}</p>
        </div>
  `;

  let snackbarActions = document.createElement("div");

  snackbarActions.className = "snackbar-actions";

  snackbarActions.innerHTML = `<a href="#">${actionName}</a>`;

  let cancleBtn = document.createElement("button");

  cancleBtn.innerHTML = `<i class="fas fa-times" title="close"></i>`;

  snackbarActions.append(cancleBtn);

  snackbar.append(snackbarActions);

  cancleBtn.addEventListener("click", () => {
    snackbar.remove();
  });

  return snackbar;
}

function dismissSnackbar(snackbar) {
  return setTimeout(() => {
    snackbar.remove();
  }, 4000);
}
