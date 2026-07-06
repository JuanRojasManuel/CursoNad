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
| **Entega final** | Se generan los archivos README y actualiza Entega final.|
 


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


 - [x] Se usa style.css para todo la página principal.
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
 - [x] Menú, Hero y navegación general en general con Flexbox
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




## 7. Contenido JS.
## 7.1 LocalStorage o sessionStorage.
Persistencia de datos entre páginas y entre sesiones con localStorage.
Al menos un uso de localStorage o sessionStorage:
- [x] Guardo carrito.
- [x] Vistas (los cursos mas vistos (clickeados))


## 7.2 API y fetch.
Consumo de una API pública con fetch y .then() o async/await:
- [x] Uso de MockAPI para todos los cursos.
- [x] Uso de fetch(MockAPI) para cargar datos en detalle.js(info cursos) y script.js(cards).


## 7.3 Renderizado dinámico en el DOM
Renderizado dinámico de elementos en el DOM a partir de los datos obtenidos:
- [x] Renderizo las Cards (de todos los cursos, vistas de 4 cursos en index y contacto (incentivo a más ventas)).
- [x] Renderizo Mega menú (traigo dinámicamente los cursos según la categoría guardada en MockAPI).
- [x] Renderizo Planes, Header y Footer (para no repetir el código HTML en varias páginas).


## 7.4 Interacción dinámica con el DOM.
Interacción dinámica con el DOM en respuesta a acciones del usuario (agregar, eliminar, modificar)


- [x] Agregar: Agregar curso al carrito.
- [x] Eliminar: Eliminar curso, Vaciar carrito.
- [x] Modificar: Cambiar modo de curso: Plus / Full.
- [x] Funcionalidad Js: Filtrar cursos y Buscar cursos.
- [x] Funcionalidad Js: Abrir/cerrar menú hamburguesa / mega menú.


## 7.5 Feedback visual.
Feedback visual ante una acción del usuario (sin alert() nativo)
- [x] Uso de Toast para agregar o cuando no se puede agregar un curso.
- [x] Indicador de cantidad que se compra en el icono carrito.


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