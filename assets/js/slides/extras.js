// Secciones extra: Errores Comunes · Preguntas Frecuentes · Curiosidades · Documentos

// ─── Errores Comunes ──────────────────────────────────────────────────────────

export const erroresSimbolizacionSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Errores en <span>Simbolización</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:12px;">
            Estos errores aparecen en <strong>todos</strong> los exámenes. Identifícalos antes del parcial.
        </div>
        <div class="case-grid" style="margin-bottom:12px;">
            <div class="case-card" style="border-color:rgba(255,120,120,0.4);">
                <div class="case-head">
                    <h3>Error 1: ∀ con ∧</h3>
                    <span class="case-badge invalid">Muy común</span>
                </div>
                <div class="case-formula" style="font-size:17px; text-align:left; padding:8px 12px; line-height:1.9;">
                    ❌ $\forall x:[G(x)\land E(x)]$ — "todo x es G <em>y</em> E"<br>
                    ✓&nbsp; $\forall x:[G(x)\to E(x)]$ — "todo G es E"
                </div>
                <p class="case-desc" style="font-size:15px;">"Todos los G son E" siempre usa $\to$, nunca $\land$. Con $\land$ afirmas que <em>todo</em> elemento del universo es G y E — una restricción mucho más fuerte.</p>
            </div>
            <div class="case-card" style="border-color:rgba(255,120,120,0.4);">
                <div class="case-head">
                    <h3>Error 2: ∃ con →</h3>
                    <span class="case-badge invalid">Muy común</span>
                </div>
                <div class="case-formula" style="font-size:17px; text-align:left; padding:8px 12px; line-height:1.9;">
                    ❌ $\exists x:[G(x)\to E(x)]$ — casi siempre V<br>
                    ✓&nbsp; $\exists x:[G(x)\land E(x)]$ — "algún G es E"
                </div>
                <p class="case-desc" style="font-size:15px;">"Algunos G son E" siempre usa $\land$. Con $\to$: si existe un solo $x$ con $G(x)=\text{F}$, el condicional es V vacuamente — la proposición casi siempre resulta verdadera sin decir nada útil.</p>
            </div>
            <div class="case-card" style="border-color:rgba(255,120,120,0.4);">
                <div class="case-head">
                    <h3>Error 3: Ningún G es E</h3>
                    <span class="case-badge invalid">Confusión frecuente</span>
                </div>
                <div class="case-formula" style="font-size:17px; text-align:left; padding:8px 12px; line-height:1.9;">
                    ❌ $\forall x:[G(x)\land\lnot E(x)]$ — todo x es G y no-E<br>
                    ✓&nbsp; $\forall x:[G(x)\to\lnot E(x)]$ ó $\lnot\exists x:[G(x)\land E(x)]$
                </div>
                <p class="case-desc" style="font-size:15px;">"Ningún" implica condicional negado, no conjunción. Las dos formas correctas son equivalentes.</p>
            </div>
            <div class="case-card" style="border-color:rgba(255,120,120,0.4);">
                <div class="case-head">
                    <h3>Error 4: Alcance erróneo</h3>
                    <span class="case-badge invalid">Sutil</span>
                </div>
                <div class="case-formula" style="font-size:17px; text-align:left; padding:8px 12px; line-height:1.9;">
                    ❌ $\forall x:P(x)\land Q(x)$ — solo P bajo ∀<br>
                    ✓&nbsp; $\forall x:[P(x)\land Q(x)]$ — ambas bajo ∀
                </div>
                <p class="case-desc" style="font-size:15px;">Sin corchetes, el cuantificador alcanza solo la mínima fbf. Los corchetes son obligatorios para extender el alcance.</p>
            </div>
        </div>
        <div class="note-bar" style="font-size:15px;">
            <strong>Regla de oro:</strong> con $\forall$ usá $\to$ · con $\exists$ usá $\land$ · con "ningún" usá $\forall[\cdot\to\lnot\cdot]$ o $\lnot\exists[\cdot\land\cdot]$
        </div>
    </div>
