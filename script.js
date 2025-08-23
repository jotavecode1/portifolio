function abrirModal(tipo) {
  const titulo = document.getElementById("tituloModal");
  const conteudo = document.getElementById("conteudoModal");

  if (tipo === "clones") {
    titulo.textContent = "Projeto Clones";
    conteudo.innerHTML = `
      <img src="img/projeto-netflix.png" alt="Netflix Clone" style="width:100%;margin-bottom:10px;">
      <p>Clone da Netflix e Discord feito com HTML e CSS</p>
    `;
  } else if (tipo === "formularios") {
    titulo.textContent = "Formulários";
    conteudo.innerHTML = `
      <img src="img/form.png" alt="Formulário" style="width:100%;margin-bottom:10px;">
      <p>Formulários feito com HTML, CSS, JS e Google Sheets</p>
      
    `;
  } else if (tipo === "sites") {
    titulo.textContent = "Sites";
    conteudo.innerHTML = `
      <img src="img/igreja.png" alt="Site Igreja" style="width:100%;margin-bottom:10px;">
      <p>Site institucional para igreja feito com HTML, CSS, JS, Google Sheets e .JSON</p>
    `;
  }

  document.getElementById("overlay").style.display = "flex";
}

function fecharModal() {
  document.getElementById("overlay").style.display = "none";
}
