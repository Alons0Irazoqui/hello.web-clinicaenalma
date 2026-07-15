# Clínica en Alma — Brief de Proyecto: Landing Page

Este documento es el **informe de negocio y dirección de diseño** para la creación de la landing page de **Clínica en Alma**. Sirve como fuente de verdad para vos (desarrollador) y para Claude mientras iteran sobre la plantilla base en HTML.

> **Cómo usar este documento:** ya se envió un prompt inicial a Claude para adaptar la plantilla base a este negocio. A partir de ahí, este README es el contexto de negocio que hay que mantener a mano (pegalo en el proyecto, en un `CLAUDE.md`, o compartilo directo en el chat) para que cada iteración con Claude sea consistente. **Podés y debés seguir iterando con Claude —dándole instrucciones, correcciones y ajustes— todas las veces que haga falta hasta lograr el resultado deseado.** No hay un límite de vueltas; el objetivo es la calidad final, no acertar a la primera.

> 🔗 **Antes de arrancar, accedé a la carpeta de Google Drive del cliente:** https://drive.google.com/drive/folders/1e1tvduBTEHivFYu2347B_-8Zw5xo9TAL — ahí está el logo oficial y el manual de marca (ver sección 2). Es información obligatoria para conocer el negocio, no opcional.

---

## 1. Sobre el negocio

| Dato | Detalle |
|---|---|
| **Nombre** | Clínica en Alma |
| **Rubro** | Clínica de **rehabilitación en adicciones especializada en adolescentes femenino, de 11 a 17 años** |
| **Origen del nombre / concepto** | "Alma" conecta con el ícono del logo: una figura que envuelve/contiene un corazón, transmitiendo cuidado y contención emocional — no es solo una clínica clínica, es un espacio que cuida "el alma" de las pacientes. |
| **Instagram** | https://www.instagram.com/clinicaenalma — cuenta tipo "Producto/servicio", 99 publicaciones, 61 seguidores, 45 seguidos |
| **Bio actual (Instagram)** | *"Somos una Clínica De Rehabilitación en Adicciones"* (texto real, usar como base de copy) |
| **Teléfono / WhatsApp** | ⚠️ **No disponible** en el material entregado — ver nota abajo |

### ⚠️ Nota sobre el teléfono y datos de contacto

No hay número de teléfono/WhatsApp visible ni en la captura de Instagram disponible ni en los nombres de archivo del Drive. Antes de armar el botón flotante de WhatsApp y los CTA de contacto, hay que **conseguir el número real**: revisando el perfil completo de Instagram (botón de contacto/"Llamar"/"WhatsApp" que Instagram muestra en cuentas de negocio), el Manual de Identidad (sección 2), o preguntándoselo directo al cliente. No inventar un número de placeholder que parezca real.

### ⚠️ Importante: naturaleza sensible del negocio — leer antes de escribir copy

Esto **no es un negocio de consumo genérico**: es un centro de salud que trata adicciones en **menores de edad (11–17 años, población femenina)**. Eso condiciona todo el tono y contenido del sitio:

- **El público que navega el sitio no es la paciente, es quien decide por ella**: madres/padres/tutores en un momento de angustia, y potencialmente profesionales que derivan casos (psicólogos, médicos, escuelas). El copy y la jerarquía de información deben hablarle a ese público: confianza, profesionalismo, confidencialidad, esperanza — no lenguaje alarmista ni estigmatizante.
- **Privacidad ante todo:** nunca usar fotos que identifiquen a pacientes reales (rostros, nombres, situaciones reconocibles), ni en galería ni en testimonios. Si hay testimonios reales, deben ir anonimizados (iniciales, sin foto, o "mamá de paciente").
- **Credibilidad como eje central:** al ser un servicio de salud, la percepción de seriedad profesional (certificaciones, equipo clínico, metodología, licencias) pesa tanto o más que el diseño visual. Si el cliente puede proveer esta info (títulos, cédulas profesionales, modelo terapéutico, tiempo de operación), debe tener un lugar destacado en la landing.
- **Considerar un aviso de privacidad/confidencialidad** visible (footer o sección de contacto), dado que se maneja información sensible de menores. Confirmar con el cliente si ya tienen uno redactado o si hay que dejar un placeholder claramente editable.
- El cliente **no proporcionó** una ficha de negocio completa (metodología de tratamiento, tipo de adicciones atendidas, modalidad residencial/ambulatoria, duración de programas, precios, equipo). Esa información real hay que sacarla del **Manual de Identidad** (sección 2), del **perfil de Instagram** (revisar los 99 posts), o preguntándosela directo al cliente — nunca inventar datos clínicos o promesas de tratamiento específicas.