</div>`;

export const erroresPruebasSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Errores en <span>Pruebas Formales</span></h2>
    <div class="content">
        <div class="case-grid" style="margin-bottom:12px;">
            <div class="case-card" style="border-color:rgba(255,120,120,0.4);">
                <div class="case-head">
                    <h3>Error 5: PU antes que PE</h3>
                    <span class="case-badge invalid">Error fatal</span>
                </div>
                <p class="case-desc">Cuando hay $\exists$ y $\forall$ en premisas, <strong>siempre</strong> se particulariza primero el $\exists$ (PE) y luego el $\forall$ (PU).</p>
                <div class="case-formula" style="font-size:15px; text-align:left; padding:8px 12px; line-height:1.8;">
                    ❌ PU de P1 → obtenemos $A(a)$<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;PE de P2 → obtenemos $B(a)$ ← ¡misma constante!<br>
                    ✓ PE de P2 → obtenemos $B(a)$ (constante nueva)<br>
                    &nbsp;&nbsp;&nbsp;PU de P1 → obtenemos $A(a)$ (misma constante del PE)
                </div>
            </div>
            <div class="case-card" style="border-color:rgba(255,120,120,0.4);">
                <div class="case-head">
                    <h3>Error 6: Misma constante en dos PE</h3>
                    <span class="case-badge invalid">Error fatal</span>
                </div>
                <p class="case-desc">Cada aplicación de PE introduce una constante <strong>completamente nueva</strong>. Usar la misma constante para dos PE distintos contamina la prueba.</p>
                <div class="case-formula" style="font-size:15px; text-align:left; padding:8px 12px; line-height:1.8;">
                    ❌ PE de P1 → $P(a)$ &nbsp;&nbsp; PE de P2 → $Q(a)$ ← mismo $a$<br>
                    ✓ PE de P1 → $P(a)$ &nbsp;&nbsp; PE de P2 → $Q(b)$ ← $b\neq a$
                </div>
            </div>
            <div class="case-card" style="border-color:rgba(255,120,120,0.4);">
                <div class="case-head">
                    <h3>Error 7: GU sin condiciones</h3>
                    <span class="case-badge invalid">Común en parciales</span>
                </div>
                <p class="case-desc">Solo se puede aplicar GU a $P(x)$ si $x$ es <strong>arbitraria</strong>: no obtenida de ningún PE, y no aparece libre en ninguna premisa.</p>
                <div class="case-formula" style="font-size:15px; text-align:left; padding:8px 12px; line-height:1.8;">
                    ❌ PE de P1 → $P(a)$ → ... → $Q(a)$ → GU → $\forall x:Q(x)$<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;¡La constante $a$ vino de PE, no es arbitraria!
                </div>
            </div>
            <div class="case-card" style="border-color:rgba(255,120,120,0.4);">
                <div class="case-head">
                    <h3>Error 8: No justificar pasos</h3>
                    <span class="case-badge invalid">Puntos perdidos</span>
                </div>
                <p class="case-desc">En UCV <strong>cada paso</strong> debe tener su justificación explícita. "Es obvio" o "se deduce" no se aceptan.</p>
                <div class="case-formula" style="font-size:15px; text-align:left; padding:8px 12px; line-height:1.8;">
                    Justificaciones requeridas: Premisa N · PU para x=a en N<br>
                    PE para x=a en N · GU en N · GE en N<br>
                    MP entre N y M · MT entre N y M · SD entre N y M
                </div>
            </div>
        </div>
        <div class="note-bar" style="font-size:15px;">
            <strong>Checklist antes de entregar:</strong> ¿Aplicaste PE antes que PU? ¿Cada PE con constante diferente? ¿GU solo sobre variables arbitrarias? ¿Cada paso justificado?
        </div>
    </div>
</div>`;

