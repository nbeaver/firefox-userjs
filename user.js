// Turn off annoying beep when using typeahead.
user_pref("accessibility.typeaheadfind.enablesound", false);
// Rationale: the beep is annoying.
// http://kb.mozillazine.org/Accessibility.typeaheadfind.enablesound
//
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

// Delete cookies when browser closes.
user_pref("network.cookie.lifetimePolicy", 2);
// Rationale: good balance between privacy and convenience.
// I don't mind re-logging into things on startup.
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy
// https://developer.mozilla.org/en-US/docs/Mozilla/Cookies_Preferences

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

// Turn off built-in PDF reader.
user_pref("pdfjs.enabled", false);
// Can also be done graphically:
// https://support.mozilla.org/en-US/kb/view-pdf-files-firefox-or-choose-another-viewer
// Rationale: can't see font information.
