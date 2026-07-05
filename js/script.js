/*-----------------------------------------------------------------------------*/
/* VARIABLES GLOBALES / EJECUCIONES--------------------------------------------*/
/*-----------------------------------------------------------------------------*/
let cursos = [];

const contenedorCursos = document.getElementById("contenedorCursos");
const tablaCarrito = document.getElementById("tabla-carrito");
const totalCarrito = document.getElementById("total-carrito");
const btnVaciarCarrito = document.getElementById("vaciar-carrito");

const buscador = document.getElementById("buscador");

const filtroCategoria = document.getElementById("filtro-categoria");
const filtroNivel = document.getElementById("filtro-nivel");
const filtroDuracion = document.getElementById("filtro-duracion");

actualizarContador();
renderizarPlanes();

/*-----------------------------------------------------------------------------*/
/* MENÚ HAMBURGUESA / MEGAMENU ------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function activarMenu(btnId, menuId) {
    const boton = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    if (!boton || !menu) return;
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        menu.classList.toggle("show");
    });
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && e.target !== boton) {
            menu.classList.remove("show");
        }
    });
}
activarMenu("menu-btn", "menu-modal");
activarMenu("explorar-btn", "mega-menu");

/*-----------------------------------------------------------------------------*/
/* CARGAR CATEGORIA MEGAMENU / CONTENEDORES -----------------------------------*/
/*-----------------------------------------------------------------------------*/
const hayCursosEnLaPagina =
  contenedorCursos ||
  document.getElementById("contenedorNovedades") ||
  document.getElementById("contenedorMasVistos") ||
  document.getElementById("mega-menu");
  
if (hayCursosEnLaPagina) {
  fetch("https://6a41aee17602860e652062aa.mockapi.io/courses")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      cursos = data;
    
    crearMegaMenu();
    if (contenedorCursos) {
      cargarFiltros();
      activarFiltros();

      const filtroAplicado = aplicarFiltrosDesdeURL();

      if (!filtroAplicado) {
        renderizarCursos(cursos);
      }
    }

      renderizarNovedades();
      renderizarMasVistos();
    })
    .catch((error) => {
      console.log("Error al cargar los cursos:", error);

      contenedorCursos.innerHTML = `
        <div class="sin-resultados">
          <h3>No pudimos cargar los cursos</h3>
          <p>Verificá tu conexión o intentá nuevamente.</p>
        </div>
      `;
    });
}