// ─── Preguntas Frecuentes ─────────────────────────────────────────────────────

export const preguntasFrecSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Preguntas <span>Frecuentes</span></h2>
    <div class="content">
        <div class="guide-grid" style="grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:17px;">¿∀ con → ó con ∧?</h3>
                <ul>
                    <li>"Todos los A son B" → $\forall x:[A(x)\to B(x)]$</li>
                    <li>Con $\land$: afirmas que todo x del universo es A y B</li>
                    <li>Regla: <strong>∀ + →</strong> siempre (excepto cuando explícitamente "todo x es A y B")</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:17px;">¿Cuándo uso RAA vs PC?</h3>
                <ul>
                    <li><strong>PC</strong>: conclusión tiene forma $A\to B$ → asume $A$, demuestra $B$</li>
                    <li><strong>RAA</strong>: conclusión es difícil de obtener directo → asume $\lnot C$, llega a $P\land\lnot P$</li>
                    <li>ARD primero; si no funciona, intenta PC o RAA</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:17px;">¿Qué es una FBF?</h3>
                <ul>
                    <li><strong>FBF</strong> = Fórmula Bien Formada — expresión con sintaxis válida</li>
                    <li>$P(x)$, $\lnot P(x)$, $P(x)\land Q(x)$, $\forall x:P(x)$ son FBFs</li>
                    <li>$\forall:P(x)$ o $P \land$ no son FBFs (mal formadas)</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:17px;">¿Variable libre vs ligada?</h3>
                <ul>
                    <li><strong>Ligada</strong>: está bajo el alcance de un cuantificador</li>
                    <li><strong>Libre</strong>: no está bajo ningún cuantificador</li>
                    <li>En $\exists x:P(x)\land Q(y)$: $x$ es ligada, $y$ es libre</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:17px;">¿Cómo falsificar un ∀?</h3>
                <ul>
                    <li>Basta <strong>un contraejemplo</strong>: un $x_0$ donde el predicado sea F</li>
                    <li>Para $\forall x:[Q(x)\to P(x)]$: busca $x_0$ con $Q(x_0)=\text{V}$ y $P(x_0)=\text{F}$</li>
                    <li>Estrategia: probar $x = 0, 1, -1, 2, 7$ — valores "típicos"</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:17px;">¿Cómo verificar un ∃?</h3>
                <ul>
                    <li>Basta <strong>un testigo</strong>: un $x_0$ donde el predicado sea V</li>
                    <li>Para $\exists x:[P(x)\land Q(x)]$: encuentra $x_0$ que satisfaga ambos</li>
                    <li>Para falsificar ∃: demostrar que P es F para <em>todos</em> los x del universo</li>
                </ul>
            </div>
        </div>
        <div class="note-bar" style="font-size:15px;">
            <strong>Resumen ultra-rápido:</strong> ∀+→ · ∃+∧ · PE antes PU · cada PE constante nueva · GU solo x arbitraria · un contraejemplo falsifica ∀ · un testigo verifica ∃
        </div>
    </div>
