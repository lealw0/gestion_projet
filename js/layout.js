document.addEventListener("DOMContentLoaded", () => {

  /* ===== HEADER ===== */
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="site-header">
      <h1>Diwallerien ar Vorlen</h1>
      <p class="subtitle">Les sentinelles de la rade</p>
      <nav>
        <a href="accueil/accueil.html">Accueil</a>
        <a href="page2_V1.html">Evenements</a>
        <a href="formulaire/formulaire.html">Contact</a>
      </nav>
    </div>
  `;
  document.body.prepend(header);

  /* ===== FOOTER ===== */
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="site-footer">
      <p>© 2026 – Association environnementale locale</p>
      <p>Protection du littoral de la rade de Brest</p>
    </div>
  `;
  document.body.appendChild(footer);

});
