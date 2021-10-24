// const blurE = document.querySelector("#background-blur");

function initiateBlackout() {
  //   console.log("blackout");
  if (
    document.activeElement === inputOverlay ||
    sitesContainer.classList.contains("hidden")
  )
    return cancelBlackout();
  toggleView();
  blurE.classList.add("blackingOutBackground");
}
function cancelBlackout() {
  blurE.classList.remove("blackingOutBackground");
  clearTimeout(timeout);
  timeout = blackoutTimeout();
}
function blackoutTimeout() {
  return setTimeout(initiateBlackout, getConfig("blackout"));
}
let timeout = blackoutTimeout();

document.addEventListener("mousemove", cancelBlackout);
