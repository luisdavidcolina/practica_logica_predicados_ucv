// Quiz II - Sección C7 - 12/12/2025 (elaborado por Luisdavid Colina)

export const quizEj1Slide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 4: <span>Simbolización</span> — Quiz II, Ej. 1</h2>
    <div class="content">
        <div class="case-intro" style="font-size:18px; line-height:1.6;">
            <strong>Simbolice</strong> el siguiente argumento definiendo explícitamente cada predicado y constante:
            <br><em>"Todo el que ama apasionadamente acaba siendo desgraciado. Todas las personas que no pueden ocultar su pasión mueren prematuramente. Por lo tanto, si todo aquel que acaba siendo desgraciado no puede ocultar su pasión, entonces todo el que ame de forma apasionada muere prematuramente."</em>
        </div>
        <div class="example-panel" style="margin-top:10px;">
            <div class="example-card">
                <h3>Solución: Paso 1 — Definición</h3>
                <div class="example-item">
                    <span class="step">$\mathbb{U}$</span>
                    <span class="text">$\mathbb{U} = \{\text{personas}\}$</span>
                </div>
                <div class="example-item">
                    <span class="step">$A(x)$</span>
                    <span class="text">$x$ ama apasionadamente</span>
                </div>
                <div class="example-item">
                    <span class="step">$D(x)$</span>
                    <span class="text">$x$ acaba siendo desgraciado</span>
                </div>
                <div class="example-item">
                    <span class="step">$O(x)$</span>
                    <span class="text">$x$ puede ocultar su pasión &nbsp;→ "no puede" es $\lnot O(x)$</span>
                </div>
                <div class="example-item">
                    <span class="step">$M(x)$</span>
                    <span class="text">$x$ muere prematuramente</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Paso 2 — Simbolización</span>
                <p style="font-size:16px; line-height:2.0; color:var(--ucv-accent);">
                    P1: $\forall x:[A(x)\to D(x)]$<br>
                    P2: $\forall x:[\lnot O(x)\to M(x)]$<br>
                    $\therefore\ [\forall x:(D(x)\to\lnot O(x))]$<br>&nbsp;&nbsp;&nbsp;$\to[\forall x:(A(x)\to M(x))]$
                </p>
                <p style="font-size:15px;">La conclusión es un condicional cuyo antecedente es una proposición universal y cuyo consecuente también.</p>
            </div>
        </div>
        <div class="note-bar" style="margin-top:10px;">
            <strong>Clave:</strong> "Si todo aquel que... entonces todo el que..." → la conclusión tiene forma $[\forall x:\ldots] \to [\forall x:\ldots]$. Esto sugiere usar el <strong>Método Condicional</strong> para demostrar su validez.
        </div>
    </div>
