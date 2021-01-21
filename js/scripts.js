function convertCup (number1)  { //converts Cups to Fl Oz;
  return number1 * 8;
}

function convertTablespoon (number1)  { //converts Tablespoons to teaspoons;
  return number1 / (1/3);
}

function convertQuart (number1) { //converts Quarts to Gallons;
  return number1 * (1/4);
}


$(document).ready(function(){ 
  $("form#cupsId").submit(function(event) { 
    event.preventDefault();
    const number1 = parseInt($("#cups").val());
    let result = convertCup(number1);
    $("#output").text(result);
  });

  $("form#tbspId").submit(function(event) { 
    event.preventDefault();
    const number1 = parseInt($("#tbsp").val());
    let result = convertTablespoon(number1);
    $("#output").text(result);
  });

  $("form#quartId").submit(function(event) { 
    event.preventDefault();
    const number1 = parseInt($("#quart").val());
    let result = convertQuart(number1);
    $("#output").text(result);
  });
});

const input = parseInt($("#input").val());
let result = leapYear(input)