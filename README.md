# Práctica Lógica de Predicados — UCV

Presentación web interactiva de **Lógica de Predicados** para Matemática Discreta I.  
Universidad Central de Venezuela · Escuela de Computación · Sem. I-2026 (Sección C4)  
**Preparador:** Luisdavid Colina  
*Origen: material creado en Sem. II-2025 (Sección C7, Profesora Yuliana Fernández) y actualizado para I-2026.*

---

## Correr el proyecto

```bash
# Opción 1 — servidor estático (recomendado)
npm start          # usa npx serve .

# Opción 2 — live-server con hot reload
npm run dev        # usa npx live-server .
```

> **Requisito:** Los archivos JS usan ES6 modules (`type="module"`). No abrir `index.html` directamente en el navegador — se necesita un servidor HTTP local.

---

## Estructura de archivos

```
practica_logica_predicados/
├── index.html                        # Punto de entrada — solo HTML mínimo + SEO
├── package.json                      # Scripts de arranque
├── .editorconfig                     # Estilo de código
├── .gitignore
├── control.md                        # Bitácora de avances del proyecto
├── README.md                         # Este archivo
│
├── docs/                             # Fuentes académicas (PDFs de referencia)
│   ├── MDI Prof. Monsalve II.pdf     # Libro de la cátedra (Monsalve Leal, 2018)
│   ├── Práctica 2.pdf                # Guía de ejercicios (Quijada, 2024)
│   ├── Quiz2_MDI_C7_II_2025.pdf      # Quiz II (Fernández/Colina, 12/12/2025)
│   ├── SOLUCION_Quiz2_MDI_C7_II_2025.pdf
│   ├── Solución del Parcial 2-II-2025.pdf
│   └── Solucio╠ün Parcial II.pdf    # Parcial I-2025
│
├── assets/
│   ├── logos/
│   │   ├── escuela.png               # Logo Escuela de Computación
│   │   ├── uni.png                   # Logo UCV
│   │   └── facu.png                  # Logo Facultad de Ciencias
│   │
│   ├── css/
│   │   ├── main.css                  # Entrada: importa los tres módulos CSS
│   │   ├── base.css                  # Variables, reset, layout base (slide 1280×720)
│   │   ├── components.css            # Todos los componentes visuales + interactividad
│   │   └── overrides.css             # Tipografía 720p, fix de tablas, utilidades
│   │
│   └── js/
│       ├── renderSlides.js           # Motor principal: render, nav, tooltips, reveal
│       └── slides/
│           ├── index.js              # Array maestro — orden de todas las slides
│           ├── cover.js              # Portada
│           ├── index-slide.js        # Índice interactivo (links a secciones)
│           ├── fundamentos.js        # Sección 1: motivación, predicados, cuantificadores, negación
│           ├── simbolizacion.js      # Sección 2: universo finito, 4 formas, guía
│           ├── equivalencias-reglas.js # Sección 2: equivalencias, implicaciones, reglas PU/PE/GU/GE
│           ├── metodos.js            # Sección 2: ARD/PC/RAA, prueba de invalidez
│           ├── ejercicios-basicos.js # Sección 3: metodología + ejercicios 1-3
│           ├── ejercicios-avanzados-1.js # Sección 3: Quiz II (simbolización, validez, invalidez)
│           └── ejercicios-avanzados-2.js # Sección 3: Parciales (Lucina, 21 pasos, bibliografía)
```

---

## Contenido del deck (28 slides)

### Sección 1 — Fundamentos (4 slides)
| Slide | Tema | Fuente |
|-------|------|--------|
| 3 | ¿Por qué Lógica de Predicados? (argumento de Sócrates) | Monsalve Cap. 1 |
| 4 | Predicados, proposiciones abiertas, constantes, variables, universo | Monsalve §1.1–1.2 |
| 5 | Cuantificadores ∀ y ∃ — definiciones y valores de verdad | Monsalve §1.2 |
| 6 | Negación de cuantificadores, alcance, variable libre | Monsalve §1.3 |

