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
