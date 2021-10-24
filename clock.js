const hours = document.querySelectorAll(".hours");
const minutes = document.querySelectorAll(".minutes");

document.addEventListener("DOMContentLoaded", () => {
  inputOverlay.value = "";
  inputSmall.value = "";
  document.querySelector(
    "#background"
  ).style.backgroundImage = `url(${getConfig("background")})`;
  document.querySelector(".search.overlay").focus();

  replaceTime(
    padZeroes(new Date().getHours()),
    padZeroes(new Date().getMinutes())
  );
});

function padZeroes(number) {
  if (number < 10) return "0" + number;
  return number;
}
function replaceTime(hoursToReplace, minutesToReplace) {
  for (const iterator of hours) {
    if (iterator.innerText != hoursToReplace)
      iterator.innerText = hoursToReplace;
  }

  for (const iterator of minutes) {
    if (iterator.innerText != minutesToReplace) {
      iterator.innerText = minutesToReplace;
    }
  }
}
const timer = setInterval(() => {
  replaceTime(
    padZeroes(new Date().getHours()),
    padZeroes(new Date().getMinutes())
  );
}, 1000);
