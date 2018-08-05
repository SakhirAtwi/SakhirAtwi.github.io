window.sr = ScrollReveal();
        sr.reveal('.navbar', {
          duration: 1000,
          origin:'top',
          distance:'300px'
        });
        sr.reveal('#textbox', {
          duration: 2000,
          origin:'left',
          distance:'300px'
        });
        sr.reveal('#learnmore', {
          duration: 2000,
          origin:'right',
          distance:'300px'
        });
        sr.reveal('#img1', {
          duration: 2000,
          origin:'right',
          distance:'300px'
        });
        sr.reveal('#txt1', {
          duration: 2000,
          origin:'left',
          distance:'300px'
        });
        sr.reveal('#img2', {
          duration: 2000,
          origin:'left',
          distance:'300px'
        });
        sr.reveal('#txt2', {
          duration: 2000,
          origin:'right',
          distance:'300px'
        });
        sr.reveal('#img3', {
          duration: 2000,
          origin:'right',
          distance:'300px'
        });
        sr.reveal('#txt3', {
          duration: 2000,
          origin:'left',
          distance:'300px'
        });
        sr.reveal('#products', {
          duration: 2000,
          origin:'left',
          distance:'500px'
        });
        sr.reveal('#prod', {
          duration: 2000,
          origin:'right',
          distance:'500px'
        });
        sr.reveal('#products_title', {
          duration: 2000,
          origin:'top',
          distance:'100px'
        });

$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
