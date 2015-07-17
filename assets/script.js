function getWCTime() {
   var diff = getTimeInt();
   var days  = Math.floor( diff / (1000*60*60*24) );
   var hours = Math.floor( diff / (1000*60*60) );
   var mins  = Math.floor( diff / (1000*60) );
   var secs  = Math.floor( diff / 1000 );
   var dd = days;
   var hh = hours - days  * 24;
   var mm = mins  - hours * 60;
   var ss = secs  - mins  * 60;
   var myString =   dd + ' days ' + hh + ' hours ' + mm + ' minutes ' + ss + ' seconds';
   return myString
}

function reg() {
  $('#dday').hide();
}

function ddaystuff() {
   $('#theme').css('color',"#E44B23");
   $('#countdown').hide();
   $('#info').hide();
   $('#dday').show();
}

function getTimeInt() {
  var now = new Date();
  var kickoff = Date.parse("July 17, 2015 17:00:00");
  return kickoff - now;
}

function updateWCTime() {
   $('#countdown').html(getWCTime());;
}

function flash_dday() {
  if($('body').css('background-color') == "rgb(236, 240, 241)") {
    $('#dday').css('color',"#dde4e6");
    $('#theme').css('color',"#dde4e6");
    $('body').css('background-color', '#E44B23');
  }
  else {
    $('#dday').css('color',"#E44B23");
    $('#theme').css('color',"#E44B23");
    $('body').css('background-color', '#ECF0F1'); 
  } 
}

$(document).ready(function () {
    $('body').css('font-family','Ubuntu, sans-serif');
    var negTest = getTimeInt();
    if(negTest < 0) {
      ddaystuff();
      setInterval('flash_dday()', 500 );
    }
    else {
      reg();
      setInterval('updateWCTime()', 1000 );
    }    

});
