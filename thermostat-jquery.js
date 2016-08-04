$( document ).ready(function(){
  var thermostat = new Thermostat();
  displayWeather('London');
  $('mintemp').text(thermostat.minimumTemp);

function displayWeather(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=cc223b5674cf457bcf4631591f10342b';
  var units = '&units=metric';
  $.get(url + token + units, function(data){
    $('#current-temperature').text(data.main.temp);
  });
}

$('#current-city').change(function() {
  var city = $('#current-city').val();
  displayWeather(city);
});
  updateMaxTemp();
  updateTemp();


  $('#up').click(function(){
    thermostat.up();
    updateTemp();
  });
  $('#down').click(function(){
    thermostat.down();
    updateTemp();
  });
  $('#reset').click(function(){
    thermostat.resetTemp();
    updateTemp();
  });
  $('#powerSaving').click(function(){
    thermostat.togglePowerSaving();
    updateMaxTemp();
  });
  function updateTemp () {
  $('temperature').text(thermostat.temperature);
  $('body').attr('class', thermostat.energyUsage());
  }
  function updateMaxTemp () {
  $('maxtemp').text(thermostat.maximumTemp);
  }
});