### Sección 2 — Herramientas (8 slides)
| Slide | Tema | Fuente |
|-------|------|--------|
| 7 | Universo finito: ∀≡∧∧∧, ∃≡∨∨∨ | Práctica 2 Ej. 4 |
| 8 | Las 4 formas canónicas (Euler) | Monsalve §1.4 |
| 9 | Guía de simbolización paso a paso | Práctica 2 Ej. 5 |
| 10 | Equivalencias lógicas con cuantificadores (8 leyes) | Práctica 2 Ej. 7 |
| 11 | Implicaciones lógicas con cuantificadores (6 leyes) | Práctica 2 Ej. 8 |
| 12 | Reglas de inferencia: PU, PE, GU, GE + orden crítico | Monsalve Cap. 2 |
| 13 | Métodos de prueba: ARD, PC, RAA | Monsalve §2.2 |
| 14 | Prueba de invalidez por contraejemplo (algoritmo U={a}→U={a,b}) | Monsalve §2.1 |

### Sección 3 — Práctica (16 slides)
| Slide | Ejercicio | Fuente | Método |
|-------|-----------|--------|--------|
| 15 | Metodología general | — | — |
| 16 | Valor de verdad: ∀x:[Q(x)→¬S(x)], U=ℤ | Práctica 2 Ej. 2c | Contraejemplo |
| 17 | Valor de verdad: ∀x:[x>3→x²<3] | Parcial 2 Ej. 2 | Contraejemplo |
| 18 | Alcance: ∃x:P(x) ↔ ∃y:R(y) ∧ Q(x) | Práctica 2 Ej. 3e | Análisis fbf |
| 19 | Simbolización argumento (Quiz II Ej. 1) | Quiz II 12/12/2025 | Simbolización |
| 20 | Validez — análisis (Quiz II Ej. 3, 4 premisas) | Quiz II 12/12/2025 | ARD |
| 21 | Validez — prueba 12 pasos | Quiz II solución | ARD |
| 22 | Invalidez — análisis (Quiz II Ej. 2 = Parcial 2 Ej. 4) | Quiz II / Parcial 2 | Contraejemplo |
| 23 | Invalidez — contraejemplo U={a,b} | Solución oficial | Contraejemplo |
| 24 | Prueba condicional (Lucina) — análisis | Parcial II Ej. 3 | PC |
| 25 | Prueba condicional (Lucina) — 8 pasos | Parcial II solución | PC |
| 26 | Validez compleja — análisis (Parcial II Ej. 4, 5 premisas) | Parcial II Ej. 4 | ARD |
| 27 | Validez compleja — prueba 21 pasos | Parcial II solución | ARD |
| 28 | Bibliografía y créditos | — | — |

---

## Arquitectura técnica

### Stack
- **HTML5** mínimo (37 líneas) — solo contenedor `#slides-root`
- **CSS3 Vanilla** modular (~1500 líneas total)
- **JavaScript ES6+ Vanilla** — sin frameworks ni build tools
- **FontAwesome 6.5.1** (CDN) para iconos

### Motor de slides (`renderSlides.js`)
El motor se encarga de todo en runtime:

1. **Render** — inyecta los template strings HTML en `#slides-root`
2. **Contador** — agrega `X / Y` dinámicamente a cada slide
3. **Tooltips** — convierte atributos `title` en tooltips premium CSS
4. **Reveal paso a paso** — detecta tablas con header "Justificación" y oculta las filas que no son premisas; un botón ojo 👁 las revela de una en una
5. **Navegación** — teclado (←→, Espacio, Enter), botones UI, swipe táctil
6. **Escalado** — `scaleToFit()` adapta el slide 1280×720 a cualquier pantalla
7. **Sandboxes lógicos** — arquitectura genérica: `window.updateSandbox_<id>()` se puede registrar por ejercicio

