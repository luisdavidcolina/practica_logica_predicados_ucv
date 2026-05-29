// Práctica 2 (Quijada, 2024) + Parcial 2 (17/12/2025) — Ejercicios nuevos

// ─── Ej. 6 de la Práctica: predicados del polinomio ────────────────────────────

export const ej6PolinomioSetupSlide = String.raw`
<div class="slide">
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
    <h2 class="slide-title">Ejercicio 12: Validez — <span>Solución Pasos 1–8</span></h2>
    <div class="content">
        <table class="formal-table" style="margin-top:0; font-size:15px;">
            <thead>
                <tr><th style="width:45px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\exists x:[Q(x)\land\lnot S(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\forall x:[P(x)\to S(x)]$</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>$\exists x:[P(x)\lor S(x)]$</td><td>Premisa 3</td></tr>
                <tr style="background:rgba(200,240,122,0.06);"><td>4</td><td>$Q(a)\land\lnot S(a)$</td><td>PE para $x=a$ en 1 — <strong style="color:var(--ucv-accent);">1.ª constante</strong></td></tr>
                <tr><td>5</td><td>$\lnot S(a)$</td><td>Simplificación en 4</td></tr>
                <tr><td>6</td><td>$P(a)\to S(a)$</td><td>PU para $x=a$ en 2</td></tr>
                <tr><td>7</td><td>$\lnot P(a)$</td><td>Modus Tollens en 5,6</td></tr>
                <tr><td>8</td><td>$\exists x:\lnot P(x)$</td><td>GE en 7</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:10px; font-size:15px;">
            Primera rama completa: $\exists x:\lnot P(x)$ derivado. Ahora segunda PE con $b\neq a$. Continúa →
        </div>
    </div>
</div>`;

export const parcial2Ej5SolucionSlide2 = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 12: Validez — <span>Solución Pasos 9–18</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:10px; font-size:15px;">
            Contexto: (8) $\exists x:\lnot P(x)$ · (Premisa 2) $\forall x:[P(x)\to S(x)]$ — segunda rama con constante $b\neq a$
        </div>
        <table class="formal-table" style="margin-top:0; font-size:15px;">
            <thead>
                <tr><th style="width:45px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr style="background:rgba(200,240,122,0.06);"><td>9</td><td>$P(b)\lor S(b)$</td><td>PE para $x=b$ en 3 — <strong style="color:var(--ucv-accent);">2.ª constante, $b\neq a$</strong></td></tr>
                <tr><td>10</td><td>$\lnot S(b)\to P(b)$</td><td>Conmutativa ∨ y EPI en 9</td></tr>
                <tr><td>11</td><td>$P(b)\to S(b)$</td><td>PU para $x=b$ en 2</td></tr>
                <tr><td>12</td><td>$\lnot S(b)\to S(b)$</td><td>Silogismo Hipotético entre 10,11</td></tr>
                <tr><td>13</td><td>$S(b)\lor S(b)$</td><td>EPI en 12</td></tr>
                <tr><td>14</td><td>$S(b)$</td><td>Idempotencia ∨ en 13</td></tr>
                <tr><td>15</td><td>$\exists x:S(x)$</td><td>GE en 14</td></tr>
                <tr><td>16</td><td>$\exists x:S(x)\land\exists x:\lnot P(x)$</td><td>Conjunción entre 15,8</td></tr>
                <tr><td>17</td><td>$\lnot[\lnot\exists x:S(x)\lor\lnot\exists x:\lnot P(x)]$</td><td>De Morgan ∧ y doble negación en 16</td></tr>
                <tr><td>18</td><td>$\lnot[\exists x:S(x)\to\forall x:P(x)]$</td><td>EPI y negación de ∀ en 17</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:8px; font-size:15px;">
            <strong>Argumento VÁLIDO.</strong> PE(a) y PE(b) con constantes distintas — error fatal si se usa la misma.
        </div>
    </div>
</div>`;

// ─── Ej. 1 — Definiciones (todas) ─────────────────────────────────────────────

export const p2Ej1DefinicionesSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 1: <span>Definiciones</span> — Práctica 2</h2>
    <div class="content">
        <table class="formal-table" style="margin-top:0; font-size:15.5px;">
            <thead>
                <tr><th style="width:210px;">Concepto</th><th>Definición</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>a) Universo del discurso</strong> $\mathbb{U}$</td>
                    <td>Conjunto no vacío sobre el que se definen los predicados. Todas las variables toman valores en $\mathbb{U}$ y todos los cuantificadores lo recorren.</td>
                </tr>
                <tr>
                    <td><strong>b) Predicado</strong> (proposición abierta)</td>
                    <td>Expresión $P(x)$ que contiene variables libres y se convierte en una proposición (V o F) al sustituir cada variable por un elemento de $\mathbb{U}$. Ejemplo: $P(x): x>0$.</td>
                </tr>
                <tr>
                    <td><strong>c) Cuantificador universal</strong> $\forall$</td>
                    <td>$\forall x:P(x)$ es V $\iff$ $P(a)=\text{V}$ para <em>todo</em> $a\in\mathbb{U}$. Basta un $a_0$ con $P(a_0)=\text{F}$ (contraejemplo) para que sea F.</td>
                </tr>
                <tr>
                    <td><strong>d) Cuantificador existencial</strong> $\exists$</td>
                    <td>$\exists x:P(x)$ es V $\iff$ existe al menos un $a\in\mathbb{U}$ con $P(a)=\text{V}$ (testigo). Es F solo si $P(a)=\text{F}$ para <em>todo</em> $a\in\mathbb{U}$.</td>
                </tr>
                <tr>
                    <td><strong>e) Principios de particularización y generalización</strong></td>
                    <td>Cuatro reglas de inferencia para cuantificadores: <strong>PU</strong>: $\forall x:P(x)\therefore P(a),\ a\in\mathbb{U}$ · <strong>PE</strong>: $\exists x:P(x)\therefore P(a),\ a\ \text{nuevo}$ · <strong>GU</strong>: $P(x)\ \text{arb.}\therefore\forall x:P(x)$ · <strong>GE</strong>: $P(a)\therefore\exists x:P(x)$</td>
                </tr>
                <tr>
                    <td><strong>f) Alcance de un cuantificador</strong></td>
                    <td>La mínima fórmula bien formada (fbf) que sigue inmediatamente al cuantificador. Los corchetes $[\cdot]$ amplían el alcance. Ejemplo: en $\forall x:P(x)\land Q(x)$, el $\forall x$ solo alcanza $P(x)$.</td>
                </tr>
                <tr>
                    <td><strong>g) Variable libre</strong></td>
                    <td>Variable que aparece en una fórmula sin estar dentro del alcance de ningún cuantificador que la cuantifique. Ejemplo: en $\exists x:P(x)\land Q(y)$, la variable $y$ es libre; $x$ es ligada.</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`;