</div>`;

// ─── Curiosidades ─────────────────────────────────────────────────────────────

export const curiosidadesSlide = String.raw`
<div class="slide">
    <h2 class="slide-title"><span>Curiosidades</span> que nadie te cuenta en clase</h2>
    <div class="content">
        <div class="concept-grid" style="margin-bottom:10px;">
            <div class="concept-card">
                <span class="concept-tag">Prolog · 1972</span>
                <h3>Un lenguaje que <em>es</em> lógica de predicados</h3>
                <p>Prolog no <em>usa</em> predicados — <strong>es</strong> predicados. El programa completo:</p>
                <p style="font-size:13px; color:var(--ucv-accent); font-family:monospace; line-height:1.8; margin:4px 0;">feliz(X) :- baila(X).<br>baila(juan).</p>
                <p style="font-size:14px;">es exactamente $\forall x:[B(x)\to F(x)]$ y $B(j)$. Escribe dos hechos y Prolog infiere $F(j)$ solo. Hoy se usa en IA, bioinformática y sistemas legales automatizados.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">Russell · 1901</span>
                <h3>La paradoja del barbero</h3>
                <p>"En un pueblo hay un barbero que afeita exactamente a quienes <strong>no se afeitan solos</strong>. ¿Quién afeita al barbero?"</p>
                <p style="font-size:14px; margin-top:6px;">Formalizado: $\exists x:\forall y:[A(x,y)\leftrightarrow\lnot A(y,y)]$. Esta proposición es <strong style="color:#ff9a9a;">inconsistente</strong> — ni V ni F. Russell la usó para demostrar que el sistema de Frege (base de las matemáticas de la época) era fundamentalmente roto.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">Gödel · 1931</span>
                <h3>"Esta oración no es demostrable"</h3>
                <p>Gödel construyó una oración $G$ que dice exactamente eso de sí misma. Si $G$ fuera demostrable → el sistema es inconsistente. Si $G$ no es demostrable → es <strong>verdadera</strong> pero el sistema no puede probarlo.</p>
                <p style="font-size:14px; margin-top:6px;">Conclusión: <em>todo</em> sistema de matemáticas tiene verdades que nunca podrá demostrar. Para siempre. No importa cuántos axiomas agregues.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">Turing · 1936</span>
                <h3>$\forall x:P(x)$ a veces es <em>imposible</em> de saber</h3>
                <p>Turing demostró que no existe ningún algoritmo capaz de decidir si $\forall x:P(x)$ es verdadera para un predicado arbitrario sobre los enteros.</p>
                <p style="font-size:14px; margin-top:6px;">La lógica de predicados es <strong>semidecidible</strong>: si la respuesta es SÍ, eventualmente se encuentra. Si es NO, el algoritmo corre <em>para siempre</em> sin saberlo. Lo que estudias aquí tiene límites que ninguna computadora puede superar.</p>
            </div>
        </div>
        <div class="note-bar" style="font-size:14px; padding:8px 16px;">
            <strong>Tu teléfono hace esto ahora mismo:</strong> Google Knowledge Graph, Siri y Alexa usan ontologías OWL — predicados de primer orden. Cuando preguntas "¿dónde nació Einstein?" el sistema infiere $\exists x:[P(x,\text{Einstein})\land L(x,\text{Ulm})]$ en milisegundos. La misma lógica que estudias hoy mueve billones de consultas por día.
        </div>
    </div>