### Sistema de diseño CSS
```
main.css
 ├── base.css        → variables (--ucv-accent: #c8f07a, --bg-dark: #0b0f12), layout, .slide
 ├── components.css  → .card, .concept-card, .guide-card, .flow-box, .case-card,
 │                     .formal-table, .has-tip tooltips, .var-toggle sandbox,
 │                     .reveal-eye-btn, animaciones fadeUpSlide / revealStep
 └── overrides.css   → tipografía 720p, .slide-counter, prefers-reduced-motion,
                       .validity-visual, .logic-row, .premise-tag
```

### Agregar slides nuevas (flujo de trabajo)
1. Crear o editar un archivo en `assets/js/slides/`
2. Exportar el template string: `export const miSlide = \`<div class="slide">...</div>\``
3. Importarlo en `index.js` y agregarlo al array `slides`
4. Si necesita anclaje del índice: usar `addId(miSlide, 'slide-mi-id')` en `index.js`

### Componentes disponibles

| Clase CSS | Uso |
|-----------|-----|
| `.concept-grid` + `.concept-card` | Grid de tarjetas de definición (3 columnas) |
| `.case-grid` + `.case-card` | Grid de 2 columnas para comparar casos |
| `.guide-grid` + `.guide-card` | Grid de 3 columnas para guías/pasos |
| `.flow-row` + `.flow-box` + `.flow-arrow` | Diagrama de flujo horizontal |
| `.example-panel` + `.example-card` + `.example-side` | Panel con columna principal + lateral |
| `.formal-table` | Tabla de prueba con auto-reveal (requiere header "Justificación") |
| `.logic-table` | Tabla de valores de verdad compacta |
| `.note-bar` | Barra de nota importante con borde izquierdo verde |
| `.formula` | Bloque de fórmula centrado con fondo oscuro |
| `.section-tag` | Etiqueta de sección (top-right, absolute) |
| `.case-badge.valid` / `.invalid` | Badges verde/rojo |
| `.interactive-answer` | Texto ocultado que se revela en hover |

### Reveal automático de pruebas

Las tablas con header `<th>Justificación</th>` activan el reveal automáticamente:
- Filas cuyo texto incluye "premisa" se muestran por defecto
- El resto se oculta con `.hidden-proof-step`
- Se revela de a uno con el botón 👁 (`.reveal-eye-btn-mini`)

Para que funcione: la celda de justificación de cada premisa debe contener la palabra "Premisa".

---

## Fuentes académicas

| Documento | Autor | Año |
|-----------|-------|-----|
| *Matemáticas Discretas Vol. I* (DRAFT) | M. Monsalve Leal | Oct. 2018 |
| *Práctica 2 parte I — Lógica de Predicados* | Paúl Quijada | Dic. 2024 |
| *Quiz II — Sección C7* | Y. Fernández / L. Colina | Dic. 2025 |
| *Solución del Parcial 2* | Grupo docente MDI | Dic. 2025 |
| *Solución Parcial II* | Grupo docente MDI | Jun. 2025 |

---

## Proyecto hermano

Este repositorio es parte de una serie. El proyecto anterior cubre **Lógica Proposicional**:

```
../practica_inferencia_logica_ucv/   ← Clase Práctica 4: Inferencia lógica proposicional
../practica_logica_predicados/       ← Este proyecto
```

La arquitectura CSS/JS es idéntica entre ambos proyectos (sistema de diseño compartido).

---

---

# PROMPT MAESTRO — Para continuar en otro chat

> Copia y pega este bloque completo al inicio de una nueva conversación con Claude Code para retomar el proyecto exactamente donde lo dejaste.

---

