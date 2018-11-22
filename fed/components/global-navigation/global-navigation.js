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
			mobile_trigger = $(this).find('.mobile-nav-trigger'),
			hamburger = mobile_trigger.find('.hamburger');

		mobile_trigger.on('click', function(event)
		{
			event.preventDefault();
			hamburger.toggleClass('is-active');
			mobile_menu.slideMobileMenu();
		});
	});
}
