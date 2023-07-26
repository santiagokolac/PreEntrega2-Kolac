function inicio() {
  class MontañaRusa {
    constructor() {
      this.personas = [];
      this.personasQueEntran = [];
      this.cantidadPersonas;
      this.altura;
      this.edad;
      this.dineroAAbonar;
      this.dineroRecaudado = 0;
      this.salario;
      this.largoDeFila;
      this.dineroEl = document.getElementById("dineroEl");
      this.salarioEl = document.getElementById("salarioEl");
    }

    evaluarEdad() {
      while (true) {
        this.edad = prompt("Ingrese su edad");

        if (!isNaN(this.edad) && this.edad >= 0) {
          break;
        } else {
          alert("Por favor, ingrese una edad válida (mayor o igual a 0)");
        }
      }

      if (this.edad >= 18) {
        this.dineroAAbonar = 1000;
        alert("Usted debe abonar $1000");
      } else {
        this.dineroAAbonar = 500;
        alert("Usted debe abonar $500");
      }

      return this.dineroAAbonar;
    }

    obtenerFechaActual() {
      const fechaActual = new Date();
      const dia = fechaActual.getDate();
      const mes = fechaActual.getMonth() + 1;
      const año = fechaActual.getFullYear();

      return `${dia}/${mes}/${año}`;
    }

    iniciarJuego() {
      this.largoDeFila = parseInt(
        prompt(
          "Seleccione el largo de la fila:\n1 - Corta\n2 - Media\n3 - Larga"
        )
      );

      switch (this.largoDeFila) {
        case 1:
          this.cantidadPersonas = 3;
          break;
        case 2:
          this.cantidadPersonas = 5;
          break;
        case 3:
          this.cantidadPersonas = 8;
          break;
        default:
          alert("Opción inválida. Largo de fila por defecto: Corta");
          this.cantidadPersonas = 3;
      }

      for (let i = 1; i <= this.cantidadPersonas; i++) {
        while (true) {
          this.altura = prompt(
            `Persona ${i}: Ingrese su altura en centímetros`
          );

          if (!isNaN(this.altura) && this.altura >= 0) {
            break;
          } else {
            alert("Por favor, ingrese una altura válida");
          }
        }

        if (this.altura >= 160) {
          alert("Usted puede subir a la montaña rusa");
          this.dineroRecaudado += this.evaluarEdad();
        } else {
          alert("Usted no puede subir a la montaña rusa");
        }

        let persona = {
          altura: parseFloat(this.altura),
          edad: parseInt(this.edad),
        };

        this.personas.push(persona);
      }

      this.personasQueEntran = this.personas.filter(
        (persona) => persona.altura >= 160
      );

      console.log(this.personas);
      console.log(this.personasQueEntran);

      this.dineroRecaudado = this.personasQueEntran.reduce((total, persona) => {
        if (persona.edad >= 18) {
          return total + 1000;
        } else {
          return total + 500;
        }
      }, 0);

      console.log(
        "Dinero recaudado en la montaña rusa el día " +
          this.obtenerFechaActual() +
          ": $" +
          this.dineroRecaudado
      );

      this.dineroEl.innerText = "$" + this.dineroRecaudado;

      this.salario = (this.dineroRecaudado * 30) / 100;

      console.log(
        "El salario del encargado de la fila el día " +
          this.obtenerFechaActual() +
          ": $" +
          this.salario
      );

      this.salarioEl.innerText = "$" + this.salario;
    }
  }

  const montañaRusa = new MontañaRusa();
  montañaRusa.iniciarJuego();
}
