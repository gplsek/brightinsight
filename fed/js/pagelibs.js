/* Global JS */


var sync_boxes = $('.sync-boxes');

if (sync_boxes.length)
{
	$(function()
	{
		syncCards();
	});
}


function syncCards()
{
	sync_boxes.each(function()
	{
		var cards = $(this).find('.box');
		
		$(window).on('load resize', function(event)
		{
			var mq_win_w = navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $(window).width() : window.innerWidth;

			if (mq_win_w > 767)
			{
				cards.syncHeight();
			}
			else
			{
				cards.css('height', 'auto');
			}
		});
	});
}

var bs4Overlay = function () {
	//return;
	$('body').append('<div id="bs4_overlay"></div><div id="bs4_toggle"><span class="toggle">Toggle Grid</span><span class="close">(Hide)</span></div>');

	var doc_height = $(document).height(),
		bs4_overlay = $('#bs4_overlay'),
		bs4_toggle = $('#bs4_toggle');

	bs4_overlay.height(doc_height).append('<div class="container"><div class="row"><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div></div></div>');
	bs4_overlay.find('i').height(doc_height);

	bs4_toggle.on('click', '.toggle', function (event) {
		event.preventDefault();
		bs4_overlay.toggleClass('active');
	});

	bs4_toggle.on('click', '.close', function (event) {
		event.preventDefault();
		bs4_toggle.addClass('hidden');
	});
}();


/**
 * SyncHeight v1.1
 * @usage: $('selectors').syncHeight();
 */
;(function($){$.fn.syncHeight=function(){var max=0;$(this).each(function(){$(this).css('height','auto');var val=$(this).outerHeight();if(val>max){max=val;}});$(this).each(function(){$(this).css('height',max+'px');});return this;};})(jQuery);
'use strict';

/**
 *  This is the main file for banner
 */
 
if ($('.component-banner').length) {
    $(function() {
        initBanner();
    });
}

function initBanner() {
    console.log('Initializing Banner');
}

'use strict';

/**
 *  This is the main file for banner-inline
 */
 
if ($('.component-banner-inline').length) {
    $(function() {
        initBannerInline();
    });
}

function initBannerInline() {
    console.log('Initializing BannerInline');
}

'use strict';

/**
 *  This is the main file for blog-list
 */
 
if ($('.component-blog-list').length) {
    $(function() {
        initBlogList();
    });
}

function initBlogList() {
    console.log('Initializing BlogList');
}

'use strict';

/**
 *  This is the main file for card
 */
 
if ($('.component-card').length) {
    $(function() {
        initCard();
    });
}

function initCard() {
    console.log('Initializing Card');
}

'use strict';

/**
 *  This is the main file for card-blog
 */
 
if ($('.component-card-blog').length) {
    $(function() {
        initCardBlog();
    });
}

function initCardBlog() {
    console.log('Initializing CardBlog');
}

'use strict';

/**
 *  This is the main file for card-career
 */
 
if ($('.component-card-career').length) {
    $(function() {
        initCardCareer();
    });
}

function initCardCareer() {
    console.log('Initializing CardCareer');
}

'use strict';

/**
 *  This is the main file for card-icon
 */
 
if ($('.component-card-icon').length) {
    $(function() {
        initCardIcon();
    });
}

function initCardIcon() {
    console.log('Initializing CardIcon');
}

'use strict';

/**
 *  This is the main file for card-no-image
 */
 
if ($('.component-card-no-image').length) {
    $(function() {
        initCardNoImage();
    });
}

function initCardNoImage() {
    console.log('Initializing CardNoImage');
}

'use strict';

/**
 *  This is the main file for cards
 */


'use strict';

/**
 *  This is the main file for careers
 */
 
if ($('.component-careers').length) {
    $(function() {
        initCareers();
    });
}

function initCareers() {
    console.log('Initializing Careers');
}


'use strict';

/**
 *  This is the main file for columns
 */
 

var component_columns = $('.component-columns');

if (component_columns.length)
{
	$(function()
	{
		initColumns();
	});
}


