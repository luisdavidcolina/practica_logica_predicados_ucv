// Ejercicios Resueltos — Lógica de Predicados · Práctica 2 (Parte I)
// Elaborado por Luisdavid Colina — Sección C4, Sem. I-2026
// Fuente: docs/ejercicios_resueltos_predicados.pdf

// ─── Ej. 1: Simbolización (Práctica 2 — Ej. 5, ítem c) ───────────────────────

export const erSimbolizacion5cSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Simbolización — <span>Práctica 2, Ej. 5c</span></h2>
    <div class="content">
        <div class="example-panel" style="margin-bottom:10px; grid-template-columns:1.55fr 0.9fr;">
            <div class="example-card">
                <h3>Enunciado · $\mathbb{U}=\{\text{personas}\}$</h3>
                <p style="font-size:15px; line-height:1.65; font-style:italic; margin-bottom:10px;">"<span style="color:var(--ucv-accent); font-style:normal; font-weight:700;">Cualquier</span> ejecutivo acaba cansado. <span style="color:var(--ucv-accent); font-style:normal; font-weight:700;">Nadie</span> que acabe cansado es feliz. En consecuencia, <span style="color:var(--ucv-accent); font-style:normal; font-weight:700;">ningún</span> ejecutivo es feliz."</p>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <span class="symbol-pill">$E(x)$: ejecutivo</span>
                    <span class="symbol-pill">$C(x)$: acaba cansado</span>
                    <span class="symbol-pill">$F(x)$: feliz</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Argumento</span>
                <div class="case-formula" style="font-size:16px; text-align:left; padding:8px 14px; line-height:2.4;">
                    $\forall x:[E(x)\to C(x)]$<br>
                    $\lnot[\exists x:[C(x)\land F(x)]]$<br>
                    <span style="display:block; border-top:1.5px solid rgba(255,255,255,0.25); padding-top:5px;">$\therefore\;\lnot[\exists x:[E(x)\land F(x)]]$</span>
                </div>
            </div>
        </div>
        <table class="formal-table" style="font-size:14.5px; margin-top:0;">
            <thead>
                <tr>
                    <th style="width:115px;">Proposición</th>
                    <th>Análisis del cuantificador</th>
                    <th style="width:260px;">Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <strong>P1</strong><br>
                        <span class="case-badge valid" style="font-size:11px; padding:1px 7px; margin-top:4px; display:inline-block;">∀ "cualquier"</span>
                    </td>
                    <td>
                        "<strong>Cualquier</strong>" introduce cuantificador <strong>universal</strong>. Ser ejecutivo es condición <em>suficiente</em> para acabar cansado → estructura $A\to B$.
                    </td>
                    <td style="color:var(--ucv-accent); font-weight:600;">$\forall x:[E(x)\to C(x)]$</td>
                </tr>
                <tr>
                    <td>
                        <strong>P2</strong><br>
                        <span class="case-badge invalid" style="font-size:11px; padding:1px 7px; margin-top:4px; display:inline-block;">¬∃ "nadie"</span>
                    </td>
                    <td>
                        "<strong>Nadie</strong>" es negación existencial. Las tres formas son equivalentes:<br>
                        <span style="font-size:13px; color:var(--text-dim);">
                        $\lnot[\exists x:[C(x)\land F(x)]]\ \equiv\ \forall x:[C(x)\to\lnot F(x)]\ \equiv\ \forall x:[\lnot C(x)\lor\lnot F(x)]$
                        </span>
                    </td>
                    <td style="color:var(--ucv-accent); font-weight:600;">$\lnot[\exists x:[C(x)\land F(x)]]$</td>
                </tr>
                <tr>
                    <td>
                        <strong>Conclusión</strong><br>
                        <span class="case-badge invalid" style="font-size:11px; padding:1px 7px; margin-top:4px; display:inline-block;">¬∃ "ningún"</span>
                    </td>
                    <td>
                        "<strong>Ningún</strong>" opera igual que "nadie" — negación existencial. Las tres formas son equivalentes:<br>
                        <span style="font-size:13px; color:var(--text-dim);">
                        $\lnot[\exists x:[E(x)\land F(x)]]\ \equiv\ \forall x:[E(x)\to\lnot F(x)]\ \equiv\ \forall x:[\lnot E(x)\lor\lnot F(x)]$
                        </span>
                    </td>
                    <td style="color:var(--ucv-accent); font-weight:600;">$\lnot[\exists x:[E(x)\land F(x)]]$</td>
                </tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:9px; font-size:14px;">
            Se vale cualquiera de las formas equivalentes para P2 y C. La conclusión tiene la misma estructura lógica que "nadie" — la palabra cambia, el cuantificador no.
        </div>
    </div>
