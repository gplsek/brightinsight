
(function ($) {
    'use strict';
    Drupal.behaviors.globalFooter = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for global-footer
           */
 
          if ($('.component-global-footer').length) {
              $(function() {
                  initGlobalFooter();
              });
          }

          function initGlobalFooter() {
              console.log('Initializing GlobalFooter');
          }
       
    
      }
  };
        
}(jQuery));
