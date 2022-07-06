const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  //funcao para verificar se href esta incluido na url
  if (url.includes(href)) {
    link.classList.add("ativo");
  }

}

links.forEach(ativarLink);