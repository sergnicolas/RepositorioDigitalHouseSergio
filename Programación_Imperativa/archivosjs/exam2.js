function generacion(fechaNacimiento) {
  if (fechaNacimiento <= 1964) {
    console.log("Baby Boomer");
  } else if (fechaNacimiento >= 1965 && fechaNacimiento <= 1981) {
    console.log("Generacion X");
  } else if (fechaNacimiento >= 1982 && fechaNacimiento <= 1997) {
    console.log("Millenial");
  } else if (fechaNacimiento >= 1998) {
    console.log("Millenial");
  } else {
    console.log("Mou viejo");
  }
}
generacion(2000);
