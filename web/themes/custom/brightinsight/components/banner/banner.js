
(function ($) {
    'use strict';
    Drupal.behaviors.banner = {
      attach: function(context, settings) {
          'use strict';

          /**
          *  This is the main file for banner
          */
 
          if ($('.component-banner').length) {
              $(function() {
                  initBanner();
              });
          }

          function initBanner() {
              console.log('Initializing Banner');
          }
          
      }
  };
        
}(jQuery));
