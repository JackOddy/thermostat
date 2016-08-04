$( document ).ready(function(){
  var thermostat = new Thermostat();

  $('mintemp').text(thermostat.minimumTemp);
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
  $('temperature').attr('class', thermostat.energyUsage());
  }
  function updateMaxTemp () {
  $('maxtemp').text(thermostat.maximumTemp);
  }
});
