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