/*-----------------------------------------------------------------------------*/
/* RENDERIZAR CURSOS ----------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function renderizarCursos(listaCursos) {
  if (!contenedorCursos) return;
  contenedorCursos.innerHTML = "";
  if (listaCursos.length === 0) {
    contenedorCursos.innerHTML = `
      <div class="sin-resultados">
        <h3>Upsss no encontramos cursos</h3>
        <p>Probá cambiando la búsqueda con otros filtros.</p>
      </div>
    `;
    return;
  }
  listaCursos.forEach((curso) => {
    contenedorCursos.innerHTML += `
      <article class="card">
        <div class="card-img ${curso.imagen}"></div>

        <div class="card-body">
          <span>${curso.categoria}</span>
          <h3>${curso.nombre}</h3>
          <p>${curso.descripcion}</p>
          <div >
           <div class="card-plan-row">
            <strong class="precio" id="precio-${curso.id}">
              $${Number(curso.precio)}
            </strong>
            <div class="plan-selector" data-id="${curso.id}">
              <button class="plan-option activo" data-plan="Plus" data-id="${curso.id}">
                Plus
              </button>
              <button class="plan-option" data-plan="Full" data-id="${curso.id}">
                Full
              </button>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn-agregar" data-id="${curso.id}">
              Agregar al carrito
            </button>
            <a href="detalle.html?id=${curso.id}" class="btn-detalle">
              Conoce mas
            </a>
          </div>
      </article>
    `;
  });
activarPlanesCards();
activarBotonesCarrito();
}
/*-----------------------------------------------------------------------------*/
/* RENDERIZAR CONTENEDOR ------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function renderizarListaCursos(listaCursos, contenedor) {
  contenedor.innerHTML = "";

  listaCursos.forEach((curso) => {
    contenedor.innerHTML += `
      <article class="card">
        <div class="card-img ${curso.imagen}"></div>
        <div class="card-body">
          <span>${curso.categoria}</span>
          <h3>${curso.nombre}</h3>
          <p>${curso.descripcion}</p>
          <div class="card-footer">
            <strong class="precio">Desde $${curso.precio}</strong>
          </div>
          <a href="pages/detalle.html?id=${curso.id}" class="btn-detalle">
            Conoce mas
          </a>
        </div>
      </article>
    `;
  });

  activarBotonesCarrito();
}

/*-----------------------------------------------------------------------------*/
/* RENDERIZAR NOVEDADES--------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function renderizarNovedades() {
  const contenedor = document.getElementById("contenedorNovedades");
  if (!contenedor) return;
  const novedades = [...cursos]
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 4);
  renderizarListaCursos(novedades, contenedor);
}

/*-----------------------------------------------------------------------------*/
/* RENDERIZAR MAS VISTOS ------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function renderizarMasVistos() {
  const contenedor = document.getElementById("contenedorMasVistos");
  if (!contenedor) return;
  const vistas = JSON.parse(localStorage.getItem("vistasCursos")) || {};
  const masVistos = [...cursos]
    .sort((a, b) => (vistas[b.id] || 0) - (vistas[a.id] || 0))
    .slice(0, 4);
  renderizarListaCursos(masVistos, contenedor);
}

/*-----------------------------------------------------------------------------*/
/* FILTROS Y BUSCADOR ---------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function cargarFiltros() {
  cargarOpcionesFiltro(filtroCategoria, "categoria");
  cargarOpcionesFiltro(filtroNivel, "nivel");
  cargarOpcionesFiltro(filtroDuracion, "duracion");
}

function cargarOpcionesFiltro(select, propiedad) {
  if (!select) return;

  select.innerHTML = select.options[0].outerHTML;

  const opciones = [];

  cursos.forEach((curso) => {
    if (curso[propiedad] && !opciones.includes(curso[propiedad])) {
      opciones.push(curso[propiedad]);
    }
  });

  opciones.forEach((opcion) => {
    select.innerHTML += `
      <option value="${opcion}">
        ${opcion}
      </option>
    `;
  });
}

function activarFiltros() {
  if (buscador) {
    buscador.addEventListener("input", aplicarFiltros);
  }

  if (filtroCategoria) {
    filtroCategoria.addEventListener("change", aplicarFiltros);
  }

  if (filtroNivel) {
    filtroNivel.addEventListener("change", aplicarFiltros);
  }

  if (filtroDuracion) {
    filtroDuracion.addEventListener("change", aplicarFiltros);
  }
}

function aplicarFiltros() {
  const texto = buscador ? buscador.value.toLowerCase().trim() : "";

  const categoria = filtroCategoria ? filtroCategoria.value : "";
  const nivel = filtroNivel ? filtroNivel.value : "";
  const duracion = filtroDuracion ? filtroDuracion.value : "";

  const cursosFiltrados = cursos.filter((curso) => {
    const coincideTexto =
      curso.nombre.toLowerCase().includes(texto) ||
      curso.categoria.toLowerCase().includes(texto) ||
      curso.descripcion.toLowerCase().includes(texto);

    const coincideCategoria =
      categoria === "" || curso.categoria === categoria;

    const coincideNivel =
      nivel === "" || curso.nivel === nivel;

    const coincideDuracion =
      duracion === "" || curso.duracion === duracion;

    return (
      coincideTexto &&
      coincideCategoria &&
      coincideNivel &&
      coincideDuracion
    );
  });

  renderizarCursos(cursosFiltrados);
}

/*-----------------------------------------------------------------------------*/
/* ACTIVAR SWICH PLUS/FULL-----------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function activarPlanesCards() {
  const botonesPlan = document.querySelectorAll(".plan-option");

  botonesPlan.forEach((boton) => {
    boton.addEventListener("click", () => {
      const idCurso = boton.dataset.id;
      const plan = boton.dataset.plan;

      const curso = cursos.find((curso) => curso.id == idCurso);
      const precioTexto = document.getElementById(`precio-${idCurso}`);

      if (!curso || !precioTexto) return;

      const precioBase = Number(curso.precio);
      const precioFinal = plan === "Full"
        ? Math.round(precioBase * 1.3)
        : precioBase;

      precioTexto.textContent = `$${precioFinal}`;

      const selector = boton.closest(".plan-selector");
      const opciones = selector.querySelectorAll(".plan-option");

      opciones.forEach((opcion) => {
        opcion.classList.remove("activo");
      });

      boton.classList.add("activo");
    });
  });
}

/*-----------------------------------------------------------------------------*/
/* ACTIVAR BOTONES AGREGAR ----------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function activarBotonesCarrito() {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const idCurso = boton.dataset.id;

      const cursoEncontrado = cursos.find((curso) => curso.id == idCurso);

      if (!cursoEncontrado) {
        console.log("No se encontró el curso con ID:", idCurso);
        return;
      }
      agregarAlCarrito(cursoEncontrado);
    });
  });
}

/*-----------------------------------------------------------------------------*/
/* AGREGAR PRODUCTO AL CARRITO-------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

function agregarAlCarrito(curso) {
  let carrito = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
  const indiceExistente = carrito.findIndex((item) => item.id == curso.id);
    if (indiceExistente !== -1) {
        mostrarToastfail(curso.nombre);
        return;
    } else {
      const planActivo = document.querySelector(
        `.plan-option.activo[data-id="${curso.id}"]`
      );
      const modalidad = planActivo ? planActivo.dataset.plan : "Plus";
      const precioBase = Number(curso.precio);
      const precioFinal = modalidad === "Full"
        ? Math.round(precioBase * 1.3)
        : precioBase;
      carrito.push({
        id: curso.id,
        nombre: curso.nombre,

        precioBase: precioBase,
        precio: precioFinal,

        imagen: curso.imagen,
        categoria: curso.categoria,

        modalidad: modalidad
      });
  }

  localStorage.setItem("carritoDeCompras", JSON.stringify(carrito));
  actualizarContador();
  mostrarToast(curso.nombre);
}

/*-----------------------------------------------------------------------------*/
/* CARGAR CARRITO EN carrito.html----------------------------------------------*/
/*-----------------------------------------------------------------------------*/