</div>`;

export const quizEj3AnalisisSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 5: Validez — <span>Quiz II, Ej. 3</span> (Análisis)</h2>
    <div class="content">
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card" style="flex:1.3;">
                <h3>Argumento (7 puntos — Quiz II 12/12/2025)</h3>
                <div class="case-formula" style="font-size:19px; line-height:2.1; text-align:left; padding:12px 16px;">
                    P1: $\forall x:[P(x) \lor Q(x)]$<br>
                    P2: $\exists x:\lnot P(x)$<br>
                    P3: $\forall x:[\lnot Q(x) \lor R(x)]$<br>
                    P4: $\forall x:[S(x) \to \lnot R(x)]$<br>
                    $\therefore\ \exists x:\lnot S(x)$
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Análisis Estratégico</span>
                <p><strong>Observación clave:</strong> hay una premisa existencial (P2). Debe aplicarse <strong>PE primero</strong>.</p>
                <p>De P2 obtenemos $\lnot P(a)$ para algún $a$. Con $\lnot P(a)$ y P1[PU] obtenemos $Q(a)$ por SD.</p>
                <p>Con $Q(a)$ y P3[PU] obtenemos $R(a)$ por SD. Con $R(a)$ y P4[PU] obtenemos $\lnot S(a)$ por MT. Por GE: $\exists x:\lnot S(x)$. ✓</p>
            </div>
        </div>
        <div class="guide-grid" style="margin-top:12px;">
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Reglas que se usan</h3>
                <ul>
                    <li>PE (de P2: premisa existencial)</li>
                    <li>PU (de P1, P3, P4)</li>
                    <li>Silogismo Disyuntivo (P1+P2)</li>
                    <li>Silogismo Disyuntivo (P3)</li>
                    <li>Modus Tollendo Tollens (P4)</li>
                    <li>GE (conclusión existencial)</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Método</h3>
                <ul>
                    <li>Se usa <strong>Método Directo (ARD)</strong></li>
                    <li>PE antes que PU — crítico</li>
                    <li>12 pasos totales</li>
                    <li>Ver próxima lámina para la prueba completa</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Tipo de conclusión</h3>
                <ul>
                    <li>La conclusión es $\exists x:\lnot S(x)$</li>
                    <li>Para obtenerla: conseguir $\lnot S(a)$ y aplicar GE</li>
                    <li>La cadena P2→P1→P3→P4 es directa</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

export const quizEj3SolucionSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 5: Validez — <span>Quiz II, Ej. 3</span> (Solución)</h2>
    <div class="content">
        <table class="formal-table" style="margin-top:0; font-size:17px;">
            <thead>
                <tr>
                    <th style="width:55px;">Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\exists x:\lnot P(x)$</td><td>Premisa 2</td></tr>
                <tr><td>2</td><td>$\lnot P(a)$</td><td>Particularización existencial (PE) en 1</td></tr>
                <tr><td>3</td><td>$\forall x:[P(x)\lor Q(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>4</td><td>$P(a)\lor Q(a)$</td><td>Particularización universal (PU) en 3</td></tr>
                <tr><td>5</td><td>$Q(a)$</td><td>Silogismo Disyuntivo en 2 y 4</td></tr>
                <tr><td>6</td><td>$\forall x:[\lnot Q(x)\lor R(x)]$</td><td>Premisa 3</td></tr>
                <tr><td>7</td><td>$\lnot Q(a)\lor R(a)$</td><td>Particularización universal (PU) en 6</td></tr>
                <tr><td>8</td><td>$R(a)$</td><td>Silogismo Disyuntivo en 5 y 7</td></tr>
                <tr><td>9</td><td>$\forall x:[S(x)\to\lnot R(x)]$</td><td>Premisa 4</td></tr>
                <tr><td>10</td><td>$S(a)\to\lnot R(a)$</td><td>Particularización universal (PU) en 9</td></tr>
                <tr><td>11</td><td>$\lnot S(a)$</td><td>Modus Tollendo Tollens en 8 y 10</td></tr>
                <tr><td>12</td><td>$\exists x:\lnot S(x)$</td><td>Generalización existencial (GE) en 11</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:10px;">
            <strong>El argumento es VÁLIDO.</strong> Elaborado por Luisdavid Colina / Profesora Yuliana Fernández / Sección C7 / Quiz II / 12 Dic 2025.
        </div>
    </div>
</div>`;

export const quizEj2AnalisisSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 6: Invalidez — <span>Quiz II, Ej. 2</span> (Análisis)</h2>
    <div class="content">
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card" style="flex:1.3;">
                <h3>Argumento (7 puntos — Quiz II + Parcial 2)</h3>
                <div class="case-formula" style="font-size:19px; line-height:2.1; text-align:left; padding:12px 16px;">
                    P1: $F(b) \to \forall x:P(x)$<br>
                    P2: $\exists x:F(x)$<br>
                    P3: $\exists x:[P(x)\to R(x)]$<br>
                    $\therefore\ \exists x:R(x)$
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Estrategia</span>
                <p><strong>Paso 1:</strong> Probar con $\mathbb{U} = \{b\}$ (universo unitario).</p>
                <p>Si el argumento resulta válido en $\mathbb{U}=\{b\}$, entonces <strong>agrandar</strong> a $\mathbb{U} = \{a,b\}$.</p>
                <p>Buscar una interpretación donde <strong>P1, P2, P3 sean V</strong> y la <strong>conclusión sea F</strong>.</p>
            </div>
        </div>
        <div class="case-grid" style="margin-top:12px;">
            <div class="case-card">
                <div class="case-head">
                    <h3>$\mathbb{U} = \{b\}$: universo unitario</h3>
                    <span class="case-badge invalid">No sirve</span>
                </div>
                <p class="case-desc" style="font-size:16px; line-height:1.8;">
                    $F(b) \to P(b)$<br>$F(b)$<br>$P(b) \to R(b)$<br>$\therefore\ R(b)$
                </p>
                <p class="case-desc">Este argumento siempre es válido por MP sucesivo. Debemos usar $\mathbb{U} = \{a,b\}$.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>$\mathbb{U} = \{a,b\}$: la clave</h3>
                    <span class="case-badge valid">Aquí está el contraejemplo</span>
                </div>
                <p class="case-desc">La P1 solo habla de $F(b)$, no de $F(a)$. Si hacemos $F(b)=$F, la P1 es V vacuamente. Pero si $F(a)=$V tenemos P2 verdadera sin que $P(x)$ deba ser verdadera para todos. Esta "grieta" permite hacer la conclusión falsa.</p>
            </div>
        </div>
    </div>
