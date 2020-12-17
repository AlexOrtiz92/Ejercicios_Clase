//prompt
//confirm

// const confirmation = confirm(
//   "Esto sirve para realizar una seleccion de true o false"
// );
// const prompt = prompts("Esto sirve para pedir imput al usuario");

// alert("se acabo el juego"); //sirve para alertar al usuario

// Entramos en la cabaña en primer lugar?

const entrar = confirm("¿Deseas que Ricitos de Oro entre a la cabaña?");

if (entrar === false) {
  alert("Ricitos se fue a jugar a la nueva PS5");
} else {
  const plato = prompt(
    "Cuando entra a la casa, ¿que plato de avena prefiere comerse? Grande/Mediano/Pequeño"
  );
  if (plato === "Pequeño") {
    alert("No entra en la silla y se va a casa.FIN")
      ;
  } else if (plato === "Grande") {
    alert("Ricitos murio empachada...");
  } else {
    const silla = prompt(
      "Va a sentarse a una silla. ¿En cual se sentara? Grande/Mediana/Pequeña"
    );
    if (silla === "Pequeño") {
      alert("No entra en la silla y se va a casa.FIN")
        ;
    } else if (silla === "Grande") {
      alert("Ricitos se tropezo y murio esnucada...");
    } else {
      const cama = prompt(
        "Penso que necesitaba algo mas comodo todavia y fue a buscar una cama...---> Grande/Mediana/Pequeña"
      );
      if (cama === "Pequeño") {
        alert("Vio que no podia dormir y se fue")
          ;
      } else if (cama === "Grande") {
        alert("LLego el dueño de la cama, un OSO. Se la comio...");
      } else {
        alert("Se quedo tan agustito que cuando desperto ya era de noche")
          ;
      }
    }
  }
}






//SOLUCION ERICKA 
//Lo suyo e sir de alante hacia atras par ahacer el codigo

const enterConfirmation = confirm("¿Entramos en la cabaña en primer lugar?");
if (enterConfirmation === true) {
  const eleccionAvena = prompt(
    "¿Qué plato de avena comemos caliente, frio, templado ?"
  );
  if (eleccionAvena === "templado") {
    const eleccionSilla = prompt(
      "¿En qué silla nos sentamos demasiado grande, grande, normal?"
    );
    if (eleccionSilla === "normal") {
      const eleccionCama = prompt(
        "¿En que cama dormimos: dura, blanda, normal?"
      );
      if (eleccionCama === "normal") {
        alert("Has ganado");
      } else {
        alert("Se acabo el juego");
      }
    } else {
      alert("Se acabo el juego");
    }
  } else {
    alert("Se acabo el juego");
  }
} else {
  alert("Se acabo el juego");
}