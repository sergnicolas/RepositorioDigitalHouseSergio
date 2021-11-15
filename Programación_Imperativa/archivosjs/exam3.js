let mayorMenorQue100 = function (a, b) {
  if (a + b < 100) {
    console.log("la sumar de " + a + " y " + b + " es menor que 100");
  } else if (a + b > 100) {
    console.log("la sumar de " + a + " y " + b + " es mayor que 100");
  } else if (a + b == 100) {
    console.log("la sumar de " + a + " y " + b + " es igual a 100");
  } else {
    console.log("not a number");
  }
};

mayorMenorQue100(57, 43);