// ─── Ej. 2 — VV ítems a, d, e (≠ 2c del PDF) ─────────────────────────────────

export const p2Ej2VVExtraSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 2: <span>Valor de Verdad</span> — Ítems a, d, e</h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:10px; font-size:15px;">
            $\mathbb{U}=\mathbb{Z}$. Predicados: $P(x):x>0$ · $Q(x):x\ \text{par}$ · $S(x):x\ \text{div. por}\ 4$ · $R(x):x\ \text{cuadrado perf.}$ · $T(x):x\ \text{div. por}\ 5$
        </div>
        <table class="formal-table" style="margin-top:0; font-size:15.5px;">
            <thead>
                <tr><th style="width:50px;">Ítem</th><th>Simbolización</th><th style="width:70px;">Valor</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>(a)</td>
                    <td>$\exists x:Q(x)$<br><span style="font-size:13px; color:var(--text-dim);">"Al menos un entero es par"</span></td>
                    <td style="color:var(--ucv-accent); font-weight:900;">V ✓</td>
                    <td><strong>Testigo</strong>: $x=2$. $Q(2)=\text{V}$ (2 es par). Basta un testigo para verificar el existencial.</td>
                </tr>
                <tr>
                    <td>(d)</td>
                    <td>$\forall x:[Q(x)\to\lnot T(x)]$<br><span style="font-size:13px; color:var(--text-dim);">"Ningún entero par es div. por 5"</span></td>
                    <td style="color:#ff9a9a; font-weight:900;">F ✗</td>
                    <td><strong>Contraejemplo</strong>: $x=10$. $Q(10)=\text{V}$ (par) y $T(10)=\text{V}$ (10÷5=2), entonces $\lnot T(10)=\text{F}$. Condicional $\text{V}\to\text{F}\equiv\text{F}$.</td>
                </tr>
                <tr>
                    <td>(e)</td>
                    <td>$\exists x:[Q(x)\land T(x)]$<br><span style="font-size:13px; color:var(--text-dim);">"Existe un entero par y div. por 5"</span></td>
                    <td style="color:var(--ucv-accent); font-weight:900;">V ✓</td>
                    <td><strong>Testigo</strong>: $x=10$. $Q(10)=\text{V}$ y $T(10)=\text{V}$, luego $Q(10)\land T(10)=\text{V}$. Proposición existencial verdadera.</td>
                </tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:10px; font-size:15px;">
            <strong>Relación (d)–(e):</strong> (d) es la negación de (e): $\forall x:[Q(x)\to\lnot T(x)]\equiv\lnot[\exists x:[Q(x)\land T(x)]]$. Como (e) es V, (d) es necesariamente F.
        </div>
    </div>
</div>`;

// ─── Ej. 3 — Alcance ítems a y b (≠ 3e del PDF) ──────────────────────────────

export const p2Ej3AlcanceExtraSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 3: <span>Alcance</span> — Ítems a y b</h2>
    <div class="content">
        <div class="guide-grid" style="grid-template-columns:1fr 1fr; margin-bottom:12px;">
            <div class="guide-card">
                <h3>Ítem a) $\forall x:P(x)\land Q(x)\land\exists x:[Q(x)\land P(x)]$</h3>
                <ul>
                    <li>Alcance $\forall x$: solo <strong style="color:var(--ucv-accent);">$P(x)$</strong> — mínima fbf que le sigue</li>
                    <li>Alcance $\exists x$: toda la expresión entre corchetes <strong style="color:var(--ucv-accent);">$[Q(x)\land P(x)]$</strong></li>
                    <li>El $Q(x)$ intermedio (entre los dos cuantificadores) <strong style="color:#ff9a9a;">no está bajo ningún alcance → variable libre</strong></li>
                </ul>
                <div class="note-bar" style="margin-top:8px; font-size:13px; padding:6px 10px; line-height:2;">
                    $\underbrace{\forall x:\overbrace{P(x)}^{\text{alc.}\forall}}\land\underbrace{Q(x)}_{\text{libre}}\land\underbrace{\exists x:\overbrace{[Q(x)\land P(x)]}^{\text{alc.}\exists}}_{}$
                </div>
            </div>
            <div class="guide-card">
                <h3>Ítem b) $\forall x[\exists z:[P(x)\to R(z)]]$</h3>
                <ul>
                    <li>Alcance $\forall x$: toda la expresión entre corchetes externos: <strong style="color:var(--ucv-accent);">$\exists z:[P(x)\to R(z)]$</strong></li>
                    <li>Alcance $\exists z$: el condicional entre sus corchetes: <strong style="color:var(--ucv-accent);">$[P(x)\to R(z)]$</strong></li>
                    <li>$x$ está ligada a $\forall x$ · $z$ está ligada a $\exists z$ · <strong>no hay variables libres</strong></li>
                </ul>
                <div class="note-bar" style="margin-top:8px; font-size:13px; padding:6px 10px; line-height:2;">
                    $\underbrace{\forall x\overbrace{[\underbrace{\exists z:\overbrace{[P(x)\to R(z)]}^{\text{alc.}\exists z}}_{}]}^{\text{alc.}\forall x}}_{}$
                </div>
            </div>
        </div>
        <div class="note-bar" style="font-size:15px;">
            <strong>Comparación (a) vs (b):</strong> En (a) el $\forall x$ no tiene corchetes → alcance mínimo $P(x)$, dejando $Q(x)$ libre. En (b) los corchetes externos del $\forall x$ encierran todo, incluyendo el $\exists z$ anidado. Los corchetes son obligatorios para ampliar el alcance.
        </div>
    </div>
</div>`;

