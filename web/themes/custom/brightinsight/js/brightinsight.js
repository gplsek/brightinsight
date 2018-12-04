(function ($, Drupal) {
  var app = {
    init: function() {
      this.mobileMenu();
    },

    // Translate copy of main menu to mobile representation
    mobileMenu: function() {
      $('.mobile-menu .nav-primary ul .dropdown').each(function() {
        var a = $(this).find('> a');

        if (a.parent().find('ul').length)
          a.addClass('slide-toggle').append('<span class="chevron-icon small right white"></span>');

        $(this).find('> ul').removeClass('dropdown-menu').addClass('slide-menu');
        $(this).removeClass('dropdown').addClass('slide-item');
      });
    }
  }

  app.init();
})(jQuery, Drupal);