// userChrome.js
(function() {
	function updateToolbarVisibility() {
        // Check if the current tab is a New Tab (About:Newtab or About:Blank)
        let currentTab = gBrowser.selectedBrowser.currentURI.spec;
        let mainWindow = document.getElementById("main-window");

        if (currentTab === "about:newtab" || currentTab === "about:home" || currentTab === "about:blank") {
            mainWindow.setAttribute("is-new-tab", "true");
        } else {
            mainWindow.setAttribute("is-new-tab", "false");
        }
    }

    // Listen for tab changes and URL changes
    gBrowser.tabContainer.addEventListener("TabSelect", updateToolbarVisibility);
    
    // Listen for page loads within the tab
    gBrowser.addTabsProgressListener({
        onLocationChange: function() {
            updateToolbarVisibility();
        }
    });

    // Initial check
    updateToolbarVisibility();
})();