function initColumns()
{
	component_columns.each(function()
	{
		var icons = $(this).find('.component-card-icon .image');
		
		$(window).on('load resize', function(event)
		{
			var mq_win_w = navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $(window).width() : window.innerWidth;

			if (mq_win_w > 767)
			{
				icons.syncHeight();
			}
			else
			{
				icons.css('height', 'auto');
			}
		});
	});
}

'use strict';

/**
 *  This is the main file for cta
 */
 
if ($('.component-cta').length) {
    $(function() {
        initCta();
    });
}

function initCta() {
    console.log('Initializing Cta');
}

'use strict';

/**
 *  This is the main file for fifty-fifty
 */
 
if ($('.component-fifty-fifty').length) {
    $(function() {
        initFiftyFifty();
    });
}

function initFiftyFifty() {
    console.log('Initializing FiftyFifty');
}

'use strict';

/**
 *  This is the main file for fifty-fifty-fullbleed
 */
 
if ($('.component-fifty-fifty-fullbleed').length) {
    $(function() {
        initFiftyFiftyFullbleed();
    });
}

function initFiftyFiftyFullbleed() {
    console.log('Initializing FiftyFiftyFullbleed');
}

'use strict';

/**
 *  This is the main file for global-footer
 */
 
if ($('.component-global-footer').length) {
    $(function() {
        initGlobalFooter();
    });
}

function initGlobalFooter() {
    console.log('Initializing GlobalFooter');
}

'use strict';

/**
 *  This is the main file for global-navigation
 */

var component_global_navigation = $('.component-global-navigation');

if (component_global_navigation.length)
{
	$(function()
	{
		initGlobalNavigation();
	});
}


function initGlobalNavigation()
{
	component_global_navigation.each(function()
	{
		var mobile_menu = $(this).find('.mobile-menu'),
			mobile_close = mobile_menu.find('.close'),
			slide_item = mobile_menu.find('.slide-item'),
			slide_menu = mobile_menu.find('.slide-menu'),
			slide_back = mobile_menu.find('.back'),
			mobile_trigger = $(this).find('.mobile-nav-trigger');

		mobile_trigger.on('click', function(event)
		{
			event.preventDefault();
			mobile_menu.addClass('is-active');
			$('body').addClass('menu-active');
		});

		mobile_close.on('click', function(event)
		{
			event.preventDefault();
			mobile_menu.removeClass('is-active subnav-exposed').attr('data-active-item', '');
			slide_item.removeClass('is-active');
			$('body').removeClass('menu-active');
		});

		mobile_menu.attr('data-active-item', '');

		slide_menu.each(function()
		{	var label = $(this).closest('li').find('a:first').text();
			$(this).prepend('<li class="headline"><em>'+label+'</em></li>')
		});

		slide_item.each(function(index)
		{
			$(this).attr('data-item', index).on('click', function(event)
			{
				event.preventDefault();
				event.stopPropagation();

				$(this).addClass('is-active');
				mobile_menu.addClass('subnav-exposed').attr('data-active-item', index);
			});
		});

		slide_back.on('click', function(event)
		{
			event.preventDefault();

			var active_index = mobile_menu.attr('data-active-item'),
				item = mobile_menu.find('.slide-item[data-item="'+active_index+'"]'),
				parent = item.parents('.slide-item');

			item.removeClass('is-active');

			if (parent.length)
			{
				mobile_menu.attr('data-active-item', parent.attr('data-item'));
			}
			else
			{
				mobile_menu.attr('data-active-item', '').removeClass('subnav-exposed');
			}
		});
	});
}



//mobile-menu
'use strict';

/**
 *  This is the main file for text
 */
 
if ($('.component-text').length) {
    $(function() {
        initText();
    });
}

function initText() {
    console.log('Initializing Text');
}

'use strict';

/**
 *  This is the main file for use-cases
 */
 
if ($('.component-use-cases').length) {
    $(function() {
        initUseCases();
    });
}

function initUseCases() {
    console.log('Initializing UseCases');
}
