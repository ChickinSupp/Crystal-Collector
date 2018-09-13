$(document).ready(function() {
    var numberToGuess = Math.floor(Math.random() * 100);
    var counter = 0;
    var numb1 = [10];
    var numb2 = [5];
    var numb3 = [3];
    var numb4 = [7];

$('.random-num').text(numberToGuess);

$('numb1 numb2 numb3 numb4').text(numberToGuess);
    for (var i=0; i<numb1.length; i++) {
    var crystalImage1 = $('<img>');

    crystalImage1.attr('data-num', numb1[i]);
    crystalImage1.attr('src', 'http://img1.wikia.nocookie.net/__cb20110114234409/starcraftfanfiction/images/e/e8/Talram_Crystal.PNG');
    crystalImage1.attr('alt', 'green crystal');
    crystalImage1.addClass('crystal-image');
    $('#crystals').append(crystalImage1);
    }

    for (var i=0; i<numb2.length; i++) {
        var crystalImage2 = $('<img>');

        crystalImage2.attr('data-num', numb2[i]);
        crystalImage2.attr('src', 'http://vignette3.wikia.nocookie.net/starcraftfanfiction/images/b/b8/Alliram.PNG/revision/latest?cb=20110114234131');
        crystalImage2.attr('alt', 'blue crystal');
        crystalImage2.addClass('crystal-image');
        $('#crystals').append(crystalImage2);
    }

    for (var i=0; i<numb3.length; i++) {
        var crystalImage3 = $('<img>');

        crystalImage3.attr('data-num', numb3[i]);
        crystalImage3.attr('src', 'http://vignette1.wikia.nocookie.net/starcraftfanfiction/images/5/59/Temril_Crystal.PNG/revision/latest?cb=20110114234517');
        crystalImage3.attr('alt', 'red crystal')
        crystalImage3.addClass('crystal-image');
        $('#crystals').append(crystalImage3);
    }

    for (var i=0; i<numb4.length; i++) {
        var crystalImage4 = $('<img>');

        crystalImage4.attr('data-num', numb4[i]);
        crystalImage4.attr('src', 'http://vignette3.wikia.nocookie.net/starcraftfanfiction/images/5/5b/Savraj_Crystal.PNG/revision/latest?cb=20110114234233');
        crystalImage4.attr('alt', 'purple crystal');
        crystalImage4.addClass('crystal-image');
        $('#crystals').append(crystalImage4);
    }

    
   
});


