function inicio() {
  let personas = [];
  let personasQueEntran = [];
  const cantidadPersonas = 8;
  let altura;
  let edad;
  let dineroRecaudado;
  let salario;

  function evaluarEdad() {
    while (true) {
      edad = prompt(`Ingrese su edad`);

      if (!isNaN(edad) && edad >= 0) {
        break;
      } else {
        alert("Por favor, ingrese una edad válida (mayor o igual a 0).");
      }
    }

    if (edad >= 18) {
      alert("Usted debe abonar $1000");
    } else {
      alert("Usted debe abonar $500");
    }
  }

  for (let i = 1; i <= cantidadPersonas; i++) {
    while (true) {
      altura = prompt(`Persona ${i}: Ingresa su altura`);

      if (!isNaN(altura) && altura >= 0) {
        break;
      } else {
        alert("Por favor, ingrese una altura válida (mayor o igual a 0).");
      }
    }

    if (altura >= 160) {
      alert("Usted puede subir a la montaña rusa");
      evaluarEdad();
    } else {
      alert("Usted no puede subir a la montaña rusa");
    }

    let persona = {
      altura: parseFloat(altura),
      edad: parseInt(edad),
    };

    personas.push(persona);
  }

  personasQueEntran = personas.filter((persona) => persona.altura >= 160);

  console.log(personas);

  console.log(personasQueEntran);

  dineroRecaudado = personasQueEntran.reduce((total, persona) => {
    if (persona.edad >= 18) {
      return total + 1000;
    } else {
      return total + 500;
    }
  }, 0);

  alert(
    "Dinero recaudado en la montaña rusa el día de hoy: $" + dineroRecaudado
  );

  salario = (dineroRecaudado * 30) / 100;

  alert("El salario del encargado de la fila el día de hoy es de $" + salario);
}
