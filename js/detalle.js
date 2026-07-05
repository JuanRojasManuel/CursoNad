function registrarVista(idCurso) {
  let vistas = JSON.parse(localStorage.getItem("vistasCursos")) || {};

  vistas[idCurso] = (vistas[idCurso] || 0) + 1;

  localStorage.setItem("vistasCursos", JSON.stringify(vistas));
}

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

fetch("https://6a41aee17602860e652062aa.mockapi.io/courses")
  .then((res) => res.json())
  .then((cursos) => {
    const curso = cursos.find((curso) => curso.id == id);

    if (!curso) {
      document.getElementById("detalle-curso").innerHTML = `
        <h2>Curso no encontrado</h2>
        <p>El curso que buscás no existe.</p>
        <a href="cursos.html" class="btn-detalle">← Volver a cursos</a>
      `;
      return;
    }

    registrarVista(curso.id);

    document.getElementById("detalle-curso").innerHTML = `
      <div class="detalle">
        <div class="detalle-img ${curso.imagen}"></div>

        <div class="detalle-info">
          <span>${curso.categoria}</span>

          <h1>${curso.nombre}</h1>

          <p>${curso.descripcion}</p>

          <p>${curso.detalle}</p>

          <div class="detalle-datos">
            <div class="dato">
              <strong>Profesor</strong>
              ${curso.profesor}
            </div>

            <div class="dato">
              <strong>Nivel</strong>
              ${curso.nivel}
            </div>

            <div class="dato">
              <strong>Duración</strong>
              ${curso.duracion}
            </div>

            <div class="dato">
              <strong>Categoría</strong>
              ${curso.categoria}
            </div>
          </div>

            <div class="detalle-compra">
            <div class="detalle-precio-row">
                <div>
                <small>Precio</small>
                <div class="detalle-precio" id="precio-detalle">
                    $${curso.precio}
                </div>
                </div>

                <div class="plan-selector detalle-plan-selector">
                <button class="plan-option activo" data-plan="Plus">
                    Plus
                </button>

                <button class="plan-option" data-plan="Full">
                    Full
                </button>
                </div>
            </div>

            <div id="detalle-plan-info">
                ${renderizarInfoPlan("Plus")}
            </div>
            </div>
          <div class="detalle-botones">
            <button class="btn-agregar" id="btn-agregar-detalle">
              Agregar al carrito
            </button>

            <a href="cursos.html" class="btn-detalle">
              Ir a todos los cursos
            </a>
          </div>
        </div>
      </div>
    `;
    activarPlanDetalle(curso);
    const botonAgregar = document.getElementById("btn-agregar-detalle");

    botonAgregar.addEventListener("click", () => {
      agregarAlCarritoDetalle(curso);
    });
  })
  .catch((error) => {
    console.log("Error al cargar detalle:", error);
  });

function agregarAlCarritoDetalle(curso) {
  let carrito = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];

  const existe = carrito.find((item) => item.id == curso.id);

  if (existe) {
    mostrarToastfail(curso.nombre);
    return;
  }
    const planActivo = document.querySelector(
    ".detalle-plan-selector .plan-option.activo"
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

  localStorage.setItem("carritoDeCompras", JSON.stringify(carrito));

  actualizarContador();
  mostrarToast(curso.nombre);
}

function renderizarInfoPlan(plan) {
  if (plan === "Full") {
    return `
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
    `;
  }

  return `
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
  `;
}

function activarPlanDetalle(curso) {
  const botones = document.querySelectorAll(".detalle-plan-selector .plan-option");
  const precioDetalle = document.getElementById("precio-detalle");
  const planInfo = document.getElementById("detalle-plan-info");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const plan = boton.dataset.plan;
      const precioBase = Number(curso.precio);

      const precioFinal = plan === "Full"
        ? Math.round(precioBase * 1.3)
        : precioBase;

      precioDetalle.textContent = `$${precioFinal}`;
      planInfo.innerHTML = renderizarInfoPlan(plan);

      botones.forEach((btn) => btn.classList.remove("activo"));
      boton.classList.add("activo");
    });
  });
}