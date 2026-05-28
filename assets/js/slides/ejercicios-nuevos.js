// Práctica 2 (Quijada, 2024) + Parcial 2 (17/12/2025) — Ejercicios nuevos

// ─── Ej. 6 de la Práctica: predicados del polinomio ────────────────────────────

export const ej6PolinomioSetupSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 3 · Práctica</span>
    <h2 class="slide-title">Laboratorio: <span>Predicados del Polinomio</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:11px;">
            Práctica 2, Ej. 6 — $\mathbb{U} = \mathbb{Z}$. Predicados: $P(x): x^2-8x+15=0$, $Q(x): x\ \text{es impar}$, $R(x): x>0$
        </div>
        <div class="case-grid" style="margin-bottom:11px;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Clave: factorizar $P(x)$</h3>
                    <span class="case-badge valid" title="Factorizar el polinomio revela exactamente qué valores lo satisfacen, sin iterar todos los enteros">Truco</span>
                </div>
                <div class="case-formula" style="font-size:22px; padding:10px 14px;">
                    $x^2-8x+15 = (x-3)(x-5)$
                </div>
                <p class="case-desc">$P(x)=\text{V} \iff x=3 \text{ ó } x=5$. Solo dos testigos en $\mathbb{Z}$. Todo el análisis gira en torno a $x=3$ y $x=5$.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>¡Observación sorprendente!</h3>
                    <span class="case-badge valid">Curiosidad</span>
                </div>
                <p class="case-desc">Las dos raíces son <strong>impares</strong> ($Q(3)=Q(5)=\text{V}$) y <strong>positivas</strong> ($R(3)=R(5)=\text{V}$).</p>
                <p class="case-desc" style="font-size:16px;">Esto hace que $\forall x:[P(x)\to Q(x)]$ y $\forall x:[P(x)\to R(x)]$ sean <span style="color:var(--ucv-accent);">VERDADERAS</span> sin revisar todos los enteros. Pero $\forall x:[Q(x)\to P(x)]$ es <span style="color:#ff9a9a;">FALSA</span> — el 7 es impar pero no es raíz.</p>
            </div>
        </div>
        <table class="logic-table" style="margin-top:0; font-size:16px;">
            <thead>
                <tr><th>$x$</th><th>$P(x): x^2-8x+15=0$</th><th>$Q(x): x\ \text{impar}$</th><th>$R(x): x>0$</th></tr>
            </thead>
            <tbody>
                <tr><td>$-1$</td><td style="color:#ff9a9a;">F — $1+8+15=24\neq 0$</td><td style="color:var(--ucv-accent);">V</td><td style="color:#ff9a9a;">F</td></tr>
                <tr><td>$1$</td><td style="color:#ff9a9a;">F — $1-8+15=8\neq 0$</td><td style="color:var(--ucv-accent);">V</td><td style="color:var(--ucv-accent);">V</td></tr>
                <tr style="background:rgba(200,240,122,0.07);"><td style="color:var(--ucv-accent); font-weight:900;">$3$</td><td style="color:var(--ucv-accent); font-weight:900;">V — $9-24+15=0$ ✓</td><td style="color:var(--ucv-accent);">V — impar</td><td style="color:var(--ucv-accent);">V</td></tr>
                <tr style="background:rgba(200,240,122,0.07);"><td style="color:var(--ucv-accent); font-weight:900;">$5$</td><td style="color:var(--ucv-accent); font-weight:900;">V — $25-40+15=0$ ✓</td><td style="color:var(--ucv-accent);">V — impar</td><td style="color:var(--ucv-accent);">V</td></tr>
                <tr><td>$7$</td><td style="color:#ff9a9a;">F — $49-56+15=8\neq 0$</td><td style="color:var(--ucv-accent);">V</td><td style="color:var(--ucv-accent);">V</td></tr>
            </tbody>
        </table>
    </div>