</div>`;

// ─── Documentos ───────────────────────────────────────────────────────────────

export const documentosSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Documentos y <span>Referencias</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:12px; font-size:15px;">
            Todos los materiales oficiales de la cátedra. Haz clic en cualquier tarjeta para abrir el PDF.
        </div>
        <div class="concept-grid" style="grid-template-columns:repeat(3,1fr); margin-bottom:12px;">
            <div class="concept-card doc-card" style="cursor:pointer;"
                 onclick="window.open('docs/ejercicios_resueltos_predicados.pdf')">
                <span class="concept-tag">Ejercicios</span>
                <h3 style="font-size:18px;">Ejercicios Resueltos</h3>
                <p>6 ejercicios resueltos de Práctica 2: simbolización, equivalencia, PC, RAA, Prueba por Casos e Invalidez. Elaborado por Luisdavid Colina.</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">Sem. I-2026 · Sección C4 <i class="fas fa-file-pdf"></i></p>
            </div>
            <div class="concept-card doc-card" style="cursor:pointer;"
                 onclick="window.open('docs/Práctica 2.pdf')">
                <span class="concept-tag">Práctica</span>
                <h3 style="font-size:18px;">Práctica 2 — Parte I</h3>
                <p>Guía de ejercicios de Lógica de Predicados. Elaborada por el Prof. Paúl Quijada a partir de guías de Monsalve y Hernández.</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">Sem. II-2024 · 18 Dic. 2024 <i class="fas fa-file-pdf"></i></p>
            </div>
            <div class="concept-card doc-card" style="cursor:pointer;"
                 onclick="window.open('docs/Quiz2_MDI_C7_II_2025.pdf')">
                <span class="concept-tag">Evaluación</span>
                <h3 style="font-size:18px;">Quiz II — Sección C7</h3>
                <p>Enunciado del Quiz II de la Sección C7. Ejercicios de simbolización, invalidez y validez.</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">12 Dic. 2025 · Prof. Yuliana Fernández <i class="fas fa-file-pdf"></i></p>
            </div>
            <div class="concept-card doc-card" style="cursor:pointer;"
                 onclick="window.open('docs/SOLUCION_Quiz2_MDI_C7_II_2025.pdf')">
                <span class="concept-tag">Solución</span>
                <h3 style="font-size:18px;">Solución Quiz II — C7</h3>
                <p>Solución completa del Quiz II. Elaborada por Luisdavid Colina / Preparador Sección C7.</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">Sem. II-2025 <i class="fas fa-file-pdf"></i></p>
            </div>
            <div class="concept-card doc-card" style="cursor:pointer;"
                 onclick="window.open('docs/Solución del Parcial 2-II-2025.pdf')">
                <span class="concept-tag">Solución</span>
                <h3 style="font-size:18px;">Solución Parcial 2</h3>
                <p>Solución oficial del Parcial 2 del Sem. II-2025. 5 ejercicios incluyendo el problema del polinomio y la prueba de 18 pasos.</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">17 Dic. 2025 · Grupo docente MDI <i class="fas fa-file-pdf"></i></p>
            </div>
            <div class="concept-card doc-card" style="cursor:pointer;"
                 onclick="window.open('docs/Solución Parcial II.pdf')">
                <span class="concept-tag">Solución</span>
                <h3 style="font-size:18px;">Solución Parcial II</h3>
                <p>Solución del Parcial II del Sem. I-2025. Incluye el ejercicio de Lucina (PC, 8 pasos) y el ejercicio complejo (21 pasos).</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">06 Jun. 2025 · Grupo docente MDI <i class="fas fa-file-pdf"></i></p>
            </div>
            <div class="concept-card doc-card" style="cursor:pointer;"
                 onclick="window.open('docs/Leyes de equivalencia y Reglas de Inferencia (Predicados).pdf')">
                <span class="concept-tag">Referencia</span>
                <h3 style="font-size:18px;">Leyes y Reglas — Predicados</h3>
                <p>Tabla de equivalencias lógicas, implicaciones y reglas de inferencia (PU, PE, GU, GE) para lógica de predicados. Elaborada por la cátedra.</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">MDI C7 · Referencia rápida <i class="fas fa-file-pdf"></i></p>
            </div>
            <div class="concept-card doc-card" style="cursor:pointer;"
                 onclick="window.open('docs/MDI Prof. Monsalve II.pdf')">
                <span class="concept-tag">Libro</span>
                <h3 style="font-size:18px;">Monsalve Leal — Vol. I</h3>
                <p>Borrador del libro <em>Matemáticas Discretas Vol. I</em> de la Dra. M. Monsalve Leal. Referencia teórica principal de la cátedra.</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">Draft Oct. 2018 · UCV <i class="fas fa-book"></i></p>
            </div>
        </div>
    </div>
</div>`;

