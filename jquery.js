    $( document ).ready(function(){
      updateTemperature();
      $('#up').click(function(){
        thermostat.up();
      updateTemperature();
      });
      $('#down').click(function(){
        thermostat.down();
      updateTemperature();
      });
      $('#reset').click(function(){
        thermostat.reset();
      updateTemperature();
      });
      $('#powerSavingOn').click(function(){
        thermostat.powerSavingOn();
      updateTemperature();
      });
      $('#powerSavingOff').click(function(){
        thermostat.powerSavingOff();
      updateTemperature();
      });
      function updateTemperature (){
      $('gaugetext').text(thermostat.temperature + '°c');
      thermostat.changeColour();
      }
    })
