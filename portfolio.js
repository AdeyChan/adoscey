document.addEventListener('DOMContentLoaded', function () {

    var index = 1;
            displaySlides(index);

            function slides(n) {
                displaySlides(index += n);
            }

            function activeSlides(n) {
                displaySlides(index = n);
            }

            function displaySlides(n) {
                var i;
                var allSlides = document.getElementsByClassName("image-container");
                var allThumbnails = document.getElementsByClassName("bottom-img");

                if (n > allSlides.length) {
                    index = 1;
                }
                if (n < 1) {
                    index = allSlides.length;
                }
                for (i = 0; i < allSlides.length; i++) {
                    allSlides[i].style.display = "none";
                }
                for (i = 0; i < allThumbnails.length; i++) {
                    allThumbnails[i].className = 
                            allThumbnails[i].className.replace(" current-bottom-img", "");
                    allThumbnails[i].style.filter = "brightness(50%)";
                }
                allSlides[index - 1].style.display = "block";
                allThumbnails[index - 1].className += " current-bottom-img";
                allThumbnails[index - 1].style.filter = "brightness(100%)";
            }
            window.slides = slides;
            window.activeSlides = activeSlides;
        });