if (tablaCarrito) {
  cargarCarrito();
}

function cargarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
  tablaCarrito.innerHTML = "";
  let total = 0;
  if (carrito.length === 0) {
    tablaCarrito.innerHTML = `
      <tr>
        <td colspan="3">Tu carrito está vacío.</td>
      </tr>
    `;
    actualizarResumenCarrito(0, 0);
    return;
  }

  carrito.forEach((curso) => {
    total += curso.precio;
tablaCarrito.innerHTML += `
  <tr>
    <td>
      <div class="curso-info">
    <strong>${curso.nombre}</strong>
    <div class="modalidad-carrito">
        <button
            class="btn-modalidad ${(curso.modalidad || "Plus") === "Plus" ? "activo" : ""}"
            data-id="${curso.id}"
            data-modalidad="Plus">
            Plus
        </button>
        <button
            class="btn-modalidad ${(curso.modalidad || "Plus") === "Full" ? "activo" : ""}"
            data-id="${curso.id}"
            data-modalidad="Full">
            Full
        </button>
    </div>
</div>
    <td>$${curso.precio}</td>
    <td>
      <button class="btn-eliminar" data-id="${curso.id}">
        Eliminar
      </button>
    </td>
  </tr>
`;
  });
  actualizarResumenCarrito(carrito.length, total);
  activarBotonesEliminar();
  activarBotonesModalidad();
}

function actualizarResumenCarrito(cantidadTotal, total) {
  const cantidadResumen = document.getElementById("cantidad-resumen");
  const subtotalResumen = document.getElementById("subtotal-resumen");

  if (cantidadResumen) {
    cantidadResumen.textContent = cantidadTotal;
  }

  if (subtotalResumen) {
    subtotalResumen.textContent = `$${total}`;
  }

  if (totalCarrito) {
    totalCarrito.textContent = `$${total}`;
  }
}

