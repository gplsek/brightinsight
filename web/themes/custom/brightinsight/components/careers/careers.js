
(function ($) {
    'use strict';
    Drupal.behaviors.careers = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for careers
           */
 
          if ($('.component-careers').length) {
              $(function() {
                  initCareers();
              });
          }

          function initCareers() {
              console.log('Initializing Careers');
          }
          
    
      }
  };
        
}(jQuery));

