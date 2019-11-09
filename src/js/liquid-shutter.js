(function() {

  var slider = document.getElementById("myRange");

  var liqudidShutterImages = document.querySelectorAll(".liquid-shutter img");
  var numberOfImages = liqudidShutterImages.length;

  var division = 100/numberOfImages;

  var imgOne = document.getElementById("img-1");
  var imgTwo = document.getElementById("img-2");
  var imgThree = document.getElementById("img-3");
  var imgFour = document.getElementById("img-4");
  var imgFive = document.getElementById("img-5");
  var imgSix = document.getElementById("img-6");
  var imgSeven = document.getElementById("img-7");
  var imgEight = document.getElementById("img-8");

  imgOne.style.visibility = 'visible';
  imgTwo.style.visibility = 'hidden';
  imgThree.style.visibility = 'hidden';
  imgFour.style.visibility = 'hidden';
  imgFive.style.visibility = 'hidden';
  imgSix.style.visibility = 'hidden';
  imgSeven.style.visibility = 'hidden';
  imgEight.style.visibility = 'hidden';

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    var imgNumber = this.value/division;
    
    if (imgNumber < 1) {
      imgOne.style.visibility = 'visible';
      imgTwo.style.visibility = 'hidden';
      imgThree.style.visibility = 'hidden';
      imgFour.style.visibility = 'hidden';
      imgFive.style.visibility = 'hidden';
      imgSix.style.visibility = 'hidden';
      imgSeven.style.visibility = 'hidden';
      imgEight.style.visibility = 'hidden';
    } else if (imgNumber > 1 && imgNumber < 2) {
      imgOne.style.visibility = 'hidden';
      imgTwo.style.visibility = 'visible';
      imgThree.style.visibility = 'hidden';
      imgFour.style.visibility = 'hidden';
      imgFive.style.visibility = 'hidden';
      imgSix.style.visibility = 'hidden';
      imgSeven.style.visibility = 'hidden';
      imgEight.style.visibility = 'hidden';
    } else if (imgNumber > 2 && imgNumber < 3) {
      imgOne.style.visibility = 'hidden';
      imgTwo.style.visibility = 'hidden';
      imgThree.style.visibility = 'visible';
      imgFour.style.visibility = 'hidden';
      imgFive.style.visibility = 'hidden';
      imgSix.style.visibility = 'hidden';
      imgSeven.style.visibility = 'hidden';
      imgEight.style.visibility = 'hidden';
    } else if (imgNumber > 3 && imgNumber < 4) {
      imgOne.style.visibility = 'hidden';
      imgTwo.style.visibility = 'hidden';
      imgThree.style.visibility = 'hidden';
      imgFour.style.visibility = 'visible';
      imgFive.style.visibility = 'hidden';
      imgSix.style.visibility = 'hidden';
      imgSeven.style.visibility = 'hidden';
      imgEight.style.visibility = 'hidden';
    } else if (imgNumber > 4 && imgNumber < 5) {
      imgOne.style.visibility = 'hidden';
      imgTwo.style.visibility = 'hidden';
      imgThree.style.visibility = 'hidden';
      imgFour.style.visibility = 'hidden';
      imgFive.style.visibility = 'visible';
      imgSix.style.visibility = 'hidden';
      imgSeven.style.visibility = 'hidden';
      imgEight.style.visibility = 'hidden';
    } else if (imgNumber > 5 && imgNumber < 6) {
      imgOne.style.visibility = 'hidden';
      imgTwo.style.visibility = 'hidden';
      imgThree.style.visibility = 'hidden';
      imgFour.style.visibility = 'hidden';
      imgFive.style.visibility = 'hidden';
      imgSix.style.visibility = 'visible';
      imgSeven.style.visibility = 'hidden';
      imgEight.style.visibility = 'hidden';
    } else if (imgNumber > 6 && imgNumber < 7) {
      imgOne.style.visibility = 'hidden';
      imgTwo.style.visibility = 'hidden';
      imgThree.style.visibility = 'hidden';
      imgFour.style.visibility = 'hidden';
      imgFive.style.visibility = 'hidden';
      imgSix.style.visibility = 'hidden';
      imgSeven.style.visibility = 'visible';
      imgEight.style.visibility = 'hidden';
    } else if (imgNumber > 7 && imgNumber < 8) {
      imgOne.style.visibility = 'hidden';
      imgTwo.style.visibility = 'hidden';
      imgThree.style.visibility = 'hidden';
      imgFour.style.visibility = 'hidden';
      imgFive.style.visibility = 'hidden';
      imgSix.style.visibility = 'hidden';
      imgSeven.style.visibility = 'hidden';
      imgEight.style.visibility = 'visible';
    }
  }
  
})();
