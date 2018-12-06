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
