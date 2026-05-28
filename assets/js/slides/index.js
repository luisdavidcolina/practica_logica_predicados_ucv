import { buildIndexSlide } from './index-slide.js';
import { coverSlide } from './cover.js';
import {
    motivacionSlide,
    predicadosSlide,
    cuantificadoresSlide,
    negacionAlcanceSlide
} from './fundamentos.js';
import {
    universoFinitoSlide,
    formasCanonicalSlide,
    guiaSimbolizacionSlide
} from './simbolizacion.js';
import {
    equivalenciasSlide,
    implicacionesSlide,
    reglasInferenciaSlide
} from './equivalencias-reglas.js';
import {
    metodoDirectoSlide,
    pruebaInvalidezSlide
} from './metodos.js';
import {
    metodologiaSlide,
    ejVV1Slide,
    ejVV2Slide,
    ejAlcanceSlide
} from './ejercicios-basicos.js';
import {
    quizEj1Slide,
    quizEj3AnalisisSlide,
    quizEj3SolucionSlide,
    quizEj2AnalisisSlide,
    quizEj2SolucionSlide
} from './ejercicios-avanzados-1.js';
import {
    parcialLucinaAnalisisSlide,
    parcialLucinaSolucionSlide,
    parcialComplejoBSlide,
    parcialComplejoSolucionSlide,
    bibliografiaSlide
} from './ejercicios-avanzados-2.js';
import {
    ej6PolinomioSetupSlide,
    ej6PolinomioVVSlide,
    parcial2Ej1SimbolizacionSlide,
    parcial2Ej3bEquivSlide,
    parcial2Ej5AnalisisSlide,
    parcial2Ej5SolucionSlide
} from './ejercicios-nuevos.js';

// ─── Utilidad ────────────────────────────────────────────────────────────────
const addId = (slide, id) => slide.replace('<div class="slide">', `<div class="slide" id="${id}">`);

// ─── Metadata de secciones ────────────────────────────────────────────────────
// Cada topic es { text, anchorId } para navegar directo a esa lámina.
// Para agregar secciones o láminas: edita este array y el array slides[] abajo.

const sectionMeta = [
    {
        tag: 'Sección 1',
        title: 'Fundamentos',
        anchorId: 'slide-motivacion',
        count: 4,
        topics: [
            { text: '¿Por qué Lógica de Predicados? — Sócrates', anchorId: 'slide-motivacion' },
            { text: 'Predicados · universo 𝕌 · constantes · variables', anchorId: 'slide-predicados' },
            { text: 'Cuantificadores ∀ y ∃ · testigos · contraejemplos', anchorId: 'slide-cuantificadores' },
            { text: 'Negación · alcance · variable libre y ligada', anchorId: 'slide-negacion-alcance' }
        ]
    },
    {
        tag: 'Sección 2',
        title: 'Herramientas',
        anchorId: 'slide-universo-finito',
        count: 8,
        topics: [
            { text: 'Universo finito y equivalencia proposicional', anchorId: 'slide-universo-finito' },
            { text: 'Las 4 formas canónicas de simbolización', anchorId: 'slide-formas-canonicas' },
            { text: 'Guía para simbolizar argumentos', anchorId: 'slide-guia-simbolizacion' },
            { text: '8 equivalencias lógicas con cuantificadores', anchorId: 'slide-equivalencias' },
            { text: '6 implicaciones lógicas con cuantificadores', anchorId: 'slide-implicaciones' },
            { text: 'Reglas PU · PE · GU · GE', anchorId: 'slide-reglas-inferencia' },
            { text: 'Métodos ARD · PC · RAA', anchorId: 'slide-metodo-directo' },
            { text: 'Prueba de invalidez por contraejemplo', anchorId: 'slide-prueba-invalidez' }
        ]
    },
    {
        tag: 'Sección 3',
        title: 'Práctica I',
        anchorId: 'slide-metodologia',
        count: 13,
        topics: [
            { text: 'Metodología · guía de ataque', anchorId: 'slide-metodologia' },
            { text: 'VV — Práctica 2 ej. 2c · ∀x:[Q→¬S]', anchorId: 'slide-ej-vv1' },
            { text: 'VV — Parcial 2 ej. 2 · ∀x:[x>3→x²<3]', anchorId: 'slide-ej-vv2' },
            { text: 'Alcance — Práctica 2 ej. 3e', anchorId: 'slide-ej-alcance' },
            { text: 'Simbolización — Quiz II ej. 1 (10 predicados)', anchorId: 'slide-quiz-ej1' },
            { text: 'Validez ARD — Quiz II ej. 3 · análisis', anchorId: 'slide-quiz-ej3-analisis' },
            { text: 'Validez ARD — Quiz II ej. 3 · solución 12 pasos', anchorId: 'slide-quiz-ej3-solucion' },
            { text: 'Invalidez — Quiz II ej. 2 · análisis', anchorId: 'slide-quiz-ej2-analisis' },
            { text: 'Invalidez — Quiz II ej. 2 · contraejemplo 𝕌={a,b}', anchorId: 'slide-quiz-ej2-solucion' },
            { text: 'Prueba PC — Parcial II (Lucina) · análisis', anchorId: 'slide-lucina-analisis' },
            { text: 'Prueba PC — Parcial II (Lucina) · solución 8 pasos', anchorId: 'slide-lucina-solucion' },
            { text: 'Validez Compleja — Parcial II ej. 4 · análisis', anchorId: 'slide-complejo-analisis' },
            { text: 'Validez Compleja — Parcial II ej. 4 · solución 21 pasos', anchorId: 'slide-complejo-solucion' }
        ]
    },
    {
        tag: 'Sección 4',
        title: 'Práctica II',
        anchorId: 'slide-ej6-polinomio',
        count: 6,
        topics: [
            { text: 'Laboratorio: P(x)=(x-3)(x-5) · tabla V/F', anchorId: 'slide-ej6-polinomio' },
            { text: 'VV ítems (a),(f),(j) · asimetría P→Q vs Q→P', anchorId: 'slide-ej6-vv' },
            { text: 'Simbolización — Parcial 2 ej. 1 · dos formas P1', anchorId: 'slide-parcial2-ej1' },
            { text: 'Prueba elegante — Equivalencia 8 en 4 pasos', anchorId: 'slide-parcial2-ej3b' },
            { text: 'Dos PE distintas — Parcial 2 ej. 5 · análisis', anchorId: 'slide-parcial2-ej5-analisis' },
            { text: 'Dos PE distintas — Parcial 2 ej. 5 · 18 pasos', anchorId: 'slide-parcial2-ej5-solucion' }
        ]
    }
];

