# INTEGRA 360° — Sitio Web Oficial

> **"Todo lo que necesitas. Una sola gestión."**

Repositorio del sitio web oficial de **INTEGRA 360°** — empresa de gestión integral de servicios para hogares, empresas y administraciones en El Salvador.

---

## 📋 Descripción

**INTEGRA 360°** es el punto único de gestión y solución para cualquier necesidad de servicio. No somos únicamente una empresa de limpieza — conectamos hogares, empresas y administraciones con soluciones confiables, personalizadas y eficientes.

El cliente tiene **una necesidad** → INTEGRA 360° → **una solución.**

---

## 🌐 Sitio en producción

**[www.integra360corp.com](https://www.integra360corp.com)**

Desplegado en **GitHub Pages** con dominio personalizado (CNAME).

---

## ✨ Características del sitio

- **Hero fullscreen** con composición visual de los 3 ecosistemas: Hogares, Empresas, Administraciones
- **Diagrama interactivo** TÚ → INTEGRA 360° → SOLUCIONES
- **3 tarjetas de soluciones** con fotografías IA únicas por ecosistema
- **Sección "¿Cómo funciona?"** — 5 pasos con animaciones on-scroll
- **Sección "¿Por qué elegirnos?"** — 5 beneficios en grid responsive
- **CTA estratégico** de necesidad personalizada
- **Navbar sticky** con efecto transparente → sólido al hacer scroll
- **Menú hamburguesa** totalmente accesible (ARIA, teclado, Escape)
- **Smooth scrolling** con offset correcto para navbar fija
- **Reveal animations** con Intersection Observer (no JavaScript pesado)
- **Parallax** sutil en el Hero
- **Footer completo** — 5 columnas: marca, soluciones, empresa, legal, contacto
- **FAB de redes sociales** — Facebook, Instagram, TikTok, WhatsApp, Email
- **SEO completo** — JSON-LD Schema.org, Open Graph, Twitter Cards, sitemap
- **Google Analytics 4** correctamente implementado (async, sin bloqueo de render)
- **PWA ready** — site.webmanifest configurado

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **HTML5 semántico** | Estructura del sitio |
| **CSS3 Vanilla** | Estilos, variables, animaciones, responsive |
| **JavaScript Vanilla (ES6+)** | Navbar scroll, menú móvil, Intersection Observer, parallax |
| **Google Fonts — Inter** | Tipografía corporativa |
| **Font Awesome 6.0.0** | Iconografía (CDN) |
| **Google Analytics 4** | Métricas y analítica |
| **GitHub Pages** | Hosting y deploy |

---

## 🎨 Sistema de Diseño

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#051024` | Azul marino profundo — base |
| `--accent` | `#D4AF37` | Dorado premium — accentos y CTAs |
| `--accent-hover` | `#b8952c` | Dorado hover |
| `--white` | `#ffffff` | Fondos y texto claro |
| **Fuente** | Inter (Google Fonts) | Toda la tipografía |

---

## 📂 Estructura del Proyecto

```
integra_360-1/
│
├── index.html                      # Página principal (única)
├── styles.css                      # Sistema de diseño completo
├── script.js                       # Lógica: navbar, menú, animaciones
│
├── img/
│   ├── logo.webp                   # Logo oficial INTEGRA 360°
│   ├── hero-composite.jpg          # Hero: composición 3 ecosistemas (IA)
│   ├── solution-hogares.jpg        # Card Hogares (IA)
│   ├── solution-empresas.jpg       # Card Empresas (IA)
│   └── solution-administraciones.jpg # Card Administraciones (IA)
│
├── favicon-16.png                  # Favicon 16×16
├── favicon-32.png                  # Favicon 32×32
├── favicon-48.png                  # Favicon 48×48 (principal)
├── favicon-192.png                 # Favicon PWA
├── favicon-512.png                 # Favicon PWA splash
├── favicon.ico                     # Favicon legacy
├── apple-touch-icon.png            # iOS home screen icon
│
├── site.webmanifest                # PWA manifest
├── sitemap.xml                     # Sitemap para Google Search Console
├── robots.txt                      # Directivas de crawl para bots
├── CNAME                           # Dominio personalizado GitHub Pages
├── .nojekyll                       # Desactiva Jekyll en GitHub Pages
├── .gitignore                      # Exclusiones de Git
└── README.md                       # Este archivo
```

---

## 📐 Secciones del Sitio

| # | ID | Sección |
|---|---|---|
| 1 | `#inicio` | Hero — "Todo lo que necesitas. Una sola gestión." |
| 2 | `#nosotros` | ¿Qué es INTEGRA 360°? — Diagrama ecosistema |
| 3 | `#soluciones` | Soluciones para cada necesidad — 3 tarjetas |
| 4 | `#necesidad-personalizada` | ¿Tienes una necesidad diferente? |
| 5 | `#como-funciona` | ¿Cómo funciona? — 5 pasos |
| 6 | `#por-que` | ¿Por qué elegir INTEGRA 360°? — 5 beneficios |
| 7 | `#contacto` | CTA Final — Solicitar / Llamar |
| 8 | `#footer` | Footer — 5 columnas |

---

## 🚀 Desarrollo Local

```bash
# Opción 1 — Python (recomendado)
python -m http.server 8080

# Opción 2 — Node.js
npx serve .

# Luego abrir en el navegador:
# http://localhost:8080
```

---

## 📊 Google Analytics 4

- **ID de medición:** `G-BEDM810LPW`
- Implementado con `async` — no bloquea render ni indexación de Google
- `anonymize_ip: true` — cumple buenas prácticas de privacidad
- El tag está correctamente ubicado **después** del `<meta charset>` y `<meta viewport>`

> ⚠️ No mover el script de GA4 fuera del `<head>`. Google Tag Manager requiere que esté en el `<head>` para medir correctamente los page views.

---

## 📞 Contacto

| Canal | Datos |
|---|---|
| **WhatsApp** | [+503 6994-0103](https://wa.me/50369940103) |
| **Teléfono** | [+503 6994-0103](tel:+50369940103) |
| **Email** | [hello@integra360corp.com](mailto:hello@integra360corp.com) |
| **Facebook** | [INTEGRA 360°](https://www.facebook.com/profile.php?id=61587207488110) |
| **Instagram** | [@integra360_sv](https://www.instagram.com/integra360_sv/) |
| **TikTok** | [@integra360sv](https://www.tiktok.com/@integra360sv) |

---

## ✒️ Créditos

- **Empresa:** INTEGRA 360°
- **Desarrollo y Diseño:** JK GROUP
- **Fotografías hero/cards:** Generadas con IA (Gemini)

---

## 📄 Licencia

© 2026 INTEGRA 360°. Todos los derechos reservados.