</div>`;

// ─── Ej. 2: Equivalencia Lógica (Práctica 2 — Ej. 7, ítem f) ─────────────────

export const erEquivalencia7fSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Equivalencia Lógica — <span>Práctica 2, Ej. 7f</span></h2>
    <div class="content">
        <div class="example-panel" style="margin-bottom:10px; grid-template-columns:1.6fr 0.8fr;">
            <div class="example-card">
                <h3>Enunciado</h3>
                <p style="font-size:15px; color:var(--text-dim); margin-bottom:8px;">Sea $\mathbb{U}$ un universo cualquiera, $j\in\mathbb{U}$ una constante fija y $Q(x)$, $P(j)$ predicados sobre $\mathbb{U}$. Demuestre que:</p>
                <div class="case-formula" style="font-size:20px;">
                    $\forall x:[Q(x)\to P(j)]\;\equiv\;\exists x:Q(x)\to P(j)$
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Clave</span>
                <p>$j$ es <strong>constante fija</strong> — no variable. $P(j)$ actúa como proposición atómica al distribuir $\lor$ sobre $\land$.</p>
                <p>Estrategia: expandir $\forall$ en $\mathbb{U}=\{a_1,\ldots,a_n\}$ y aplicar álgebra proposicional.</p>
            </div>
        </div>
        <table class="formal-table" style="font-size:15px; margin-top:0; width:100%;">
            <thead>
                <tr><th style="width:62%;">Expresión</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td style="font-style:italic;">$\forall x:[Q(x)\to P(j)]$</td>
                    <td>Premisa — expresión a transformar</td>
                </tr>
                <tr>
                    <td>$\equiv\;[Q(a_1)\to P(j)]\land\cdots\land[Q(a_n)\to P(j)]$</td>
                    <td>Definición de $\forall$</td>
                </tr>
                <tr>
                    <td>$\equiv\;[\lnot Q(a_1)\lor P(j)]\land\cdots\land[\lnot Q(a_n)\lor P(j)]$</td>
                    <td>EPI: $p\to q\equiv\lnot p\lor q$</td>
                </tr>
                <tr>
                    <td>$\equiv\;[\lnot Q(a_1)\land\cdots\land\lnot Q(a_n)]\lor P(j)$</td>
                    <td>Distributividad $\lor$ sobre $\land$</td>
                </tr>
                <tr>
                    <td>$\equiv\;\lnot[Q(a_1)\lor\cdots\lor Q(a_n)]\lor P(j)$</td>
                    <td>De Morgan: $\lnot p\land\lnot q\equiv\lnot(p\lor q)$</td>
                </tr>
                <tr>
                    <td>$\equiv\;\lnot[\exists x:Q(x)]\lor P(j)$</td>
                    <td>Definición de $\exists$</td>
                </tr>
                <tr>
                    <td>$\equiv\;\exists x:Q(x)\to P(j)$</td>
                    <td>EPI: $\lnot p\lor q\equiv p\to q\quad\square$</td>
                </tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:9px; font-size:14px;">
            Por tanto, $\forall x:[Q(x)\to P(j)]\equiv\exists x:Q(x)\to P(j)$. La clave es que $P(j)$, al ser constante, puede factorizarse como término independiente de $x$.
        </div>
    </div>
</div>`;

// ─── Ej. 3a: PC — Concepto y distinción (Práctica 2 — Ej. 11, ítem d) ──────────

export const erPCAnalisis11dSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Método Condicional (PC) — <span>Práctica 2, Ej. 11d · Concepto</span></h2>
    <div class="content">
        <div class="example-panel" style="margin-bottom:12px; grid-template-columns:1.1fr 0.9fr;">
            <div class="example-card">
                <h3>Argumento</h3>
                <div class="case-formula" style="font-size:15px; text-align:left; padding:8px 14px; line-height:2.0;">
                    P1: $\forall x:[C(x)\land(P(x)\lor M(x))\to\lnot Q(x)]$<br>
                    P2: $\forall x:[E(x)\to Q(x)]$<br>
                    <span style="display:block; border-top:1.5px solid rgba(255,255,255,0.25); padding-top:5px;">$\therefore\;\forall x:[C(x)\land P(x)\to\lnot E(x)]$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">¿Cuándo usar PC?</span>
                <p>La conclusión tiene forma <strong>$A\to B$</strong> (o $\forall x:[A(x)\to B(x)]$). En lugar de demostrar $A\to B$ directamente, se asume $A$ como premisa auxiliar y se demuestra que $B$ se desprende. Si se logra, PC afirma que $A\to B$ es consecuencia lógica.</p>
            </div>
        </div>
        <div class="case-grid" style="grid-template-columns:1fr 1fr;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Distinción crucial</h3>
                    <span class="case-badge valid">Clave</span>
                </div>
                <p class="case-desc">La conclusión $\forall x:[C(x)\land P(x)\to\lnot E(x)]$ tiene el cuantificador <strong>$\forall$ fuera</strong> y el condicional <strong>$\to$ dentro</strong>.</p>
                <p class="case-desc" style="font-size:14px; color:var(--text-dim);">En lógica de predicados el condicional puede estar en distintas posiciones respecto a los cuantificadores. Esta distinción determina cómo se aplica PC y es <em>crucial</em> no confundirla.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Razonamiento elemento a elemento</h3>
                    <span class="case-badge valid">✓ Correcto</span>
                </div>
                <p class="case-desc">Tomar $a$ <strong>arbitrario</strong> del universo (sin condición especial) y asumir $C(a)\land P(a)$ como premisa condicional. Derivar $\lnot E(a)$.</p>
                <p class="case-desc" style="font-size:14px; color:var(--text-dim);">Los elementos que no satisfacen $C(a)\land P(a)$ hacen el condicional vacuamente verdadero. Al elegir $a$ sin restricciones, GU cierra la prueba para todo $x\in\mathbb{U}$.</p>
            </div>
        </div>
        <div class="note-bar" style="margin-top:10px; font-size:14px;">
            La conclusión dice: "para <em>cada</em> $x$, si $x$ satisface $C\land P$ entonces satisface $\lnot E$". PC nos permite trabajar con un $a$ arbitrario que sí cumple el antecedente, y GU generaliza el resultado.
        </div>
    </div>
