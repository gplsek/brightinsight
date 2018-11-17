(function ($) {
    'use strict';
    Drupal.behaviors.cardIcon = {
      attach: function(context, settings) {
          'use strict';

          /**
          *  This is the main file for card
          */
 
          if ($('.component-card-icon').length) {
              $(function() {
                  initCardIcon();
              });
          }

          function initCardIcon() {
              console.log('Initializing Card Icon');
          }
    
      }
  };
        
}(jQuery));