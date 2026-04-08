# CHANGEME
#FIREFOX_PROFILE_DIR:= ~/.mozilla/firefox/xxxxxxxx.default/
# END CHANGEME
USER_JS:=user.js

.PHONY: lint
lint :
	npm exec -- eslint "**/*.js"
	#gjslint --nojsdoc --disable 131,0110 --quiet $(USER_JS)

.PHONY: npm-install
npm-install:
	npm ci
	# npm install eslint globals

readme.html : readme.rst
	rst2html $< $@

.PHONY: edit
edit :
	vim -p $(USER_JS) config-keys.txt

.PHONY: install
install :
	cp -- $(USER_JS) $(FIREFOX_PROFILE_DIR)

.PHONY: clean
clean :
	rm -f -- readme.html