</div>`;

// ─── Ej. 3b: PC — Error frecuente y estrategia (Práctica 2 — Ej. 11, ítem d) ──

export const erPCEstrategia11dSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Método Condicional (PC) — <span>Práctica 2, Ej. 11d · Estrategia</span></h2>
    <div class="content">
        <div class="case-grid" style="margin-bottom:12px; grid-template-columns:1fr 1fr;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Error frecuente</h3>
                    <span class="case-badge invalid">✗ Incorrecto</span>
                </div>
                <p class="case-desc">Asumir $\forall x:[C(x)\land P(x)]$ como premisa condicional.</p>
                <p class="case-desc" style="font-size:14px; color:var(--text-dim);">Esto intenta demostrar $\forall x:[C(x)\land P(x)]\to\forall x:\lnot E(x)$: "si <em>todos</em> satisfacen el antecedente, <em>todos</em> satisfacen el consecuente".</p>
                <p class="case-desc" style="font-size:14px; color:var(--text-dim);">Es una afirmación diferente y <strong>más fuerte</strong> que la conclusión original. No es lo que el argumento pide demostrar.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Procedimiento correcto</h3>
                    <span class="case-badge valid">✓ Paso a paso</span>
                </div>
                <div class="example-item" style="margin-bottom:6px;">
                    <span class="step" style="font-size:13px;">1</span>
                    <span class="text" style="font-size:14px;">Tomar $a$ <strong>arbitrario</strong> del universo</span>
                </div>
                <div class="example-item" style="margin-bottom:6px;">
                    <span class="step" style="font-size:13px;">2</span>
                    <span class="text" style="font-size:14px;">Asumir $C(a)\land P(a)$ como premisa condicional (PC)</span>
                </div>
                <div class="example-item" style="margin-bottom:6px;">
                    <span class="step" style="font-size:13px;">3</span>
                    <span class="text" style="font-size:14px;">Derivar $\lnot E(a)$ usando P1, P2 y la premisa condicional</span>
                </div>
                <div class="example-item" style="margin-bottom:6px;">
                    <span class="step" style="font-size:13px;">4</span>
                    <span class="text" style="font-size:14px;">Aplicar PC → $C(a)\land P(a)\to\lnot E(a)$</span>
                </div>
                <div class="example-item">
                    <span class="step" style="font-size:13px;">5</span>
                    <span class="text" style="font-size:14px;">Aplicar GU → $\forall x:[C(x)\land P(x)\to\lnot E(x)]$</span>
                </div>
            </div>
        </div>
        <div class="note-bar" style="font-size:14px;">
            <strong>Recordatorio:</strong> los elementos que no satisfacen $C(a)\land P(a)$ no requieren análisis — el condicional es vacuamente verdadero para ellos. Solo se estudia el caso en que el antecedente se cumple. Eso es precisamente lo que captura la Prueba Condicional.
        </div>
    </div>
</div>`;

// ─── Ej. 3b: Método Condicional — Solución (Práctica 2 — Ej. 11, ítem d) ──────

