
(function ($) {
    'use strict';
    Drupal.behaviors.bannerinline = {
      attach: function(context, settings) {
          'use strict';

          /**
          *  This is the main file for banner-inline
          */
 
          if ($('.component-banner-inline').length) {
              $(function() {
                  initBannerInline();
              });
          }

          function initBannerInline() {
              console.log('Initializing BannerInline');
          }

      }
  };
        
}(jQuery));