// ─── Array de slides ──────────────────────────────────────────────────────────

export const slides = [
    coverSlide,
    buildIndexSlide(sectionMeta),

    // Sección 1: Fundamentos
    addId(motivacionSlide,       'slide-motivacion'),
    addId(predicadosSlide,       'slide-predicados'),
    addId(cuantificadoresSlide,  'slide-cuantificadores'),
    addId(negacionAlcanceSlide,  'slide-negacion-alcance'),

    // Sección 2: Herramientas
    addId(universoFinitoSlide,    'slide-universo-finito'),
    addId(formasCanonicalSlide,   'slide-formas-canonicas'),
    addId(guiaSimbolizacionSlide, 'slide-guia-simbolizacion'),
    addId(equivalenciasSlide,     'slide-equivalencias'),
    addId(implicacionesSlide,     'slide-implicaciones'),
    addId(reglasInferenciaSlide,  'slide-reglas-inferencia'),
    addId(metodoDirectoSlide,     'slide-metodo-directo'),
    addId(pruebaInvalidezSlide,   'slide-prueba-invalidez'),

    // Sección 3: Práctica I
    addId(metodologiaSlide,           'slide-metodologia'),
    addId(ejVV1Slide,                 'slide-ej-vv1'),
    addId(ejVV2Slide,                 'slide-ej-vv2'),
    addId(ejAlcanceSlide,             'slide-ej-alcance'),
    addId(quizEj1Slide,               'slide-quiz-ej1'),
    addId(quizEj3AnalisisSlide,       'slide-quiz-ej3-analisis'),
    addId(quizEj3SolucionSlide,       'slide-quiz-ej3-solucion'),
    addId(quizEj2AnalisisSlide,       'slide-quiz-ej2-analisis'),
    addId(quizEj2SolucionSlide,       'slide-quiz-ej2-solucion'),
    addId(parcialLucinaAnalisisSlide, 'slide-lucina-analisis'),
    addId(parcialLucinaSolucionSlide, 'slide-lucina-solucion'),
    addId(parcialComplejoBSlide,      'slide-complejo-analisis'),
    addId(parcialComplejoSolucionSlide,'slide-complejo-solucion'),

    // Sección 4: Práctica II
    addId(ej6PolinomioSetupSlide,       'slide-ej6-polinomio'),
    addId(ej6PolinomioVVSlide,          'slide-ej6-vv'),
    addId(parcial2Ej1SimbolizacionSlide,'slide-parcial2-ej1'),
    addId(parcial2Ej3bEquivSlide,       'slide-parcial2-ej3b'),
    addId(parcial2Ej5AnalisisSlide,     'slide-parcial2-ej5-analisis'),
    addId(parcial2Ej5SolucionSlide,     'slide-parcial2-ej5-solucion'),

    bibliografiaSlide,
];
