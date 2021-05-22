// Turn off annoying beep when using typeahead.
user_pref("accessibility.typeaheadfind.enablesound", false);
// Rationale: the beep is annoying.
// http://kb.mozillazine.org/Accessibility.typeaheadfind.enablesound

// Turn off annoying flashing when using typeahead.
user_pref("accessibility.typeaheadfind.flashBar", 0);
// Rationale: the flash is annoying.
// http://kb.mozillazine.org/Accessibility.typeaheadfind.flashBar

// Set duckduckgo.com as homepage.
user_pref("browser.startup.homepage", "https://duckduckgo.com/");
// Rationale: https://duckduckgo.com/privacy
// http://kb.mozillazine.org/Browser.startup.homepage

// Set startup page to resume the previous browser session.
user_pref("browser.startup.page", 3);
// browser.startup.page (int) - What is displayed when Browser starts:
// 0 = blank page;
// 1 = homepage;
// 3 = previous session. Default is 1.
// (Note: Firefox exposes this preference in the Startup section of the Main
// pane of the Options/Preferences dialog.)
// https://wiki.mozilla.org/Session_Restore
// http://kb.mozillazine.org/Browser.startup.page

// Enable export of bookmarks to bookmarks.html when the browser shuts down.
user_pref("browser.bookmarks.autoExportHTML", true);
// Rationale: easier to save an automated backup.
// http://kb.mozillazine.org/Browser.bookmarks.autoExportHTML

// Turn off autoscroll (middle click / move mouse).
user_pref("general.autoScroll", false);
// Rationale: I use middle click to open links, not scroll.

// Turn off smooth scrolling.
user_pref("general.smoothScroll", false);
// Rationale: it hurts my eyes.

// Turn off the "this might void your warranty" / "Proceed with Caution" message
// when opening about:config.
user_pref("browser.aboutConfig.showWarning", false);
// Rationale: it just slows things down unnecessarily.

// Warn when closing multiple tabs.
// Looks like this:
// "Quit and close tabs?"
// "You are about to close 77 tabs. Tabs in non-private windows will be
// restored when you restart. Are you sure you want to continue?"
user_pref("browser.sessionstore.warnOnQuit", true);
// Rationale: it's easy to hit Ctrl-Q instead of Ctrl-W.
// https://support.mozilla.org/en-US/questions/1279145

// Make the new tab page be blank.
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.enhanced", false);
// Rationale: less distracting.

// Disable telemetry of new tab page.
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "duckduckgo");
// Rationale: privacy.

// Show the https:// part of the URL.
user_pref("browser.urlbar.trimURLs", false);
// Rationale: that's what the URL is.
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.urlbar.trimURLs
// https://support.mozilla.org/en-US/questions/880207

// Show punycode instead of unicode URLs.
user_pref("network.IDN_show_punycode", true);
// Rationale: prevents homograph attacks.
// https://www.mozilla.org/en-US/security/advisories/mfsa2005-29/
// https://bugzilla.mozilla.org/show_bug.cgi?id=282270
// https://www.wordfence.com/blog/2017/04/chrome-firefox-unicode-phishing/

// Don't ask to remember passwords.
user_pref("signon.rememberSignons", false);
// Rationale: better to use an external password manager.

// Wrap long lines when viewing HTML source of page.
user_pref("view_source.wrap_long_lines", true);
// Rationale: horizontal scrolling is fiddly and annoying.
// http://kb.mozillazine.org/View_source.wrap_long_lines

// Block domains of known trackers.
user_pref("privacy.trackingprotection.enabled", true);
// Rationale: better privacy and makes pages load faster as a bonus.
// https://wiki.mozilla.org/Security/Tracking_protection
// https://lifehacker.com/turn-on-tracking-protection-in-firefox-to-make-pages-lo-1706946166

// Turn off Encrypted Media Extensions (DRM).
user_pref("browser.eme.ui.enabled", false);
// Rationale: don't need it, can always enable it manually.

// Prevent new windows from hiding the toolbar.
user_pref("dom.disable_window_open_feature.toolbar", true);
// Rationale: it's useful to be able to use addons on windows.
// https://support.mozilla.org/en-US/questions/1286994
// https://support.mozilla.org/en-US/questions/1206512
// Disclaimer: does not work anymore after Firefox 76.0.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1658775

// Turn off media keys (pause/play).
user_pref("media.hardwaremediakeys.enabled", false);
// Rationale: not application-exclusive,
// so pausing a running music player application
// will start playing the most recent tab in Firefox,
// which is annoying.
// New in Firefox 81.
// https://support.mozilla.org/en-US/kb/control-audio-or-video-playback-your-keyboard
// https://www.mozilla.org/en-US/firefox/81.0/releasenotes/
// https://support.mozilla.org/en-US/questions/1305598
// https://bugzilla.mozilla.org/show_bug.cgi?id=1615665
// https://techdows.com/2020/09/how-to-disable-firefox-media-control.html

// Disable geolocation.
user_pref("geo.enabled", false);
// Rationale: not accurate on desktop, easier to enter a ZIP code anyway.
// https://www.ghacks.net/2009/06/19/disable-location-aware-browsing-geolocation-in-firefox/
// https://bugzilla.mozilla.org/show_bug.cgi?id=994093
// https://bugzilla.mozilla.org/show_bug.cgi?id=491653

// Turn off battery status.
user_pref("dom.battery.enabled", false);
// Rationale: not useful on laptop or desktop.
// https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks

// Don't enable caret browsing with F7
user_pref("accessibility.browsewithcaret_shortcut.enabled", false);
// Rationale: I don't use caret browsing and it's easy to mistype.

// Disable service workers.
user_pref("dom.serviceWorkers.enabled", false);
// Rationale: I don't need offline web apps or notifications,
// and the extra memory consumption and potential for misuse is too great.
// https://mszinzow.blogspot.com/2019/12/BrowserBloat.html
// "They bite. The generic idea may even be reasonable (offline working web
// app), but every single time I encounter service workers they make things
// worse."
// https://news.ycombinator.com/item?id=17857213
// https://github.com/MrAlex94/Waterfox/issues/545
// https://old.reddit.com/r/firefox/comments/7dq2h7/is_there_any_reason_not_to_disable_service_workers/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1665368
// https://bugzilla.mozilla.org/show_bug.cgi?id=1266415

// Enable "View Image Info" in right-click menu.
user_pref("browser.menu.showViewImageInfo", true);
// Rationale: I want to be able to right-click on an image and look at the info.
// This was removed in version 87.0 and 88.0 and.
// This preference only works for Firefox version 89 and later.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1690029
// https://bugzilla.mozilla.org/show_bug.cgi?id=1692552
// https://bugzilla.mozilla.org/show_bug.cgi?id=1702013