// ─── Ej. 4 — Universo finito {a,b} ítems a y c (≠ 4e del PDF) ────────────────

export const p2Ej4UniversoFinitoSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 4: <span>Universo Finito</span> $\mathbb{U}=\{a,b\}$ — Ítems a y c</h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:10px; font-size:15px;">
            Si $\mathbb{U}=\{x_1,\ldots,x_n\}$: $\quad\forall x:P(x)\equiv P(x_1)\land\cdots\land P(x_n)\quad$ y $\quad\exists x:P(x)\equiv P(x_1)\lor\cdots\lor P(x_n)$
        </div>
        <div class="guide-grid" style="grid-template-columns:1fr 1fr; margin-bottom:10px;">
            <div class="guide-card">
                <h3>Ítem a) $\forall x:P(x)\to\exists x:R(x)$</h3>
                <p style="font-size:14px; color:var(--text-dim); margin-bottom:8px;">Sin corchetes externos: el $\forall x$ alcanza solo $P(x)$ y el $\exists x$ alcanza solo $R(x)$. La implicación $\to$ está <em>fuera</em> de ambos cuantificadores.</p>
                <div class="case-formula" style="font-size:16px; line-height:2.1; padding:10px 14px; text-align:left;">
                    $\forall x:P(x)\ \equiv\ P(a)\land P(b)$<br>
                    $\exists x:R(x)\ \equiv\ R(a)\lor R(b)$<br>
                    $\therefore\ [P(a)\land P(b)]\to[R(a)\lor R(b)]$
                </div>
            </div>
            <div class="guide-card">
                <h3>Ítem c) $\forall x:[P(x)\lor R(x)]$</h3>
                <p style="font-size:14px; color:var(--text-dim); margin-bottom:8px;">Los corchetes amplían el alcance del $\forall x$ sobre toda la disyunción. Se expande aplicando la regla a la fórmula completa $P(x)\lor R(x)$.</p>
                <div class="case-formula" style="font-size:16px; line-height:2.1; padding:10px 14px; text-align:left;">
                    $\forall x:[P(x)\lor R(x)]$<br>
                    $\equiv\ [P(a)\lor R(a)]\land[P(b)\lor R(b)]$
                </div>
                <p style="font-size:14px; color:var(--text-dim); margin-top:6px;">⚠ Compare con (a): el alcance del $\forall$ cambia todo.</p>
            </div>
        </div>
        <div class="case-grid" style="grid-template-columns:1fr 1fr; margin-top:0;">
            <div class="case-card">
                <div class="case-head"><h3>Ítem a — ¿qué dice?</h3></div>
                <p class="case-desc" style="font-size:15px;">"Si todo elemento cumple $P$, entonces existe alguno que cumple $R$." La implicación es entre dos proposiciones completas, no dentro del cuantificador.</p>
            </div>
            <div class="case-card">
                <div class="case-head"><h3>Ítem c — ¿qué dice?</h3></div>
                <p class="case-desc" style="font-size:15px;">"Para cada elemento del universo, ese elemento cumple $P$ o cumple $R$ (o ambas)." Es una propiedad que se exige a <em>cada</em> elemento individualmente.</p>
            </div>
        </div>
    </div>
