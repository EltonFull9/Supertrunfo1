var cartas = [
  {
    nome: "Picachu",
    atributo: {
      ataque: 9,
      defesa: 4,
      magia: 9
    }
  }
];

cartas.push({
  nome: "Bulbasauro",
  atributo: {
    ataque: 4,
    defesa: 7,
    magia: 5
  }
});

cartas.push({
  nome: "squirtle",
  atributo: {
    ataque: 10,
    defesa: 8,
    magia: 2
  }
});

var cartamaquina;
var cartajogador;

function sortearCarta() {
  var indiceMaquina = parseInt(Math.random() * cartas.length);
  cartamaquina = cartas[indiceMaquina];

  var indiceJogador = parseInt(Math.random() * cartas.length);

  while (indiceJogador == indiceMaquina) {
    indiceJogador = parseInt(Math.random() * cartas.length);
  }
  cartajogador = cartas[indiceJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  //console.log(cartamaquina);
  //console.log(cartajogador);
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributos in cartajogador.atributo) {
    opcoesTexto +=
      "<input type='radio' name='atributo1' value='" +
      atributos +
      "'>" +
      atributos;
  }
  opcoes.innerHTML = opcoesTexto;
}

function pegarAtributo() {
  var radioAtributos = document.getElementsByName("atributo1");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributos = pegarAtributo();
  var resultado = document.getElementById("resultado");
  if (cartajogador.atributo[atributos] > cartamaquina.atributo[atributos]) {
    resultado.innerHTML = "Voçê VENCEU !!!";
  } else if (
    cartajogador.atributo[atributos] < cartamaquina.atributo[atributos]
  ) {
    resultado.innerHTML = "Voçê PERDEU, a carta da máquina é maior !!!";
  } else {
    resultado.innerHTML = "Voçê EMPATOU !!!";
  }

  console.log(cartajogador.atributo[atributos]);
}