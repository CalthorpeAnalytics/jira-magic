# jira-magic

This project contains [user scripts](https://en.wikipedia.org/wiki/Userscript)
and templates that make working in Jira easier for people at UrbanFootprint.

This is a _public repo_ to make accessing some of the templates easier. Do not
put any proprietary UrbanFootprint data or information here.

## Instructions

First you will need a user script manager for your browser. User scripts are 
javascript code that the browser injects onto web pages for you, the user.

This guide assumes you're using [Tampermonkey](https://www.tampermonkey.net/),
which is the most widely supported implementation. Install Tampermonkey from
your browser's extension distribution channel:

* [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
  (+derivatives, e.g. Brave) (via Chrome Web Store)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
  (via Firefox Add-Ons)
* [Safari](https://apps.apple.com/app/apple-store/id1482490089?pt=117945903&ct=tm.net&mt=8)
  (via Apple App Store)
* [...others](https://www.tampermonkey.net/)

Once you have installed Tampermonkey, you can import a script from a URL by going 
to the Tampermonkey Dashboard, then clicking on the `Utilities` tab, and providing
a URL in the `Import from URL` field and clicking `Install`. Use the github link
to the *raw* source code for the file 
(e.g. https://raw.githubusercontent.com/CalthorpeAnalytics/jira-magic/main/eng-templates.js).

## Magic

### eng-templates

Installing `eng-templates.js` will create three new buttons above the Description field 
in Jira's Issue Create modal, which will automatically insert an appropriate template 
into the Description.


