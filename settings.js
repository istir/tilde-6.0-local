function settings() {
  const settingsPane = document.querySelector("#settings");
  const settingsButton = document.querySelector("#settings-button");
  const sitePane = document.querySelector("#wrapper");
  let isOpen = settingsPane.classList.contains("visible");
  function addListener() {
    settingsButton.addEventListener("click", () => {
      toggleSettingsPane();
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

  function renderSetting(key, value) {
    //     <div class="settings-field">
    //     <div class="settings-field-name">Test</div>
    //     <input class="settings-field-value shadow" value="Test1" />
    //   </div>
    const settingsField = document.createElement("div");
    settingsField.className = "settings-field";
    const settingsFieldName = document.createElement("div");
    settingsFieldName.className = "settings-field-name";
    settingsFieldName.innerText = key;
    const settingsFieldValue = document.createElement("input");
    settingsFieldValue.className = "settings-field-value shadow";
    settingsFieldValue.value = value;
    settingsField.appendChild(settingsFieldName);
    settingsField.appendChild(settingsFieldValue);
    return settingsField;
  }

  function renderAllSettings() {
    for (const key in defaultConfig) {
      settingsPane.appendChild(renderSetting(key, getConfig(key)));
    }
  }
  addListener();
  renderAllSettings();
}

document.addEventListener("DOMContentLoaded", () => {
  settings();
});
