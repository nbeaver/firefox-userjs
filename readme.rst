This is my user.js for Firefox.
It includes rationales for each setting.

Notes on ``user.js``:

- Go to ``about:support`` and click "Copy text to clipboard".

  Look at the "Important Modified Preferences" section.

Notes on ``config-keys.txt``:

- Go to ``about:config``

- Right-click -> "Select All"

- Copy and paste into a spreadsheet (TSV output).

Miscellaneous:

- Compare with resource:///defaults/preferences/firefox.js

- Compare with resource://gre/greprefs.js

Links to official documentation:

    **User preferences:**

    - *prefs.js*

      This file stores customized user preference settings, such as changes you
      make in Firefox Preferences dialogs. The optional *user.js* file, if one
      exists, will override any modified preferences.

https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data

    The Configuration Editor (*about:config* page) lists Firefox settings known
    as *preferences* that are read from the *prefs.js* and *user.js* files in
    the Firefox profile and from application defaults. Many of these
    preferences are advanced settings that are not present in the Preferences
    panel.

https://support.mozilla.org/en-US/kb/about-config-editor-firefox

    **user.js**

    This is the main preferences file for Firefox and is located in you profile
    folder. The file **does not exist** by default, so you need to create it
    before you can start adding your preferences. In almost all cases, edits
    made using the user.js can be done via about:config, which is the
    recommended method.

https://www-archive.mozilla.org/support/firefox/edit#user
