
(function ($) {
    'use strict';
    Drupal.behaviors.usecases = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for use-cases
           */
 
          if ($('.component-use-cases').length) {
              $(function() {
                  initUseCases();
              });
          }

          function initUseCases() {
              console.log('Initializing UseCases');
          }
    
      }
  };
        
}(jQuery));