</div>`;

export const ej6PolinomioVVSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 3 · Práctica</span>
    <h2 class="slide-title">Ejercicio 9: Valor de Verdad — <span>Práctica 2, Ej. 6 (a, f, j)</span></h2>
    <div class="content">
        <div class="case-intro" style="font-size:16px;">
            $\mathbb{U}=\mathbb{Z}$, $P(x)=(x-3)(x-5)=0$, $Q(x):x\ \text{impar}$, $R(x):x>0$. Determine el valor de verdad:
        </div>
        <table class="formal-table" style="margin-top:8px; font-size:16px;">
            <thead>
                <tr><th style="width:60px;">Ítem</th><th>Proposición</th><th>Valor</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>(a)</td>
                    <td>$\forall x:[P(x)\to Q(x)]$</td>
                    <td style="color:var(--ucv-accent); font-weight:900;">V ✓</td>
                    <td>Sólo $x=3$ y $x=5$ satisfacen $P$. Ambos son impares: $Q(3)=Q(5)=\text{V}$. El universal es verdadero.</td>
                </tr>
                <tr>
                    <td>(f)</td>
                    <td>$\forall x:[Q(x)\to P(x)]$</td>
                    <td style="color:#ff9a9a; font-weight:900;">F ✗</td>
                    <td>Contraejemplo $x=7$: $Q(7)=\text{V}$ (7 es impar) pero $49-56+15=8\neq 0$, entonces $P(7)=\text{F}$. El condicional $\text{V}\to\text{F}\equiv\text{F}$.</td>
                </tr>
                <tr>
                    <td>(j)</td>
                    <td>$\forall x:[P(x)\lor Q(x)\to R(x)]$</td>
                    <td style="color:#ff9a9a; font-weight:900;">F ✗</td>
                    <td>Contraejemplo $x=-1$: $P(-1)=\text{F}$ pero $Q(-1)=\text{V}$ (impar). Entonces $P(-1)\lor Q(-1)=\text{V}$. Pero $R(-1)=\text{F}$ ($-1&lt;0$). Condicional $\text{V}\to\text{F}\equiv\text{F}$.</td>
                </tr>
            </tbody>
        </table>
        <div class="example-panel" style="margin-top:11px; grid-template-columns:1.4fr 0.6fr;">
            <div class="example-card">
                <h3>Comparación clave: (a) vs (f)</h3>
                <div class="example-item">
                    <span class="step">$P\to Q$</span>
                    <span class="text">Solo dos elementos satisfacen $P$, y ambos satisfacen $Q$ → <strong style="color:var(--ucv-accent);">VERDADERA</strong></span>
                </div>
                <div class="example-item">
                    <span class="step">$Q\to P$</span>
                    <span class="text">Hay infinitos impares ($Q=\text{V}$) pero casi ninguno es raíz ($P=\text{F}$) → <strong style="color:#ff9a9a;">FALSA</strong></span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">⚠ Asimetría</span>
                <p>$P\to Q$ verdadera NO implica $Q\to P$ verdadera. Son conversos — y el converso puede ser falso.</p>
                <p>En (j): $x=-1$ es impar y negativo — el único "defecto" oculto.</p>
            </div>
        </div>
    </div>
</div>`;

// ─── Parcial 2, Ej. 1 — Simbolización Sensible/Pintura ─────────────────────────

export const parcial2Ej1SimbolizacionSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 3 · Práctica</span>
    <h2 class="slide-title">Ejercicio 10: <span>Simbolización</span> — Parcial 2, Ej. 1</h2>
    <div class="content">
        <div class="case-intro" style="font-size:16px; line-height:1.6;">
            "No hay nadie que sea sensible y no admire la pintura. Algunas personas no son sensibles. Si todos no admiran la pintura, algunos no son pintores. Por tanto, Juan no es sensible."
        </div>
        <div class="example-panel" style="margin-top:10px;">
            <div class="example-card">
                <h3>Paso 1: Definición</h3>
                <div class="example-item">
                    <span class="step">$\mathbb{U}$</span>
                    <span class="text">$\mathbb{U} = \{\text{personas}\}$</span>
                </div>
                <div class="example-item">
                    <span class="step">$A(x)$</span>
                    <span class="text">$x$ admira la pintura</span>
                </div>
                <div class="example-item">
                    <span class="step">$S(x)$</span>
                    <span class="text">$x$ es persona sensible</span>
                </div>
                <div class="example-item">
                    <span class="step">$P(x)$</span>
                    <span class="text">$x$ es pintor &nbsp;·&nbsp; $J$: Juan</span>
                </div>
                <h3 style="margin-top:12px; font-size:18px;">Paso 2: Simbolización</h3>
                <div class="example-item">
                    <span class="step">P1</span>
                    <span class="text" style="color:var(--ucv-accent);">$\lnot[\exists x:[S(x)\land\lnot A(x)]]$</span>
                </div>
                <div class="example-item">
                    <span class="step">P2</span>
                    <span class="text" style="color:var(--ucv-accent);">$\exists x:\lnot S(x)$</span>
                </div>
                <div class="example-item">
                    <span class="step">P3</span>
                    <span class="text" style="color:var(--ucv-accent);">$\forall x:\lnot A(x) \to \exists x:\lnot P(x)$</span>
                </div>
                <div class="example-item">
                    <span class="step">$\therefore$ C</span>
                    <span class="text" style="color:var(--ucv-accent);">$\lnot S(J)$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">¡Dos formas de P1!</span>
                <p>P1 tiene dos simbolizaciones <strong>equivalentes</strong>:</p>
                <p style="color:var(--ucv-accent); font-size:16px; line-height:1.8;">
                    $\lnot[\exists x:[S(x)\land\lnot A(x)]]$<br>
                    $\equiv \forall x:[S(x)\to A(x)]$
                </p>
                <p style="font-size:15px;">Son equivalentes por la ley de negación del $\exists$. La segunda es más compacta. Ambas son aceptadas en la UCV.</p>
                <p style="font-size:15px; margin-top:8px;">P3 es un condicional cuyo antecedente es $\forall x:\lnot A(x)$ (proposición universal, no condicional cuantificado).</p>
            </div>
        </div>
    </div>
