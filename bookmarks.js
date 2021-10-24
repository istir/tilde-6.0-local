const sites = document.querySelector("#sites");

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

const bookmarks = getConfig("bookmarks");
for (const key in bookmarks) {
  sites.appendChild(insertSiteGroup(bookmarks[key]));
}
