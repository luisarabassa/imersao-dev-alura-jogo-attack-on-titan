function jogar() {
  const nome = prompt("Qual seu nome?");
  const idade = Number(prompt("Qual sua idade?"));

  if (idade < 18) {
    return alert(
      `${nome}... Você ainda é jovem demais para entrar na Divisão de Reconhecimento.`
    );
  }

  const certeza = prompt(
    `${nome}, você está pronto para arriscar sua vida em nome da humanidade? (S/N)`
  ).toUpperCase();

  if (certeza === "SIM" || certeza === "S") {
    alert(
      `${nome}, a partir de agora, você é oficialmente um soldado da Divisão de Reconhecimento! ⚔️\n\n📜 Sua primeira missão: recuperar a Muralha Maria.\n\nOfereçam seus corações! 🫀`
    );
    alert(
      "⚠️ Atenção! ⚠️\n\nUm passo em falso pode custar sua vida, escolha suas rotas com sabedoria. Boa sorte! 🧭"
    );

    const rotas = [
      "Floresta densa 🌲",
      "Vilarejo destruído 🧱",
      "Campo aberto 🐎"
    ];
    let rodada = 1;
    let perigo = 0;

    while (rodada <= 3) {
      let escolha = Number(
        prompt(
          `Escolha seu caminho:\n\n1 - ${rotas[0]}\n2 - ${rotas[1]}\n3 - ${rotas[2]}`
        )
      );

      if (escolha == 1) {
        alert(
          `🌍 Território ${rodada}: O silêncio na floresta é perturbador... algo observa você entre as árvores. 👁️`
        );
      } else if (escolha == 2) {
        alert(
          `🌍 Território ${rodada}: As ruínas do vilarejo ainda exalam medo... Passos errados aqui podem ser fatais. 🧱`
        );
      } else if (escolha == 3) {
        alert(
          `🌍 Território ${rodada}: Há um vasto campo aberto à sua frente... Nenhum abrigo, nenhum erro permitido. 🐎`
        );
      } else {
        alert(
          "Escolha inválida. Por favor, escolha entre os caminhos: 1, 2 ou 3."
        );
        continue;
      }

      let perigo = Math.floor(Math.random() * 3) + 1;

      if (escolha === perigo) {
        alert(
          "⚠️ PERIGO EMINENTE! ⚠️\n\n🧍‍♂️🦶 Um Titã apareceu e atacou você! O jogo acabou..."
        );
        break;
      } else {
        alert(
          `👁️ Você escapou por pouco! O caminho perigoso era: ${
            rotas[perigo - 1]
          } ⚠️`
        );
      }

      rodada = rodada + 1;
    }

    if (rodada === 4) {
      alert(
        `🎉 Parabéns, ${nome}! Você sobreviveu aos 3 territórios de risco e chegou à Muralha Maria! A batalha continua... 🫀`
      );
    }

    if (confirm("Deseja jogar novamente?")) {
      jogar();
    }
  } else {
    alert("Covarde! 👁️");
  }
}
