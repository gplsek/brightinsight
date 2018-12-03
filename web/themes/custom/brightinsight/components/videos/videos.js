(function ($) {
    'use strict';
    Drupal.behaviors.videos = {
      attach: function(context, settings) {
          'use strict';

          $('.video-modal-trigger', context).once().modalVideo();
    
      }
  };
        
}(jQuery));