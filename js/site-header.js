(function () {
  var script = document.currentScript;
  var src = script ? script.getAttribute("src") || "" : "";
  var prefixo = src.indexOf("../") === 0 ? "../" : "";

  function criarCabecalho() {
    if (!document.body || document.querySelector(".site-header")) {
      return;
    }

    var header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<a class="brand" href="' + prefixo + 'index.html" aria-label="ThiefNet - pagina inicial">' +
        '<img src="' + prefixo + 'imagens/logo1.jpg" alt="Logo Sly Cooper" class="brand-img">' +
        '<span class="brand-text">ThiefNet</span>' +
      '</a>' +
      '<button class="menu-toggle" type="button" aria-label="Abrir menu" aria-controls="site-menu" aria-expanded="false">' +
        '<span class="hamburger" aria-hidden="true"></span>' +
      '</button>' +
      '<nav class="site-nav" id="site-menu" aria-label="Menu principal">' +
        '<a href="' + prefixo + 'index.html">In&iacute;cio</a>' +
        '<a href="' + prefixo + 'personagens.html">Personagens</a>' +
        '<a href="' + prefixo + 'jogos.html">Jogos</a>' +
        '<a href="' + prefixo + 'chefoes.html">Chef&otilde;es</a>' +
        '<a href="' + prefixo + 'informacoes.html">Informa&ccedil;&otilde;es</a>' +
        '<a href="' + prefixo + 'fotos.html">Fotos</a>' +
        '<a href="' + prefixo + 'links.html">Links</a>' +
        '<a href="' + prefixo + 'criador.html">Criador</a>' +
        '<a href="' + prefixo + 'contato.html">Contato</a>' +
      '</nav>';

    document.body.insertBefore(header, document.body.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", criarCabecalho);
  } else {
    criarCabecalho();
  }
})();
