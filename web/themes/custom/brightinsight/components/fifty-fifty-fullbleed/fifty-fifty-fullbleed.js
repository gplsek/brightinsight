
(function ($) {
    'use strict';
    Drupal.behaviors.fiftyFiftyFullBleed = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for fifty-fifty-fullbleed
           */
 
          if ($('.component-fifty-fifty-fullbleed').length) {
              $(function() {
                  initFiftyFiftyFullbleed();
              });
          }

          function initFiftyFiftyFullbleed() {
              console.log('Initializing FiftyFiftyFullbleed');
          }
          
    
      }
  };
        
}(jQuery));




