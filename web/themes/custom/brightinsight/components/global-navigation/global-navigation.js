
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
              console.log('Initializing GlobalNavigation');
          }   
    
      }
  };
        
}(jQuery));

