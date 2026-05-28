export const universoFinitoSlide = String.raw`
<div class="slide" id="slide-universo-finito">
    <span class="section-tag">Sección 2 · Herramientas</span>
    <h2 class="slide-title">Universo Finito y <span>Equivalencia Proposicional</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:14px;">
            Cuando $\mathbb{U} = \{x_1, x_2, \ldots, x_n\}$ es <strong>finito</strong>, las proposiciones cuantificadas se pueden "desenrollar" como conjunciones o disyunciones proposicionales.
        </div>
        <div class="case-grid" style="margin-bottom:14px;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Cuantificador Universal</h3>
                    <span class="case-badge valid" title="El universal se convierte en conjunción: debe ser verdadero para TODOS">∧ Conjunción</span>
                </div>
                <div class="case-formula" style="font-size:19px; line-height:1.7; text-align:left; padding:10px 14px;">
                    $\forall x:P(x) \equiv P(x_1) \land P(x_2) \land \cdots \land P(x_n)$
                </div>
                <p class="case-desc">Ejemplo: $\mathbb{U} = \{a,b\}$<br>
                <span style="color:var(--ucv-accent); font-size:18px;">$\forall x:P(x) \equiv P(a) \land P(b)$</span></p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Cuantificador Existencial</h3>
                    <span class="case-badge valid" title="El existencial se convierte en disyunción: basta que sea verdadero para ALGUNO">∨ Disyunción</span>
                </div>
                <div class="case-formula" style="font-size:19px; line-height:1.7; text-align:left; padding:10px 14px;">
                    $\exists x:P(x) \equiv P(x_1) \lor P(x_2) \lor \cdots \lor P(x_n)$
                </div>
                <p class="case-desc">Ejemplo: $\mathbb{U} = \{a,b\}$<br>
                <span style="color:var(--ucv-accent); font-size:18px;">$\exists x:P(x) \equiv P(a) \lor P(b)$</span></p>
            </div>
        </div>
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card">
                <h3>Ejercicio 4e de la Práctica: $\mathbb{U} = \{a,b\}$</h3>
                <div class="example-item">
                    <span class="step">Fórmula</span>
                    <span class="text" style="color:var(--ucv-accent);">$\exists x:Q(x) \land \forall x:R(x)$</span>
                </div>
                <div class="example-item">
                    <span class="step">Expandir $\exists$</span>
                    <span class="text">$[Q(a) \lor Q(b)] \land \forall x:R(x)$</span>
                </div>
                <div class="example-item">
                    <span class="step">Expandir $\forall$</span>
                    <span class="text" style="color:var(--ucv-accent);">$[Q(a) \lor Q(b)] \land R(a) \land R(b)$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Aplicación</span>
                <p>Esta técnica es la base de la <strong>prueba de invalidez</strong>: se busca una interpretación en un universo finito donde las premisas sean V y la conclusión F.</p>
            </div>
        </div>
    </div>
</div>`;

