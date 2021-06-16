document.getElementById("iconWrap1").addEventListener("click", stopSlide);
document.getElementById("iconWrap3").addEventListener("click", stopSlide);

var slide = null;

function stopSlide() {
    clearInterval(slide);
}

function slideshow1() {
    var x = document.getElementById("wrap1");
    var y = x.scrollWidth;
    var z = y / 3;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
}

onload = function() {
    slide = setInterval(slideshow1, 5000);
}

function slideshow() {
    slide = setInterval(slideshow1, 5000);
    document.getElementById("iconWrap2").setAttribute("style", "opacity: 0;");
}

function scrollSlideF() {
    var x = document.getElementById("wrap1");
    var y = x.scrollWidth;
    var z = y / 3;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
    document.getElementById("iconWrap2").setAttribute("style", "fill: #B3C7E6; opacity: 1;");
}

function scrollSlideR() {
    var x = document.getElementById("wrap1");
    var y = x.scrollWidth;
    var z = (y / 3);
    if (x.scrollLeft == 0) {
        x.scroll({ left: (x.scrollWidth), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z * -1), behavior: 'smooth' });
    }
    document.getElementById("iconWrap2").setAttribute("style", "fill: #B3C7E6; opacity: 1;");
}

function telefonoShow()  {
    var x = document.getElementById("telefono");
    var y = document.getElementById("telefonoContent");
    x.setAttribute("style", "transform: scale(1);");
    y.setAttribute("style", "transition-duration: 1.5s; opacity: 1;");
}

function cerrar()   {
    var x = document.getElementById("telefono");
    var y = document.getElementById("telefonoContent");
    x.setAttribute("style", "transform: scale(1,0);");
    y.setAttribute("style", "transition-duration: 0s; opacity: 0;");
}