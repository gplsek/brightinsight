/**
 * SyncHeight v1.1
 * @usage: $('selectors').syncHeight();
 */

(function ($) {
    'use strict';
    Drupal.behaviors.sync = {
      attach: function(context, settings) {
          'use strict';

          ;(function($){$.fn.syncHeight=function(){var max=0;$(this).each(function(){$(this).css('height','auto');var     val=$(this).outerHeight();if(val>max){max=val;}});$(this).each(function(){$(this).css('height',max+'px');});return this;};})(jQuery);
    
      }
  };
        
}(jQuery));