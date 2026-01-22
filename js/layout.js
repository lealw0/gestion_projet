document.addEventListener("DOMContentLoaded", () => {

  /* ===== HEADER (BANDEAU SEUL) ===== */
  const header = document.createElement("header");
  header.innerHTML = `
    
      
        <div class="header-left">
          <img src="images/logo.jpg" alt="Logo Diwallerien ar Vorlen" class="logo">
        </div>

        <div class="header-center">
          <h1>Diwallerien ar Vorlen</h1>
          <p class="subtitle">Les sentinelles de la rade</p>
        </div>
     
   
  `;

  /* ===== NAVIGATION (EN DEHORS DU BANDEAU) ===== */
  const nav = document.createElement("nav");
  nav.classList.add("nav-buttons");
  nav.innerHTML = `
    <a href="acceuil/acceuil.html" class="nav-btn">Accueil</a>
    <a href="page2_V1.html" class="nav-btn">Événements</a>
    <a href="formulaire/formulaire.html" class="nav-btn">Contact</a>
  `;

  /* ===== FOOTER ===== */
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="site-footer">
      <p>© 2026 – Association environnementale locale</p>
      <p>Protection du littoral de la rade de Brest</p>
    </div>
  `;

  /* INSERTION DANS LE DOM */
  document.body.prepend(nav);
  document.body.prepend(header);
  document.body.appendChild(footer);

});