</div>`;

// ─── Ej. 5 — Simbolización ítem a (≠ 5b del PDF) ─────────────────────────────

export const p2Ej5SimbolizacionSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 5: <span>Simbolización</span> — Ítem a (Bailarines de Claqué)</h2>
    <div class="content">
        <div class="case-intro" style="font-size:16px; line-height:1.6;">
            "Todos los bailarines de claqué son saltarines. Nadie que sea saltarín pesa mucho. Por lo tanto, ningún bailarín de claqué pesa mucho."
        </div>
        <div class="example-panel" style="margin-top:10px;">
            <div class="example-card">
                <h3>Paso 1: Definición</h3>
                <div class="example-item">
                    <span class="step">$\mathbb{U}$</span>
                    <span class="text">$\mathbb{U}=\{\text{personas}\}$</span>
                </div>
                <div class="example-item">
                    <span class="step">$B(x)$</span>
                    <span class="text">$x$ es bailarín de claqué</span>
                </div>
                <div class="example-item">
                    <span class="step">$S(x)$</span>
                    <span class="text">$x$ es saltarín</span>
                </div>
                <div class="example-item">
                    <span class="step">$P(x)$</span>
                    <span class="text">$x$ pesa mucho</span>
                </div>
                <h3 style="margin-top:12px; font-size:18px;">Paso 2: Simbolización</h3>
                <div class="example-item">
                    <span class="step">P1</span>
                    <span class="text" style="color:var(--ucv-accent);">$\forall x:[B(x)\to S(x)]$</span>
                </div>
                <div class="example-item">
                    <span class="step">P2</span>
                    <span class="text" style="color:var(--ucv-accent);">$\lnot[\exists x:[S(x)\land P(x)]]\equiv\forall x:[S(x)\to\lnot P(x)]$</span>
                </div>
                <div class="example-item">
                    <span class="step">$\therefore$ C</span>
                    <span class="text" style="color:var(--ucv-accent);">$\lnot[\exists x:[B(x)\land P(x)]]\equiv\forall x:[B(x)\to\lnot P(x)]$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Nadie = ¬∃ = ∀¬</span>
                <p>"Nadie que sea $S$ hace $P$" tiene dos simbolizaciones equivalentes:<br>
                $\lnot[\exists x:[S(x)\land P(x)]]$ — "no existe ninguno"<br>
                $\forall x:[S(x)\to\lnot P(x)]$ — "todo $S$ no hace $P$"</p>
                <span class="tag" style="margin-top:10px;">Patrón SH</span>
                <p>La conclusión se obtiene por <strong>Silogismo Hipotético</strong>: $B\to S$, $S\to\lnot P$ $\therefore B\to\lnot P$. Luego GU sobre $x$ arbitraria.</p>
            </div>
        </div>
    </div>
</div>`;

// ─── Ej. 7 — Equivalencia ítem c (≠ 7h del PDF) ──────────────────────────────

export const p2Ej7EquivCSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 7: <span>Equivalencia</span> — Ítem c</h2>
    <div class="content">
        <div class="case-intro" style="font-size:17px;">
            Demuestre: $\forall x:[P(x)\land Q(x)]\ \equiv\ \forall x:P(x)\land\forall x:Q(x)$
        </div>
        <div class="example-panel" style="grid-template-columns:1fr 1fr; margin-top:8px;">
            <div class="example-card">
                <h3>Dirección $(\Rightarrow)$</h3>
                <p style="font-size:13px; color:var(--text-dim); margin-bottom:5px;">Premisa: $\forall x:[P(x)\land Q(x)]$ — Meta: $\forall x:P(x)\land\forall x:Q(x)$</p>
                <table class="formal-table" style="font-size:14.5px; margin:0;">
                    <thead><tr><th>#</th><th>Proposición</th><th>Justif.</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>$\forall x:[P(x)\land Q(x)]$</td><td>Premisa</td></tr>
                        <tr><td>2</td><td>$P(x)\land Q(x)$</td><td>PU en 1</td></tr>
                        <tr><td>3</td><td>$P(x)$</td><td>Simp. en 2</td></tr>
                        <tr><td>4</td><td>$Q(x)$</td><td>Simp. en 2</td></tr>
                        <tr><td>5</td><td>$\forall x:P(x)$</td><td>GU en 3</td></tr>
                        <tr><td>6</td><td>$\forall x:Q(x)$</td><td>GU en 4</td></tr>
                        <tr><td>7</td><td>$\forall x:P(x)\land\forall x:Q(x)$</td><td>Conj. 5,6</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="example-card">
                <h3>Dirección $(\Leftarrow)$</h3>
                <p style="font-size:13px; color:var(--text-dim); margin-bottom:5px;">Premisa: $\forall x:P(x)\land\forall x:Q(x)$ — Meta: $\forall x:[P(x)\land Q(x)]$</p>
                <table class="formal-table" style="font-size:14.5px; margin:0;">
                    <thead><tr><th>#</th><th>Proposición</th><th>Justif.</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>$\forall x:P(x)\land\forall x:Q(x)$</td><td>Premisa</td></tr>
                        <tr><td>2</td><td>$\forall x:P(x)$</td><td>Simp. en 1</td></tr>
                        <tr><td>3</td><td>$\forall x:Q(x)$</td><td>Simp. en 1</td></tr>
                        <tr><td>4</td><td>$P(x)$</td><td>PU en 2</td></tr>
                        <tr><td>5</td><td>$Q(x)$</td><td>PU en 3</td></tr>
                        <tr><td>6</td><td>$P(x)\land Q(x)$</td><td>Conj. 4,5</td></tr>
                        <tr><td>7</td><td>$\forall x:[P(x)\land Q(x)]$</td><td>GU en 6</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="note-bar" style="margin-top:8px; font-size:15px;">
            Ambas direcciones usan PU + Simplificación + GU. La $x$ debe ser <strong>arbitraria</strong> en ambas para que GU sea válido. Esta equivalencia <strong>no se cumple</strong> para $\exists$ con $\land$ (solo es implicación en un sentido).
        </div>
    </div>
