const convertToCelsius = function(fahrenheit) {
  answer = (fahrenheit-32)*5/9
  finalConversionToCelcius= Math.round(answer*10)/10;
  return finalConversionToCelcius;
};

const convertToFahrenheit = function(celcius) {
  answer= (celcius* 9/5 +32);
  finalConversionToFahrenheit= Math.round(answer*10)/10;
  return finalConversionToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

