const fruitInput = document.querySelector("#fav-fruit");
const chipContainer = document.querySelector(".chip-container");
const chipWrappers = document.querySelectorAll(".chip-wrapper");

fruitInput.addEventListener("change", addChip);

chipWrappers.forEach((chipWrapper) => {
  chipWrapper.addEventListener("click", removeChip);
});

// ********

function addChip(e) {
  const value = e.target.value;

  const chip = makeChip(value);

  chipContainer.insertBefore(
    chip,
    chipContainer.children[chipContainer.children.length - 1]
  );

  fruitInput.value = "";
}

function makeChip(value) {
  const chipWrapper = document.createElement("div");

  chipWrapper.className = "chip-wrapper";

  chipWrapper.innerHTML = `
        <div class="chip">${value}</div>
        <span class="close">
            <i class="fas fa-times"></i>
        </span>
    `;

  chipWrapper.addEventListener("click", removeChip);

  return chipWrapper;
}

function removeChip(e) {
  let tagName = e.target.tagName;

  if (tagName == "I" || tagName == "SPAN") {
    e.currentTarget.remove();
  }
}
