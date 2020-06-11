# CHANGEME
#FIREFOX_PROFILE_DIR:= ~/.mozilla/firefox/xxxxxxxx.default/
# END CHANGEME
USER_JS:=user.js

edit :
	vim -p $(USER_JS) config-keys.txt

install :
	cp -- $(USER_JS) $(FIREFOX_PROFILE_DIR)
