(function ($, Drupal) {

/* Global JS */


/**
 * Detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
var detectIE = function()
{
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0)
	{
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0)
	{
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0)
	{
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
};

var is_IE = detectIE();

if (is_IE)
{
	$(document).ready(function()
	{
		$('body').addClass('is-ie ie-'+is_IE);
	});
}

var bs4Overlay = function () {
	return;
	// $('body').append('<div id="bs4_overlay"></div><div id="bs4_toggle"><span class="toggle">Toggle Grid</span><span class="close">(Hide)</span></div>');

	// var doc_height = $(document).height(),
	// 	bs4_overlay = $('#bs4_overlay'),
	// 	bs4_toggle = $('#bs4_toggle');

	// bs4_overlay.height(doc_height).append('<div class="container"><div class="row"><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div></div></div>');
	// bs4_overlay.find('i').height(doc_height);

	// bs4_toggle.on('click', '.toggle', function (event) {
	// 	event.preventDefault();
	// 	bs4_overlay.toggleClass('active');
	// });

	// bs4_toggle.on('click', '.close', function (event) {
	// 	event.preventDefault();
	// 	bs4_toggle.addClass('hidden');
	// });
}();






















'use strict';

/**
 *  This is the main file for form
 */

var component_form = $('.component-form');

if (component_form.length)
{
	$(function()
	{
		initForms();
	});
}


function initForms()
{
	component_form.each(function()
	{
		var self = $(this),
			fieldsets = self.find('fieldset');

		fieldsets.each(function()
		{
			var legend = $(this).find('legend');
			legend.hide().after('<div class="legend-form-fix">'+legend.text()+'</div>');
			
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
			slide_toggle = mobile_menu.find('.slide-toggle'),
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
			$(this).attr('data-item', index);
		});

		slide_toggle.each(function()
		{
			$(this).on('click', function(event)
			{
				event.preventDefault();

				var parent = $(this).parents('.slide-item');

				parent.addClass('is-active');
				mobile_menu.addClass('subnav-exposed').attr('data-active-item', parent.attr('data-item'));
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





'use strict';

/**
 *  This is the main file for videos
 */

$('.video-modal-trigger').modalVideo();

var component_videos = $('.component-videos');

if (component_videos.length)
{
	$(function()
	{
		initVideos();
	});
}


function initVideos()
{
	component_videos.each(function()
	{
		var self = $(this),
			featured = self.find('.featured-video'),
			sidebar = self.find('.video-sidebar');

		_adjustVideoSidebar();

		$(window).on('load resize', function()
		{
			_adjustVideoSidebar();
		});

		function _adjustVideoSidebar()
		{
			if (mediaQueryWidth() > 991)
			{
				sidebar.css('max-height', featured.outerHeight());
			}
			else {
				sidebar.css('max-height', '100%');
			}
		}
	});
}

function mediaQueryWidth()
{
	return navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $(window).width() : window.innerWidth;
}



})(jQuery, Drupal);