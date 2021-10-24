const clocks = document.querySelectorAll(".clock");
const sitesContainer = document.querySelector("#sites-container");
const smallContainer = document.querySelector("#small-container");
const blurE = document.querySelector("#background-blur");
function toggleView() {
  sitesContainer.classList.toggle("visible");
  sitesContainer.classList.toggle("hidden");
  smallContainer.classList.toggle("visible");
  smallContainer.classList.toggle("hidden");
  blurE.classList.toggle("visible");
  blurE.classList.toggle("hidden");
  if (blurE.style.backdropFilter === "blur(10px) brightness(0.9)") {
    blurE.style.backdropFilter = "blur(0px) brightness(1)";
  } else {
    blurE.style.backdropFilter = "blur(10px) brightness(0.9)";
  }
}

clocks.forEach((clock) => {
  //   console.log(e);
  clock.addEventListener("click", toggleView);
});
document.querySelector("#background-blur").addEventListener("click", () => {
  if (smallContainer.classList.contains("visible")) return;
  toggleView();
});
