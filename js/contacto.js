// Tomo el ID de referencia a validar
const contactForm = document.getElementById("contactForm");

// Si ese ID lo escucho me prevengo de que antes de presionar "submit" 
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

// IDs a evaluar (2 = email y mensaje)
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("message").value.trim();

// Mensajes de error a informar en cierto ID (email / mensaje / genereal)
    const errorEmail = document.getElementById("feedbackForm");
    const errorMensaje = document.getElementById("feedbackForm");
    const feedbackForm = document.getElementById("feedbackForm");

// Si no hay error el contenido de cada ID estaria vacio y puedo mandar el msj
    errorEmail.textContent = "";
    errorMensaje.textContent = "";
    feedbackForm.textContent = "";

    let formularioValido = true;

// Validación email mensaje de error / debo incluir al menos un @ y 1 punto (validez basica)
    if (email === "") {
      errorEmail.textContent = "El email es obligatorio.";
      formularioValido = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      errorEmail.textContent = "Ingresá un email válido.";
      formularioValido = false;
    }
// Validación mensaje si esta vacio.
    if (mensaje === "") {
      errorMensaje.textContent = "El mensaje es obligatorio.";
      formularioValido = false;
    }

// Validación genereal
    if (formularioValido) {
      feedbackForm.textContent = "Mensaje enviado correctamente.";
      feedbackForm.className = "feedback success";
      contactForm.submit();
    } else {

      feedbackForm.className = "feedback error-feedback";
    }
  });
}