let boton = document.getElementById("queueBtn");
boton.addEventListener("click", inicio);

function inicio() {
  document.getElementById("indicaciones").style.display = "none";
  boton.style.display = "none";

  document.getElementById("cajaAltura").style.display = "block";
  document.getElementById("cajaEdad").style.display = "none";
  alturaPersonaBtn = document.getElementById("alturaPersonaBtn");

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
      this.personasEntraronKey = "personasEntraron";
      this.alturaPersona = document.getElementById("alturaPersona");

      alturaPersonaBtn.addEventListener("click", () => {
        this.altura = Number(this.alturaPersona.value);
        this.iniciarJuego();
        console.log(this.altura);
      });
    }

    guardarPersonasEntraron() {
      localStorage.setItem(
        this.personasEntraronKey,
        JSON.stringify(this.personasQueEntran)
      );
    }

    cargarPersonasEntraron() {
      const personasEntraronJSON = localStorage.getItem(
        this.personasEntraronKey
      );
      if (personasEntraronJSON) {
        this.personasQueEntran = JSON.parse(personasEntraronJSON);
      }
    }

    evaluarEdad() {
      while (true) {
        this.edad = prompt("Ingrese su edad");

        if (!isNaN(this.edad) && this.edad >= 0 && this.edad <= 118) {
          break;
        } else {
          alert("Por favor, ingrese una edad válida (entre 0 y 118)");
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
      console.log(this.cantidadPersonas);
      document.getElementById("fichaPersona").style.display = "block";
      for (let i = 1; i <= this.cantidadPersonas; i++) {
        this.altura = this.alturaPersona.value;
        while (true) {
          if (!isNaN(this.altura) && this.altura >= 54 && this.altura <= 251) {
            break;
          } else {
            alert("Por favor, ingrese una altura válida (entre 54 y 251)");
          }
        }

        if (this.altura >= 160) {
          Swal.fire("Usted puede subir a la montaña rusa");
          this.dineroRecaudado += this.evaluarEdad();
        } else {
          Swal.fire("Usted no puede subir a la montaña rusa");
        }

        let persona = {
          altura: parseFloat(this.altura),
          edad: parseInt(this.edad),
        };

        this.personas.push(persona);

        document.getElementById("indicaciones").style.display = "block";
        document.getElementById("recaudacion").style.display = "block";
        /*         document.getElementById("largoFila").style.display = "none"; */
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

      this.guardarPersonasEntraron();
    }
  }

  const montañaRusa = new MontañaRusa();
  montañaRusa.cargarPersonasEntraron();
  montañaRusa.iniciarJuego();
}
