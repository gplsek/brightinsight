
(function ($) {
    'use strict';
    Drupal.behaviors.overlay = {
      attach: function(context, settings) {
          'use strict';

          /**
           *  This is the main file for use-cases
           */
 
          var bs4Overlay = function () {
  	        //return;
  	        $('body').append('<div id="bs4_overlay"></div><div id="bs4_toggle"><span class="toggle">Toggle Grid</span><span class="close">(Hide)</span></div>');

              var doc_height = $(document).height(),
  	        bs4_overlay = $('#bs4_overlay'),
  	        bs4_toggle = $('#bs4_toggle');

              bs4_overlay.height(doc_height).append('<div class="container"><div class="row"><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div   class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div     class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div     class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div></div></div>');
  	        bs4_overlay.find('i').height(doc_height);

  	        bs4_toggle.on('click', '.toggle', function (event) {
  	            event.preventDefault();
  		        bs4_overlay.toggleClass('active');
  	        });

  	        bs4_toggle.on('click', '.close', function (event) {
  	            event.preventDefault();
  		        bs4_toggle.addClass('hidden');
  	        });
          }();
    
      }
  };
        
}(jQuery));
