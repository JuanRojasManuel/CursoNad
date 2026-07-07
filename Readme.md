# Readme Entrega FRONT END
 
**Juan Manuel Rojas**
**juan.rojas.manuel@gmail.com**


# Objetivo
El objetivo del proyecto fue desarrollar un ecommerce de cursos online aplicando de forma progresiva los contenidos vistos durante la cursada de Front End.


Durante el desarrollo se incorporaron nuevas funcionalidades como componentes reutilizables, consumo de APIs, renderizado dinámico, carrito de compras, persistencia mediante LocalStorage y diseño responsive, manteniendo una estructura escalable y organizada.


# Proyecto entregado


El proyecto comenzó como una práctica para aplicar los contenidos vistos durante la cursada de Front End. Proyecto e-commerce de cursos online bautizado como **CursoNad**.
 
# Organización del proyecto


| Etapa | Resumen Detalle|
|--|--|
| **Idea principal** | Se plantea “un sitio de venta de cursos” en base a todo lo solicitado que sea un ecommerce. |
| **Investigación**|Se analizan plataformas y proyectos similares para tomar referencias de diseño, estructura, navegación y presentación de cursos. |
| **Diseño inicial**|Se define nombre de sitio, se genera logo, se genera boceto estructural, se idea un diseño estructural visual y paleta de colores de sitio. |
| **Armado estructural** | Se construye la base del proyecto con HTML semántico, se organizan las secciones principales y se preparan los componentes generales del sitio.|
| **Desarrollo visual y responsive** | Se aplica diseño y comportamientos responsivos.|
| **Desarrollo de funcionalidades** | Se aplican funciones Js para optimizar sitio, sistema de carrito, validaciones, carga de segmentos de repetición y lógica del sitio .|
| **Pruebas y ajustes finales** | Se revisa el comportamiento del sitio, navegación interna, estilos visuales, funciones Js y detalles generales.|
| **Entrega final** | Se generan los archivos README y actualiza Entrega final.|
 


# Entregable


## 1. Estructura Básica de HTML.
Estructura HTML en múltiples páginas / Navegación funcional entre páginas.


Estructura semántica: El HTML debe estar dividido en las etiquetas semánticas principales: header, nav, main, section, footer.


README.md: Incluir un archivo que explique brevemente el propósito de la página.


 - [x] Se arma toda las semánticas detalladas y comentarios para facilitar la lectura.
 - [x] Se navegan entre páginas "/pages" index, cursos, carrito, contacto, detalle.
 - [x] README.md.


## 2. Formulario de Contacto.
Formulario con validación JavaScript (campos obligatorios, formato de email)


Formulario funcional: Crear un formulario de contacto con campos para nombre, correo electrónico y mensaje, utilizando Formspree para manejar el envío de datos.


 - [x] Se implementa mediante Formspree.
 - [x] Para el diseño omito nombres para estilo minimalista y no acumular datos innecesarios para este proyecto.
 - [x] Se implementa Validación Js.
 


## 3. Estilos Básicos Aplicados con CSS
Estilos CSS propios: colores, tipografía y box model.


Archivo styles.css: El proyecto debe contar con un archivo CSS externo que incluya:
Estilos básicos aplicados a las secciones de header, footer y lista de navegación.
Fuentes de Google Fonts correctamente implementadas.
Propiedades de background aplicadas en alguna sección de la página (color, imagen, degradado, etc.).


Con el crecimiento del proyecto también se fue reorganizando el CSS mediante comentarios.


 - [x] Se utiliza un único archivo style.css para centralizar los estilos del proyecto.
 - [x] Estilos básicos incorporados.
 - [x] Se usan fuentes https://fonts.google.com/
 - [x] Se plantea un diseño de paleta de colores óptimo para el proyecto y se aplica a background.
 - [x] Se usan variables para colores o css general para mayor orden.
 - [x] Se agrupan estilos para optimizar el orden.
 - [x] Se agregan transiciones y animaciones para un sitio más minimalista.
 - [x] Se elaboran 2 tipos de Toast, para agregado carrito o para no se puede agregar al carrito.


 


## 4. Diseño Responsivo con Flexbox y Grid


Se adapta para distintos tipos de pantalla:
- Mobile
- Tablet
- Notebook
- Desktop


Se utiliza:
 - [x] Flexbox aplicado al menú principal, Hero, navegación y distribución de componentes.
 - [x] Cards / Megamenu / Carrito entre otras secciones con Grid.
 - [x] Media Queries para Menú, cards, footer, contacto, hero (para todo el sitio).


 


## 5. Contenido Multimedia y Navegación


