(function ($) {
    'use strict';
    Drupal.behaviors.cardBlog = {
      attach: function(context, settings) {
          'use strict';

          /**
          *  This is the main file for card
          */
 
          if ($('.component-card-blog').length) {
              $(function() {
                  initCardBlog();
              });
          }

          function initCardBlog() {
              console.log('Initializing Card Blog');
          }
    
      }
  };
        
}(jQuery));