const clocks = document.querySelectorAll(".clock");
const sitesContainer = document.querySelector("#sites-container");
const smallContainer = document.querySelector("#small-container");
clocks.forEach((clock) => {
  //   console.log(e);
  clock.addEventListener("click", () => {
    sitesContainer.classList.toggle("visible");
    sitesContainer.classList.toggle("hidden");
    smallContainer.classList.toggle("visible");
    smallContainer.classList.toggle("hidden");
  });
});
