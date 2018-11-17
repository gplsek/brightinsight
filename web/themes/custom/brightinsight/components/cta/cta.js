
(function ($) {
    'use strict';
    Drupal.behaviors.cta = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for cta
           */
 
          if ($('.component-cta').length) {
              $(function() {
                  initCta();
              });
          }

          function initCta() {
              console.log('Initializing Cta');
          }
          
    
      }
  };
        
}(jQuery));


