# Simulate a FullScreen mode on Firefox

> Configurations and scripts to hide UI elements on Firefox, replicating a fullscreen effect.

---

## Table of Contents

- [Project Description](#project-description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Good to Know](#good-to-know)
  - [Please Note](#please-note)
- [Expected Result](#expected-results)

---

## Project Description

Firefox is amongst the mostly used browsers today. By default, it offers two main usage modes: default, and fullscreen. In the normal mode, certain UI elements are constantly present: tabs, URL bar, close button, and potentially the bookmarks toolbar depending on the configuration. 
In fullscreen, all these UI elements get hidden, offering a more immersive experience, with more screen real-estate to enjoy the content of the websites. However, to access these objetivelly usefull UI buttons, exiting the full-screen mode is required. 
The goal of this project is to prodive an in-between. We will be modifying the behavior of the browser on its 'default' mode. Replicating the full-screen mode, the UI elements will get automatically hidden, allowing more pixels to be used by the content of the websites instead of being used by the browser. Bringing the mouse up to the top of the screen will make these previously hidden UI elements to appear again, removing the need to 'exit' the full-screen mode.


---

### Prerequisites

Make sure you have the following installed on your system:

- **Mozilla Firefox** 
- **Git**


### Setup


1. Open Firefox and type:
```bash
about:config
```

2. In the search menu, look for:
```bash
toolkit.legacyUserProfileCustomizations.stylesheets
```
Make sure its value is set to True.


3. Clone the repository:

```bash
git clone https://github.com/xPlume/Firefox-Full-Screen.git
```

4. Open the folder of your Mozilla Firefox installation (tipically for Windows under C:\Program Files\Mozilla Firefox).

5. Transfer the files **config.js** and **config.cfg** into the folder of your Mozilla Firefox installation.

6. In that same folder, go to the directory *default/prefs*, and inside it, paste the file **config-prefs.js**

7. Back to the Firefox browser, search for
```bash
about:support
```
and in the **Profile Folder** select "Open Folder".

8. Inside that folder, paste the **Chrome** directory provided in the repository.

9. Close and re-launch Firefox. Test the behavior after accessing any website (do not stay on the new tab).

---

## Good to Know


You will find in the file **userChrome.css** (present under the chrome directory) the following lines:
```css
	/* For horizontal tabs */
	--uc-autohide-toolbar-height: 84px;
	
	/* For vertical tabs */
	/* --uc-autohide-toolbar-height: 39px */
```
Initially, this setup is for horizontal tabs. However, the tabs will be hidden too. 
If you want to use vertical tabs instead, comment the line 
```css
--uc-autohide-toolbar-height: 84px;
```
and uncomment the line 
```css
--uc-autohide-toolbar-height: 39px
```

### Please Note

The values *84px* and *39px* worked for my own usecase. I do not know how well or not, they will work with other resolutions. 
If the implementation is imperfect for you, change the values of the variable until the implementation is satisfactory. To test, close and relaunch Firefox, and head to any website (do not stay on the new-tab).

Do keep in mind: to make sure the drop-down on mousehover functions, you NEED to leave 1px of space. Example: if the URL bar takes exactly 40px of height, input as value for the variable: 39px.

---

## Expected Results

1. For horizontal tabs: 
- Upon opening a new tab, no difference should be noted. 
- When accessing a website, the tabs and URL bar should get hidden.
- When bringing the mouse to the top of the screen, the tabs and URL bar should drop back down.

2. For vertical tabs:
- Upon opening a new tab, no difference should be noted. 
- When accessing a website, the URL bar should get hidden. The tabs menu remains visible either on the right or left, based on the user's preference.
- When bringing the mouse to the top of the screen, the URL bar should drop back down.

---
