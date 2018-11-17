
(function ($) {
    'use strict';
    Drupal.behaviors.text = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for text
           */
 
          if ($('.component-text').length) {
              $(function() {
                  initText();
              });
          }

          function initText() {
              console.log('Initializing Text');
          }
    
      }
  };
        
}(jQuery));