```
Contexto del proyecto: practica_logica_predicados (UCV)

Soy Luisdavid Colina, preparador de Matemática Discreta I en la UCV (Sección C7, Profesora Yuliana Fernández). Estoy construyendo una presentación web interactiva de Lógica de Predicados, ubicada en:

  c:\Users\usuario\Documents\ucv\discretas1\practica_logica_predicados\

Este proyecto es un fork arquitectónico de:

  c:\Users\usuario\Documents\ucv\discretas1\practica_inferencia_logica_ucv\

que cubre Lógica Proposicional (69 slides, completamente terminado).

---

STACK TÉCNICO:
- HTML5 mínimo + CSS3 Vanilla + JavaScript ES6 Vanilla (sin frameworks)
- Slides son template strings JS, inyectadas por assets/js/renderSlides.js
- Cada módulo de slides es un archivo separado en assets/js/slides/
- El orden se define en assets/js/slides/index.js (array `slides`)
- CSS modular: base.css + components.css + overrides.css → main.css
- Diseño: dark glassmorphism, --ucv-accent: #c8f07a (verde lima), --bg-dark: #0b0f12
- Slide fija: 1280×720px, escalada con JS a cualquier pantalla

---

ESTADO ACTUAL DEL PROYECTO: 28 slides funcionales

Estructura de slides en index.js:
  coverSlide, indexSlide
  Sección 1 (fundamentos.js): motivacion, predicados, cuantificadores, negacionAlcance
  Sección 2 (simbolizacion.js + equivalencias-reglas.js + metodos.js):
    universoFinito, formasCanonical, guiaSimbolizacion,
    equivalencias, implicaciones, reglasInferencia,
    metodoDirecto, pruebaInvalidez
  Sección 3 (ejercicios-basicos.js + ejercicios-avanzados-1.js + ejercicios-avanzados-2.js):
    metodologia, ejVV1, ejVV2, ejAlcance,
    quizEj1, quizEj3Analisis, quizEj3Solucion,
    quizEj2Analisis, quizEj2Solucion,
    parcialLucinaAnalisis, parcialLucinaSolucion,
    parcialComplejoB (analisis), parcialComplejoSolucion (21 pasos),
    bibliografia

---

FUENTES ACADÉMICAS (en docs/):
- MDI Prof. Monsalve II.pdf — libro de la cátedra (predicados, cuantificadores, argumentación)
- Práctica 2.pdf — guía Paúl Quijada, Sem. II-2024 (ejercicios 1-11)
- Quiz2_MDI_C7_II_2025.pdf — Quiz II que yo elaboré (3 ejercicios: simbolización, invalidez, validez)
- SOLUCION_Quiz2_MDI_C7_II_2025.pdf — solución oficial que yo redacté
- Solución del Parcial 2-II-2025.pdf — 5 ejercicios con soluciones detalladas
- Solucio╠ün Parcial II.pdf — Parcial del Sem. I-2025 (V/F + 3 de desarrollo)

Temas cubiertos por los PDFs:
  Proposiciones abiertas, universo del discurso, predicados simples y compuestos,
  cuantificadores universal ∀ y existencial ∃, valores de verdad de prop. cuantificadas,
  negación de cuantificadores (¬∀≡∃¬, ¬∃≡∀¬), alcance y variable libre,
  reglas de formación (fbf), simbolización (4 formas canónicas: todos/algunos/ningún/algunos),
  equivalencias lógicas con cuantificadores (8 leyes), implicaciones (6 leyes),
  reglas de inferencia PU/PE/GU/GE con la REGLA CRÍTICA: PE antes que PU,
  métodos de prueba: directo (ARD), condicional (PC), RAA,
  prueba de invalidez por contraejemplo con universo creciente U={a} → U={a,b},
  simbolización de argumentos en lenguaje natural,
  pruebas formales de validez de hasta 21 pasos.

Ejercicios de examen YA incluidos en el deck:
  ✓ Quiz II Ej. 1: simbolización argumento "ama apasionadamente"
  ✓ Quiz II Ej. 2: invalidez F(b)→∀x:P(x), ∃x:F(x), ∃x:[P(x)→R(x)] ∴ ∃x:R(x)
  ✓ Quiz II Ej. 3: validez 4 premisas ∴ ∃x:¬S(x) (12 pasos)
  ✓ Parcial II Ej. 3 (Lucina): prueba condicional (8 pasos)
  ✓ Parcial II Ej. 4: validez 5 premisas ∴ ∃x:[T(x)∧¬U(x)] (21 pasos)
  ✓ Parcial 2 Ej. 2: valor de verdad ∀x:[x>3→x²<3]

Ejercicios de la Práctica 2 pendientes de incorporar al deck (Ejs. 6, 7, 8, 9, 10, 11):
  - Ej. 6: valores de verdad con P(x):x²-8x+15=0, Q(x):x impar, R(x):x>0 (10 incisos)
  - Ej. 7: equivalencias lógicas formales (demostraciones algebraicas, ítems a-h)
  - Ej. 8: implicaciones lógicas (demostraciones con PC, ítems a-f)
  - Ej. 9: pruebas de validez con simbolización previa (9 argumentos, ítems a-i)
  - Ej. 10: pruebas de invalidez (5 argumentos, ítems a-e)
  - Ej. 11: pruebas de validez usando varios métodos (6 argumentos, ítems a-f)

Contenido del libro (Monsalve) pendiente de incorporar:
  - §1.5: Más equivalencias lógicas (tablas completas)
  - §1.6: Cuantificadores múltiples (∀x∀y, ∀x∃y, ∃x∀y, ∃x∃y)
  - §2.3: Argumentación con cuantificadores múltiples

---

REGLAS DE ESTILO (heredadas del proyecto anterior):
- Cada slide es un export const en su archivo JS
- HTML inline en template string, CSS clases del design system
- Tablas de prueba: class="formal-table" con <th>Justificación</th>
  → el motor auto-revela paso a paso con botón 👁 (filas con "Premisa" se muestran)
- Tooltips: usar atributo title="..." en elementos → el motor los convierte en tooltips CSS
- Notación lógica: usar Unicode directo: ∀ ∃ ∧ ∨ ¬ → ↔ ≡ ⇒ ∴
- Paleta: --ucv-accent: #c8f07a, #ff9a9a para falso/error, V en verde, F en rojo
- Variables CSS: --bg-dark, --bg-accent, --text-main, --text-dim, --ucv-accent-rgb

Para agregar nuevas slides:
  1. Editar el archivo de sección correspondiente (o crear uno nuevo)
  2. Exportar el template string
  3. Importar en assets/js/slides/index.js
  4. Agregar al array slides[] en el orden deseado
  5. Si necesita anclaje: addId(slide, 'slide-id') en index.js

Para agregar un sandbox lógico a un ejercicio:
  - La slide debe tener un div con id="sandbox-X" y class="sandbox-panel"
  - Registrar window.updateSandbox_sandbox-X = () => {...} en un <script> inline
    o mediante un módulo JS separado que se importe desde index.js

---

PRÓXIMOS PASOS SUGERIDOS (en orden de prioridad):
1. Agregar slides de Ejercicio 9 de la Práctica (pruebas de validez con simbolización previa)
   — son los más representativos para estudiantes, aparecen en todos los parciales
2. Agregar slides de Ejercicio 10 (invalidez) — algoritmo U creciente, ya tenemos el patrón
3. Agregar slides de §1.6 Cuantificadores Múltiples (∀x∀y, ∀x∃y...)
4. Agregar demostraciones de equivalencias lógicas (Ej. 7 de Práctica)
5. Considerar un sandbox interactivo para evaluación de proposiciones cuantificadas

---

Para correr el proyecto:
  cd "c:\Users\usuario\Documents\ucv\discretas1\practica_logica_predicados"
  npm run dev

Para ver el proyecto hermano (referencia de arquitectura):
  cd "c:\Users\usuario\Documents\ucv\discretas1\practica_inferencia_logica_ucv"
  npm run dev
```

---

*Última actualización: 2026-05-28*