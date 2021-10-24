const defaultConfig = {
  searchEngine: "https://duckduckgo.com/?q=",
  background:
    "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
  blackout: 20000,
  weatherAPIKey: "",
  bookmarks: [
    [
      {
        key: "g",
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0/",
      },
      {
        key: "wu",
        name: "WU",
        url: "https://euczelnia.uniwersytetradom.pl/",
      },
      {
        key: "wteii",
        name: "WTEiI",
        url: "https://old.uniwersytetradom.pl/redirect.php?action=setcategory&id=741",
      },
      { key: "uth", name: "UTH", url: "https://uniwersytetradom.pl/" },
    ],
    [
      { key: "t", name: "Twitter", url: "https://twitter.com/" },
      { key: "r", name: "Reddit", url: "https://www.reddit.com/" },
      {
        key: "y",
        name: "YouTube",
        url: "https://youtube.com/feed/subscriptions",
      },
      { key: "d", name: "Danbooru", url: "https://danbooru.donmai.us/" },
    ],
    [
      { key: "tw", name: "Twitch", url: "https://www.twitch.tv/" },
      { key: "x", name: "Mr Cow", url: "https://www.twitch.tv/xqcow" },
      { key: "f", name: "Forsan", url: "https://www.twitch.tv/forsen" },
      { key: "r", name: "Earl", url: "https://www.twitch.tv/ratirl" },
    ],
  ],
  frequentBookmarks: [
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
