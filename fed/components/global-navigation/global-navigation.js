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