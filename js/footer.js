function renderizarFooter() {
  const contenedor = document.getElementById("footer");
  if (!contenedor) return;

  contenedor.innerHTML = `
<section class="footer-info">
    <div class="container footer-grid">
        <div class="footer-categoria" >
            <h3>Categorías</h3>
            <a href="#">Programación</a>
            <a href="#">Diseño</a>
            <a href="#">Marketing</a>
        </div>
        <div class="footer-empresa">
            <h3>Empresa</h3>
            <a href="#">Sobre nosotros</a>
            <a href="#">Profesores</a>
            <a href="#">Ayuda</a>
        </div>
        <div class="container contact-content">
            <h3>Contacto</h3>
            <ul class="contact-list">
                <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Av Siempre viva 742, Buenos Aires</span>
                </li>
                <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+5411-555-5555</span>
                </li>
                <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>info@cursonad.com</span>
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- SECTION FOOTER FINAL -->  
<section class="footer-final">
      © 2026 CursoNad. Todos los derechos reservados.
</section>
  `;
}
renderizarFooter()