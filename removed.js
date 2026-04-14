// Turn off built-in PDF reader.
user_pref("pdfjs.enabled", false);
// Can also be done graphically:
// https://support.mozilla.org/en-US/kb/view-pdf-files-firefox-or-choose-another-viewer
// Rationale: can't see font information.
//
// Rationale for removal:
// It's not that hard to open in an external PDF viewer.

// Delete cookies when browser closes.
user_pref("network.cookie.lifetimePolicy", 2);
// Rationale: good balance between privacy and convenience.
// I don't mind re-logging into things on startup.
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy
// https://developer.mozilla.org/en-US/docs/Mozilla/Cookies_Preferences
//
// Rationale for removal:
// Need to close and re-open with the -no-remote flag sometimes,
// and it's annoying to login to everything again.

// Disable geolocation.
user_pref("geo.enabled", false);
// Rationale: not accurate on desktop, easier to enter a ZIP code anyway.
// https://www.ghacks.net/2009/06/19/disable-location-aware-browsing-geolocation-in-firefox/
// https://bugzilla.mozilla.org/show_bug.cgi?id=994093
// https://bugzilla.mozilla.org/show_bug.cgi?id=491653
//
// Rational for removal:
// Breaks order.online, doordash.com, and dominos.com

// Disable visited link styling
user_pref("layout.css.visited_links_enabled", false);
// Rationale: prevent sites from inspecting user history.
// https://dbaron.org/mozilla/visited-privacy
//
// Rationale for removal:
// Mozilla's mitigations are probably good enough.
// https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/
// https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/
// https://bugzilla.mozilla.org/show_bug.cgi?id=147777
// https://bugzilla.mozilla.org/show_bug.cgi?id=693164
// https://bugzilla.mozilla.org/show_bug.cgi?id=1477773
