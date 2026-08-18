// Ejercicios Resueltos Extra — Lógica de Predicados · Práctica 2 (Parte I)
// Elaborado por Luisdavid Colina — Sección C4, Sem. I-2026

// ─── Ej. 11h: RAA — Análisis ─────────────────────────────────────────────────

export const erRAA11hAnalisisSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Reducción al Absurdo (RAA) — <span>Práctica 2, Ej. 11h · Análisis</span></h2>
    <div class="content">
        <div class="example-panel" style="margin-bottom:12px; grid-template-columns:1.1fr 0.9fr;">
            <div class="example-card">
                <h3>Argumento</h3>
                <div class="case-formula" style="font-size:15px; text-align:left; padding:8px 14px; line-height:2.1;">
                    P1: $\exists x:[Q(x)\to\lnot S(x)]$<br>
                    P2: $\forall x:[\lnot P(x)\to Q(x)\land R(x)]$<br>
                    P3: $\exists x:P(x)\to\forall x:Q(x)$<br>
                    <span style="display:block; border-top:1.5px solid rgba(255,255,255,0.25); padding-top:5px;">$\therefore\;\exists x:\lnot S(x)$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">¿Por qué RAA?</span>
                <p>La conclusión $\exists x:\lnot S(x)$ no tiene forma $A\to B$ (PC) ni hay una premisa existencial aislada que permita ARD directo. RAA: asumir $\lnot\exists x:\lnot S(x)$ y derivar contradicción.</p>
            </div>
        </div>
        <div class="case-grid" style="grid-template-columns:1fr 1fr;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Paso 1 — Suposición y De Morgan</h3>
                    <span class="case-badge invalid">Negar conclusión</span>
                </div>
                <p class="case-desc">Asumimos la negación completa de C:</p>
                <div class="case-formula" style="font-size:15px; margin:8px 0;">$\lnot\exists x:\lnot S(x)$</div>
                <p class="case-desc" style="font-size:13px; color:var(--text-dim);">Por De Morgan cuantificado ($\lnot\exists\equiv\forall\lnot$):</p>
                <div class="case-formula" style="font-size:15px; margin:6px 0;">$\forall x:S(x)$</div>
                <p class="case-desc" style="font-size:13px; color:var(--text-dim);">Ahora todo elemento satisface $S$. Esto chocará con P1.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Encadenamiento hacia la contradicción</h3>
                    <span class="case-badge valid">Camino</span>
                </div>
                <div class="example-item" style="margin-bottom:6px; margin-top:4px;">
                    <span class="step" style="font-size:12px;">A</span>
                    <span class="text" style="font-size:13px;">P1 + PE → $Q(a)\to\lnot S(a)$ para algún $a$</span>
                </div>
                <div class="example-item" style="margin-bottom:6px;">
                    <span class="step" style="font-size:12px;">B</span>
                    <span class="text" style="font-size:13px;">$\forall x:S(x)$ + PU → $S(a)$; MT con A → $\lnot Q(a)$</span>
                </div>
                <div class="example-item" style="margin-bottom:6px;">
                    <span class="step" style="font-size:12px;">C</span>
                    <span class="text" style="font-size:13px;">$\lnot Q(a)$ + Adición + De Morgan → $\lnot(Q(a)\land R(a))$; P2 + PU + MT → $P(a)$</span>
                </div>
                <div class="example-item" style="margin-bottom:6px;">
                    <span class="step" style="font-size:12px;">D</span>
                    <span class="text" style="font-size:13px;">GE → $\exists x:P(x)$; P3 + MP → $\forall x:Q(x)$; PU → $Q(a)$</span>
                </div>
                <div class="example-item">
                    <span class="step" style="font-size:12px;">⊥</span>
                    <span class="text" style="font-size:13px; color:#ff9a9a; font-weight:600;">$Q(a)\land\lnot Q(a)$ — Contradicción</span>
                </div>
            </div>
        </div>
        <div class="note-bar" style="margin-top:10px; font-size:14px;">
            La clave: $\forall x:S(x)$ bloquea $\lnot S(a)$, forzando $\lnot Q(a)$ por MT. Eso activa P2 (que necesitaba que no hubiese $Q$) y produce $P(a)$, que a través de P3 da $\forall x:Q(x)$, contradiciendo $\lnot Q(a)$.
        </div>
    </div>
