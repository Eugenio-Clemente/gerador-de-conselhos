const botao = document.querySelector(".advice-update");

const conselhoNumero = document.querySelector("#advice-id");

const conselhoDescricao = document.querySelector("#advice-description");

async function pegarConselho() {
  const resposta = await fetch("https://api.adviceslip.com/advice");
  const conselhoConteudo = await resposta.json();
  const idConselho = `advice#${conselhoConteudo.slip.id}`;
  const conselhoTexto = `"${conselhoConteudo.slip.advice}"`;

  conselhoNumero.innerHTML = idConselho;
  conselhoDescricao.innerHTML = conselhoTexto;
}

botao.addEventListener("click", pegarConselho);
pegarConselho();
