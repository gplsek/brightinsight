
(function ($) {
    'use strict';
    Drupal.behaviors.fiftyFifty = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for fifty-fifty
           */
 
          if ($('.component-fifty-fifty').length) {
              $(function() {
                  initFiftyFifty();
              });
          }

          function initFiftyFifty() {
              console.log('Initializing FiftyFifty');
          }
    
      }
  };
        
}(jQuery));



