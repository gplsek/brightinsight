
(function ($) {
    'use strict';
    Drupal.behaviors.globalNavigation = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for global-navigation
           */
 
          if ($('.component-global-navigation').length) {
              $(function() {
                  initGlobalNavigation();
              });
          }

          function initGlobalNavigation() {
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
           
    
      }
  };
        
}(jQuery));

