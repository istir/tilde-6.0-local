const sites = document.querySelector("#sites");
const frequentBookmarksElement = document.querySelector("#frequentBookmarks");
function insertSiteGroup(groupArray) {
  function insertSite(site) {
    const siteElement = document.createElement("a");
    siteElement.className = "site";
    siteElement.href = site.url;
    const siteIcon = document.createElement("div");
    siteIcon.className = "site-icon";
    siteIcon.innerText = site.key;
    const siteName = document.createElement("div");
    siteName.className = "site-name";
    siteName.innerText = site.name;
    siteElement.appendChild(siteIcon);
    siteElement.appendChild(siteName);
    return siteElement;
  }

  const group = document.createElement("div");
  group.className = "sites-group";
  for (const siteObject in groupArray) {
    group.appendChild(insertSite(groupArray[siteObject]));
  }
  return group;
  //   group.appendChild(insertSite(site));
}

function insertFrequentBookmark(bookmark) {
  function insertIcon(iconName) {
    const icon = document.createElement("i");
    icon.className = iconName;
    return icon;
  }
  // console.log(bookmark);
  const frequentBookmark = document.createElement("a");
  frequentBookmark.className = "frequentBookmarkIcon";
  frequentBookmark.href = bookmark.url;
  frequentBookmark.appendChild(insertIcon(bookmark.icon));
  return frequentBookmark;
}
function initializeBookmarks() {
  sites.innerHTML = "";
  frequentBookmarksElement.innerHTML = "";
  const bookmarks = getConfig("bookmarksLocal");
  const frequentBookmarks = getConfig("frequentBookmarksLocal");
  for (const key in bookmarks) {
    sites.appendChild(insertSiteGroup(bookmarks[key]));
  }
  for (const key in frequentBookmarks) {
    frequentBookmarksElement.appendChild(
      insertFrequentBookmark(frequentBookmarks[key])
    );
  }
}
initializeBookmarks();