/*-----------------------------------------------------------------------------*/
/* ELIMINAR PRODUCTO ----------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

function activarBotonesEliminar() {
  const botonesEliminar = document.querySelectorAll(".btn-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const idCurso = boton.dataset.id;

      let carrito = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];

      carrito = carrito.filter((curso) => curso.id != idCurso);

      localStorage.setItem("carritoDeCompras", JSON.stringify(carrito));

      cargarCarrito();
      actualizarContador();
    });
  });
}
/*-----------------------------------------------------------------------------*/
/* VACIAR CARRITO -------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
if (btnVaciarCarrito) {
  btnVaciarCarrito.addEventListener("click", () => {
    localStorage.removeItem("carritoDeCompras");

    cargarCarrito();
    actualizarContador();
  });
}

/*-----------------------------------------------------------------------------*/
/* CONTADOR CARRITO------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

function actualizarContador() {
  const carrito = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
  const contador = document.getElementById("contador-carrito");
  if (!contador) return;
  let cantidad = carrito.length;
  if (cantidad === 0) {
    contador.style.display = "none";
  } else {
    contador.style.display = "flex";
    contador.textContent = cantidad;
  }
}


/*-----------------------------------------------------------------------------*/
/* TOAST CARRITO --------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function mostrarToast(nombreCurso) {
  const contenedor = document.getElementById("toast-container");
  if (!contenedor) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-body">
      <h6>Curso agregado</h6>
      <p>${nombreCurso}</p>
    </div>
    <div class="toast-progress"></div>
  `;
  contenedor.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function mostrarToastfail(nombreCurso) {
  const contenedor = document.getElementById("toast-container");
  if (!contenedor) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-body">
      <h6>Este curso ya está en tu carrito</h6>
      <p>${nombreCurso}</p>
    </div>
    <div class="toast-progress-fail"></div>
  `;
  contenedor.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}


/*-----------------------------------------------------------------------------*/
/* ACTIVO MODO PLUS/FULL-----------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

function activarBotonesModalidad() {
  const botonesModalidad = document.querySelectorAll(".btn-modalidad");

  botonesModalidad.forEach((boton) => {
    boton.addEventListener("click", () => {
      const idCurso = boton.dataset.id;
      const modalidad = boton.dataset.modalidad;

      let carrito = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];

      carrito = carrito.map((curso) => {
        if (curso.id == idCurso) {
          const precioBase = curso.precioBase || curso.precio;
          const precioFinal = modalidad === "Full"
            ? Math.round(precioBase * 1.3)
            : precioBase;

          return {
            ...curso,
            modalidad: modalidad,
            precioBase: precioBase,
            precio: precioFinal
          };
        }

        return curso;
      });

      localStorage.setItem("carritoDeCompras", JSON.stringify(carrito));

      cargarCarrito();
      actualizarContador();
    });
  });
}

/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
/* MEGAMENU --- ---------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
/* FILTRO LINKS ---------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

function aplicarFiltrosDesdeURL() {
  const parametros = new URLSearchParams(window.location.search);
  const categoriaURL = parametros.get("categoria");
  if (!categoriaURL || !filtroCategoria) return false;
  filtroCategoria.value = categoriaURL;
  aplicarFiltros();
  return true;
}

/*-----------------------------------------------------------------------------*/
/* MEGAMENU EXPLORAR-----------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function crearMegaMenu(){
  const megaMenuMobile = document.getElementById("mega-menu-mobile");
  const megaMenu = document.getElementById("mega-menu");
  if (megaMenuMobile) megaMenuMobile.innerHTML = "";
  if(!megaMenu) return;
  megaMenu.innerHTML = "";
  const rutaCursos = window.location.pathname.includes("/pages/")
    ? "cursos.html"
    : "pages/cursos.html";

  const categorias = [...new Set(cursos.map(c => c.categoria))];

  categorias.forEach(categoria => {
    const cantidad = cursos.filter(curso => curso.categoria === categoria).length;
if (megaMenuMobile) {
  megaMenuMobile.innerHTML += `
    <a class="mega-mobile-item"
       href="${rutaCursos}?categoria=${encodeURIComponent(categoria)}">
      ${obtenerIconoCategoria(categoria)} ${categoria}
      <span>${cantidad}</span>
    </a>
  `;
}
    megaMenu.innerHTML += `
      <a class="mega-item"
         href="${rutaCursos}?categoria=${encodeURIComponent(categoria)}">
        <strong>${obtenerIconoCategoria(categoria)} ${categoria}</strong>
        <span>${cantidad} curso${cantidad > 1 ? "s" : ""}</span>
      </a>
    `;
  });
}

function obtenerIconoCategoria(categoria){
    const iconos = {
      "JavaScript": `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#607d8b"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
          <path d="M7.5 8h3v8l-2 -1" />
          <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
        </svg>
      `,
      "React":`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#607d8b"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
          <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
          <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
          <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
          <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
          <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
          <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
        </svg>
        `,
      "Backend":`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#607d8b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M12 10.5v1.5" />
            <path d="M12 16v1.5" />
            <path d="M15.031 12.25l-1.299 .75" />
            <path d="M10.268 15l-1.3 .75" />
            <path d="M15 15.803l-1.285 -.773" />
            <path d="M10.285 12.97l-1.285 -.773" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          </svg>`,
      "UX/UI":`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#607d8b"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
          <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
        </svg>`
      ,
      "Base de datos":
      `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#607d8b"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3c.21 0 .42 -.003 .626 -.01" />
        <path d="M20 11.5v-5.5" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3" />
        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M19.001 15.5v1.5" />
        <path d="M19.001 21v1.5" />
        <path d="M22.032 17.25l-1.299 .75" />
        <path d="M17.27 20l-1.3 .75" />
        <path d="M15.97 17.25l1.3 .75" />
        <path d="M20.733 20l1.3 .75" />
      </svg>`,
      "Python":
      `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#607d8b"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
        <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
        <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
        <path d="M11 6l0 .01" />
        <path d="M13 18l0 .01" />
      </svg>`,
      "Desarrollo Web":`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#607d8b"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h9.9" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
        <path d="M20 21l2 -2l-2 -2" />
        <path d="M17 17l-2 2l2 2" />
      </svg>`,
      "Mobile":`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#607d8b"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
          <path d="M20 21l2 -2l-2 -2" />
          <path d="M17 17l-2 2l2 2" />
          <path d="M11 4h2" />
          <path d="M12 17v.01" />
        </svg>`,
      "e-commerce":`
              <!--
        category: E-commerce
        version: "2.29"
        unicode: "fc16"
        -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#607d8b"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248" />
          <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
          <path d="M15 19l2 2l4 -4" />
        </svg>
        `,
  };

  return iconos[categoria] || `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#607d8b"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M15 12h.01" />
      <path d="M12 12h.01" />
      <path d="M9 12h.01" />
      <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
      <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
    </svg>`;

}

/*-----------------------------------------------------------------------------*/
/* RENDERIZAR PLANES-----------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
function renderizarPlanes() {
  const contenedor = document.getElementById("planes-cursos");
  if (!contenedor) return;
  contenedor.innerHTML = `
    <h2 class="separation-top">Conocé las opciones de cursos para vos</h2>
    <div class="planes-grid">
      <div class="plan-info plan-plus">
        <div class="plan-header">
          <span>Plus</span>
          <small>Aprendé a tu ritmo</small>
        </div>
        <ul>
          <li>Acceso inmediato</li>
          <li>Clases grabadas</li>
          <li>Certificado digital</li>
          <li>Acceso de por vida</li>
        </ul>
      </div>
      <div class="plan-info plan-full">
        <div class="plan-header">
          <span>Full</span>
          <small>Experiencia completa</small>
        </div>
        <ul>
          <li>Todo lo incluido en Plus</li>
          <li>Clases en vivo</li>
          <li>Tutorías personalizadas</li>
          <li>Material descargable exclusivo</li>
          <li>Certificado Premium</li>
        </ul>
      </div>
    </div>
  `;
}