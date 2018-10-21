

function randomBackground() {
  // Add picture numbers in the array below
  var backgroundArray = [
      "https://farm2.staticflickr.com/1897/30559376378_0de0fcac2e_k.jpg",
      "https://farm2.staticflickr.com/1868/42618409120_adc50ff895_k.jpg",
      "https://farm2.staticflickr.com/1846/44377604372_1547b735b3_k.jpg",
      "https://farm2.staticflickr.com/1885/44376988542_a62d38357f_k.jpg",
      "https://farm2.staticflickr.com/1889/43518135015_b60c4f242e_k.jpg",
      "https://farm2.staticflickr.com/1882/43517972525_d5ee925d5e_k.jpg",
      "https://farm2.staticflickr.com/1853/43518031585_e90b2911ce_k.jpg",
      "https://farm2.staticflickr.com/1843/43708653004_b5fd99c9b6_k.jpg",
      "https://farm2.staticflickr.com/1876/43517598545_2e4951ae2a_k.jpg",
      "https://farm2.staticflickr.com/1852/29487862537_1edd7bacf7_k.jpg"
                        ];
    
  var randomNumber = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
  var backgroundPath = ('url("'+ randomNumber + '")');
  document.querySelector('.titleContainer').style.backgroundImage = backgroundPath;
 
    // Automatic slideshow
    
  setTimeout(randomBackground, 11000);

}

randomBackground();


 // document.querySelector('.img').addEventListener('click', function() {
 //   var imgDOM = document.querySelector('.img');
 //    imgDOM.style.width = '200%';
 //    imgDOM.style.height = '200%';
 //    imgDOM.tyle.position = 'absolute';
 //  });