</div>`;

// ─── Parcial 2, Ej. 3b — Prueba Elegante de la Equivalencia 8 ──────────────────

export const parcial2Ej3bEquivSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 3 · Práctica</span>
    <h2 class="slide-title">Ejercicio 11: <span>Prueba Elegante</span> — Equivalencia 8 (Parcial 2, Ej. 3b)</h2>
    <div class="content">
        <div class="case-intro" style="font-size:17px;">
            Demuestre: $\exists x:[P(x)\to Q(x)] \equiv \forall x:P(x) \to \exists x:Q(x)$
            &nbsp;&nbsp;(Esta es la Equivalencia 8 de la tabla — ¡ahora veremos por qué es cierta!)
        </div>
        <table class="formal-table" style="margin-top:8px; font-size:17px;">
            <thead>
                <tr>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>$\exists x:[P(x)\to Q(x)]$</td><td>Premisa</td></tr>
                <tr><td>$\equiv \exists x:[\lnot P(x)\lor Q(x)]$</td><td>EPI — equivalencia para la implicación</td></tr>
                <tr><td>$\equiv \exists x:\lnot P(x) \lor \exists x:Q(x)$</td><td>Distributiva ∃ sobre ∨ (Equivalencia 4)</td></tr>
                <tr><td>$\equiv \lnot\forall x:P(x) \lor \exists x:Q(x)$</td><td>Negación del ∀ (Equivalencia 1)</td></tr>
                <tr><td>$\equiv \forall x:P(x) \to \exists x:Q(x)$</td><td>EPI — equivalencia para la implicación</td></tr>
            </tbody>
        </table>
        <div class="example-panel" style="margin-top:11px; grid-template-columns:1.4fr 0.6fr;">
            <div class="example-card">
                <h3>¿Qué equivalencias usa esta prueba?</h3>
                <div class="example-item">
                    <span class="step">Equiv. 1</span>
                    <span class="text">$\lnot[\forall x:P(x)] \equiv \exists x:\lnot P(x)$ — negación del ∀ (paso 4)</span>
                </div>
                <div class="example-item">
                    <span class="step">Equiv. 4</span>
                    <span class="text">$\exists x:[P(x)\lor Q(x)] \equiv \exists x:P(x)\lor\exists x:Q(x)$ — distributiva ∃ sobre ∨ (paso 3)</span>
                </div>
                <div class="example-item">
                    <span class="step">EPI</span>
                    <span class="text">$A\to B \equiv \lnot A\lor B$ — equivalencia para la implicación (pasos 2 y 5)</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">¡Solo 4 pasos!</span>
                <p>La prueba larga (usando universo finito) tiene ~10 pasos. La prueba corta usa las equivalencias de la tabla directamente.</p>
                <p>Esto demuestra por qué aprender las equivalencias de memoria vale la pena.</p>
            </div>
        </div>
    </div>
</div>`;

// ─── Parcial 2, Ej. 5 — Prueba con dos PE ─────────────────────────────────────

