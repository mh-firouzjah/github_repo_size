function newLi1 (repoSizeMB) {
  return `
  <li data-view-component="true"
    class="d-inline-flex">
  <a id="reposize-tab"
     href="#"
     data-tab-item="i9reposize-tab"
     data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community"
     data-pjax="#repo-content-pjax-container"
     data-turbo-frame="repo-content-turbo-frame"
     data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Reposize&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}"
     data-view-component="true"
     class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
     style="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file-zip UnderlineNav-octicon d-none d-sm-inline">
      <path
            d="M3.5 1.75v11.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 2 13.25V1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.185 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 12.25 15h-.5a.75.75 0 0 1 0-1.5h.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177L9.513 1.573a.25.25 0 0 0-.177-.073H7.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5h-3a.25.25 0 0 0-.25.25Zm3.75 8.75h.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3c0-.966.784-1.75 1.75-1.75ZM6 5.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 5.25Zm.75 2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 6.75A.75.75 0 0 1 8.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 6.75ZM8.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 9.75A.75.75 0 0 1 8.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 9.75Zm-1 2.5v2.25h1v-2.25a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25Z">
      </path>
    </svg>
    <span data-content="Size">Size</span>
    <span title="${ repoSizeMB }" data-view-component="true" class="Counter">${ repoSizeMB }</span>
  </a>
</li>`;
}

function newLi2 (repoSizeMB) {
  return `<li data-menu-item="i9size-tab"
                data-targets="action-list.items"
                role="none"
                data-view-component="true"
                class="ActionListItem"><a tabindex="0"
                 id=""
                 href="#"
                 role="menuitem"
                 data-view-component="true"
                 class="ActionListContent ActionListContent--visual16"><span class="ActionListItem-visual ActionListItem-visual--leading"><svg aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-file-zip"><path
                          d="M3.5 1.75v11.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 2 13.25V1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.185 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 12.25 15h-.5a.75.75 0 0 1 0-1.5h.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177L9.513 1.573a.25.25 0 0 0-.177-.073H7.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5h-3a.25.25 0 0 0-.25.25Zm3.75 8.75h.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3c0-.966.784-1.75 1.75-1.75ZM6 5.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 5.25Zm.75 2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 6.75A.75.75 0 0 1 8.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 6.75ZM8.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 9.75A.75.75 0 0 1 8.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 9.75Zm-1 2.5v2.25h1v-2.25a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25Z">
                    </path>
                  </svg>
                </span><span data-view-component="true" class="ActionListItem-label">${ repoSizeMB }</span>
              </a>
            </li>`;
}

(async function () {
  // Ensure it's a repo page
  if (window.location.pathname.split('/').length > 2) {
    const repoUrl = window.location.pathname.split('/').slice(1, 3).join('/');
    const apiUrl = `https://api.github.com/repos/${ repoUrl }`;

    // Fetch repo details
    const response = await fetch(apiUrl);
    const repoData = await response.json();

    if (repoData.size) {
      const repoSizeMB = (repoData.size / 1024).toFixed(2) + " MB";
      const ulElement = document.querySelector('ul.UnderlineNav-body');
      if (ulElement) {
        const tempContainer = document.createElement('template');
        tempContainer.innerHTML = newLi1(repoSizeMB).trim();
        ulElement.append(tempContainer.content.firstChild);
      }
      const actionListUl = document.querySelector('action-list > div > ul');
      if (actionListUl) {
        const tempContainer = document.createElement('template');
        tempContainer.innerHTML = newLi2(repoSizeMB).trim();
        actionListUl.append(tempContainer.content.firstChild);
      }
    }
  }
})();
