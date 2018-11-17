(function ($) {
    'use strict';
    Drupal.behaviors.card = {
      attach: function(context, settings) {
          'use strict';

          /**
          *  This is the main file for card
          */
 
          if ($('.component-card').length) {
              $(function() {
                  initCard();
              });
          }

          function initCard() {
              console.log('Initializing Card');
          }
    
      }
  };
        
}(jQuery));