Multimedia: deberá incluir archivos multimedia (imágenes y SVG) correctamente integrados en la página.
 
Lista de navegación: Implementar una lista desordenada con enlaces que simulan una navegación interna (Inicio, Productos, Contacto, etc.).

 - [x] Imágenes de fondo para cada Card de producto.
 - [x] Archivos SVG, generados y obtenidos de https://tablericons.com/.
 - [x] Lista para mega menú (renderizo) y botón contacto y carrito.
 - [x] Enlaces internos.
 - [x] Navegación con lista desordenada




## 7. Contenido JS. JavaScript
Script.js: deberá incluir un archivo Debes crear un archivo script.js para manejar toda la interactividad de la página.
Asegúrate de enlazarlo correctamente en tu archivo HTML.
 - [x] Se enlaza script.js como script general.
 - [x] Se enlaza script seccionado segun el uso: contacto.js + detalle.js + menu.js.
 - [x] Se enlaza script para secciones repetidas: header.js + footer.js

DOM: Implementa funciones para validar formularios (ej., campos requeridos y formato de correo).
 - [x] Se Implementa validación de formulario de contacto.

Usa JavaScript para manipular elementos del DOM, por ejemplo, actualizar el carrito y mostrar mensajes al usuario
- [x] Renderizo las Cards (de todos los cursos, vistas de 4 cursos en index y contacto (incentivo a más ventas)).
- [x] Renderizo Mega menú (traigo dinámicamente los cursos según la categoría guardada en MockAPI).
- [x] Renderizo Planes, Header y Footer (para no repetir el código HTML en varias páginas).
- [x] Funcionalidad Js: Filtrar cursos y Buscar cursos.
- [x] Funcionalidad Js: Abrir/cerrar menú hamburguesa / mega menú.

Fetch Api
Consume datos desde una API REST usando fetch.
Muestra los productos obtenidos de la API en la página en forma de tarjetas (cards).
- [x] Uso de fetch (desde MockAPI) para cargar datos en Cards, detalle de los cursos y megaMenu.
- [x] Se muestran productos(cursos) en cards seccion de todos los cursos.
- [x] Se muestran productos(cursos) en cards en index para un efecto grupo de cards más vistos y ultimos agregados.

Visualización de Productos:
Cada producto debe tener su imagen, título y precio, mostrando una lista atractiva para el usuario.
- [x] Se muestran productos(cursos) con los datos necesarios para su compra segun la sección.

## 8. Carrito de compras dinámico
Agregar Productos al Carrito: Implementa un carrito de compras donde los usuarios puedan añadir productos desde las tarjetas.
Uso de localStorage o sessionStorage: Guarda el estado del carrito en localStorage o sessionStorage para que no se pierda al actualizar o cerrar la página.
Contador Dinámico: Muestra el número total de productos en el carrito y asegúrate de actualizarlo en tiempo real.
- [x] Guardo carrito (Persistencia).
- [x] Vistas (los cursos mas vistos (clickeados))
- [x] Se colocan en las cards agregar al carrito y modalidad de plan (Plus o Full), la idea es q cada plan te ofrezca distintas calidades de producto, con un valor extra (30%).
- [x] Se muestra un valor numérico en el icono carrito y en el listado de productos(cursos) a comprar.

## 9. Edición y visualización del carrito
Visualización de Productos en el Carrito: Muestra una lista de productos añadidos al carrito, incluyendo cantidad, precio y total.
- [x] Muestra todo OK, pero en mi caso no uso cantidad ya que uno puede comprar un unico curso, se colocan restricciones para no comprar mas de uno.

Edición de Cantidades y Eliminación de Productos: Implementa funciones para que el usuario pueda editar la cantidad de cada producto o eliminarlo del carrito.
Total Dinámico:Actualiza el total de la compra cada vez que se modifiquen los productos en el carrito.
- [x] Agregar: Agregar curso al carrito.
- [x] Eliminar: Eliminar curso, Vaciar carrito.
- [x] Modificar: Cambiar modo de curso: Plus / Full. En mi caso no se edita cantidad, para cumplir con la modificación del producto(curso) comprado, se puede cambiar el estado del mismo, osea ese estado cambia a un valor extra para Full o precio fijado para PLUS.
- [x] Total dinámico y aparte si modificas la modalidad del Producto(curso) cambia el valor total, aparte de los items.
- [x] Uso de Toast para agregar o cuando no se puede agregar un curso.
- [x] Indicador de cantidad que se compra en el icono carrito.

