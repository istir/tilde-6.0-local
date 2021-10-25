function settings() {
  const settingsPane = document.querySelector("#settings");
  const settingsWrapper = document.querySelector("#settings-wrapper");
  const settingsButton = document.querySelector("#settings-button");
  const sitePane = document.querySelector("#wrapper");
  const saveButton = document.querySelector("#settings-save");
  let isOpen = settingsPane.classList.contains("visible");
  function addListener() {
    settingsButton.addEventListener("click", () => {
      toggleSettingsPane();
    });
    saveButton.addEventListener("click", () => {
      saveSettings();
    });
  }

  function openSettingsPane() {
    isOpen = true;
    settingsPane.classList.add("visible");
    settingsPane.classList.remove("hidden");
    settingsButton.querySelector("i").className = "fas fa-times";
  }

  function closeSettingsPane() {
    isOpen = false;
    settingsPane.classList.remove("visible");
    settingsPane.classList.add("hidden");
    settingsButton.querySelector("i").className = "fas fa-cog";
  }
  function toggleSettingsPane() {
    isOpen ? closeSettingsPane() : openSettingsPane();
  }
  function renderSettingName(key) {
    const settingsFieldName = document.createElement("div");
    settingsFieldName.className = "settings-field-name";
    // settingsFieldName.id = key;
    settingsFieldName.innerText = key;
    return settingsFieldName;
  }
  function renderSetting(key, value) {
    function renderSettingValue(value) {
      const settingsFieldValue = document.createElement("input");
      settingsFieldValue.className = "settings-field-value shadow";
      settingsFieldValue.value = value;
      return settingsFieldValue;
    }
    const settingWrapper = document.createElement("div");
    settingWrapper.id = key + "Setting";
    settingWrapper.appendChild(renderSettingName(key));
    settingWrapper.appendChild(renderSettingValue(value));
    return settingWrapper;
  }

  function saveSettings() {
    for (const key in defaultConfig) {
      // settingsWrapper.appendChild(renderSetting(key, getConfig(key)));
      switch (key) {
        case "bookmarksLocal":
          const bookmarks = [];
          document
            .querySelectorAll(
              "#settings-bookmarks-grid > .settings-bookmark-wrapper"
            )
            .forEach((element) => {
              // console.log(element);
              const group = element.querySelector("#group");
              const key = element.querySelector("#key");
              const name = element.querySelector("#name");
              const url = element.querySelector("#url");
              if (!Array.isArray(bookmarks[group.value])) {
                bookmarks[group.value] = [];
              }
              bookmarks[group.value].push({
                key: key.value,
                name: name.value,
                url: url.value,
              });
            });
          setConfig("bookmarksLocal", bookmarks);
          // settingsWrapper.appendChild(renderSettingName(key));
          // settingsWrapper.appendChild(renderBookmarks(getConfig(key)));
          break;
        case "frequentBookmarksLocal":
          //TODO: similar to normal bookmarks
          break;
        default:
          const setting = document.querySelector(`#${key}Setting`);
          setConfig(key, setting.querySelector("input").value);
          // key + "Setting";
          // settingsWrapper.appendChild(renderSettingName(key));
          // settingsWrapper.appendChild(renderSettingValue(getConfig(key)));

          break;
      }
      // settingsWrapper.appendChild(renderSettingName(key));
      // settingsWrapper.appendChild(renderSettingValue(getConfig(key)));
    }
    initializeBookmarks();
  }

  function renderBookmarkAddButton(renderBookmarkFunction) {
    const bookmarkAddButton = document.createElement("button");
    bookmarkAddButton.className = "button shadow rounded-button solid-button";
    const icon = document.createElement("i");
    icon.className = "fas fa-plus";
    bookmarkAddButton.appendChild(icon);
    bookmarkAddButton.addEventListener("click", () => {
      const parent = document.querySelector("#settings-bookmarks-grid");
      parent.appendChild(
        renderBookmarkFunction({ key: "", name: "", url: "" }, "")
      );
    });
    return bookmarkAddButton;
  }

  function renderLocalBookmarks(value) {
    function renderBookmark(bookmark) {
      const bookmarkWrapper = document.createElement("div");
      bookmarkWrapper.className = "settings-bookmark-wrapper";

      const name = document.createElement("input");
      name.className = "settings-field-value shadow";
      name.id = "name";
      name.value = bookmark.name;
      name.placeholder = "Name";
      const icon = document.createElement("input");
      icon.className = "settings-field-value shadow";
      icon.id = "icon";
      icon.value = bookmark.icon;
      icon.placeholder = "Font Awesome Icon Class";
      const url = document.createElement("input");
      url.className = "settings-field-value shadow";
      url.id = "url";
      url.value = bookmark.url;
      url.placeholder = "URL";
      bookmarkWrapper.appendChild(name);
      bookmarkWrapper.appendChild(icon);
      bookmarkWrapper.appendChild(url);
      return bookmarkWrapper;
    }
    const bookmarksWrapper = document.createElement("div");
    bookmarksWrapper.id = "settings-bookmarks-wrapper";
    const bookmakrsGrid = document.createElement("div");
    bookmakrsGrid.id = "settings-bookmarks-grid-frequent";
    bookmarksWrapper.appendChild(bookmakrsGrid);
    for (const key in value) {
      const bookmark = value[key];
      // for (const bookmarkKey in bookmark) {
      // const bookmark = bookmarkGroup[nbookmarkKey];
      bookmakrsGrid.appendChild(renderBookmark(bookmark));
      // }
      // break;
    }
    bookmarksWrapper.appendChild(renderBookmarkAddButton(renderBookmark));
    return bookmarksWrapper;
  }
  function renderBookmarks(value) {
    function renderBookmark(bookmark, groupId) {
      const bookmarkWrapper = document.createElement("div");
      bookmarkWrapper.className = "settings-bookmark-wrapper";

      const group = document.createElement("input");
      group.className = "settings-field-value shadow";
      group.id = "group";
      group.value = groupId;
      group.placeholder = "Group";
      const key = document.createElement("input");
      key.className = "settings-field-value shadow";
      key.id = "key";
      key.value = bookmark.key;
      key.placeholder = "Key";
      const name = document.createElement("input");
      name.className = "settings-field-value shadow";
      name.id = "name";
      name.value = bookmark.name;
      name.placeholder = "Name";
      const url = document.createElement("input");
      url.className = "settings-field-value shadow";
      url.id = "url";
      url.value = bookmark.url;
      url.placeholder = "URL";
      bookmarkWrapper.appendChild(group);
      bookmarkWrapper.appendChild(key);
      bookmarkWrapper.appendChild(name);
      bookmarkWrapper.appendChild(url);
      return bookmarkWrapper;
    }
    const bookmarksWrapper = document.createElement("div");
    bookmarksWrapper.id = "settings-bookmarks-wrapper";
    const bookmakrsGrid = document.createElement("div");
    bookmakrsGrid.id = "settings-bookmarks-grid";
    bookmarksWrapper.appendChild(bookmakrsGrid);
    for (const key in value) {
      const bookmarkGroup = value[key];
      for (const bookmarkKey in bookmarkGroup) {
        const bookmark = bookmarkGroup[bookmarkKey];
        bookmakrsGrid.appendChild(renderBookmark(bookmark, key));
      }
      // break;
    }
    bookmarksWrapper.appendChild(renderBookmarkAddButton(renderBookmark));
    return bookmarksWrapper;
  }
  function renderAllSettings() {
    for (const key in defaultConfig) {
      // settingsWrapper.appendChild(renderSetting(key, getConfig(key)));
      switch (key) {
        case "bookmarksLocal":
          const element = document.createElement("div");
          element.id = "bookmarksLocal";
          element.appendChild(renderSettingName(key));
          element.appendChild(renderBookmarks(getConfig(key)));
          settingsWrapper.appendChild(element);
          // settingsWrapper.appendChild(renderBookmarks(getConfig(key)));
          break;
        case "frequentBookmarksLocal":
          const elementF = document.createElement("div");
          elementF.id = "frequentBookmarksLocal";
          elementF.appendChild(renderSettingName(key));
          elementF.appendChild(renderLocalBookmarks(getConfig(key)));
          settingsWrapper.appendChild(elementF);
          break;
        default:
          // settingsWrapper.appendChild(renderSettingName(key));
          // settingsWrapper.appendChild(renderSettingValue(getConfig(key)));

          settingsWrapper.appendChild(renderSetting(key, getConfig(key)));
          // settingsWrapper.appendChild(renderSettingValue(getConfig(key)));
          break;
      }
      // settingsWrapper.appendChild(renderSettingName(key));
      // settingsWrapper.appendChild(renderSettingValue(getConfig(key)));
    }
  }
  renderBookmarks(getConfig("bookmarksLocal"));
  addListener();
  renderAllSettings();
  // saveSettings();
}

document.addEventListener("DOMContentLoaded", () => {
  settings();
});
