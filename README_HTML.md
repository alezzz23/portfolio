# Versión HTML/CSS/JavaScript Pura

Esta es una versión simplificada del sitio web de victoreke.com convertida a HTML, CSS y JavaScript puro (sin frameworks).

## 📁 Estructura de Archivos

```
victoreke.com/
├── index.html          # Página principal HTML
├── styles.css          # Todos los estilos CSS
├── script.js           # Funcionalidad JavaScript
├── public/             # Recursos estáticos (imágenes, logos)
│   ├── logo.png
│   ├── noise.png
│   ├── sanity.png
│   ├── nextjs.svg
│   └── vercel.svg
└── README_HTML.md      # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador

1. Simplemente abre el archivo `index.html` en tu navegador
2. ¡Listo! El sitio debería funcionar correctamente

### Opción 2: Usar un servidor local (recomendado)

Para evitar problemas con CORS y rutas relativas, es mejor usar un servidor local:

#### Con Python:
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego visita: `http://localhost:8000`

#### Con Node.js (http-server):
```bash
# Instalar globalmente
npm install -g http-server

# Ejecutar
http-server -p 8000
```

#### Con PHP:
```bash
php -S localhost:8000
```

## ✨ Características Implementadas

- ✅ **Tema Oscuro/Claro**: Toggle entre modo oscuro y claro con persistencia en localStorage
- ✅ **Menú Móvil**: Menú hamburguesa funcional para dispositivos móviles
- ✅ **Diseño Responsive**: Adaptado para móviles, tablets y desktop
- ✅ **Animaciones**: Animaciones suaves en el SVG del hero y efectos de scroll
- ✅ **Navegación Suave**: Scroll suave a las secciones
- ✅ **Estilos Modernos**: Todos los estilos convertidos de Tailwind CSS a CSS puro

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #33E092;    /* Color principal */
    --secondary-color: #0CCE6B;  /* Color secundario */
    --tertiary-color: #16a34a;    /* Color terciario */
}
```

### Modificar Contenido

Edita directamente el archivo `index.html` para cambiar:
- Título y descripción del hero
- Enlaces sociales
- Información de experiencia laboral
- Footer

### Agregar Secciones

Puedes agregar nuevas secciones siguiendo el mismo patrón:

```html
<section id="nueva-seccion" class="work-section">
    <h2 class="section-title">Título de la Sección</h2>
    <!-- Tu contenido aquí -->
</section>
```

## 📱 Responsive Breakpoints

- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y animaciones
- **JavaScript Vanilla**: Sin dependencias externas
- **Google Fonts**: Fuente Inter

## 📝 Notas

- Los estilos están completamente convertidos de Tailwind CSS a CSS puro
- El tema se guarda en `localStorage` del navegador
- El menú móvil se cierra automáticamente al hacer clic en un enlace
- Las animaciones del SVG del hero están incluidas en el CSS

## 🐛 Solución de Problemas

### Las imágenes no se cargan
- Asegúrate de que la carpeta `public/` esté en la misma ubicación que `index.html`
- Usa un servidor local en lugar de abrir el archivo directamente

### El tema no se guarda
- Verifica que tu navegador permita localStorage
- Abre las herramientas de desarrollador y revisa la consola

### El menú móvil no funciona
- Verifica que `script.js` esté cargado correctamente
- Revisa la consola del navegador para errores

## 📄 Licencia

Este proyecto mantiene la misma licencia MIT que el proyecto original.