export const erPCSolucion11dSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Método Condicional (PC) — <span>Práctica 2, Ej. 11d · Solución</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:9px; font-size:14px;">
            Asumimos $C(a)\land P(a)$ para $a$ arbitrario (Premisa condicional) y derivamos $\lnot E(a)$.
        </div>
        <table class="formal-table" style="font-size:15px; margin-top:0;">
            <thead>
                <tr>
                    <th style="width:50px;">Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\forall x:[C(x)\land(P(x)\lor M(x))\to\lnot Q(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\forall x:[E(x)\to Q(x)]$</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>$C(a)\land P(a)$</td><td>Premisa condicional (PC)</td></tr>
                <tr><td>4</td><td>$C(a)\land(P(a)\lor M(a))\to\lnot Q(a)$</td><td>PU en 1</td></tr>
                <tr><td>5</td><td>$E(a)\to Q(a)$</td><td>PU en 2</td></tr>
                <tr><td>6</td><td>$C(a)$</td><td>Simplificación en 3</td></tr>
                <tr><td>7</td><td>$P(a)$</td><td>Simplificación en 3</td></tr>
                <tr><td>8</td><td>$P(a)\lor M(a)$</td><td>Adición en 7</td></tr>
                <tr><td>9</td><td>$C(a)\land(P(a)\lor M(a))$</td><td>Conjunción (6 y 8)</td></tr>
                <tr><td>10</td><td>$\lnot Q(a)$</td><td>Modus Ponens (4 y 9)</td></tr>
                <tr><td>11</td><td>$\lnot E(a)$</td><td>Modus Tollens (5 y 10)</td></tr>
                <tr><td>12</td><td>$C(a)\land P(a)\to\lnot E(a)$</td><td>Prueba Condicional (3–11)</td></tr>
                <tr><td>13</td><td>$\forall x:[C(x)\land P(x)\to\lnot E(x)]$</td><td>GU en 12</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:9px; font-size:14px;">
            El argumento es <strong>VÁLIDO</strong> por el Método Condicional. $\square$
        </div>
    </div>
</div>`;

// ─── Ej. 4a: RAA — Argumento y pasos 1-2 (Práctica 2 — Ej. 11, ítem f) ─────────

export const erRAAAnalisis11fSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Reducción al Absurdo (RAA) — <span>Práctica 2, Ej. 11f · Análisis</span></h2>
    <div class="content">
        <div class="example-panel" style="margin-bottom:12px; grid-template-columns:1.1fr 0.9fr;">
            <div class="example-card">
                <h3>Argumento</h3>
                <div class="case-formula" style="font-size:16px; text-align:left; padding:8px 14px; line-height:2.1;">
                    P1: $\forall x:[A(x)\lor B(x)\to A(x)\lor C(x)]$<br>
                    P2: $\forall x:[A(x)\land B(x)\to A(x)\land C(x)]$<br>
                    <span style="display:block; border-top:1.5px solid rgba(255,255,255,0.25); padding-top:5px;">$\therefore\;\forall x:[B(x)\to C(x)]$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">¿Por qué RAA?</span>
                <p>La conclusión no tiene forma $A\to B$ directa (PC), ni hay existencial para PE. RAA: asumir la negación de la conclusión y llegar a contradicción.</p>
                <p style="font-size:13px; color:var(--text-dim);">Si la negación produce contradicción, la negación es falsa → la conclusión original es verdadera.</p>
            </div>
        </div>
        <div class="case-grid" style="grid-template-columns:1fr 1fr;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Paso 1 — Suposición RAA</h3>
                    <span class="case-badge invalid">Negar conclusión</span>
                </div>
                <p class="case-desc">Asumimos la negación <em>completa</em> de la conclusión:</p>
                <div class="case-formula" style="font-size:16px; margin:8px 0;">$\lnot\forall x:[B(x)\to C(x)]$</div>
                <p class="case-desc" style="font-size:13px; color:var(--text-dim);">Si de esta suposición se deriva una contradicción, la suposición es falsa y la conclusión original queda probada.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Paso 2 — De Morgan cuantificado</h3>
                    <span class="case-badge valid">$\lnot\forall\equiv\exists\lnot$</span>
                </div>
                <p class="case-desc">Aplicamos De Morgan para cuantificadores y luego PE:</p>
                <div class="case-formula" style="font-size:15px; text-align:left; padding:6px 10px; line-height:1.9; margin:8px 0;">
                    $\exists x:\lnot[B(x)\to C(x)]$<br>
                    $\lnot[B(a)\to C(a)]$ (PE)<br>
                    $B(a)\land\lnot C(a)$ (EPI)
                </div>
                <p class="case-desc" style="font-size:13px; color:var(--text-dim);">Ahora tenemos $B(a)$ y $\lnot C(a)$ como hechos concretos para trabajar con las premisas.</p>
            </div>
        </div>
        <div class="note-bar" style="margin-top:10px; font-size:14px;">
            Con $B(a)$ y $\lnot C(a)$ en mano, particularizamos P1 y P2 con PU. La siguiente lámina muestra cómo se deriva $C(a)$, produciendo la contradicción $C(a)\land\lnot C(a)$.
        </div>
    </div>
</div>`;

// ─── Ej. 4b: RAA — Paso 3 y clave (Práctica 2 — Ej. 11, ítem f) ────────────────

export const erRAAFases11fSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Reducción al Absurdo (RAA) — <span>Práctica 2, Ej. 11f · Desarrollo</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:12px; font-size:14px;">
            Tenemos: $B(a)$, $\lnot C(a)$, $A(a)\lor B(a)\to A(a)\lor C(a)$ (PU·P1), $A(a)\land B(a)\to A(a)\land C(a)$ (PU·P2). Objetivo: derivar $C(a)$ para contradecir $\lnot C(a)$.
        </div>
        <div class="case-grid" style="margin-bottom:12px; grid-template-columns:1fr 1fr;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Paso 3 — Derivar $C(a)$</h3>
                    <span class="case-badge valid">Clave del RAA</span>
                </div>
                <div class="example-item" style="margin-bottom:5px;">
                    <span class="step" style="font-size:12px;">11</span>
                    <span class="text" style="font-size:13px;">$A(a)\lor B(a)$ — Adición en $B(a)$</span>
                </div>
                <div class="example-item" style="margin-bottom:5px;">
                    <span class="step" style="font-size:12px;">12</span>
                    <span class="text" style="font-size:13px;">$A(a)\lor C(a)$ — MP (PU·P1, paso 11)</span>
                </div>
                <div class="example-item" style="margin-bottom:5px;">
                    <span class="step" style="font-size:12px;">13</span>
                    <span class="text" style="font-size:13px;">$A(a)$ — Silogismo Disyuntivo (12, $\lnot C(a)$)</span>
                </div>
                <div class="example-item" style="margin-bottom:5px;">
                    <span class="step" style="font-size:12px;">14</span>
                    <span class="text" style="font-size:13px;">$A(a)\land B(a)$ — Conjunción (13, $B(a)$)</span>
                </div>
                <div class="example-item" style="margin-bottom:5px;">
                    <span class="step" style="font-size:12px;">15</span>
                    <span class="text" style="font-size:13px;">$A(a)\land C(a)$ — MP (PU·P2, paso 14)</span>
                </div>
                <div class="example-item">
                    <span class="step" style="font-size:12px;">16</span>
                    <span class="text" style="font-size:13px;">$C(a)$ — Simplificación en 15</span>
                </div>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Paso 4 — Contradicción y conclusión</h3>
                    <span class="case-badge invalid">⊥</span>
                </div>
                <div class="example-item" style="margin-bottom:10px;">
                    <span class="step" style="font-size:12px;">17</span>
                    <span class="text" style="font-size:13px; color:#ff9a9a; font-weight:600;">$C(a)\land\lnot C(a)$ — Conjunción (16 y 8)</span>
                </div>
                <p class="case-desc">La suposición $\lnot\forall x:[B(x)\to C(x)]$ produce una contradicción. Por tanto es <strong>falsa</strong>.</p>
                <div class="case-formula" style="font-size:15px; margin-top:8px;">$\therefore\;\forall x:[B(x)\to C(x)]$</div>
                <p class="case-desc" style="font-size:13px; color:var(--text-dim); margin-top:6px;">Como $a$ fue un testigo arbitrario (PE) y la contradicción vale para él, GU no es necesario — PE ya fijó $a$ específicamente.</p>
            </div>
        </div>
        <div class="note-bar" style="font-size:14px;">
            La clave está en los pasos 11–13: $\lnot C(a)$ permite extraer $A(a)$ por Silogismo Disyuntivo sobre $A(a)\lor C(a)$. Ese $A(a)$ es el puente para usar P2 y llegar a $C(a)$. El argumento es <strong>VÁLIDO</strong>. $\square$
        </div>
    </div>
</div>`;

// ─── Ej. 4b: RAA — Solución (pasos 1-9) ──────────────────────────────────────────

export const erRAASolucion11fSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">RAA — <span>Práctica 2, Ej. 11f · Solución (pasos 1–9)</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:9px; font-size:14px;">
            Parte 1 / 2 — Establecemos premisas, suposición RAA y extraemos $B(a)$, $\lnot C(a)$, y las particularizaciones de P1 y P2.
        </div>
        <table class="formal-table" style="font-size:15px; margin-top:0;">
            <thead>
                <tr><th style="width:50px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\forall x:[A(x)\lor B(x)\to A(x)\lor C(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\forall x:[A(x)\land B(x)\to A(x)\land C(x)]$</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>$\lnot\forall x:[B(x)\to C(x)]$</td><td>Suposición RAA</td></tr>
                <tr><td>4</td><td>$\exists x:\lnot[B(x)\to C(x)]$</td><td>De Morgan ($\lnot\forall\equiv\exists\lnot$) en 3</td></tr>
                <tr><td>5</td><td>$\lnot[B(a)\to C(a)]$</td><td>PE en 4</td></tr>
                <tr><td>6</td><td>$B(a)\land\lnot C(a)$</td><td>EPI en 5: $\lnot(p\to q)\equiv p\land\lnot q$</td></tr>
                <tr><td>7</td><td>$B(a)$</td><td>Simplificación en 6</td></tr>
                <tr><td>8</td><td>$\lnot C(a)$</td><td>Simplificación en 6</td></tr>
                <tr><td>9</td><td>$A(a)\lor B(a)\to A(a)\lor C(a)$</td><td>PU en 1</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:9px; font-size:14px;">
            Con $B(a)$, $\lnot C(a)$ y PU·P1 listos, la siguiente lámina deriva la contradicción (pasos 10–17).
        </div>
    </div>
</div>`;

// ─── Ej. 4c: RAA — Solución (pasos 10-17) ────────────────────────────────────────

export const erRAASolucion2_11fSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">RAA — <span>Práctica 2, Ej. 11f · Solución (pasos 10–17)</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:9px; font-size:14px;">
            Parte 2 / 2 — Continuación. Disponemos de: $B(a)$, $\lnot C(a)$, $A(a)\lor B(a)\to A(a)\lor C(a)$ (paso 9).
        </div>
        <table class="formal-table" style="font-size:15px; margin-top:0;">
            <thead>
                <tr><th style="width:50px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr style="background:rgba(255,255,255,0.03); font-style:italic;">
                    <td colspan="3" style="font-size:12px; color:var(--text-dim); padding:5px 12px;">
                        Premisa de contexto — pasos 1-9 establecidos: $B(a)$, $\lnot C(a)$, PU·P1 (paso 9)
                    </td>
                </tr>
                <tr><td>10</td><td>$A(a)\land B(a)\to A(a)\land C(a)$</td><td>PU en 2</td></tr>
                <tr><td>11</td><td>$A(a)\lor B(a)$</td><td>Adición en 7</td></tr>
                <tr><td>12</td><td>$A(a)\lor C(a)$</td><td>Modus Ponens (9 y 11)</td></tr>
                <tr><td>13</td><td>$A(a)$</td><td>Silogismo Disyuntivo (12 y 8)</td></tr>
                <tr><td>14</td><td>$A(a)\land B(a)$</td><td>Conjunción (13 y 7)</td></tr>
                <tr><td>15</td><td>$A(a)\land C(a)$</td><td>Modus Ponens (10 y 14)</td></tr>
                <tr><td>16</td><td>$C(a)$</td><td>Simplificación en 15</td></tr>
                <tr><td>17</td><td>$C(a)\land\lnot C(a)$</td><td>Conjunción (16 y 8) — <strong>Contradicción</strong></td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:9px; font-size:14px;">
            La suposición $\lnot\forall x:[B(x)\to C(x)]$ produce contradicción → es falsa → $\forall x:[B(x)\to C(x)]$. El argumento es <strong>VÁLIDO</strong>. $\square$
        </div>
    </div>
</div>`;

// ─── Ej. 5a: Prueba por Casos — Análisis (Práctica 2 — Ej. 11, ítem a) ───────────

export const erCasosIntro11aSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Prueba por Casos — <span>Práctica 2, Ej. 11a · Análisis</span></h2>
    <div class="content">
        <div class="example-panel" style="margin-bottom:12px; grid-template-columns:1.05fr 0.95fr;">
            <div class="example-card">
                <h3>Argumento</h3>
                <div class="case-formula" style="font-size:16px; text-align:left; padding:8px 14px; line-height:2.1;">
                    P1: $\forall x:[P(x)\lor Q(x)]$<br>
                    P2: $\forall x:[\lnot P(x)\land Q(x)\to R(x)]$<br>
                    <span style="display:block; border-top:1.5px solid rgba(255,255,255,0.25); padding-top:5px;">$\therefore\;\forall x:[\lnot R(x)\to P(x)]$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Estrategia</span>
                <p>P1 particularizada da $P(a)\lor Q(a)$ — una disyunción que abre dos casos. Usando Prueba por Casos sobre esta disyunción se llega a la conclusión en ambos.</p>
            </div>
        </div>
        <div class="case-grid" style="grid-template-columns:1fr 1fr;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Equivalencias previas</h3>
                    <span class="case-badge valid">Simplificación</span>
                </div>
                <p class="case-desc">Reescribimos P2 y C antes de abrir casos:</p>
                <div class="example-item" style="margin-bottom:8px; margin-top:6px;">
                    <span class="step" style="font-size:12px;">P2</span>
                    <span class="text" style="font-size:13px;">$\forall x:[\lnot P(x)\land Q(x)\to R(x)]$<br>
                    $\equiv\forall x:[Q(x)\to P(x)\lor R(x)]$ (EPI + De Morgan)</span>
                </div>
                <div class="example-item">
                    <span class="step" style="font-size:12px;">C</span>
                    <span class="text" style="font-size:13px;">$\forall x:[\lnot R(x)\to P(x)]$<br>
                    $\equiv\forall x:[R(x)\lor P(x)]$ (EPI)</span>
                </div>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Apertura de casos</h3>
                    <span class="case-badge valid">$P(a)\lor Q(a)$</span>
                </div>
                <p class="case-desc">Con $P(a)\lor Q(a)$ (PU en P1 para $a$ arbitrario), la disyunción abre los casos:</p>
                <div class="example-item" style="margin-bottom:8px; margin-top:6px;">
                    <span class="step" style="font-size:12px;">Caso 1</span>
                    <span class="text" style="font-size:13px;">Suponer $P(a)$ → Adición → $R(a)\lor P(a)$ ✓</span>
                </div>
                <div class="example-item">
                    <span class="step" style="font-size:12px;">Caso 2</span>
                    <span class="text" style="font-size:13px;">Suponer $Q(a)$ → MP con P2 reescrita → $P(a)\lor R(a)$ → Conmutatividad → $R(a)\lor P(a)$ ✓</span>
                </div>
            </div>
        </div>
        <div class="note-bar" style="margin-top:10px; font-size:14px;">
            En ambos casos se obtiene $R(a)\lor P(a)\equiv\lnot R(a)\to P(a)$. Aplicando GU: $\forall x:[\lnot R(x)\to P(x)]$. La siguiente lámina muestra la prueba formal completa.
        </div>
    </div>
</div>`;

// ─── Ej. 5b: Prueba por Casos — Solución (Práctica 2 — Ej. 11, ítem a) ─────────

export const erCasos11aSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Prueba por Casos — <span>Práctica 2, Ej. 11a · Solución</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:9px; font-size:14px;">
            Usamos P2 reescrita: $\forall x:[Q(x)\to P(x)\lor R(x)]$. La disyunción $P(a)\lor Q(a)$ abre los casos.
        </div>
        <table class="formal-table" style="font-size:15px; margin-top:0;">
            <thead>
                <tr><th style="width:50px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\forall x:[P(x)\lor Q(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\forall x:[Q(x)\to P(x)\lor R(x)]$</td><td>Equivalencia lógica de $P_2$</td></tr>
                <tr><td>3</td><td>$P(a)\lor Q(a)$</td><td>PU en 1</td></tr>
                <tr><td>4</td><td>$Q(a)\to P(a)\lor R(a)$</td><td>PU en 2</td></tr>
                <tr style="background:rgba(200,240,122,0.06);">
                    <td colspan="3" style="text-align:center; color:var(--text-dim); font-size:13px; padding:4px; font-style:italic;">Caso 1: suponemos $P(a)$</td>
                </tr>
                <tr><td>5</td><td>$R(a)\lor P(a)$</td><td>Adición en hipótesis Caso 1</td></tr>
                <tr style="background:rgba(200,240,122,0.06);">
                    <td colspan="3" style="text-align:center; color:var(--text-dim); font-size:13px; padding:4px; font-style:italic;">Caso 2: suponemos $Q(a)$</td>
                </tr>
                <tr><td>6</td><td>$P(a)\lor R(a)$</td><td>Modus Ponens (4 e hipótesis Caso 2)</td></tr>
                <tr><td>7</td><td>$R(a)\lor P(a)$</td><td>Conmutatividad en 6</td></tr>
                <tr style="background:rgba(200,240,122,0.06);">
                    <td colspan="3" style="text-align:center; color:var(--text-dim); font-size:13px; padding:4px; font-style:italic;">Reunión de casos</td>
                </tr>
                <tr><td>8</td><td>$R(a)\lor P(a)$</td><td>Prueba por Casos (3, Casos 1–2)</td></tr>
                <tr><td>9</td><td>$\lnot R(a)\to P(a)$</td><td>EPI en 8</td></tr>
                <tr><td>10</td><td>$\forall x:[\lnot R(x)\to P(x)]$</td><td>GU en 9</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:8px; font-size:14px;">
            En ambos casos se obtiene $R(a)\lor P(a)\equiv\lnot R(a)\to P(a)$. Aplicando GU: $\forall x:[\lnot R(x)\to P(x)]$. El argumento es <strong>VÁLIDO</strong>. $\square$
        </div>
    </div>
</div>`;

// ─── Ej. 6a: Invalidez — Paso 1: U={a} válido (Práctica 2 — Ej. 10, ítem c) ──────

export const erInvalidezAnalisis10cSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Prueba de Invalidez — <span>Práctica 2, Ej. 10c · Paso 1: U={a}</span></h2>
    <div class="content">
        <div class="example-panel" style="margin-bottom:12px; grid-template-columns:1.1fr 0.9fr;">
            <div class="example-card">
                <h3>Argumento original</h3>
                <div class="case-formula" style="font-size:16px; text-align:left; padding:8px 14px; line-height:2.1;">
                    P1: $\exists x:[F(x)\to G(a)]$<br>
                    P2: $\exists x:G(x)\to\forall x:H(x)$<br>
                    P3: $F(a)$<br>
                    <span style="display:block; border-top:1.5px solid rgba(255,255,255,0.25); padding-top:5px;">$\therefore\;\exists x:H(x)$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Metodología</span>
                <p>Para demostrar invalidez buscamos un <strong>contraejemplo</strong>: una interpretación con todas las premisas V y la conclusión F.</p>
                <p><strong>Paso 1</strong> — probar con $\mathbb{U}=\{a\}$: si el argumento es válido ahí, no sirve y hay que ampliar el universo.</p>
            </div>
        </div>
        <div class="note-bar" style="margin-bottom:10px; font-size:14px;">
            Con $\mathbb{U}=\{a\}$ los cuantificadores se eliminan y el argumento queda proposicional.
            P3 fija $F(a)$ como premisa atómica — no como valor asignado. La derivación se hace por leyes:
        </div>
        <table class="formal-table" style="font-size:16px; margin-top:0;">
            <thead>
                <tr><th style="width:55px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$F(a)\to G(a)$</td><td>Premisa 1 (P1 con $\mathbb{U}=\{a\}$: $\exists$ elimina, único elemento)</td></tr>
                <tr><td>2</td><td>$G(a)\to H(a)$</td><td>Premisa 2 (P2 con $\mathbb{U}=\{a\}$: $\exists$ y $\forall$ eliminan)</td></tr>
                <tr><td>3</td><td>$F(a)$</td><td>Premisa 3</td></tr>
                <tr><td>4</td><td>$G(a)$</td><td>Modus Ponens (1 y 3)</td></tr>
                <tr><td>5</td><td>$H(a)$</td><td>Modus Ponens (2 y 4)</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:10px; font-size:14px;">
            $H(a)$ es exactamente la conclusión $\exists x:H(x)$ con $\mathbb{U}=\{a\}$. El argumento es <strong>válido</strong> en este universo — no produce contraejemplo. Hay que ampliar a $\mathbb{U}=\{a,b\}$ (siguiente lámina).
        </div>
    </div>
</div>`;

// ─── Ej. 6b: Invalidez — Expansión U={a,b} con equivalencias ────────────────────

export const erInvalidezExpansion10cSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Prueba de Invalidez — <span>Práctica 2, Ej. 10c · Expansión U={a,b}</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:11px; font-size:14px;">
            Con $\mathbb{U}=\{a,b\}$ aplicamos las definiciones de $\forall$ y $\exists$:
            $\forall x:P(x)\equiv P(a)\land P(b)$ · $\exists x:P(x)\equiv P(a)\lor P(b)$.
            El argumento proposicional equivalente queda:
        </div>
        <table class="formal-table" style="font-size:14.5px; margin-top:0;">
            <thead>
                <tr>
                    <th style="width:105px;">Fórmula</th>
                    <th style="width:115px;">Original</th>
                    <th style="width:310px;">Equivalente con $\mathbb{U}=\{a,b\}$</th>
                    <th>Justificación de la equivalencia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Premisa 1</strong></td>
                    <td>$\exists x:[F(x)\to G(a)]$</td>
                    <td>$[F(a)\to G(a)]\lor[F(b)\to G(a)]$</td>
                    <td>Def. $\exists$: verdadera si <em>al menos uno</em> de los elementos satisface la fórmula. <strong>Atención:</strong> $G(a)$ usa la constante $a$, no la variable $x$ — al sustituir $x=b$, $G(a)$ permanece $G(a)$.</td>
                </tr>
                <tr>
                    <td><strong>Premisa 2</strong></td>
                    <td>$\exists x:G(x)\to\forall x:H(x)$</td>
                    <td>$[G(a)\lor G(b)]\to[H(a)\land H(b)]$</td>
                    <td>El antecedente $\exists x:G(x)$ se expande por def. $\exists$: $G(a)\lor G(b)$. El consecuente $\forall x:H(x)$ se expande por def. $\forall$: $H(a)\land H(b)$. El condicional principal permanece.</td>
                </tr>
                <tr>
                    <td><strong>Premisa 3</strong></td>
                    <td>$F(a)$</td>
                    <td>$F(a)$</td>
                    <td>Sin cuantificadores — es una proposición atómica sobre la constante $a$. Queda igual.</td>
                </tr>
                <tr>
                    <td><strong>Conclusión</strong></td>
                    <td>$\exists x:H(x)$</td>
                    <td>$H(a)\lor H(b)$</td>
                    <td>Def. $\exists$: verdadera si al menos uno de $H(a)$, $H(b)$ es verdadero. Equivale a la disyunción.</td>
                </tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:10px; font-size:14px;">
            <strong>Argumento proposicional equivalente con $\mathbb{U}=\{a,b\}$:</strong>
            $[F(a)\to G(a)]\lor[F(b)\to G(a)]$
            · $[G(a)\lor G(b)]\to[H(a)\land H(b)]$
            · $F(a)$
            $\;\therefore\; H(a)\lor H(b)$
        </div>
    </div>
</div>`;

// ─── Ej. 6c: Invalidez — Sandbox (Práctica 2 — Ej. 10, ítem c) ──────────────────

export const erInvalidez10cSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Prueba de Invalidez — <span>Práctica 2, Ej. 10c · Contraejemplo</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:10px; font-size:14px;">
            $\mathbb{U}=\{a,b\}$. Variables: $F(a),F(b),G(a),G(b),H(a),H(b)$. Busca la asignación que hace P1, P2, P3 = <span style="color:var(--ucv-accent);">V</span> y C = <span style="color:#ff9a9a;">F</span>.
            <br><span style="font-size:13px; color:var(--text-dim);">Pista: para que C=$H(a)\lor H(b)$ sea F, necesitas $H(a)=H(b)=\text{F}$. ¿Qué implica eso para P2?</span>
        </div>
        <div class="sandbox-panel" id="sandbox_inv3" style="background:linear-gradient(180deg,rgba(18,24,29,0.98),rgba(11,15,18,0.98)); border:1px solid rgba(200,240,122,0.3); border-radius:10px; padding:12px 16px; margin-bottom:10px;">
            <div style="text-align:center; color:var(--ucv-accent); font-size:13px; font-weight:700; margin-bottom:9px;">⚡ Simulador de Valores de Verdad — $\mathbb{U}=\{a,b\}$</div>
            <div style="display:flex; justify-content:center; gap:7px; margin-bottom:10px; flex-wrap:wrap;">
                <button class="var-toggle" data-var="fa" data-val="?" style="font-size:13px; padding:5px 11px;">F(a)=<span class="val">?</span></button>
                <button class="var-toggle" data-var="fb" data-val="?" style="font-size:13px; padding:5px 11px;">F(b)=<span class="val">?</span></button>
                <button class="var-toggle" data-var="ga" data-val="?" style="font-size:13px; padding:5px 11px;">G(a)=<span class="val">?</span></button>
                <button class="var-toggle" data-var="gb" data-val="?" style="font-size:13px; padding:5px 11px;">G(b)=<span class="val">?</span></button>
                <button class="var-toggle" data-var="ha" data-val="?" style="font-size:13px; padding:5px 11px;">H(a)=<span class="val">?</span></button>
                <button class="var-toggle" data-var="hb" data-val="?" style="font-size:13px; padding:5px 11px;">H(b)=<span class="val">?</span></button>
            </div>
            <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:7px; text-align:center;">
                <div class="eval-box" id="inv3-p1" style="min-height:52px; padding:5px 4px; font-size:12px;">P1: $[F{\to}G(a)]\lor[F(b){\to}G(a)]$<br><span class="res">?</span></div>
                <div class="eval-box" id="inv3-p2" style="min-height:52px; padding:5px 4px; font-size:12px;">P2: $[G(a)\lor G(b)]{\to}[\forall H]$<br><span class="res">?</span></div>
                <div class="eval-box" id="inv3-p3" style="min-height:52px; padding:5px 4px; font-size:12px;">P3: $F(a)$<br><span class="res">?</span></div>
                <div class="eval-box" id="inv3-c"  style="min-height:52px; padding:5px 4px; font-size:12px;">C: $H(a)\lor H(b)$<br><span class="res">?</span></div>
            </div>
            <div id="inv3-msg" style="margin-top:8px; padding:6px 10px; border-radius:7px; text-align:center; font-size:13px; font-weight:bold; background:rgba(255,255,255,0.05); color:var(--text-dim); transition:all 0.3s;">
                Haz clic en las variables para asignar V o F.
            </div>
        </div>
        <div style="text-align:center; margin-bottom:8px;">
            <button class="reveal-solution-btn" onclick="this.style.display='none'; document.getElementById('inv3-solution').style.display='block';" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.18); color:var(--text-dim); padding:6px 20px; border-radius:20px; cursor:pointer; font-size:13px; transition:all 0.2s;">
                <i class="fas fa-eye"></i> Ver solución oficial
            </button>
        </div>
        <div class="answer-solution" id="inv3-solution" style="display:none;">
            <div class="case-grid" style="grid-template-columns:1.3fr 0.7fr; margin-top:0;">
                <div class="case-card">
                    <div class="case-head"><h3>Razonamiento de construcción</h3><span class="case-badge invalid">INVÁLIDO</span></div>
                    <p class="case-desc" style="font-size:13px;"><strong style="color:#ff9a9a;">C=F</strong>: queremos $H(a)=H(b)=\text{F}$.</p>
                    <p class="case-desc" style="font-size:13px;"><strong style="color:var(--ucv-accent);">P2=V</strong>: si $H(a)=H(b)=\text{F}$, el consecuente de P2 es F; para que P2=V el antecedente debe ser F → $G(a)=G(b)=\text{F}$.</p>
                    <p class="case-desc" style="font-size:13px;"><strong style="color:var(--ucv-accent);">P1=V</strong>: con $G(a)=\text{F}$, necesitamos $[F(a)\to\text{F}]\lor[F(b)\to\text{F}]=\text{V}$. Si $F(b)=\text{F}$: $[\text{F}\to\text{F}]=\text{V}$ ✓</p>
                    <p class="case-desc" style="font-size:13px;"><strong style="color:var(--ucv-accent);">P3=V</strong>: $F(a)=\text{V}$ ✓</p>
                </div>
                <div class="case-card">
                    <div class="case-head"><h3>Contraejemplo</h3><span class="case-badge invalid">$\mathbb{U}=\{a,b\}$</span></div>
                    <div class="case-formula" style="font-size:14px; text-align:left; padding:6px 10px; line-height:2.0;">
                        $F(a)=\text{V}$<br>$F(b)=\text{F}$<br>$G(a)=\text{F}$<br>$G(b)=\text{F}$<br>$H(a)=\text{F}$<br>$H(b)=\text{F}$
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
