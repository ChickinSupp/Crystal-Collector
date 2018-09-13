$(document).ready(function() {
    var numberGuess = 53;
    var counter = 0;
    var numb1 = [10];
    var num2 = [5];
    var num3 = [3];
    var num4 = [7];

$('numb1 numb2 numb3 numb4').text(numberToGuess);
    for (let i=0; i<numb1.length; i++){
    var crystalImage1 = $('<img>');

    crystalImage1.attr('data-num', numb1[i]);
    crystalImage1.attr('src', 'http://img1.wikia.nocookie.net/__cb20110114234409/starcraftfanfiction/images/e/e8/Talram_Crystal.PNG');
    crystalImage1.attr('alt', 'green crystal');
    crystalImage1.addClass('crystal-image');
    $('#crystals').append(crystalImage1);
    console.log(numb1[i])
    }

})


