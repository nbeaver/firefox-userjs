# CHANGEME
#FIREFOX_PROFILE_DIR:= ~/.mozilla/firefox/xxxxxxxx.default/
# END CHANGEME
USER_JS:=user.js

.PHONY: lint
lint :
	gjslint --nojsdoc --disable 131,0110 --quiet $(USER_JS)

.PHONY: edit
edit :
	vim -p $(USER_JS) config-keys.txt

.PHONY: install
install :
	cp -- $(USER_JS) $(FIREFOX_PROFILE_DIR)
