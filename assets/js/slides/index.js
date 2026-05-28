/**
 * index.js — Única fuente de verdad de la presentación.
 *
 * Para agregar / mover / borrar una lámina:
 *   1. Agrega { html, id, label } en el array slides[] de la sección correcta.
 *   2. El section-tag, el id, la entrada en el índice y el contador se actualizan solos.
 *   Nada más.
 */

import { buildIndexSlides } from './index-slide.js';
import { coverSlide }       from './cover.js';
import {
    motivacionSlide, predicadosSlide,
    cuantificadoresSlide, negacionAlcanceSlide
} from './fundamentos.js';
import {
    universoFinitoSlide, formasCanonicalSlide, guiaSimbolizacionSlide
} from './simbolizacion.js';
import {
    equivalenciasSlide, implicacionesSlide, reglasInferenciaSlide,
    particularizacionDetalleSlide, generalizacionDetalleSlide
} from './equivalencias-reglas.js';
import { metodoDirectoSlide, pruebaInvalidezSlide } from './metodos.js';
import {
    metodologiaSlide, ejVV1Slide, ejVV2Slide, ejAlcanceSlide
} from './ejercicios-basicos.js';
import {
    quizEj1Slide, quizEj3AnalisisSlide, quizEj3SolucionSlide,
    quizEj2AnalisisSlide, quizEj2SolucionSlide
} from './ejercicios-avanzados-1.js';
import {
    parcialLucinaAnalisisSlide, parcialLucinaSolucionSlide,
    parcialComplejoBSlide, parcialComplejoSolucionSlide, bibliografiaSlide
} from './ejercicios-avanzados-2.js';
import {
    ej6PolinomioSetupSlide, ej6PolinomioVVSlide,
    parcial2Ej1SimbolizacionSlide, parcial2Ej3bEquivSlide,
    parcial2Ej5AnalisisSlide, parcial2Ej5SolucionSlide
} from './ejercicios-nuevos.js';
import {
    erroresSimbolizacionSlide, erroresPruebasSlide,
    preguntasFrecSlide, curiosidadesSlide, documentosSlide
} from './extras.js';

// ─── Estructura de secciones ──────────────────────────────────────────────────
// Agrega aquí para que el índice y el section-tag se actualicen solos.

