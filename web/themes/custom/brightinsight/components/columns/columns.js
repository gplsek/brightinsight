
(function ($) {
    'use strict';
    Drupal.behaviors.columns = {
      attach: function(context, settings) {
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

          
          
    
      }
  };
        
}(jQuery));


