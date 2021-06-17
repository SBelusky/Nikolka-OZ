var id_slide = 0;
slideshow();

function slideshow() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var sirka_okna = window.innerWidth;

    if (sirka_okna < 800 && sirka_okna >= 550) {
        document.getElementById("slide-show-4").src = "Imagine/Slideshow/small_4.jpg";
        document.getElementById("slide-show-1").src = "Imagine/Slideshow/small_1.jpg";
        document.getElementById("slide-show-2").src = "Imagine/Slideshow/small_2.jpg";
        document.getElementById("slide-show-3").src = "Imagine/Slideshow/small_3.jpg";
    }else if (sirka_okna < 550) {
        document.getElementById("slide-show-4").src = "Imagine/Slideshow/smaller_4.JPG";
        document.getElementById("slide-show-1").src = "Imagine/Slideshow/smaller_1.jpg";
        document.getElementById("slide-show-2").src = "Imagine/Slideshow/smaller_2.jpg";
        document.getElementById("slide-show-3").src = "Imagine/Slideshow/smaller_3.jpg";
    }else {
        document.getElementById("slide-show-4").src = "Imagine/Slideshow/slideshow_4.jpg";
        document.getElementById("slide-show-1").src = "Imagine/Slideshow/slideshow_1.jpg";
        document.getElementById("slide-show-2").src = "Imagine/Slideshow/slideshow_2.jpg";
        document.getElementById("slide-show-3").src = "Imagine/Slideshow/slideshow_3.jpg"; 
    }
    
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    id_slide++;  
    if (id_slide> slides.length) {
      id_slide = 1;
    }   
    slides[id_slide-1].style.display = "block";  
    
    setTimeout(slideshow, 5000); 
}