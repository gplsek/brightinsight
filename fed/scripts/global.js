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
