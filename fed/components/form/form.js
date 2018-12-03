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