</div>`;

// ─── Ej. 8 — Implicación ítem f (≠ 8d del PDF) ───────────────────────────────

export const p2Ej8ImplFSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 8: <span>Implicación</span> — Ítem f</h2>
    <div class="content">
        <div class="case-intro" style="font-size:17px;">
            Demuestre: $\forall x:[P(x)\to Q(x)]\ \Rightarrow\ \exists x:P(x)\to\exists x:Q(x)$
        </div>
        <div class="example-panel" style="margin-top:10px; grid-template-columns:1.5fr 0.8fr;">
            <div class="example-card">
                <h3>Prueba — Método Condicional (PC)</h3>
                <table class="formal-table" style="font-size:15.5px; margin:0;">
                    <thead><tr><th style="width:45px;">Paso</th><th>Proposición</th><th>Justificación</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>$\forall x:[P(x)\to Q(x)]$</td><td>Premisa 1</td></tr>
                        <tr style="background:rgba(200,240,122,0.06);"><td>2</td><td>$\exists x:P(x)$</td><td>Premisa condicional [PC]</td></tr>
                        <tr><td>3</td><td>$P(a)$</td><td>PE para $x=a$ en 2</td></tr>
                        <tr><td>4</td><td>$P(a)\to Q(a)$</td><td>PU para $x=a$ en 1</td></tr>
                        <tr><td>5</td><td>$Q(a)$</td><td>Modus Ponens en 3,4</td></tr>
                        <tr><td>6</td><td>$\exists x:Q(x)$</td><td>GE en 5</td></tr>
                        <tr style="background:rgba(200,240,122,0.06);"><td>7</td><td>$\exists x:P(x)\to\exists x:Q(x)$</td><td>Prueba Condicional</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="example-side">
                <span class="tag">¿Por qué PC?</span>
                <p>La conclusión es un condicional $A\to B$. PC asume $A=\exists x:P(x)$ y demuestra $B=\exists x:Q(x)$.</p>
                <span class="tag" style="margin-top:10px;">PE antes que PU</span>
                <p>En paso 3 se aplica PE al existencial asumido antes de PU en paso 4 — orden correcto.</p>
                <span class="tag" style="margin-top:10px;">Uso de esta implicación</span>
                <p>Permite "pasar" el existencial a través de una regla universal. Fundamental en demostraciones de la forma $\exists x:Q(x)$.</p>
            </div>
        </div>
    </div>
</div>`;

// ─── Ej. 9 — Validez ítem b (≠ 9i del PDF) ───────────────────────────────────

