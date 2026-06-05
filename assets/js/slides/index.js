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
    parcial2Ej5AnalisisSlide, parcial2Ej5SolucionSlide,
    p2Ej1DefinicionesSlide,
    p2Ej2VVExtraSlide,
    p2Ej3AlcanceExtraSlide,
    p2Ej4UniversoFinitoSlide,
    p2Ej5SimbolizacionSlide,
    p2Ej5SimbolizacionCDESlide,
    p2Ej5SimbolizacionFGHISlide,
    p2Ej7EquivCSlide,
    p2Ej8ImplFSlide,
    p2Ej9ValidezBSlide,
    p2Ej10InvalidezASlide,
    p2Ej11ValidezASlide
} from './ejercicios-nuevos.js';
import {
    erSimbolizacion5cSlide, erEquivalencia7fSlide,
    erPCAnalisis11dSlide, erPCEstrategia11dSlide, erPCSolucion11dSlide,
    erRAAAnalisis11fSlide, erRAAFases11fSlide, erRAASolucion11fSlide, erRAASolucion2_11fSlide,
    erCasosIntro11aSlide, erCasos11aSlide,
    erInvalidezAnalisis10cSlide, erInvalidezExpansion10cSlide, erInvalidez10cSlide
} from './ejercicios-resueltos.js';
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
            { html: p2Ej1DefinicionesSlide,      id: 'slide-p2-ej1-def',       label: 'Ej. 1 — Definiciones: 𝕌, predicado, ∀, ∃, PU/PE/GU/GE, alcance, var. libre' },
            { html: ejVV1Slide,                  id: 'slide-ej-vv1',            label: 'Ej. 2c — VV: ∀x:[Q→¬S] · contraejemplo x=4' },
            { html: p2Ej2VVExtraSlide,           id: 'slide-p2-ej2-vv-extra',   label: 'Ej. 2 — VV ítems a, d, e · testigos y contraejemplos' },
            { html: ejAlcanceSlide,              id: 'slide-ej-alcance',        label: 'Ej. 3e — Alcance: ∃x:P(x) ↔ ∃y:R(y) ∧ Q(x) libre' },
            { html: p2Ej3AlcanceExtraSlide,      id: 'slide-p2-ej3-alcance',    label: 'Ej. 3 — Alcance ítems a, b · cuantificadores anidados' },
            { html: p2Ej4UniversoFinitoSlide,    id: 'slide-p2-ej4-finito',     label: 'Ej. 4 — Universo finito {a,b} ítems a, c · expansión proposicional' },
            { html: p2Ej5SimbolizacionSlide,     id: 'slide-p2-ej5-simb',       label: 'Ej. 5a — Simbolización: bailarines de claqué · patrón SH' },
            { html: p2Ej5SimbolizacionCDESlide,  id: 'slide-p2-ej5-cde',        label: 'Ej. 5 — Simbolización ítems c, d, e · SH / MP+constante / ∀+∃¬' },
            { html: p2Ej5SimbolizacionFGHISlide, id: 'slide-p2-ej5-fghi',       label: 'Ej. 5 — Simbolización ítems f, g, h, i · 4 patrones distintos' },
            { html: ej6PolinomioSetupSlide,      id: 'slide-ej6-polinomio',     label: 'Ej. 6 — Laboratorio: P(x)=(x−3)(x−5) · tabla de V/F' },
            { html: ej6PolinomioVVSlide,         id: 'slide-ej6-vv',            label: 'Ej. 6 — VV ítems (a),(f),(j) · asimetría P↔Q' },
            { html: p2Ej7EquivCSlide,            id: 'slide-p2-ej7-equiv-c',    label: 'Ej. 7c — Equivalencia ∀x:[P∧Q] ≡ ∀x:P ∧ ∀x:Q (bidireccional)' },
            { html: p2Ej8ImplFSlide,             id: 'slide-p2-ej8-impl-f',     label: 'Ej. 8f — Implicación ∀[P→Q] ⇒ ∃P→∃Q · método condicional' },
            { html: p2Ej9ValidezBSlide,          id: 'slide-p2-ej9-validez-b',  label: 'Ej. 9b — Validez: bailarines/esgrimistas · PE+MT+GE (9 pasos)' },
            { html: p2Ej10InvalidezASlide,       id: 'slide-p2-ej10-invalidez', label: 'Ej. 10a — Invalidez: contraejemplo 𝕌={a}, P(a)=V, R(a)=F' },
            { html: p2Ej11ValidezASlide,         id: 'slide-p2-ej11-validez-a', label: 'Ej. 11a — Validez compleja: PC+GU+distributiva ∨∧ (13 pasos)' },
        ]
    },
    {
        tag: 'Sección 4', title: 'Ejercicios Resueltos',
        slides: [
            { html: erSimbolizacion5cSlide,   id: 'slide-er-simb-5c',        label: 'Ej. 5c — Simbolización: ejecutivos · cansado · feliz · 3 formas equivalentes' },
            { html: erEquivalencia7fSlide,    id: 'slide-er-equiv-7f',       label: 'Ej. 7f — Equivalencia ∀x:[Q(x)→P(j)] ≡ ∃x:Q(x)→P(j) · constante fija j' },
            { html: erPCAnalisis11dSlide,     id: 'slide-er-pc-concepto',    label: 'Ej. 11d — PC concepto: ∀ fuera / → dentro · razonamiento elemento a elemento' },
            { html: erPCEstrategia11dSlide,   id: 'slide-er-pc-estrategia',  label: 'Ej. 11d — PC estrategia: error frecuente · procedimiento correcto paso a paso' },
            { html: erPCSolucion11dSlide,     id: 'slide-er-pc-solucion',    label: 'Ej. 11d — PC solución: C(x)∧P(x)→¬E(x) · 13 pasos' },
            { html: erRAAAnalisis11fSlide,    id: 'slide-er-raa-analisis',   label: 'Ej. 11f — RAA análisis: suposición ¬∀ · De Morgan cuantificado · B(a)∧¬C(a)' },
            { html: erRAAFases11fSlide,       id: 'slide-er-raa-fases',      label: 'Ej. 11f — RAA desarrollo: pasos 11-13 clave · C(a)∧¬C(a) contradicción' },
            { html: erRAASolucion11fSlide,    id: 'slide-er-raa-sol-1',      label: 'Ej. 11f — RAA solución (1/2): premisas + suposición + B(a)∧¬C(a) + PU (pasos 1-9)' },
            { html: erRAASolucion2_11fSlide,  id: 'slide-er-raa-sol-2',      label: 'Ej. 11f — RAA solución (2/2): derivar C(a) → contradicción C(a)∧¬C(a) (pasos 10-17)' },
            { html: erCasosIntro11aSlide,     id: 'slide-er-casos-intro',    label: 'Ej. 11a — Casos análisis: equivalencias P2 y C · apertura P(a)∨Q(a)' },
            { html: erCasos11aSlide,          id: 'slide-er-casos-prueba',   label: 'Ej. 11a — Casos solución: ¬R(x)→P(x) · 10 pasos con separadores de caso' },
            { html: erInvalidezAnalisis10cSlide,   id: 'slide-er-invalidez-analisis',  label: 'Ej. 10c — Invalidez Paso 1: U={a} válido por leyes (5 pasos, MP)' },
            { html: erInvalidezExpansion10cSlide,  id: 'slide-er-invalidez-expansion', label: 'Ej. 10c — Invalidez Paso 2: expansión U={a,b} · equivalencias ∃ y ∀ explicadas' },
            { html: erInvalidez10cSlide,           id: 'slide-er-invalidez-sandbox',   label: 'Ej. 10c — Invalidez Paso 2: simulador interactivo · contraejemplo F(b)=F' },
        ]
    },
    {
        tag: 'Sección 5', title: 'Evaluaciones',
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
        tag: 'Sección 6', title: 'Errores Comunes',
        slides: [
            { html: erroresSimbolizacionSlide, id: 'slide-errores-simbolizacion', label: 'Errores en simbolización (∀∧, ∃→, alcance)' },
            { html: erroresPruebasSlide,       id: 'slide-errores-pruebas',       label: 'Errores en pruebas (orden PE/PU, constantes, GU)' },
        ]
    },
    {
        tag: 'Sección 7', title: 'Preguntas Frecuentes',
        slides: [
            { html: preguntasFrecSlide, id: 'slide-faq', label: 'FAQ: ∀/∃, RAA/PC, FBF, var. libre, contraejemplos' },
        ]
    },
    {
        tag: 'Sección 8', title: 'Curiosidades',
        slides: [
            { html: curiosidadesSlide, id: 'slide-curiosidades', label: 'Sócrates · SQL · Russell · Gödel · polinomio UCV' },
        ]
    },
    {
        tag: 'Sección 9', title: 'Documentos',
        slides: [
            { html: documentosSlide, id: 'slide-documentos', label: 'PDFs: Práctica 2 · Ejercicios Resueltos · Quiz II · Parciales · Monsalve Vol. I' },
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
    ...buildIndexSlides(sections, 1),        // 9 páginas de índice (una sección por página)
    ...buildContentSlides(sections),
    bibliografiaSlide,
];
