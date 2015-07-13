function updateWCTime() {
   var myDiv = $('#countdown');
   var now = new Date();
   var kickoff = Date.parse("July 17, 2015 17:00:00");
   var diff = kickoff - now;
   var days  = Math.floor( diff / (1000*60*60*24) );
   var hours = Math.floor( diff / (1000*60*60) );
   var mins  = Math.floor( diff / (1000*60) );
   var secs  = Math.floor( diff / 1000 );
   var dd = days;
   var hh = hours - days  * 24;
   var mm = mins  - hours * 60;
   var ss = secs  - mins  * 60;
   var myString =   dd + ' days ' + hh + ' hours ' + mm + ' minutes ' + ss + ' seconds';
   myDiv.html(myString);
}
$(document).ready(function () {
    $('body').css('font-family','Ubuntu, sans-serif');
    updateWCTime();
    setInterval('updateWCTime()', 1000 );
});