export const p2Ej9ValidezBSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 9: <span>Validez</span> — Ítem b (Bailarines / Esgrimistas)</h2>
    <div class="content">
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card" style="flex:1.4;">
                <h3>Enunciado y Simbolización</h3>
                <p style="font-size:14px; color:var(--text-dim); margin-bottom:6px;">"Todos los bailarines son afeminados. Algunos esgrimistas no son afeminados. En consecuencia, algunos esgrimistas no son bailarines."</p>
                <div class="example-item">
                    <span class="step">$\mathbb{U}$, pred.</span>
                    <span class="text">$\mathbb{U}=\{\text{personas}\}$ · $B(x)$: bailarín · $A(x)$: afeminado · $E(x)$: esgrimista</span>
                </div>
                <div class="example-item">
                    <span class="step">P1</span>
                    <span class="text" style="color:var(--ucv-accent);">$\forall x:[B(x)\to A(x)]$</span>
                </div>
                <div class="example-item">
                    <span class="step">P2</span>
                    <span class="text" style="color:var(--ucv-accent);">$\exists x:[E(x)\land\lnot A(x)]$</span>
                </div>
                <div class="example-item">
                    <span class="step">$\therefore$ C</span>
                    <span class="text" style="color:var(--ucv-accent);">$\exists x:[E(x)\land\lnot B(x)]$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Estrategia</span>
                <p>P2 es $\exists$ → <strong>PE primero</strong> → $E(a)\land\lnot A(a)$. Simplificar ambos. P1 es $\forall$ → PU con $a$ → $B(a)\to A(a)$. MT con $\lnot A(a)$ → $\lnot B(a)$. Conjuntar → GE.</p>
            </div>
        </div>
        <table class="formal-table" style="margin-top:10px; font-size:15px;">
            <thead><tr><th style="width:45px;">Paso</th><th>Proposición</th><th>Justificación</th></tr></thead>
            <tbody>
                <tr><td>1</td><td>$\forall x:[B(x)\to A(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\exists x:[E(x)\land\lnot A(x)]$</td><td>Premisa 2</td></tr>
                <tr style="background:rgba(200,240,122,0.06);"><td>3</td><td>$E(a)\land\lnot A(a)$</td><td>PE para $x=a$ en 2 <strong style="color:var(--ucv-accent);">(PE antes que PU)</strong></td></tr>
                <tr><td>4</td><td>$E(a)$</td><td>Simplificación en 3</td></tr>
                <tr><td>5</td><td>$\lnot A(a)$</td><td>Simplificación en 3</td></tr>
                <tr><td>6</td><td>$B(a)\to A(a)$</td><td>PU para $x=a$ en 1</td></tr>
                <tr><td>7</td><td>$\lnot B(a)$</td><td>Modus Tollens en 5,6</td></tr>
                <tr><td>8</td><td>$E(a)\land\lnot B(a)$</td><td>Conjunción en 4,7</td></tr>
                <tr><td>9</td><td>$\exists x:[E(x)\land\lnot B(x)]$</td><td>GE en 8</td></tr>
            </tbody>
        </table>
    </div>
</div>`;

// ─── Ej. 10 — Invalidez ítem a (≠ 10c del PDF) ───────────────────────────────

export const p2Ej10InvalidezASlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 10: <span>Invalidez</span> — Ítem a · Encuentra el Contraejemplo</h2>
    <div class="content">
        <div class="example-panel" style="margin-top:0; grid-template-columns:1.3fr 0.7fr;">
            <div class="example-card">
                <h3>Argumento — $\mathbb{U}=\{a\}$ (universo unitario)</h3>
                <div class="case-formula" style="font-size:17px; line-height:2.1; text-align:left; padding:8px 14px;">
                    P1: $\forall x:[P(x)\lor R(x)]$<br>
                    P2: $\forall x:[P(x)\land S(x)]$<br>
                    $\therefore\ \forall x:[R(x)\land S(x)]$
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Tu misión</span>
                <p style="font-size:13px; line-height:1.7;">Asigna V/F a $P(a)$, $R(a)$, $S(a)$ hasta lograr <strong style="color:var(--ucv-accent);">P1=P2=V</strong> y <strong style="color:#ff9a9a;">C=F</strong>.</p>
                <p style="font-size:12px; color:var(--text-dim); margin-top:6px;">Pista: ¿qué pasa si $R(a)=\text{F}$ y $P(a)=\text{V}$?</p>
            </div>
        </div>
        <div class="sandbox-panel" id="sandbox_inv2" style="margin-top:10px; background:linear-gradient(180deg,rgba(18,24,29,0.98),rgba(11,15,18,0.98)); border:1px solid rgba(200,240,122,0.3); border-radius:10px; padding:10px 14px;">
            <div style="text-align:center; color:var(--ucv-accent); font-size:13px; font-weight:700; margin-bottom:7px;">⚡ Simulador de Valores de Verdad — $\mathbb{U}=\{a\}$</div>
            <div style="display:flex; justify-content:center; gap:12px; margin-bottom:8px;">
                <button class="var-toggle" data-var="pa" data-val="?" style="font-size:14px; padding:6px 16px;">P(a)=<span class="val">?</span></button>
                <button class="var-toggle" data-var="ra" data-val="?" style="font-size:14px; padding:6px 16px;">R(a)=<span class="val">?</span></button>
                <button class="var-toggle" data-var="sa" data-val="?" style="font-size:14px; padding:6px 16px;">S(a)=<span class="val">?</span></button>
            </div>
            <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; text-align:center;">
                <div class="eval-box" id="inv2-p1" style="min-height:52px; padding:6px 5px; font-size:13px;">P1: $P(a)\lor R(a)$<br><span class="res">?</span></div>
                <div class="eval-box" id="inv2-p2" style="min-height:52px; padding:6px 5px; font-size:13px;">P2: $P(a)\land S(a)$<br><span class="res">?</span></div>
                <div class="eval-box" id="inv2-c"  style="min-height:52px; padding:6px 5px; font-size:13px;">C: $R(a)\land S(a)$<br><span class="res">?</span></div>
            </div>
            <div id="inv2-msg" style="margin-top:7px; padding:6px 10px; border-radius:7px; text-align:center; font-size:13px; font-weight:bold; background:rgba(255,255,255,0.05); color:var(--text-dim); transition:all 0.3s;">
                Haz clic en las variables para asignar V o F.
            </div>
        </div>
        <div style="text-align:center; margin-top:10px;">
            <button class="reveal-solution-btn" onclick="this.style.display='none'; document.getElementById('inv2-solution').style.display='flex';" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.18); color:var(--text-dim); padding:6px 20px; border-radius:20px; cursor:pointer; font-size:13px; transition:all 0.2s;">
                <i class="fas fa-eye"></i> Ver solución oficial
            </button>
        </div>
        <div class="answer-solution" id="inv2-solution" style="display:none; margin-top:8px; gap:10px; align-items:start; grid-template-columns:1.4fr 0.8fr;">
            <div class="example-card" style="padding:10px 14px;">
                <h3 style="font-size:15px; margin-bottom:6px;">Por qué funciona</h3>
                <p style="font-size:13px; line-height:1.8; color:var(--text-dim);">
                    P2 exige $P(a)=\text{V}$ y $S(a)=\text{V}$ simultáneamente.<br>
                    P1 solo necesita $P(a)\lor R(a)=\text{V}$ — ya cumplida con $P(a)=\text{V}$.<br>
                    Conclusión: $R(a)\land S(a)$ — si ponemos $R(a)=\text{F}$, es F. Listo.
                </p>
            </div>
            <div class="example-side" style="padding:10px 14px;">
                <span class="tag">Contraejemplo</span>
                <table class="logic-table" style="font-size:15px; margin-top:6px;">
                    <thead><tr><th>$P(a)$</th><th>$R(a)$</th><th>$S(a)$</th><th>P1</th><th>P2</th><th>C</th></tr></thead>
                    <tbody><tr>
                        <td style="color:var(--ucv-accent);">V</td>
                        <td style="color:#ff9a9a;">F</td>
                        <td style="color:var(--ucv-accent);">V</td>
                        <td style="color:var(--ucv-accent);">V</td>
                        <td style="color:var(--ucv-accent);">V</td>
                        <td style="color:#ff9a9a; font-weight:900;">F ✓</td>
                    </tr></tbody>
                </table>
                <p style="font-size:12px; color:#ff9a9a; font-weight:700; margin-top:6px;">Argumento INVÁLIDO ✓</p>
            </div>
        </div>
    </div>
</div>`;

// ─── Ej. 11 — Validez ítem a (≠ 11c del PDF) ─────────────────────────────────

export const p2Ej11ValidezASlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 11: <span>Validez</span> — Ítem a (PC + GU)</h2>
    <div class="content">
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card" style="flex:1.1;">
                <h3>Argumento</h3>
                <div class="case-formula" style="font-size:17px; line-height:2; text-align:left; padding:10px 14px;">
                    P1: $\forall x:[P(x)\lor Q(x)]$<br>
                    P2: $\forall x:[\lnot P(x)\land Q(x)\to R(x)]$<br>
                    $\therefore\ \forall x:[\lnot R(x)\to P(x)]$
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Método: PC + GU</span>
                <p>La conclusión es $\forall x:[\lnot R(x)\to P(x)]$. Para $x$ arbitraria: asumir $\lnot R(x)$ [PC], derivar $P(x)$, aplicar GU al final.</p>
            </div>
        </div>
        <table class="formal-table" style="margin-top:10px; font-size:14px;">
            <thead><tr><th style="width:45px;">Paso</th><th>Proposición</th><th>Justificación</th></tr></thead>
            <tbody>
                <tr><td>1</td><td>$\forall x:[P(x)\lor Q(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\forall x:[\lnot P(x)\land Q(x)\to R(x)]$</td><td>Premisa 2</td></tr>
                <tr style="background:rgba(200,240,122,0.06);"><td>3</td><td>$\lnot R(x)$</td><td>Premisa condicional [PC], $x$ arbitraria</td></tr>
                <tr><td>4</td><td>$\lnot P(x)\land Q(x)\to R(x)$</td><td>PU en 2</td></tr>
                <tr><td>5</td><td>$\lnot[\lnot P(x)\land Q(x)]$</td><td>Modus Tollens en 3,4</td></tr>
                <tr><td>6</td><td>$P(x)\lor\lnot Q(x)$</td><td>De Morgan en 5</td></tr>
                <tr><td>7</td><td>$P(x)\lor Q(x)$</td><td>PU en 1</td></tr>
                <tr><td>8</td><td>$[P(x)\lor\lnot Q(x)]\land[P(x)\lor Q(x)]$</td><td>Conjunción en 6,7</td></tr>
                <tr><td>9</td><td>$P(x)\lor[\lnot Q(x)\land Q(x)]$</td><td>Distributiva $\lor$ sobre $\land$</td></tr>
                <tr><td>10</td><td>$P(x)\lor\text{F}$</td><td>Complemento en 9</td></tr>
                <tr><td>11</td><td>$P(x)$</td><td>Identidad en 10</td></tr>
                <tr style="background:rgba(200,240,122,0.06);"><td>12</td><td>$\lnot R(x)\to P(x)$</td><td>Prueba Condicional en 3–11</td></tr>
                <tr><td>13</td><td>$\forall x:[\lnot R(x)\to P(x)]$</td><td>GU en 12 ($x$ fue arbitraria)</td></tr>
            </tbody>
        </table>
    </div>
</div>`;

// ─── Ej. 5 — Simbolización ítems c, d, e ──────────────────────────────────────

export const p2Ej5SimbolizacionCDESlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 5: <span>Simbolización</span> — Ítems c, d, e</h2>
    <div class="content">
        <div class="guide-grid" style="grid-template-columns:repeat(3,1fr); margin-bottom:10px;">
            <div class="guide-card">
                <h3 style="font-size:15px;">Ítem c — Ejecutivos</h3>
                <p style="font-size:13px; color:var(--text-dim); line-height:1.5; margin-bottom:6px;">"Cualquier ejecutivo acaba cansado. Nadie que acabe cansado es feliz. ∴ Ningún ejecutivo es feliz."</p>
                <p style="font-size:12px; margin-bottom:5px;">$\mathbb{U}=\{\text{personas}\}$ · $E(x)$: ejecutivo · $C(x)$: cansado · $F(x)$: feliz</p>
                <p style="color:var(--ucv-accent); font-size:14px; line-height:2.0;">
                    P1: $\forall x:[E(x)\to C(x)]$<br>
                    P2: $\forall x:[C(x)\to\lnot F(x)]$<br>
                    $\therefore$ C: $\forall x:[E(x)\to\lnot F(x)]$
                </p>
                <p style="font-size:12px; color:var(--text-dim); margin-top:4px;">Patrón: SH universal</p>
            </div>
            <div class="guide-card">
                <h3 style="font-size:15px;">Ítem d — Juan y la pintura</h3>
                <p style="font-size:13px; color:var(--text-dim); line-height:1.5; margin-bottom:6px;">"Todo sujeto sensible admira la pintura. Juan es sensible. ∴ Juan admira la pintura."</p>
                <p style="font-size:12px; margin-bottom:5px;">$\mathbb{U}=\{\text{personas}\}$ · $S(x)$: sensible · $A(x)$: admira pintura · $j$: Juan</p>
                <p style="color:var(--ucv-accent); font-size:14px; line-height:2.0;">
                    P1: $\forall x:[S(x)\to A(x)]$<br>
                    P2: $S(j)$<br>
                    $\therefore$ C: $A(j)$
                </p>
                <p style="font-size:12px; color:var(--text-dim); margin-top:4px;">Patrón: PU + MP sobre constante</p>
            </div>
            <div class="guide-card">
                <h3 style="font-size:15px;">Ítem e — Banqueros y mendigos</h3>
                <p style="font-size:13px; color:var(--text-dim); line-height:1.5; margin-bottom:6px;">"Todos los banqueros amasan su fortuna siendo generosos. Algunos mendigos no lo hicieron. ∴ Ningún mendigo es banquero."</p>
                <p style="font-size:12px; margin-bottom:5px;">$\mathbb{U}=\{\text{personas}\}$ · $B(x)$: banquero · $G(x)$: amasó siendo generoso · $M(x)$: mendigo</p>
                <p style="color:var(--ucv-accent); font-size:14px; line-height:2.0;">
                    P1: $\forall x:[B(x)\to G(x)]$<br>
                    P2: $\exists x:[M(x)\land\lnot G(x)]$<br>
                    $\therefore$ C: $\lnot[\exists x:[M(x)\land B(x)]]$
                </p>
                <p style="font-size:12px; color:var(--text-dim); margin-top:4px;">Patrón: $\forall$ + $\exists\lnot$ · PE+MT+GE</p>
            </div>
        </div>
        <div class="case-grid" style="margin-top:0;">
            <div class="case-card">
                <div class="case-head"><h3>¿Por qué (c) usa $\forall+\to$ dos veces?</h3></div>
                <p class="case-desc" style="font-size:15px;">"Nadie que acabe cansado es feliz" = $\forall x:[C(x)\to\lnot F(x)]$. Ambas premisas son universales con $\to$. La conclusión se sigue por Silogismo Hipotético: $E\to C$, $C\to\lnot F$ $\therefore E\to\lnot F$.</p>
            </div>
            <div class="case-card">
                <div class="case-head"><h3>¿Por qué (e) no usa $\forall$ en la conclusión?</h3></div>
                <p class="case-desc" style="font-size:15px;">$\lnot[\exists x:[M(x)\land B(x)]]$ es equivalente a $\forall x:[M(x)\to\lnot B(x)]$ — ambas formas son correctas. La primera dice "no existe mendigo que sea banquero"; la segunda, "todo mendigo no es banquero".</p>
            </div>
        </div>
    </div>
</div>`;

// ─── Ej. 5 — Simbolización ítems f, g, h, i ───────────────────────────────────

export const p2Ej5SimbolizacionFGHISlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 5: <span>Simbolización</span> — Ítems f, g, h, i</h2>
    <div class="content">
        <div class="guide-grid" style="grid-template-columns:repeat(2,1fr); margin-bottom:10px;">
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:15px;">Ítem f — Selvas tropicales</h3>
                <p style="font-size:12px; color:var(--text-dim); margin-bottom:5px;">"Todas las selvas tienen color esmeralda. Nada esmeralda está reseco. ∴ Ninguna selva está reseca."</p>
                <p style="font-size:11px; margin-bottom:4px;">$S(x)$: selva tropical · $E(x)$: color esmeralda · $R(x)$: reseco</p>
                <p style="color:var(--ucv-accent); font-size:13px; line-height:1.9;">
                    P1: $\forall x:[S(x)\to E(x)]$ &nbsp;·&nbsp; P2: $\forall x:[E(x)\to\lnot R(x)]$<br>
                    $\therefore$ $\forall x:[S(x)\to\lnot R(x)]$
                </p>
                <p style="font-size:11px; color:var(--text-dim);">SH universal — idéntico a ítem (c)</p>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:15px;">Ítem g — Cerdos y cerezos</h3>
                <p style="font-size:12px; color:var(--text-dim); margin-bottom:5px;">"Todos los cerdos tienen alas. Algunos cerezos no tienen alas. ∴ Hay cerezos que no son cerdos."</p>
                <p style="font-size:11px; margin-bottom:4px;">$C(x)$: cerdo · $A(x)$: tiene alas · $Z(x)$: cerezo</p>
                <p style="color:var(--ucv-accent); font-size:13px; line-height:1.9;">
                    P1: $\forall x:[C(x)\to A(x)]$ &nbsp;·&nbsp; P2: $\exists x:[Z(x)\land\lnot A(x)]$<br>
                    $\therefore$ $\exists x:[Z(x)\land\lnot C(x)]$
                </p>
                <p style="font-size:11px; color:var(--text-dim);">Mismo patrón que (e) — PE+MT+GE</p>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:15px;">Ítem h — Enamorados y deprimidos</h3>
                <p style="font-size:12px; color:var(--text-dim); margin-bottom:5px;">"Ningún enamorado suspira. Todos los deprimidos suspiran. ∴ Nadie deprimido está enamorado."</p>
                <p style="font-size:11px; margin-bottom:4px;">$E(x)$: enamorado · $S(x)$: suspira · $D(x)$: deprimido</p>
                <p style="color:var(--ucv-accent); font-size:13px; line-height:1.9;">
                    P1: $\forall x:[E(x)\to\lnot S(x)]$ &nbsp;·&nbsp; P2: $\forall x:[D(x)\to S(x)]$<br>
                    $\therefore$ $\forall x:[D(x)\to\lnot E(x)]$
                </p>
                <p style="font-size:11px; color:var(--text-dim);">Patrón MT: $D\to S$, $E\to\lnot S$ $\therefore D\to\lnot E$</p>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:15px;">Ítem i — Extraterrestres sin corazón</h3>
                <p style="font-size:12px; color:var(--text-dim); margin-bottom:5px;">"Nadie que siga las leyes de la lógica tiene corazón. Todos los extraterrestres las siguen. ∴ Los extraterrestres carecen de corazón."</p>
                <p style="font-size:11px; margin-bottom:4px;">$L(x)$: sigue leyes de lógica · $C(x)$: tiene corazón · $X(x)$: extraterrestre</p>
                <p style="color:var(--ucv-accent); font-size:13px; line-height:1.9;">
                    P1: $\forall x:[L(x)\to\lnot C(x)]$ &nbsp;·&nbsp; P2: $\forall x:[X(x)\to L(x)]$<br>
                    $\therefore$ $\forall x:[X(x)\to\lnot C(x)]$
                </p>
                <p style="font-size:11px; color:var(--text-dim);">SH: $X\to L$, $L\to\lnot C$ $\therefore X\to\lnot C$</p>
            </div>
        </div>
        <div class="note-bar" style="font-size:14px;">
            <strong>Patrones recurrentes en Ej. 5:</strong> &nbsp;
            SH ($\forall[A\to B]$, $\forall[B\to C]$ $\therefore\forall[A\to C]$) — ítems a, c, f, i &nbsp;·&nbsp;
            $\forall+\exists\lnot$ (PE+MT+GE) — ítems e, g &nbsp;·&nbsp;
            MT inverso — ítem h &nbsp;·&nbsp;
            Constante + MP — ítem d
        </div>
    </div>
</div>`;