## 10. SEO & accesibilidad
Buenas prácticas de accesibilidad:
Usa alt en las imágenes para mejorar la accesibilidad.
Asegúrate de que se pueda navegar fácilmente con el teclado.
SEO básico: Usa metaetiquetas en el head del HTML para optimizar el SEO.
- [x] Se utilizan atributos alt en imágenes.
- [x] Navegación con teclado entre páginas.



# Resolución del proyecto

## 0. Planificación

Se plantea el proyecto. En base a lo conversado en clase la idea es crear un Ecommerce. Se establece hacer un ecommerce de venta de cursos.
### A) Búsqueda de la competencia. Se compara 4 casos (búsqueda en la web y primera impresión)
 
https://www.google.com/search?q=paginas+de+cursos&rlz=1C1AVFC_enAR1026AR1026&oq=paginas+de+cursos&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDUzMTRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8

### B) Se arma Bosquejo.

![](https://i.ibb.co/QFSqfdky/bosquejo.png)

### C) Se Nombra Proyecto: CursoNad


Se crea Logo ( https://chatgpt.com/share/6a0897e3-0df8-83e9-a51e-37f7c98d5aad)


### D) Paleta de colores, me baso en algo similar a Coursera, colorimetría y Pakua (en su momento leí mucho relacionado con eso) y siempre el azul es un color relacionado a estudios y sobre todo trabajo. Fuera de eso genero una paleta de colores en coolors.co y luego la analizo con IA.


Paleta(https://coolors.co/2563eb-1d4ed8-111827-030712-f8fafc-ffffff-e5e7eb-8b5cf6-6b7280-1f2937)

Analisis (https://gemini.google.com/share/fb49f3daaf62)

# Desarrollo del proyecto

## 1. Desarrollo HTML

Se desarrolla una estructura principal utilizando HTML semántico. Y se estructuran las páginas para cada uso.

- index.html: Esta constituido con una seccion Hero, acceso rapido a Novedades en cursos y los mas vistos.
- contacto.html: Form de contacto.
- cursos.html: Todos los cursos dinamico.
- detalle.html: detalle de cada curso dinamico.
- carrito.html: sistema de carrito dinamico.


## 2. Desarrollo CSS

Se elabora en un solo archivo todos los estilos del sitio.

- Sistema de colores.
- Variables CSS.
- Botones reutilizables.
- Cards.
- Hero.
- Formularios.
- Footer.
- Animaciones.
- Toasts.
- Responsive mediante Flexbox, Grid y Media Queries.

## 3. Desarrollo JavaScript

La parte dinámica del proyecto fue desarrollada utilizando JavaScript. Se implementaron funcionalidades para optimizar el sitio.

### Componentes reutilizables

- Header dinámico.
- Footer dinámico.
- Planes dinámico.

### Consumo de datos

- Fetch hacia MockAPI.
- Renderizado dinámico de cursos.
- Renderizado de detalle.
- Renderizado del MegaMenú.

### Navegación

- Menú hamburguesa.
- Mega menú.
- Navegación entre páginas.

### Carrito

- Agregar cursos.
- Eliminar cursos.
- Vaciar carrito.
- Cambio de modalidad Plus / Full.
- Persistencia mediante LocalStorage.
- Contador dinámico.

### Filtros

- Buscador.
- Filtro por categoría.
- Nivel.
- Duración.

### Experiencia de usuario

- Toast de agregado.
- Toast de curso repetido.
- Cursos más vistos.
- Últimos cursos agregados.

### Validaciones

- Validación del formulario de contacto.
- Validación de email.
- Validación de mensaje obligatorio.


# Subida del Proyecto.
El proyecto debe estar subido a un hosting gratuito (Netlify o GitHub Pages), con una URL funcional para visualizar el sitio.
 - [x] Se sube el proyecto.
Se genera nuevo proyecto en git y se sube con https://github.com/desktop.

# Tecnologías aplicadas
- HTML5
- CSS3
- Flexbox
- CSS Grid
- Media Queries
- JavaScript
- LocalStorage
- Fetch API


# Servicios y APIs utilizadas


- MockAPI (API REST para gestión de cursos)
- Formspree (procesamiento del formulario de contacto)
- Google Fonts (tipografías web)


# Herramientas utilizadas y fuentes consultadas


- [Inkscape](https://inkscape.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [ChatGPT](https://chatgpt.com)
- [Coolors](https://coolors.co/)
- [Google Fonts](https://fonts.google.com/)
- [Gemini](https://gemini.google.com)
- [Formspree](https://formspree.io/)
- [iLoveIMG](https://www.iloveimg.com/)
- [GitHub Desktop](https://github.com/desktop)
- [StackEdit](https://stackedit.io/)
- [W3schools](https://www.w3schools.com/)
- [Mockapi](https://mockapi.io/)