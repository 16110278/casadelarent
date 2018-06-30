//smoothscroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000); /* KECEPATAN SCROLL, DEFAULT 1000 dari kita*/
        return false;
      }
    }
  });
});

              $('label').click(function () {
                var checked = $('input', this).is(':checked');
                $('span', this).text(checked ? 'Inuse' : 'Un use');
            });


             