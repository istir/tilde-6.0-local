const inputOverlay = document.querySelector(".search.overlay");
const inputSmall = document.querySelector(".search.small");
function changeTextColor(element, isEmpty) {
  if (isEmpty) {
    document.querySelectorAll(".weather").forEach((weather) => {
      weather.classList.remove("hidden");
      weather.classList.add("visible");
    });
    element.style && (element.style.color = "transparent");
    return;
  }
  document.querySelectorAll(".weather").forEach((weather) => {
    weather.classList.remove("visible");
    weather.classList.add("hidden");
  });
  element.style && (element.style.color = "#fff");
}
function normalizeInput(text) {
  return text.replace(/#/g, "");
}
function checkIfUrl(text) {
  return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm.test(
    text
  );
}
function checkIfTypedBookmarkKey(text) {
  const bookmarks = getConfig("bookmarks");
  for (const arrItem in bookmarks) {
    for (const key in bookmarks[arrItem]) {
      if (text === bookmarks[arrItem][key].key)
        return bookmarks[arrItem][key].url;
    }
  }
}

function ensureParity(currentElement) {
  if (currentElement.classList.contains("small")) {
    inputOverlay.value = currentElement.value;
    return;
  }
  inputSmall.value = currentElement.value;
}

function handleSearchingOnElement(element) {
  changeTextColor(element, element?.value.length < 1);
  element.addEventListener("input", () => {
    ensureParity(element);
    if (element?.value.length < 1) return changeTextColor(element, true);
    changeTextColor(element);
  });
  element.addEventListener("keypress", (e) => {
    const value = normalizeInput(element?.value);
    if (e.key === "Enter") {
      if (checkIfUrl(value)) {
        window.location = value;
        return;
      }

      if (checkIfTypedBookmarkKey(element?.value)) {
        window.location = checkIfTypedBookmarkKey(element?.value);
        return;
      }

      window.location = `${getConfig("searchEngine")}${value}`;
    }
  });
}
handleSearchingOnElement(inputOverlay);
handleSearchingOnElement(inputSmall);
