const convertToCelsius = function(temperature) {
  let converted = ((temperature - 32) * 5)/9;
  return parseFloat(converted.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let converted = (temperature * 9 / 5) + 32;
  return parseFloat(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