---

## 2. Identidad visual / Branding

### Fuente de assets — obligatorio revisar antes de tocar código

El cliente compartió una carpeta de Google Drive llamada **"JULIO"** con dos archivos:

1. **LOGOTIPO** — archivo del logo oficial (probablemente en mayor resolución/calidad que la versión de Instagram).
2. **MANUAL DE IDENTIDAD** — manual de marca oficial, que muy probablemente define la paleta de colores exacta, tipografías, versión correcta del isotipo y sus usos permitidos.

🔗 **Link:** https://drive.google.com/drive/folders/1e1tvduBTEHivFYu2347B_-8Zw5xo9TAL

**Regla de prioridad:** todo lo que se describe en esta sección (paleta, tipografía) está **inferido a partir de la captura del perfil de Instagram**, no del manual oficial (no se pudo abrir el contenido de los archivos del Drive de forma directa). Es un punto de partida razonable, pero **el Manual de Identidad siempre tiene prioridad** si contradice algo de acá. Descargá ambos archivos del Drive y usalos como fuente de verdad.

La carpeta local `imagenes/` de este proyecto **todavía no tiene el logo cargado** — descargalo del Drive (o de Instagram como respaldo) y colocalo ahí antes de empezar a iterar con Claude.

### Logo

- Isotipo circular sobre fondo crema/beige: una figura de trazo minimalista (dos líneas curvas a modo de "brazos"/manos abiertas) que envuelve un corazón en celeste/azul pastel en el centro, coronada por un círculo sólido color marrón/terracota a modo de "cabeza". El concepto visual transmite cuidado, contención y calidez humana — coherente con el nombre "Alma".
- **Tarea obligatoria:** la versión disponible (Instagram) tiene **fondo sólido color crema**. Hay que **quitarle el fondo** (dejarlo en PNG transparente, alta resolución) antes de usarlo en header/navbar, footer y pantalla de carga (ver sección 4). Si el archivo LOGOTIPO del Drive ya viene sin fondo o en vectorial (SVG/AI/EPS), usar esa versión como base en vez de recortar la de Instagram.
- Generar también un **favicon** (`.ico`/`.png` en varios tamaños) a partir del logo sin fondo.

### Paleta de colores (inferida del logo — confirmar contra el Manual de Identidad)

| Color | Hex aprox. | Uso sugerido |
|---|---|---|
| 🟤 Terracota / marrón cálido (trazo y "cabeza" del logo) | `#9C7A54` | Color primario — CTAs, íconos, acentos, textos destacados |
| 🩵 Celeste / azul pastel (corazón del logo) | `#A9CCDA` | Color secundario — detalles, hovers, elementos que transmitan calma y confianza |
| 🟡 Beige / crema (fondo del logo) | `#E7DCCB` | Fondos suaves, secciones alternas, tarjetas |
| 🤍 Blanco | `#FFFFFF` | Fondo base, espacio en blanco (estilo minimal) |
| ⚫ Gris oscuro / carbón | `#2B2B2B` – `#3A342E` | Tipografía principal, footer |

**Sugerencia de aplicación:** terracota + celeste como pareja de marca (cálido + calmo, "contención + confianza"), apoyados en mucho blanco y beige claro de fondo. En un negocio de salud para adolescentes, evitar que la paleta se sienta fría o clínica: el objetivo es transmitir "profesional y premium" sin perder calidez humana.

### Tipografía sugerida

- Encabezados: una serif elegante y humana (ej. *Fraunces*, *Lora*, *Playfair Display* en peso moderado, no muy pesado) o una sans-serif geométrica suave (ej. *Manrope*, *General Sans*) — algo que se sienta profesional y cálido, nunca infantil ni clínico-frío.
- Cuerpo de texto: sans-serif limpia y muy legible (ej. *Inter*, *Plus Jakarta Sans*, *Manrope*). La legibilidad es crítica acá: quien lee suele estar buscando ayuda en un momento de estrés.

