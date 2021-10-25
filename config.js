const defaultConfig = {
  searchEngine: "https://duckduckgo.com/?q=",
  background:
    "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
  weatherAPIKey: "",
  bookmarksLocal: [
    [
      {
        key: "g",
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0/",
      },
    ],
    [
      { key: "t", name: "Twitter", url: "https://twitter.com/" },
      { key: "r", name: "Reddit", url: "https://www.reddit.com/" },
      {
        key: "y",
        name: "YouTube",
        url: "https://youtube.com/feed/subscriptions",
      },
    ],
    [{ key: "tw", name: "Twitch", url: "https://www.twitch.tv/" }],
  ],
  frequentBookmarksLocal: [
    { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com/" },
    {
      name: "YouTube",
      icon: "fab fa-youtube",
      url: "https://youtube.com/feed/subscriptions",
    },
    { name: "Reddit", icon: "fab fa-reddit", url: "https://www.reddit.com/" },
  ],
};

function initialize() {
  for (const key in defaultConfig) {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(defaultConfig[key]));
    }
  }
}

function setDefaults() {
  for (const key in defaultConfig) {
    localStorage.setItem(key, JSON.stringify(defaultConfig[key]));
  }
}

function getConfig(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setConfig(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

initialize();
