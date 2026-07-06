function renderizarHeader() {
    const contenedor = document.getElementById("header");
    if (!contenedor) return;
    const estoyEnPages = window.location.pathname.includes("/pages/");
    let rutaBase = "";
        if (estoyEnPages) {
            rutaBase = "../";
        }
  contenedor.innerHTML = `
<!-- INICIO HEADER  --------------------------------------------------->
<div class="container menu-content">
<!-- LOGO --------------------------------------------------->
    <a href="${rutaBase}index.html" class="logo">
        <img class="desktop-logo" src="${rutaBase}img/logo.png" alt="Logo CursoNad">
        <img class="mobile-logo" src="${rutaBase}img/logoMobile.png" alt="Logo CursoNad">
    </a>
<!-- MENU BIG - MENU STD ----------------------------------------------->
    <nav class="nav">
        <ul>
            <li class="nav-explorar">
                <a href="#" id="explorar-btn">
                    Explorar ▾
                </a>
                <div id="mega-menu" class="mega-menu">
                </div>
            </li>
            <li><a href="${rutaBase}pages/cursos.html">Cursos certificados completos</a></li>
        </ul>
    </nav>
<!-- SPACE  ---------------------------------------------->
      <div class="space">        
      </div>  
<!-- CARRITO  ---------------------------------------------->
    <a href="${rutaBase}pages/carrito.html" class="carrito-icono">
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">
            <path d="M16 10a4 4 0 0 1-8 0"></path>
            <path d="M3.103 6.034h17.794"></path>
            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
        </svg>
        <span id="contador-carrito">0</span>
    </a>
<!-- BOTON CONTACTO  ---------------------------------------------->
    <div class="btn-menu nav">
        <a href="${rutaBase}pages/contacto.html" class="btn">Contacto</a>
    </div>
<!-- MENU Hambuerguesa  ---------------------------------------------->
    <nav>
    <div class="menu-container2">
        <div class="btnHamburguesa" id="menu-btn">
            <a href="#">☰</a>
        </div>
        <div class="menu-modal" id="menu-modal">
            <ul>
                <li><a href="${rutaBase}index.html">Inicio</a></li>
                <li><a href="${rutaBase}pages/cursos.html">Cursos certificados</a></li>
                <li><a href="${rutaBase}pages/contacto.html">Contacto</a></li>
                <li>
                    <span class="mobile-menu-title">Explorar</span>
                </li>
                <div id="mega-menu-mobile" class="mega-menu-mobile"></div>
            </ul>
        </div>
    </div>
    </nav>
</div>
  `;
}
renderizarHeader()