</div>`;

export const quizEj2SolucionSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 6: Invalidez — <span>Contraejemplo $\mathbb{U} = \{a,b\}$</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:12px;">
            Buscamos valores para $F(a)$, $F(b)$, $P(a)$, $P(b)$, $R(a)$, $R(b)$ tal que P1, P2, P3 sean V y la conclusión $\exists x:R(x)$ sea F.
        </div>
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card">
                <h3>Razonamiento de construcción del contraejemplo</h3>
                <div class="example-item">
                    <span class="step">Conclusión F</span>
                    <span class="text">$\exists x:R(x)$ es F $\Leftrightarrow$ $R(a)\equiv\text{F}$ y $R(b)\equiv\text{F}$ (nadie cumple $R$)</span>
                </div>
                <div class="example-item">
                    <span class="step">P1 V</span>
                    <span class="text">$F(b)\to\forall x:P(x)$. Hacemos $F(b)=$F → P1 es V vacuamente ($\mathbf{F}\to\text{cualquier cosa} \equiv \mathbf{V}$)</span>
                </div>
                <div class="example-item">
                    <span class="step">P2 V</span>
                    <span class="text">$\exists x:F(x) \equiv F(a)\lor F(b)$. $F(b)=$F, así que necesitamos $F(a)=$V ✓</span>
                </div>
                <div class="example-item">
                    <span class="step">P3 V</span>
                    <span class="text">$\exists x:[P(x)\to R(x)] \equiv [P(a)\to R(a)]\lor[P(b)\to R(b)]$. $R(a)=R(b)=$F. Hacemos $P(a)=$F → $(\mathbf{F}\to\mathbf{F})\equiv\mathbf{V}$ ✓</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Contraejemplo</span>
                <table class="logic-table" style="font-size:16px; margin-top:8px;">
                    <thead><tr><th>F(a)</th><th>F(b)</th><th>P(a)</th><th>P(b)</th><th>R(a)</th><th>R(b)</th></tr></thead>
                    <tbody>
                        <tr>
                            <td style="color:var(--ucv-accent);">V</td>
                            <td style="color:#ff9a9a;">F</td>
                            <td style="color:#ff9a9a;">F</td>
                            <td style="color:var(--ucv-accent);">V</td>
                            <td style="color:#ff9a9a;">F</td>
                            <td style="color:#ff9a9a;">F</td>
                        </tr>
                    </tbody>
                </table>
                <p style="margin-top:10px; font-size:16px;">P1: F→(F∧V) = V ✓<br>P2: V∨F = V ✓<br>P3: (F→F)∨(V→F) = V∨F = V ✓<br>C: F∨F = <strong style="color:#ff9a9a;">F ✓</strong></p>
            </div>
        </div>
        <div class="note-bar" style="margin-top:10px;">
            <strong>El argumento es INVÁLIDO.</strong> Este contraejemplo fue la solución exacta del Quiz II (Ej.2) y del Parcial 2 (Ej.4) — Sem. II-2025.
        </div>
    </div>
</div>`;
