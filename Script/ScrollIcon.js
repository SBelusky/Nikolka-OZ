window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var sirka_okna = window.innerWidth;
    var pozicia_vpravo = 0;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollIcon").style.display = "block";
    } else {
        document.getElementById("scrollIcon").style.display = "none";
    }
    if (sirka_okna < 1903) {
        document.getElementById("scrollIcon").style.right = "30px";
    } else {
        pozicia_vpravo = ((sirka_okna - 1903) / 2) + 30;
        document.getElementById("scrollIcon").style.right = pozicia_vpravo + 'px';
    }
}

function topFunction() {
    var hash = '#header';  
    $('html, body').animate({scrollTop: $(hash).offset().top}, 'slow');
}