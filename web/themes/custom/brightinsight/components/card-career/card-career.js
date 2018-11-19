(function ($) {
    'use strict';
    Drupal.behaviors.cardCareer = {
      attach: function(context, settings) {
          'use strict';

          /**
          *  This is the main file for card
          */
 
          if ($('.component-card-career').length) {
              $(function() {
                  initCardCareer();
              });
          }

          function initCardCareer() {
              console.log('Initializing CardCareer');
          }
    
      }
  };
        
}(jQuery));