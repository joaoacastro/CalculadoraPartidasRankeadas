let saldoVitorias = 77;

function calculateRankedMatches(saldoVitorias) {
  let nivel;
  if (saldoVitorias < 0) {
    console.log("Favor inserir um valor positivo no saldo de Vitórias.");
  } else if (saldoVitorias >= 0 && saldoVitorias <= 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Outro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendario";
  } else if (saldoVitorias >= 101) {
    nivel = "Imortal";
  }

  return nivel;
}

let nivel = calculateRankedMatches(saldoVitorias);

console.log(
  `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
);
