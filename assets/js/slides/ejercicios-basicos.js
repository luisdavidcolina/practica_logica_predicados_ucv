export const metodologiaSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Metodología para <span>Resolver Ejercicios</span></h2>
    <div class="content">
        <div class="flow-row" style="grid-template-columns: 1fr 0.3fr 1fr 0.3fr 1fr 0.3fr 1fr; margin-bottom:14px;">
            <div class="flow-box">
                <div class="flow-label">1</div>
                <div class="flow-title" style="font-size:18px;">Leer el enunciado</div>
                <div class="flow-text">Identificar tipo: simbolización, valor de verdad, validez o invalidez.</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-box">
                <div class="flow-label">2</div>
                <div class="flow-title" style="font-size:18px;">Definir</div>
                <div class="flow-text">Universo $\mathbb{U}$, predicados $P(x)$, $Q(x)$…, constantes $a$, $b$, $j$…</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-box">
                <div class="flow-label">3</div>
                <div class="flow-title" style="font-size:18px;">Simbolizar</div>
                <div class="flow-text">Traducir cada premisa y la conclusión usando las 4 formas canónicas.</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-box">
                <div class="flow-label">4</div>
                <div class="flow-title" style="font-size:18px;">Demostrar</div>
                <div class="flow-text">Aplicar el método adecuado: ARD, PC, RAA o contraejemplo.</div>
            </div>
        </div>
        <div class="case-grid">
            <div class="case-card">
                <div class="case-head">
                    <h3>¿Cómo saber qué método usar?</h3>
                    <span class="case-badge valid">Guía rápida</span>
                </div>
                <ul style="padding-left:18px; line-height:1.8; font-size:17px; color:var(--text-dim);">
                    <li>Conclusión directa → <strong>Método Directo (ARD)</strong></li>
                    <li>Conclusión de forma $A\to B$ → <strong>Prueba Condicional (PC)</strong></li>
                    <li>Conclusión difícil → <strong>RAA</strong> (asumir $\lnot$conclusión)</li>
                    <li>Probar que es inválido → <strong>Contraejemplo</strong> con $\mathbb{U}$ finito</li>
                </ul>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Errores frecuentes en UCV</h3>
                    <span class="case-badge invalid">Evitar</span>
                </div>
                <ul style="padding-left:18px; line-height:1.8; font-size:17px; color:var(--text-dim);">
                    <li>Aplicar PU antes que PE cuando hay ambas</li>
                    <li>Usar la misma constante para dos PE distintos</li>
                    <li>Olvidar justificar cada paso con la regla correspondiente</li>
                    <li>Confundir $\forall x:[G(x)\land E(x)]$ con $\forall x:[G(x)\to E(x)]$</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

export const ejVV1Slide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 1: <span>Valor de Verdad</span> — Práctica 2, Ej. 2c</h2>
    <div class="content">
        <div class="case-intro">
            Sea $\mathbb{U} = \mathbb{Z}$. Predicados: $P(x):x>0$, $Q(x):x\ \text{es par}$, $S(x):x\ \text{es divisible por}\ 4$, $R(x):x\ \text{es cuadrado perfecto}$, $T(x):x\ \text{es divisible por}\ 5$.<br>
            Determine el valor de verdad: <strong style="color:var(--ucv-accent); font-size:22px;">$\forall x:[Q(x) \to \lnot S(x)]$</strong>
        </div>
        <div class="example-panel">
            <div class="example-card">
                <h3>Análisis: ¿cuándo es FALSA una proposición universal?</h3>
                <div class="example-item">
                    <span class="step">Estrategia</span>
                    <span class="text">Para falsificar $\forall x:[Q(x)\to\lnot S(x)]$ basta encontrar <strong>un contraejemplo</strong>: un entero donde el condicional sea falso.</span>
                </div>
                <div class="example-item">
                    <span class="step">$x = 4$</span>
                    <span class="text">$Q(4)$: V (4 es par). $S(4)$: V (4 es divisible por 4). Por tanto $\lnot S(4)$: <strong style="color:#ff9a9a;">F</strong>.</span>
                </div>
                <div class="example-item">
                    <span class="step">Condicional</span>
                    <span class="text">$Q(4) \to \lnot S(4) \equiv \mathbf{V} \to \mathbf{F} \equiv$ <strong style="color:#ff9a9a;">F</strong></span>
                </div>
                <div class="example-item">
                    <span class="step">Conclusión</span>
                    <span class="text">Hemos encontrado $x = 4$ que hace el condicional falso. Por tanto $\forall x:[Q(x)\to\lnot S(x)]$ es <strong style="color:#ff9a9a;">FALSA</strong>.</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Enunciado</span>
                <p>"Es suficiente que cualquier $x$ sea par para que no sea divisible por 4"</p>
                <p>Intuitivamente falso: 4, 8, 12... son pares y divisibles por 4.</p>
                <p class="final" style="font-size:18px; color:#ff9a9a;">Valor: FALSO</p>
            </div>
        </div>
        <div class="note-bar">
            <strong>Regla:</strong> Para falsificar $\forall x:P(x)$ basta un contraejemplo. Para falsificar $\exists x:P(x)$ hay que demostrar que $P(x)$ es falsa para <em>todos</em> los elementos del universo.
        </div>
    </div>
