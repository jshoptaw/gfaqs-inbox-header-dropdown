// ==UserScript==
// @name            GameFAQs "Inbox" Header Dropdown
// @namespace       OTACON120
// @author          OTACON120
// @version         1.0.3
// @description     Provide dropdown for "Inbox" link in header for various PM-related links
// @updateURL       http://otacon120.com/user-script-files/meta/gamefaqs-related/inbox-header-dropdown/
// @downloadURL     http://otacon120.com/user-script-files/script/gamefaqs-related/inbox-header-dropdown/GameFAQs_Inbox_Header_Dropdown.user.js
// @website         http://otacon120.com/scripts/inbox-header-dropdown
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=otacon120%40gmail%2ecom&lc=US&item_name=OTACON120&no_note=0&cn=Comments%3a&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted
// @match           *://*.gamefaqs.com/*
// @grant           none
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
	mastheadUser = document.getElementsByClassName( 'welcome' )[0].parentNode,
	muLinks      = mastheadUser.getElementsByTagName( 'a' );

// Give unique ID to dropdown and give it the same class as other existing dropdowns
inboxSubnav.id = 'o120-inbox-subnav';
inboxSubnav.classList.add( 'masthead_mygames_subnav' );

/**
 * Compiles subnavLinks array into an unordered list
 */
subnavLinks.forEach( function( el ) {
	var subnavItem     = document.createElement( 'li' ),
		subnavItemLink = document.createElement( 'a' );

	subnavItem.classList.add( 'masthead_mygames_subnav_item' );

	subnavItemLink.href      = el.url;
	subnavItemLink.innerHTML = el.text;

	subnavItem.appendChild( subnavItemLink );
	inboxSubnav.appendChild( subnavItem );
} );


/**
 * Finds "Inbox" link and adds dropdown and downward caret to the link
 */
for ( i = 0; i < muLinks.length; i++ ) {
	if ( muLinks[ i ].href.indexOf( '/pm' ) !== -1 ) {
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
