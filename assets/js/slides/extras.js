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
    <h2 class="slide-title"><span>Curiosidades</span> de la Lógica de Predicados</h2>
    <div class="content">
        <div class="concept-grid" style="margin-bottom:12px;">
            <div class="concept-card">
                <span class="concept-tag">350 a.C.</span>
                <h3>Sócrates tenía razón</h3>
                <p>El argumento "todos los hombres son mortales" que abre esta presentación fue analizado por <strong>Aristóteles</strong> en su <em>Prior Analytics</em>. La notación formal $\forall x:[H(x)\to M(x)]$ llegó 2375 años después, con Frege en 1879.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">SQL = LP</span>
                <h3>La usas todos los días</h3>
                <p>Una consulta SQL es literalmente lógica de predicados:<br>
                <code style="font-size:13px; color:var(--ucv-accent);">SELECT * FROM users WHERE age > 18</code><br>
                es $\exists x:[U(x)\land A(x,18)]$ — "existe un usuario cuya edad es &gt;18". Los motores de bases de datos son evaluadores de predicados.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">1901</span>
                <h3>La paradoja que rompió la lógica</h3>
                <p><strong>Bertrand Russell</strong> definió: sea $S = \{x \mid x\notin x\}$. ¿Es $S\in S$? Si sí → $S\notin S$. Si no → $S\in S$. Esta paradoja destruyó el sistema de Frege y forzó una reconstrucción completa de los fundamentos de la matemática.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">1931</span>
                <h3>Lo que ni Dios puede demostrar</h3>
                <p><strong>Gödel</strong> demostró que en cualquier sistema axiomático consistente y suficientemente potente, existen proposiciones <em>verdaderas pero indemostrables</em>. La formalización usa exactamente las herramientas de esta clase — cuantificadores, predicados y argumentación lógica.</p>
            </div>
        </div>
        <div class="example-side" style="border-radius:12px; padding:12px 18px; margin-top:0;">
            <span class="tag">Dato curioso UCV</span>
            <p style="font-size:15px;">El ejercicio del polinomio $P(x)=x^2-8x+15$ tiene raíces $x=3$ y $x=5$ — ambas impares y positivas. Es un ejemplo perfecto de cómo un predicado "difícil" ($P$) puede interactuar con predicados "simples" ($Q,R$) de formas sorprendentes: $\forall x:[P(x)\to Q(x)]$ es <strong>VERDADERA</strong> por pura coincidencia numérica.</p>
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
                 onclick="window.open('docs/MDI Prof. Monsalve II.pdf')">
                <span class="concept-tag">Libro</span>
                <h3 style="font-size:18px;">Monsalve Leal — Vol. I</h3>
                <p>Borrador del libro <em>Matemáticas Discretas Vol. I</em> de la Dra. M. Monsalve Leal. Referencia teórica principal de la cátedra.</p>
                <p style="font-size:13px; color:var(--ucv-accent); margin-top:8px;">Draft Oct. 2018 · UCV <i class="fas fa-book"></i></p>
            </div>
        </div>
    </div>
</div>`;
