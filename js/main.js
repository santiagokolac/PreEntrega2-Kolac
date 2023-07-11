let cantidadPersonas = 8;
let alturaIngresada;
let edadIngresada;
let mayorDeEdad;

window.onload = function () {
  function evaluarEdad() {
    edadIngresada = parseInt(prompt("Ingrese su edad"));

    if (edadIngresada >= 18) {
      mayorDeEdad = true;
    } else {
      mayorDeEdad = false;
    }

    if (mayorDeEdad) {
      alert("Usted debe abonar $1000");
    } else {
      alert("Usted debe abonar $500");
    }
  }

  for (let i = 1; i <= cantidadPersonas; i++) {
    alturaIngresada = parseInt(prompt("Ingrese su altura en cm"));

    if (alturaIngresada >= 160) {
      alert("Usted puede subir a la montaña rusa");
      evaluarEdad();
    } else {
      alert("Usted no puede subir a la montaña rusa");
    }
  }
};
