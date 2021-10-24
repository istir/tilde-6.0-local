const inputOverlay = document.querySelector(".search.overlay");

function changeTextColor(isEmpty) {
  if (isEmpty) {
    inputOverlay.style.color = "transparent";
    return;
  }
  inputOverlay.style.color = "#fff";
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
changeTextColor(inputOverlay?.value.length < 1);
inputOverlay.addEventListener("input", () => {
  if (inputOverlay?.value.length < 1) return changeTextColor(true);
  changeTextColor();
});
inputOverlay.addEventListener("keypress", (e) => {
  const value = normalizeInput(inputOverlay?.value);
  if (e.key === "Enter") {
    if (checkIfUrl(value)) {
      window.location = value;
      return;
    }

    if (checkIfTypedBookmarkKey(inputOverlay?.value)) {
      window.location = checkIfTypedBookmarkKey(inputOverlay?.value);
      return;
    }

    window.location = `${getConfig("searchEngine")}${value}`;
  }
});
