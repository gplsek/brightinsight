(function ($) {
    'use strict';
    Drupal.behaviors.cardNoimage = {
      attach: function(context, settings) {
          'use strict';

          /**
          *  This is the main file for card
          */
 
          if ($('.component-card-no-image').length) {
              $(function() {
                  initCardNoImage();
              });
          }

          function initCardNoImage() {
              console.log('Initializing CardNoImage');
          }
    
      }
  };
        
}(jQuery));