const sections = [
    {
        tag: 'Sección 1', title: 'Fundamentos',
        slides: [
            { html: motivacionSlide,      id: 'slide-motivacion',       label: '¿Por qué Lógica de Predicados? — Sócrates' },
            { html: predicadosSlide,      id: 'slide-predicados',       label: 'Predicados · universo 𝕌 · constantes · variables' },
            { html: cuantificadoresSlide, id: 'slide-cuantificadores',  label: 'Cuantificadores ∀ y ∃ · testigos · contraejemplos' },
            { html: negacionAlcanceSlide, id: 'slide-negacion-alcance', label: 'Negación · alcance · variable libre y ligada' },
        ]
    },
    {
        tag: 'Sección 2', title: 'Herramientas',
        slides: [
            { html: universoFinitoSlide,    id: 'slide-universo-finito',    label: 'Universo finito y equivalencia proposicional' },
            { html: formasCanonicalSlide,   id: 'slide-formas-canonicas',   label: 'Las 4 formas canónicas de simbolización' },
            { html: guiaSimbolizacionSlide, id: 'slide-guia-simbolizacion', label: 'Guía para simbolizar argumentos' },
            { html: equivalenciasSlide,     id: 'slide-equivalencias',      label: '8 equivalencias lógicas con cuantificadores' },
            { html: implicacionesSlide,     id: 'slide-implicaciones',      label: '6 implicaciones lógicas con cuantificadores' },
            { html: reglasInferenciaSlide,          id: 'slide-reglas-inferencia',          label: 'Reglas de inferencia PU · PE · GU · GE' },
            { html: particularizacionDetalleSlide,  id: 'slide-particularizacion-detalle',  label: 'PU y PE: cómo y cuándo aplicarlas · orden obligatorio' },
            { html: generalizacionDetalleSlide,     id: 'slide-generalizacion-detalle',     label: 'GU y GE: cómo y cuándo aplicarlas · condición de arbitrariedad' },
            { html: metodoDirectoSlide,             id: 'slide-metodo-directo',             label: 'Métodos ARD · PC · RAA' },
            { html: pruebaInvalidezSlide,   id: 'slide-prueba-invalidez',   label: 'Prueba de invalidez por contraejemplo' },
            { html: metodologiaSlide,       id: 'slide-metodologia',        label: 'Metodología para resolver ejercicios · guía de ataque' },
        ]
    },
    {
        tag: 'Sección 3', title: 'Práctica 2',
        slides: [
            { html: ejVV1Slide,             id: 'slide-ej-vv1',        label: 'VV — Práctica 2 ej. 2c · ∀x:[Q→¬S]' },
            { html: ejAlcanceSlide,         id: 'slide-ej-alcance',    label: 'Alcance — Práctica 2 ej. 3e' },
            { html: ej6PolinomioSetupSlide, id: 'slide-ej6-polinomio', label: 'Laboratorio: P(x)=(x-3)(x-5) · tabla de V/F' },
            { html: ej6PolinomioVVSlide,    id: 'slide-ej6-vv',        label: 'VV polinomio — ítems (a),(f),(j) · asimetría P↔Q' },
        ]
    },
    {
        tag: 'Sección 4', title: 'Evaluaciones',
        slides: [
            { html: ejVV2Slide,                   id: 'slide-ej-vv2',                label: 'VV — Parcial 2 ej. 2 · ∀x:[x>3→x²<3]' },
            { html: quizEj1Slide,                 id: 'slide-quiz-ej1',              label: 'Simbolización — Quiz II ej. 1' },
            { html: quizEj3AnalisisSlide,          id: 'slide-quiz-ej3-analisis',     label: 'Validez ARD — Quiz II ej. 3 · análisis' },
            { html: quizEj3SolucionSlide,          id: 'slide-quiz-ej3-solucion',     label: 'Validez ARD — Quiz II ej. 3 · solución (12 pasos)' },
            { html: quizEj2AnalisisSlide,          id: 'slide-quiz-ej2-analisis',     label: 'Invalidez — Quiz II ej. 2 · análisis' },
            { html: quizEj2SolucionSlide,          id: 'slide-quiz-ej2-solucion',     label: 'Invalidez — Quiz II ej. 2 · contraejemplo 𝕌={a,b}' },
            { html: parcial2Ej1SimbolizacionSlide, id: 'slide-parcial2-ej1',          label: 'Simbolización — Parcial 2 ej. 1 · dos formas P1' },
            { html: parcial2Ej3bEquivSlide,        id: 'slide-parcial2-ej3b',         label: 'Prueba elegante — Equivalencia 8 en 4 pasos' },
            { html: parcial2Ej5AnalisisSlide,      id: 'slide-parcial2-ej5-analisis', label: 'Validez dos PE — Parcial 2 ej. 5 · análisis' },
            { html: parcial2Ej5SolucionSlide,      id: 'slide-parcial2-ej5-solucion', label: 'Validez dos PE — Parcial 2 ej. 5 · solución (18 pasos)' },
            { html: parcialLucinaAnalisisSlide,    id: 'slide-lucina-analisis',       label: 'Prueba PC — Parcial II (Lucina) · análisis' },
            { html: parcialLucinaSolucionSlide,    id: 'slide-lucina-solucion',       label: 'Prueba PC — Parcial II (Lucina) · solución (8 pasos)' },
            { html: parcialComplejoBSlide,         id: 'slide-complejo-analisis',     label: 'Validez Compleja — Parcial II ej. 4 · análisis' },
            { html: parcialComplejoSolucionSlide,  id: 'slide-complejo-solucion',     label: 'Validez Compleja — Parcial II ej. 4 · solución (21 pasos)' },
        ]
    },
    {
        tag: 'Sección 5', title: 'Errores Comunes',
        slides: [
            { html: erroresSimbolizacionSlide, id: 'slide-errores-simbolizacion', label: 'Errores en simbolización (∀∧, ∃→, alcance)' },
            { html: erroresPruebasSlide,       id: 'slide-errores-pruebas',       label: 'Errores en pruebas (orden PE/PU, constantes, GU)' },
        ]
    },
    {
        tag: 'Sección 6', title: 'Preguntas Frecuentes',
        slides: [
            { html: preguntasFrecSlide, id: 'slide-faq', label: 'FAQ: ∀/∃, RAA/PC, FBF, var. libre, contraejemplos' },
        ]
    },
    {
        tag: 'Sección 7', title: 'Curiosidades',
        slides: [
            { html: curiosidadesSlide, id: 'slide-curiosidades', label: 'Sócrates · SQL · Russell · Gödel · polinomio UCV' },
        ]
    },
    {
        tag: 'Sección 8', title: 'Documentos',
        slides: [
            { html: documentosSlide, id: 'slide-documentos', label: 'PDFs: Práctica 2 · Quiz II · Parciales · Monsalve Vol. I' },
        ]
    },
];

// ─── Motor de ensamblaje ──────────────────────────────────────────────────────

function mountSlide(entry, sectionLabel) {
    return entry.html.replace(
        '<div class="slide">',
        `<div class="slide" id="${entry.id}">\n    <span class="section-tag">${sectionLabel}</span>`
    );
}

function buildContentSlides(sections) {
    return sections.flatMap(section => {
        const label = `${section.tag} · ${section.title}`;
        return section.slides.map(entry => mountSlide(entry, label));
    });
}

// ─── Export final ─────────────────────────────────────────────────────────────

export const slides = [
    coverSlide,
    ...buildIndexSlides(sections),          // 2 páginas de índice (S1-S4 / S5-S8)
    ...buildContentSlides(sections),
    bibliografiaSlide,
];