</div>`;

// ─── Ej. 11h: RAA — Solución (pasos 1–9) ─────────────────────────────────────

export const erRAA11hSolucion1Slide = String.raw`
<div class="slide">
    <h2 class="slide-title">RAA — <span>Práctica 2, Ej. 11h · Solución (pasos 1–9)</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:9px; font-size:14px;">
            Parte 1 / 2 — Establecemos premisas, suposición RAA y extraemos $\lnot Q(a)$ y la negación de la conjunción $Q(a)\land R(a)$.
        </div>
        <table class="formal-table" style="font-size:15px; margin-top:0;">
            <thead>
                <tr><th style="width:50px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\exists x:[Q(x)\to\lnot S(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\forall x:[\lnot P(x)\to Q(x)\land R(x)]$</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>$\exists x:P(x)\to\forall x:Q(x)$</td><td>Premisa 3</td></tr>
                <tr><td>4</td><td>$\lnot\exists x:\lnot S(x)$</td><td>Suposición RAA</td></tr>
                <tr><td>5</td><td>$\forall x:S(x)$</td><td>De Morgan ($\lnot\exists x:\lnot\equiv\forall$) en 4</td></tr>
                <tr><td>6</td><td>$Q(a)\to\lnot S(a)$</td><td>PE en 1</td></tr>
                <tr><td>7</td><td>$S(a)$</td><td>PU en 5</td></tr>
                <tr><td>8</td><td>$\lnot Q(a)$</td><td>Modus Tollens (6 y 7)</td></tr>
                <tr><td>9</td><td>$\lnot Q(a)\lor\lnot R(a)$</td><td>Adición en 8</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:9px; font-size:14px;">
            Con $\lnot Q(a)$ establecido y la disyunción del paso 9, la siguiente lámina activa P2 para obtener $P(a)$ y llegar a la contradicción.
        </div>
    </div>
</div>`;

// ─── Ej. 11h: RAA — Solución (pasos 10–16) ───────────────────────────────────

export const erRAA11hSolucion2Slide = String.raw`
<div class="slide">
    <h2 class="slide-title">RAA — <span>Práctica 2, Ej. 11h · Solución (pasos 10–16)</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:9px; font-size:14px;">
            Parte 2 / 2 — Disponemos de: $\lnot Q(a)$, $\lnot Q(a)\lor\lnot R(a)$ (paso 9), P2, P3.
        </div>
        <table class="formal-table" style="font-size:15px; margin-top:0;">
            <thead>
                <tr><th style="width:50px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr style="background:rgba(255,255,255,0.03); font-style:italic;">
                    <td colspan="3" style="font-size:12px; color:var(--text-dim); padding:5px 12px;">
                        Premisa de contexto — pasos 1-9 establecidos: $\lnot Q(a)$, $\lnot Q(a)\lor\lnot R(a)$
                    </td>
                </tr>
                <tr><td>10</td><td>$\lnot(Q(a)\land R(a))$</td><td>De Morgan en 9: $\lnot p\lor\lnot q\equiv\lnot(p\land q)$</td></tr>
                <tr><td>11</td><td>$\lnot P(a)\to Q(a)\land R(a)$</td><td>PU en 2</td></tr>
                <tr><td>12</td><td>$P(a)$</td><td>Modus Tollens (11 y 10)</td></tr>
                <tr><td>13</td><td>$\exists x:P(x)$</td><td>GE en 12</td></tr>
                <tr><td>14</td><td>$\forall x:Q(x)$</td><td>Modus Ponens (3 y 13)</td></tr>
                <tr><td>15</td><td>$Q(a)$</td><td>PU en 14</td></tr>
                <tr><td>16</td><td>$Q(a)\land\lnot Q(a)$</td><td>Conjunción (15 y 8) — <strong>Contradicción</strong></td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:9px; font-size:14px;">
            La suposición $\lnot\exists x:\lnot S(x)$ produce la contradicción $Q(a)\land\lnot Q(a)$ → es falsa → $\exists x:\lnot S(x)$. El argumento es <strong>VÁLIDO</strong>. $\square$
        </div>
    </div>
</div>`;