export const rubricaSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Cómo se <span>corrige</span> (rúbrica)</h2>
    <div class="content">
        <div class="case-intro">
            En Predicados el resultado no basta: se evalúa el <strong>método</strong>. Así se reparte una pregunta típica de validez (4–5 pts).
        </div>
        <table>
            <thead><tr><th>Criterio</th><th>Excelente</th><th>Insuficiente</th><th>Peso</th></tr></thead>
            <tbody>
                <tr><td><strong>Diccionario y universo</strong></td><td>Declara $\mathbb{U}$ y cada predicado con su aridad</td><td>Usa $P(x)$ sin decir qué significa ni sobre qué universo</td><td>0.5</td></tr>
                <tr><td><strong>Simbolización</strong></td><td>$\forall$ con $\to$, $\exists$ con $\wedge$; alcance y paréntesis correctos</td><td>$\forall x:[P(x)\wedge Q(x)]$ o $\exists x:[P(x)\to Q(x)]$</td><td>1.0</td></tr>
                <tr><td><strong>Justificación por línea</strong></td><td>Regla exacta y líneas: "PU 2", "MP 3,5", "PE 1"</td><td>Pasos sin razón</td><td><strong>1.5</strong></td></tr>
                <tr><td><strong>Orden PE antes que PU</strong></td><td>Instancia primero los $\exists$ (constante nueva) y luego los $\forall$</td><td>Reutiliza una constante ya usada o invierte el orden</td><td>1.0</td></tr>
                <tr><td><strong>Cierre</strong></td><td>GU/GE bien aplicadas; descarga de PC/RAA</td><td>Generaliza sobre una constante que vino de PE</td><td>1.0</td></tr>
            </tbody>
        </table>
        <div class="note-bar">
            <strong>Estrategia:</strong> aunque no cierres la derivación, escribe el diccionario, la simbolización y la estrategia elegida. Esa parte se corrige aparte y salva puntos. Y recuerda: <strong>nunca</strong> apliques GU a una constante introducida por PE.
        </div>
    </div>
</div>`;

export const autoevaluacionSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Autoevaluación: <span>¿estás listo?</span></h2>
    <div class="content">
        <div class="case-intro">Responde sin mirar; las respuestas están abajo.</div>
        <div class="concept-grid">
            <div class="concept-card">
                <span class="concept-tag">1</span>
                <h3>Conectiva por cuantificador</h3>
                <p>"Todo estudiante aprueba": ¿$\forall x:[E(x)\wedge A(x)]$ o $\forall x:[E(x)\to A(x)]$? ¿Por qué la otra es falsa?</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">2</span>
                <h3>Negación</h3>
                <p>Niega y mete la negación hasta el átomo: $\neg\,\forall x\,\exists y:[P(x,y)\to Q(y)]$.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">3</span>
                <h3>Orden de instanciación</h3>
                <p>Tienes $\forall x: P(x)$ y $\exists x: Q(x)$. ¿Cuál instancias primero y con qué constante?</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">4</span>
                <h3>Invalidez</h3>
                <p>¿Qué debes exhibir para probar que un argumento cuantificado es inválido?</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">5</span>
                <h3>Alcance</h3>
                <p>¿Son equivalentes $\forall x\,\exists y: A(x,y)$ y $\exists y\,\forall x: A(x,y)$?</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">6</span>
                <h3>Variable libre</h3>
                <p>En $\forall x:[P(x)\to Q(y)]$, ¿qué variable es libre y por qué eso importa?</p>
            </div>
        </div>
        <div class="note-bar">
            <strong>Respuestas:</strong> 1) con $\to$; con $\wedge$ afirmaría que <em>todo</em> objeto del universo es estudiante. — 2) $\exists x\,\forall y:[P(x,y)\wedge\neg Q(y)]$. — 3) primero $\exists$ (PE) con una constante <strong>nueva</strong>; luego PU sobre esa misma constante. — 4) un universo concreto y una interpretación de los predicados que hagan todas las premisas verdaderas y la conclusión falsa. — 5) No: $\exists y\,\forall x$ es más fuerte (un mismo $y$ sirve para todos). — 6) $y$ es libre; la fórmula no es una proposición hasta asignarle valor, y no se puede generalizar sobre ella.
        </div>
    </div>
</div>`;
