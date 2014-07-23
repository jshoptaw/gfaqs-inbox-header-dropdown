// ==UserScript==
// @name        GameFAQs "Inbox" Header Dropdown
// @namespace   OTACON120
// @author      OTACON120
// @version     1.0.1
// @description Provide dropdown for "Inbox" link in header for various PM-related links
// @updateURL   https://greasyfork.org/scripts/605-gamefaqs-inbox-header-dropdown/code/GameFAQs%20%22Inbox%22%20Header%20Dropdown.meta.js
// @downloadURL https://greasyfork.org/scripts/605-gamefaqs-inbox-header-dropdown/code/GameFAQs%20%22Inbox%22%20Header%20Dropdown.user.js
// @website     http://otacon120.com/scripts/inbox-header-dropdown
// @include     http://www.gamefaqs.com/*
// @match       http://www.gamefaqs.com/*
// @grant       none
// ==/UserScript==
var i,
	inboxContain = document.createElement( 'span' ),
	inboxSubnav  = document.createElement( 'ul' ),
	subnavLinks  = [ // Array of links to appear in dropdown
		{ // Outbox
			url:  '/pm/sent',
			text: 'Outbox'
		},
		{ // Archive
			url:  '/pm/archive',
			text: 'Archive'
		},
		{ // Send New Message
			url:  '/pm/new',
			text: 'Send New Message'
		},
		{ // Settings
			url:  '/pm/settings',
			text: 'Settings'
		}
	],
	mastheadUser = document.getElementsByClassName( 'masthead_user' )[0],
	muLinks      = mastheadUser.getElementsByTagName( 'a' );

// Give unique ID to dropdown and give it the same class as other existing dropdowns
inboxSubnav.id = 'o120-inbox-subnav';
inboxSubnav.classList.add( 'masthead_mygames_subnav' );

/**
 * Compiles subnavLinks array into an unordered list
 */
subnavLinks.forEach( buildInboxSubnav );

function buildInboxSubnav( el ) {
	var subnavItem     = document.createElement( 'li' ),
		subnavItemLink = document.createElement( 'a' );

	subnavItem.classList.add( 'masthead_mygames_subnav_item' );

	subnavItemLink.href      = el.url;
	subnavItemLink.innerHTML = el.text;

	subnavItem.appendChild( subnavItemLink );
	inboxSubnav.appendChild( subnavItem );
}


/**
 * Finds "Inbox" link and adds dropdown and downward caret to the link
 */
for ( i = 0; i < muLinks.length; i++ ) {
	if ( muLinks[ i ].href.indexOf( '/pm/' ) !== -1 ) {
		inboxContain.id = 'o120-inbox-drop';
		inboxContain.classList.add( 'masthead_mygames_drop' );

		muLinks[ i ].parentNode.insertBefore( inboxContain, muLinks[ i ] );
		inboxContain.appendChild( muLinks [ i ] );
		muLinks[ i ].innerHTML += '<i class="icon icon-caret-down"></i>';
		muLinks[ i ].classList.add( 'mygames' );
		inboxContain.appendChild( inboxSubnav );
		break;
	}
}