</div>`;

export const ejVV2Slide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 2: <span>Valor de Verdad</span> — Parcial 2, Ej. 2</h2>
    <div class="content">
        <div class="case-intro">
            Sea $\mathbb{U} = \mathbb{Z}$. Determine el valor de verdad y justifique:<br>
            <strong style="color:var(--ucv-accent); font-size:22px;">$\forall x:[x > 3 \to x^2 &lt; 3]$</strong>
        </div>
        <div class="example-panel">
            <div class="example-card">
                <h3>Demostración formal (estilo examen UCV)</h3>
                <div class="example-item">
                    <span class="step">Objetivo</span>
                    <span class="text">Para falsificar la proposición universal, debemos encontrar al menos un $x \in \mathbb{Z}$ tal que el condicional $x > 3 \to x^2 &lt; 3$ sea <strong>falso</strong>.</span>
                </div>
                <div class="example-item">
                    <span class="step">$x = 4$</span>
                    <span class="text">
                        <span style="color:var(--ucv-accent);">$4 > 3$</span>: V &nbsp;&nbsp; y &nbsp;&nbsp; <span style="color:#ff9a9a;">$16 &lt; 3$</span>: F
                    </span>
                </div>
                <div class="example-item">
                    <span class="step">Condicional</span>
                    <span class="text" style="font-size:20px;">
                        $\mathbf{V} \to \mathbf{F} \equiv$ <strong style="color:#ff9a9a;">F</strong>
                    </span>
                </div>
                <div class="example-item">
                    <span class="step">Conclusión</span>
                    <span class="text">Por tanto, $\forall x:[x > 3 \to x^2 &lt; 3]$ tiene valor de verdad <strong style="color:#ff9a9a;">FALSO</strong>.</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Examen II-2025</span>
                <p>Este exacto ejercicio apareció en el <strong>Parcial II (17/12/2025)</strong> con 3 puntos.</p>
                <p>La respuesta es simple: un solo contraejemplo lo resuelve.</p>
                <p class="final" style="font-size:18px; color:#ff9a9a;">Valor: FALSO</p>
            </div>
        </div>
        <div class="note-bar">
            <strong>Tip:</strong> Siempre empieza por probar $x = 4$, $x = 5$... para el universal con $x>3$. Si $x \leq 3$ el condicional es verdadero vacuamente (antecedente falso), así que no sirve como contraejemplo.
        </div>
    </div>
</div>`;

export const ejAlcanceSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 3: <span>Alcance</span> — Práctica 2, Ej. 3e</h2>
    <div class="content">
        <div class="case-intro">
            Determine el alcance de cada cuantificador en:
            <br><strong style="color:var(--ucv-accent); font-size:24px;">$\exists x:P(x) \leftrightarrow \exists y:R(y) \land Q(x)$</strong>
        </div>
        <div class="example-panel">
            <div class="example-card">
                <h3>Análisis paso a paso</h3>
                <div class="example-item">
                    <span class="step">Regla</span>
                    <span class="text">El alcance de un cuantificador es la <strong>mínima fórmula bien formada (fbf)</strong> que le sigue inmediatamente.</span>
                </div>
                <div class="example-item">
                    <span class="step">$\exists x$</span>
                    <span class="text">El $\exists x$ va seguido de $P(x)$, que es la mínima fbf. Su alcance es solo <strong style="color:var(--ucv-accent);">$P(x)$</strong>.</span>
                </div>
                <div class="example-item">
                    <span class="step">$\exists y$</span>
                    <span class="text">El $\exists y$ va seguido de $R(y)$, que es la mínima fbf. Su alcance es solo <strong style="color:var(--ucv-accent);">$R(y)$</strong>.</span>
                </div>
                <div class="example-item">
                    <span class="step">$Q(x)$</span>
                    <span class="text">La $x$ de $Q(x)$ <strong>no está dentro del alcance de $\exists x$</strong> — es una <strong style="color:#ff9a9a;">variable libre</strong>.</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Diagrama</span>
                <p style="font-size:17px; line-height:2.2; color:var(--text-main);">
                    $\exists x:\ \underline{P(x)}\ \leftrightarrow\ \exists y:\ \underline{R(y)}\ \land\ Q(x)$<br>
                    <span style="color:var(--text-dim); font-size:13px;">&nbsp;alcance∃x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; alcance∃y &nbsp; libre</span>
                </p>
                <p>La fbf completa incluye también el $\leftrightarrow$ y el $\land Q(x)$ como parte de la fórmula total, pero cada cuantificador tiene un alcance pequeño.</p>
            </div>
        </div>
        <div class="note-bar">
            <strong>Clave:</strong> $\exists x:P(x) \leftrightarrow \exists y:R(y) \land Q(x)$ es diferente de $\exists x:[P(x) \leftrightarrow \exists y:R(y) \land Q(x)]$. Los corchetes amplían el alcance del cuantificador.
        </div>
    </div>
</div>`;
