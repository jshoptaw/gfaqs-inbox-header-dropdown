GameFAQs "Inbox" Header Dropdown
===========================================
Creates a dropdown (similar to the My Boards dropdown) for the "Inbox" link in the header of the site. Currently, the dropdown contains the following links:

<ul>
<li>Outbox</li>
<li>Archive</li>
<li>Send New Message</li>
<li>Settings</li>
</ul>

Use with one of the following browser extensions:

### Mozilla Firefox ###
*	[Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
*	[Scriptish](https://addons.mozilla.org/en-US/firefox/addon/scriptish/)

### Google Chrome ###
*	[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)


Release Notes
=============

Version 1.0.3
-------------
_Release 2015-11-15_

*	Fix bug caused by small GameFAQs HTML changes in header ("masthead_user" class added to another element)

Version 1.0.2
-------------
_Released 2015-09-28_

*	Fixed script breaking after recent GameFAQs update (URL in Inbox link changed slightly thus breaking script's detection)

Version 1.0.1
-------------
_Released 2014-07-23_

*	Fixed issue where dropdown was not appearing in v12 site styles

*	Changed method of add HTML classes from `className +=` to `classList.add()`

Version 1.0
-----------
_Released 2014-04-18_

*	Initial release

#### Full changelog available at http://otacon120.com ####
