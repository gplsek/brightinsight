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
 *  This is the main file for videos
 */

$('.video-modal-trigger').modalVideo();