export const parcial2Ej5AnalisisSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 3 · Práctica</span>
    <h2 class="slide-title">Ejercicio 12: Validez — <span>Parcial 2, Ej. 5</span> (Análisis)</h2>
    <div class="content">
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card" style="flex:1.3;">
                <h3>Argumento (5 pts — Parcial 2, II-2025)</h3>
                <div class="case-formula" style="font-size:18px; line-height:2.1; text-align:left; padding:12px 16px;">
                    P1: $\exists x:[Q(x)\land\lnot S(x)]$<br>
                    P2: $\forall x:[P(x)\to S(x)]$<br>
                    P3: $\exists x:[P(x)\lor S(x)]$<br>
                    $\therefore\ \lnot[\exists x:S(x)\to\forall x:P(x)]$
                </div>
            </div>
            <div class="example-side">
                <span class="tag">¡Dos PE!</span>
                <p><strong>P1 y P3 son existenciales.</strong> Hay que aplicar PE a <em>las dos</em> con constantes distintas: $a$ para P1, $b$ para P3.</p>
                <p>Si se usa la misma constante, la prueba sería incorrecta.</p>
            </div>
        </div>
        <div class="guide-grid" style="margin-top:11px;">
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Estrategia general</h3>
                <ul>
                    <li>De P1 (PE, $x=a$): $Q(a)\land\lnot S(a)$ → extraer $\lnot S(a)$</li>
                    <li>Con P2 (PU, $x=a$) y $\lnot S(a)$ → MT → $\lnot P(a)$ → GE → $\exists x:\lnot P(x)$</li>
                    <li>De P3 (PE, $x=b\neq a$): $P(b)\lor S(b)$ → con P2 (PU, $x=b$) → demostrar $S(b)$ → GE → $\exists x:S(x)$</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Estructura de la conclusión</h3>
                <ul>
                    <li>$\lnot[\exists x:S(x)\to\forall x:P(x)]$</li>
                    <li>$\equiv \lnot[\lnot\exists x:S(x)\lor\lnot\exists x:\lnot P(x)]$</li>
                    <li>$\equiv \exists x:S(x)\land\exists x:\lnot P(x)$</li>
                    <li>Se obtiene combinando los dos resultados por conjunción</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Método y orden</h3>
                <ul>
                    <li>Método Directo (ARD)</li>
                    <li>18 pasos en total</li>
                    <li>PE a P1 <strong>antes</strong> que PE a P3</li>
                    <li>PU de P2 se aplica dos veces: $x=a$ y $x=b$</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

export const parcial2Ej5SolucionSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 3 · Práctica</span>
    <h2 class="slide-title">Ejercicio 12: Validez — <span>Solución Completa (18 pasos)</span></h2>
    <div class="content">
        <table class="formal-table" style="margin-top:0; font-size:14px;">
            <thead>
                <tr>
                    <th style="width:45px;">Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\exists x:[Q(x)\land\lnot S(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\forall x:[P(x)\to S(x)]$</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>$\exists x:[P(x)\lor S(x)]$</td><td>Premisa 3</td></tr>
                <tr style="background:rgba(200,240,122,0.06);"><td>4</td><td>$Q(a)\land\lnot S(a)$</td><td>PE para x=a en 1 <strong style="color:var(--ucv-accent);">(1.ª constante)</strong></td></tr>
                <tr><td>5</td><td>$\lnot S(a)$</td><td>Simplificación en 4</td></tr>
                <tr><td>6</td><td>$P(a)\to S(a)$</td><td>PU para x=a en 2</td></tr>
                <tr><td>7</td><td>$\lnot P(a)$</td><td>Modus Tollendo Tollens en 5 y 6</td></tr>
                <tr><td>8</td><td>$\exists x:\lnot P(x)$</td><td>Generalización existencial (GE) en 7</td></tr>
                <tr style="background:rgba(200,240,122,0.06);"><td>9</td><td>$P(b)\lor S(b)$</td><td>PE para x=b en 3 <strong style="color:var(--ucv-accent);">(2.ª constante, b≠a)</strong></td></tr>
                <tr><td>10</td><td>$\lnot S(b)\to P(b)$</td><td>Conmutativa para ∨ y EPI en 9</td></tr>
                <tr><td>11</td><td>$P(b)\to S(b)$</td><td>PU para x=b en 2</td></tr>
                <tr><td>12</td><td>$\lnot S(b)\to S(b)$</td><td>Silogismo Hipotético entre 10 y 11</td></tr>
                <tr><td>13</td><td>$S(b)\lor S(b)$</td><td>EPI en 12</td></tr>
                <tr><td>14</td><td>$S(b)$</td><td>Idempotencia para ∨ en 13</td></tr>
                <tr><td>15</td><td>$\exists x:S(x)$</td><td>Generalización existencial (GE) en 14</td></tr>
                <tr><td>16</td><td>$\exists x:S(x)\land\exists x:\lnot P(x)$</td><td>Conjunción entre 15 y 8</td></tr>
                <tr><td>17</td><td>$\lnot[\lnot\exists x:S(x)\lor\lnot\exists x:\lnot P(x)]$</td><td>De Morgan para ∧ y doble negación en 16</td></tr>
                <tr><td>18</td><td>$\lnot[\exists x:S(x)\to\forall x:P(x)]$</td><td>EPI y negación de ∀ en 17</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:8px; font-size:15px;">
            <strong>El argumento es VÁLIDO.</strong> Comentario: los pasos 4 y 9 son las dos PE con constantes diferentes $a$ y $b$. Si se usara la misma constante, el argumento sería incorrecto.
        </div>
    </div>
</div>`;
