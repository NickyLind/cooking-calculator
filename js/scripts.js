const number1 = parseInt(prompt("Please Enter number of Cups to convert to Fl Oz:"));

function convertCup (number1)  { //converts Cups to Fl Oz;
  return number1 * 8;
}

function convertTablespoon (number1)  { //converts Tablespoons to teaspoons;
  return number1 / (1/3);
}

function convertQuart (number1) { //converts Quarts to Gallons;
  return number1 / (1/4);
}

const result = convertCup (number1)
alert(result);