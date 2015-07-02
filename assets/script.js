function applyFont(el) {
    el.css('font-family', 'Ubuntu, sans-serif');
}

$(document).ready(function () {
    myDiv = $('#countdown');
    myDiv.css('text-align','center');
    myDiv.css('font-size','2em');
    myDiv.css('margin-top','10%');
    applyFont(myDiv);
    myDiv.css('color','#8e44ad');
    themeDiv = $('#theme');
    applyFont(themeDiv);
    themeDiv.css('color', '#dde4e6');
    themeDiv.css('font-size', '8em');
    updateWCTime();
    $('body').css('background','#ecf0f1');
    setInterval('updateWCTime()', 1000 );
});
