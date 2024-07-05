let modeButton = document.getElementById("mode");
let htmlTag = document.getElementById("htmltag");
modeButton.addEventListener("click", () => {
  if (modeButton.innerHTML == "toggle_off") {
    modeButton.innerHTML = "toggle_on";
    htmlTag.classList.add("dark");
  } else {
    modeButton.innerHTML = "toggle_off";
    htmlTag.classList.remove("dark");
  }
});