export const formasCanonicalSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 2 · Herramientas</span>
    <h2 class="slide-title">Las <span>4 Formas Canónicas</span> de Simbolización</h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:14px;">
            Sea $\mathbb{U}$ un universo y $G(x)$, $E(x)$ dos predicados. Las cuatro formas cubren todos los casos del lenguaje natural.
        </div>
        <div class="concept-grid" style="margin-bottom:12px;">
            <div class="concept-card">
                <span class="concept-tag">$\forall$ + $\to$</span>
                <h3>Todos los $G(x)$ son $E(x)$</h3>
                <p style="color:var(--ucv-accent); font-size:19px;">$\forall x:[G(x) \to E(x)]$</p>
                <p>"Todos los genios son ególatras"</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">$\exists$ + $\land$ + $\lnot$</span>
                <h3>Algunos $G(x)$ no son $E(x)$</h3>
                <p style="color:var(--ucv-accent); font-size:19px;">$\exists x:[G(x) \land \lnot E(x)]$</p>
                <p>"Algunos genios no son ególatras"</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">$\lnot\exists$ ∨ $\forall$+$\lnot$</span>
                <h3>Ningún $G(x)$ es $E(x)$</h3>
                <p style="color:var(--ucv-accent); font-size:19px;">$\lnot\exists x:[G(x)\land E(x)]$<br>$\equiv \forall x:[G(x)\to\lnot E(x)]$</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">$\exists$ + $\land$</span>
                <h3>Algunos $G(x)$ son $E(x)$</h3>
                <p style="color:var(--ucv-accent); font-size:19px;">$\exists x:[G(x) \land E(x)]$</p>
                <p>"Algunos genios son ególatras"</p>
            </div>
        </div>
        <div class="guide-grid" style="grid-template-columns:1fr 1fr;">
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:19px;">⚠ Error frecuente</h3>
                <ul>
                    <li><strong>NO</strong> usar $\land$ con $\forall$: $\forall x:[G(x)\land E(x)]$ significa "todo $x$ es $G$ y $E$" — muy restrictivo</li>
                    <li><strong>NO</strong> usar $\to$ con $\exists$: $\exists x:[G(x)\to E(x)] \equiv \exists x:[\lnot G(x)\lor E(x)]$ — casi siempre verdadero</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:19px;">Equivalencias clave</h3>
                <ul>
                    <li>$\lnot\exists x:[G(x)\land E(x)] \equiv \forall x:[G(x)\to\lnot E(x)]$</li>
                    <li>$\exists x:[G(x)\land E(x)] \equiv \lnot\forall x:[G(x)\to\lnot E(x)]$</li>
                    <li>$\forall x:[G(x)\to E(x)] \equiv \lnot\exists x:[G(x)\land\lnot E(x)]$</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

export const guiaSimbolizacionSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 2 · Herramientas</span>
    <h2 class="slide-title">Guía para <span>Simbolizar Argumentos</span></h2>
    <div class="content">
        <div class="guide-grid" style="margin-bottom:12px;">
            <div class="guide-card">
                <h3>Paso 1: Definir</h3>
                <ul>
                    <li>Fijar el <strong>universo del discurso</strong> $\mathbb{U}$</li>
                    <li>Definir cada <strong>predicado</strong> explícitamente: $P(x)$: x es…</li>
                    <li>Definir las <strong>constantes</strong> si las hay: $j$ = Juan</li>
                </ul>
            </div>
            <div class="guide-card">
                <h3>Paso 2: Identificar</h3>
                <ul>
                    <li><strong>"Todo / cualquier"</strong> → $\forall x:[\ldots\to\ldots]$</li>
                    <li><strong>"Existe / alguno"</strong> → $\exists x:[\ldots\land\ldots]$</li>
                    <li><strong>"Ningún / nadie"</strong> → $\lnot\exists x:[\ldots\land\ldots]$</li>
                    <li><strong>"Suficiente / necesario"</strong> → condicional $\to$</li>
                </ul>
            </div>
            <div class="guide-card">
                <h3>Paso 3: Construir</h3>
                <ul>
                    <li>Traducir premisa por premisa</li>
                    <li>Verificar el alcance de cada cuantificador</li>
                    <li>Distinguir constantes de variables</li>
                    <li>La conclusión va después de $\therefore$</li>
                </ul>
            </div>
        </div>
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card">
                <h3>Ejemplo — Ej. 5b de la Práctica:</h3>
                <div class="example-item">
                    <span class="step">Enunciado</span>
                    <span class="text">"Ningún feo despierta pasiones. Todos los atletas despiertan pasiones. Por tanto, ningún atleta es feo."</span>
                </div>
                <div class="example-item">
                    <span class="step">Predicados</span>
                    <span class="text">$P(x)$: x es feo &nbsp; $Q(x)$: x despierta pasiones &nbsp; $R(x)$: x es atleta</span>
                </div>
                <div class="example-item">
                    <span class="step">Simbolización</span>
                    <span class="text" style="color:var(--ucv-accent);">$\lnot\exists x:[P(x)\land Q(x)]\ /\ \forall x:[R(x)\to Q(x)]\ /\ \therefore\ \lnot\exists x:[R(x)\land P(x)]$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Tip UCV</span>
                <p>"Es suficiente que A para B" → $A \to B$</p>
                <p>"Es necesario que A para B" → $B \to A$</p>
                <p>"Solo los A son B" → $\forall x:[B(x)\to A(x)]$</p>
            </div>
        </div>
    </div>
</div>`;