### Tono de marca

Cálido, profesional, confiable y esperanzador. Es un servicio de salud sensible para menores — el copy debe evitar sonar alarmista, estigmatizante o excesivamente clínico. Priorizar mensajes de confidencialidad, contención y profesionalismo ("ayuda especializada", "equipo certificado", "un espacio seguro para tu hija"), siempre con evidencia de seriedad (credenciales, metodología, experiencia).

---

## 3. Dirección de diseño (obligatorio)

El estilo visual de la landing debe sentirse:

- **Premium / Enterprise / Corporativo** — como una institución de salud establecida y seria, no un consultorio casero.
- **High-tech y elegante** — transiciones suaves, tipografía cuidada, jerarquía visual clara.
- **Minimalista** — mucho espacio en blanco, pocos elementos por pantalla, sin saturar de color ni texto.

En la práctica esto significa: layouts con "aire" (whitespace generoso), grillas alineadas, imágenes grandes y bien recortadas, paleta controlada (no usar más colores que los de la sección 2), microinteracciones sutiles (no efectos exagerados ni "ruidosos"), y consistencia total de espaciados/tamaños tipográficos en todo el sitio.

> **Nota específica de este proyecto:** dado que es una clínica de salud para adolescentes, "premium" tiene que leerse como *"institución confiable y de alto nivel profesional"*, no como estética fría de startup tecnológica. Buscar el equilibrio entre minimalismo/elegancia y calidez humana (fotografía natural, tonos cálidos de la paleta, espacios amplios pero no estériles).

---

## 4. Efectos visuales y animaciones (obligatorio)

Estos elementos son requerimiento explícito del cliente, no opcionales:

1. **Pantalla de carga (loading screen)**
   - Debe mostrarse al cargar la página, con un **spinner/loader animado junto al logo del negocio** (logo ya sin fondo, ver sección 2).
   - Debe desvanecerse (fade-out) suavemente hacia el contenido una vez que la página terminó de cargar.

2. **Animaciones al hacer scroll**
   - Los elementos de cada sección deben **revelarse/animarse a medida que entran en el viewport** (fade-in + slight translate, por ejemplo), no aparecer todos de golpe.
   - Mantenerlas sutiles y consistentes (misma curva de animación/duración en todo el sitio) para que se sientan premium y no cargadas.

3. **Título del Hero (sección principal)** — dos efectos combinados sobre el texto principal:
   - **Efecto máquina de escribir (typewriter):** el título se escribe letra por letra al cargar la sección.
   - **Letras que cambian de color:** además del tipeo, las letras del título deben tener una animación de color (cambio cíclico, degradado animado entre los colores de marca —terracota/celeste—, o efecto "shimmer"). Debe verse elegante y sobrio, coherente con el estilo premium/minimal del punto 3 y con la seriedad del rubro (evitar que parezca "juguetón" o llamativo de más).

4. **Microinteracciones generales:** hover states suaves en botones/tarjetas/links, transiciones consistentes (200–400ms, easing suave), sin saltos bruscos.

> Nota para quien itere con Claude: si un efecto queda "cargado", poco elegante, o se siente fuera de lugar para una clínica de salud, pedirle explícitamente a Claude que lo simplifique — el criterio de aceptación es que se vea premium, serio y confiable, no que tenga la mayor cantidad de efectos posible.

---

## 5. Estructura sugerida de la landing page

Como no hay copy oficial completo del cliente, esta es una estructura de referencia a validar/completar con contenido real del Manual de Identidad, Instagram y el cliente directamente:

