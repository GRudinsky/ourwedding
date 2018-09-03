

function randomBackground() {
  // Add picture numbers in the array below
  var backgroundArray = [
      "https://farm2.staticflickr.com/1886/43519261515_eb3414b80d_k.jpg",
      "https://farm2.staticflickr.com/1897/30559376378_0de0fcac2e_k.jpg",
      "https://farm2.staticflickr.com/1863/30559335628_6ab4182380_k.jpg",
      "https://farm2.staticflickr.com/1852/43710320594_b8b9020ab3_k.jpg",
      "https://farm2.staticflickr.com/1868/42618409120_adc50ff895_k.jpg",
      "https://farm2.staticflickr.com/1881/44377909322_eb9495d9e3_k.jpg",
      "https://farm2.staticflickr.com/1876/29489902147_92d8d9d6b6_k.jpg"
                        ];
    
  var randomNumber = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
  var backgroundPath = ('url("'+ randomNumber + '")');
  document.querySelector('.titleContainer').style.backgroundImage = backgroundPath;
 
    // Automatic slideshow
    
  setTimeout(randomBackground, 10000);

}

randomBackground();


 // document.querySelector('.img').addEventListener('click', function() {
 //   var imgDOM = document.querySelector('.img');
 //    imgDOM.style.width = '200%';
 //    imgDOM.style.height = '200%';
 //    imgDOM.tyle.position = 'absolute';
 //  });
