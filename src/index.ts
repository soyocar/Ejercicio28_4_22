import "./styles.css";
let btnEnv = document.getElementById("enviar");
let datos11: number = document.getElementById("dato1");
let datos12: number = document.getElementById("dato2");
btnEnv.addEventListener("click", () => {
  let base: number = Number(datos11.value);

  let altura: number = Number(datos12.value);
  //let rotulo = document.getElementById("rotulo");
  let area: number = Number(base * altura);
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("El area del rectangulo es", area);
  //}
});

//console.log("El area del rectángulo es  ", area);
//}