1. **Loading screen** (ver sección 4)
2. **Header / Navbar** — logo, navegación, CTA de contacto ("Consulta confidencial" / WhatsApp)
3. **Hero** — título con efectos (sección 4), propuesta de valor clara (ej. "Rehabilitación especializada para adolescentes, de 11 a 17 años"), CTA principal ("Solicitar información confidencial"), imagen/fondo cálido y esperanzador (evitar imaginería clínica fría o estigmatizante)
4. **Sobre nosotros / Misión** — historia y enfoque de Clínica en Alma, por qué se especializan en población femenina adolescente
5. **Especialización / A quién atendemos** — rango de edad, población atendida, tipo de programa (confirmar modalidad: residencial, ambulatoria, ambas)
6. **Metodología / Modelo de tratamiento** — enfoque terapéutico, fases del proceso (contenido real a confirmar con el cliente o el Manual de Identidad)
7. **Equipo profesional / Credenciales** — certificaciones, licencias, especialistas — clave para la credibilidad del sitio
8. **Instalaciones / Galería** — fotos reales del espacio físico, **sin mostrar rostros ni datos identificables de pacientes**
9. **Proceso de admisión** — pasos simples para que un padre/tutor inicie el contacto
10. **Preguntas frecuentes** — dudas comunes de padres/tutores (confidencialidad, costos, duración, visitas, etc.)
11. **Testimonios** (si existen y están anonimizados; si no, dejar la sección lista para completar con contenido real aprobado por el cliente)
12. **Contacto / CTA final** — teléfono, WhatsApp, formulario de contacto confidencial
13. **Footer** — logo, redes, aviso de privacidad, datos de contacto, copyright

---

## 6. Assets disponibles

- **Google Drive "JULIO"** (obligatorio revisar): https://drive.google.com/drive/folders/1e1tvduBTEHivFYu2347B_-8Zw5xo9TAL — contiene `LOGOTIPO` y `MANUAL DE IDENTIDAD`. Fuente principal y prioritaria de marca.
- **Instagram** [@clinicaenalma](https://www.instagram.com/clinicaenalma) — 99 publicaciones para revisar en busca de fotos reales del espacio y tono de comunicación. **Filtrar siempre** cualquier imagen que muestre rostros o datos identificables de pacientes menores antes de usarla en la web.
- **Carpeta local `imagenes/`** de este proyecto: actualmente vacía. Cargar ahí el logo (ya sin fondo, sección 2) y cualquier otro asset aprobado antes de iterar con Claude.

---

## 7. Checklist técnico

- [ ] Descargar `LOGOTIPO` y `MANUAL DE IDENTIDAD` del Drive y usarlos como fuente de verdad de marca
- [ ] Quitar el fondo del logo y exportar en PNG transparente (alta resolución)
- [ ] Generar favicon a partir del logo sin fondo
- [ ] Conseguir el número real de teléfono/WhatsApp (no usar placeholder inventado)
- [ ] Implementar pantalla de carga con spinner + logo
- [ ] Implementar animaciones de scroll (reveal on scroll) en todas las secciones
- [ ] Implementar efecto typewriter + cambio de color en el título del Hero (sobrio, no "juguetón")
- [ ] Aplicar paleta de colores de marca (sección 2) de forma consistente, priorizando el Manual de Identidad si contradice la paleta inferida
- [ ] Sitio 100% responsive (mobile-first)
- [ ] Botón flotante de WhatsApp con el número real confirmado
- [ ] Verificar que ninguna imagen usada identifique a pacientes reales (rostros, nombres, situaciones reconocibles)
- [ ] Incluir sección de credenciales/equipo profesional si el cliente la provee
- [ ] Incluir aviso de privacidad/confidencialidad (footer o sección de contacto)
- [ ] Optimización de imágenes y performance (lazy loading, compresión)
- [ ] Revisión de contraste/accesibilidad de la paleta terracota/celeste sobre blanco y sobre fondos oscuros

---

## 8. Flujo de trabajo con Claude

- Ya existe una plantilla base en HTML y un prompt inicial enviado a Claude para adaptarla a Clínica en Alma.
- A partir de acá, el trabajo es **iterativo**: dale instrucciones puntuales a Claude (ajustes de copy, diseño, animaciones, responsive, bugs, etc.) tantas veces como sea necesario hasta llegar al resultado esperado. No hay que resolver todo en una sola iteración.
- Usá este README como contexto de negocio en cada sesión para que las respuestas de Claude sean consistentes con la marca, la paleta, el estilo y la sensibilidad de contenido definidos acá.
- Si encontrás contenido real (fotos, textos, datos de contacto) en el Manual de Identidad o en Instagram que contradiga los supuestos de este documento, priorizá siempre la información real por sobre lo inferido acá.
