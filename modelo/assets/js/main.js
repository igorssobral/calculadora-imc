const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const pesoValue = e.target.querySelector("#peso");
  const alturaValue = e.target.querySelector("#altura");

  const peso = Number(pesoValue.value);
  const altura = Number(alturaValue.value);

  if (!peso || peso < 20) {
    setResultado("Peso Inválido", false);
    return;
  }
  if (!altura || altura < 0.9) {
    setResultado("Altura Inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivel = getNivelImc(imc);
  setResultado(`seu IMC é ${imc} e o resultado é ${nivel}`, true);
});

function getImc(peso, altura) {
  return (peso / altura ** 2).toFixed(2);
}

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do Peso",
    "Peso Normal",
    " Sobrepeso",
    "Obesidade Grau 1",
    "Obesidade Grau 2",
    "Obesidade Grau 3",
  ];

  if (imc >= 39.9) {
    return nivel[5];
  } else if (imc >= 34.9) {
    return nivel[4];
  } else if (imc >= 29.9) {
    return nivel[3];
  } else if (imc >= 24.9) {
    return nivel[2];
  } else if (imc >= 18.5) {
    return nivel[1];
  } else if (imc < 18.5) {
    return nivel[0];
  }
}

function createElement() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg,isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = createElement();
  if(isValid){
    p.classList.add('resultValid')
  }else{
    p.classList.add('resultInvalid')
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}
