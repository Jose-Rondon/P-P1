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
    document.getElementById("iconWrap2").setAttribute("style", "fill: #1A1A1A;");
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
    document.getElementById("iconWrap2").setAttribute("style", "fill: #B3C7E6;");
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
    document.getElementById("iconWrap2").setAttribute("style", "fill: #B3C7E6;");
}