# 🚀 InnovaTech - Portafolio Grupal

**Trabajo Práctico 1 - Tecnicatura Superior en Desarrollo de Software - IFTS N.°29**

- **Título del Proyecto:** InnovaTech - Portafolio Web Grupal
- **Deploy:** [Ver sitio en Vercel](https://innovatech-portafolio.vercel.app) *(Por publicar)*
- **Repositorio:** [GitHub - InnovaTech](https://github.com/Seba2107/tp1-grupal-front-end.git)

---

## 📋 Descripción del Proyecto

**InnovaTech** es un portafolio web grupal diseñado como trabajo práctico de la materia Desarrollo Web (Frontend). El objetivo es crear una plataforma cohesiva que presente a tres desarrolladores con sus perfiles individuales, habilidades, gustos personales y un registro del proceso de desarrollo (bitácora).

### Funcionalidades Básicas Incluidas:
✅ **Portada Principal** - Presentación del equipo y navegación.
✅ **Perfiles Individuales** - Página para cada integrante con información personal.
✅ **Tarjetas de Presentación** - Diseño responsivo y efectos visuales interactivos. 
✅ **Bitácora del Proyecto** - Documentación del proceso de desarrollo.  
✅ **Diseño Responsive** - Adaptable a 400px, 900px y 1200px (breakpoints obligatorios)  

---

## 👥 Integrantes

| Nombre | Rol | GitHub | Perfil |
|--------|-----|--------|--------|
| **Seba** | Frontend Dev | [@Seba2107](https://github.com/Seba2107) | [Perfil](./seba.html) |
| **Johan** | Analista Sistemas | [@ikolniath](https://github.com/ikolniath) | [Perfil](./johan.html) |
| **Juan Pablo Miranda** | Backend Dev | [@j-pablo89](https://github.com/j-pablo89) | [Perfil](./juanpablo.html) |

---

## 🛠️ Tecnologías Utilizadas

### Lenguajes & Marcado
- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados (Grid, Flexbox, gradientes)
- **JavaScript** - Funcionalidades dinámicas

### Recursos & Bibliotecas
- **Google Fonts** - Tipografías personalizadas
  - [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) - Monoespaciada
  - [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) - Títulos
  - [Barlow](https://fonts.google.com/specimen/Barlow) - Cuerpo
- **Emojis Unicode** - Iconografía
- **Vercel** - Plataforma de deployment
- **Git & GitHub** - Control de versiones

### Herramientas de Desarrollo
- **Visual Studio Code** - Editor de código


---

## 📁 Estructura de Archivos

```
tp1-grupal-front-end/
├── index.html                # Página principal (portada)
├── juanpablo.html            # Perfil individual - Juan Pablo
├── johan.html                # Perfil individual - Johan
├── seba.html                 # Perfil individual - Seba
├── bitacora.html             # Página de bitácora del proyecto
├── README.md                 # Este archivo
│
├── css/
│   └── styles.css            # Hoja de estilos principal (900+ líneas)
│
├── js/
│   └── main.js               # Funciones JavaScript dinámicas
│
├── img/
│   ├── juanpablo.png         # Avatar Juan Pablo
│   ├── johan.png             # Avatar Johan
│   └── seba.png              # Avatar Seba

```

---

## 🎨 Guía de Estilos

### Paleta de Colores

| Nombre | Código Hex | Uso | Ejemplo |
|--------|-----------|-----|---------|
| **Background** | `#0a0a0c` | Fondo principal | Body |
| **Card Background** | `#13131a` | Fondos de tarjetas | `.char-card`, `.info-section` |
| **Border** | `#2a2a36` | Bordes sutiles | Bordes de elementos |
| **Accent (Amarillo)** | `#e8ff47` | Acento principal | Títulos, hover |
| **Accent 2 (Rojo)** | `#ff4f6d` | Acento secundario | Efectos |
| **Accent 3 (Azul)** | `#47c8ff` | Acento terciario | Variantes |
| **Text Principal** | `#eeeef4` | Texto principal | Body text |
| **Text Muted** | `#5a5a70` | Texto secundario | Descripciones |
| **Perfil1** | `#e8c547` | Recuadro perfil 1 | Perfil |
| **Perfil2** | `#47c8ff` | Recuadro perfil 2 | Perfil |
| **Perfil3** | `#ff6b47` | Recuadro perfil 3 | Perfil |



### Tipografías

| Tipo | Fuente | Uso | Peso |
|------|--------|-----|------|
| **Display** | [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) | Títulos principales (h1, h2) | 400 |
| **Monoespaciada** | [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) | Código, etiquetas, navegación | 400 |
| **Body** | [Barlow](https://fonts.google.com/specimen/Barlow) | Textos, párrafos | 300, 400, 600 |

### Iconografía

**Emojis Unicode utilizados:**
- 📍 Ubicación
- ✅ Confirmación de acciones

**Avatares:** Imágenes PNG personalizadas (no generadas por IA, fotos reales o ilustraciones propias para privacidad)

---

## ⚙️ JavaScript - Funcionalidades Dinámicas

### 1. **Toast de Bienvenida** (`main.js`)
**Ubicación:** Todas las páginas (portada y perfiles individuales)  
**Descripción:** Notificación emergente que aparece al cargar la página mostrando un mensaje de bienvenida a InnovaTech.

```javascript
// Mostrar toast al cargar la página
window.addEventListener('load', () => {
  const toast = document.getElementById('toast');
  toast.classList.add('visible');
});

// Cerrar toast al hacer clic en el botón
document.getElementById('toast-close').addEventListener('click', () => {
  const toast = document.getElementById('toast');
  toast.classList.remove('visible');
});
```

**Características:**
- ✅ Aparece con animación suave (translateY + opacity)
- ✅ Botón interactivo para cerrar

### 2. **Navegación Responsiva y Menú Móvil** (`main.js`)
**Ubicación:** Barra de navegación (nav)  
**Descripción:** Navegación adaptativa con menú desplegable para móviles. En pantallas grandes muestra enlaces horizontales; en móviles (≤400px) oculta los enlaces y muestra un botón hamburguesa que despliega el menú verticalmente.

```javascript
// === MENÚ MÓVIL ===
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});
```

**Características:**
- ✅ Links del menú funcionales en todas las páginas
- ✅ Enlaces a secciones con scroll suave
- ✅ Enlaces a páginas externas (perfiles, bitácora)
- ✅ Footer links correctamente funcionales
- ✅ **Menú móvil:** Botón hamburguesa (☰) en ≤400px

### 3. **Tarjetas Interactivas** (`main.js`)(Tarjetas personales)
**Ubicación:** Página principal (`index.html`) - Sección "El Equipo" y tarjetas personales.
**Descripción:** Tarjetas de personajes con efectos de hover: elevación, resplandor y animaciones.

```javascript
// Efecto hover en tarjetas de equipo
.char-card:hover {
  transform: skewX(-2deg) translateY(-24px) scale(1.04);
  box-shadow: 0 0 0 1px var(--c1), 0 24px 60px rgba(232,197,71,0.25);
}
```

**Características:**
- ✅ Elevación al pasar el mouse
- ✅ Resplandor dinámico según color del equipo
- ✅ Transformación tridimensional (skew + scale)
- ✅ Avatar dentro de la tarjeta se anima también

### 4. **Fade-in de Cards al Hacer Scroll** (`main.js`)
**Ubicación:** Página principal - Tarjetas del equipo  
**Descripción:** Las tarjetas aparecen con un efecto de fade-in progresivo al hacer scroll hacia abajo.

```javascript
// === FADE-IN DE CARDS AL HACER SCROLL ===
const cards = document.querySelectorAll('.char-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
```
**Características:**
- ✅ Animación secuencial con delay progresivo
- ✅ Desactiva observación después de activar para optimización
**Ubicación:** Página principal (`index.html`) - Sección "El Equipo"  
**Descripción:** Tarjetas de personajes con efectos de hover: elevación, resplandor y animaciones.


## 📱 Breakpoints Responsivos

El sitio es completamente adaptable a:

| Breakpoint | Dispositivos | Cambios Principales |
|-----------|-------------|---------------------|
| **400px** | Móviles pequeños | Layout 1 columna, fuentes reducidas, menú móvil con botón hamburguesa |
| **900px** | Tablets/Pantallas medianas | Transición a layout adaptado, tarjetas más pequeñas |
| **1200px+** | Escritorio | Layout completo 2 columnas, tamaños óptimos |

**Ejemplo de media query:**
```css
@media (max-width: 400px) {
  .hero-columnas-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .char-card {
    max-width: 200px;
    height: 280px;
  }
}
```

---

## 🤖 Uso de Inteligencia Artificial

### Herramientas Utilizadas

| Herramienta | Modelo | Uso |
|------------|--------|-----|
| **GitHub Copilot** | Claude Haiku 4.5 | Desarrollo de código, debugging, optimización |
| **ChatGPT** | GPT-4 | Redacción de textos, mejoras en bitácora |

### Uso en Contenido

✅ **Textos Generados:**
- Descripción del proyecto
- Descripciones en el README.md

✅ **Ayuda en Código:**
- Optimización de media queries y responsive design
- Debugging de z-index en el toast (problema con links del footer)
- Estructura y organización de CSS variables
- Gráfico de la estructura y organizacion de archivos y carpetas del proyecto
- Lógica JavaScript para efectos de hover

### Uso en Imágenes

✅ **Avatares:** 
- Se utilizaron imágenes PNG con efectos aplicados por IA (fotos reales o ilustraciones propias)
- Decisión: Privacidad de los integrantes y autenticidad


## 📧 Contacto & Redes

Para consultas sobre el proyecto o colaboraciones:

- **Juan Pablo Miranda** - Backend Dev - [GitHub](https://github.com/j-pablo89) | [LinkedIn](https://linkedin.com)
- **Seba** - Frontend Dev - [GitHub](https://github.com/Seba2107) | [LinkedIn](https://linkedin.com)
- **Johan** - Analista Sistemas - [GitHub](https://github.com/ikolniath) | [LinkedIn](https://linkedin.com)

---

## 📄 Licencia

Trabajo Práctico del IFTS N.°29 - 2026  
Proyecto grupal sin fines comerciales

---
