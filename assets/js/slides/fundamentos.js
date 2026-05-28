export const motivacionSlide = String.raw`
<div class="slide" id="slide-motivacion">
    <span class="section-tag">Sección 1 · Fundamentos</span>
    <h2 class="slide-title">¿Por qué <span>Lógica de Predicados</span>?</h2>
    <div class="content">
        <div class="case-intro">
            La lógica proposicional no puede probar la validez del argumento más famoso de la historia. Necesitamos algo más poderoso.
        </div>
        <div class="flow-row" style="grid-template-columns: 1fr 0.28fr 1fr 0.28fr 1fr; margin-bottom: 14px;">
            <div class="flow-box">
                <div class="flow-label">P1</div>
                <div class="flow-title" style="font-size:19px;">Todos los hombres son mortales.</div>
            </div>
            <div class="flow-arrow">+</div>
            <div class="flow-box">
                <div class="flow-label">P2</div>
                <div class="flow-title" style="font-size:19px;">Todos los griegos son hombres.</div>
            </div>
            <div class="flow-arrow">∴</div>
            <div class="flow-box" style="border-color:rgba(200,240,122,0.4);">
                <div class="flow-label">C</div>
                <div class="flow-title" style="font-size:19px; color:var(--ucv-accent);">Todos los griegos son mortales.</div>
            </div>
        </div>
        <div class="case-grid">
            <div class="case-card">
                <div class="case-head">
                    <h3>Con lógica proposicional…</h3>
                    <span class="case-badge invalid">Falla</span>
                </div>
                <p class="case-desc">Simbolizando como $p / q / \therefore r$, el argumento es <em>inválido</em>: existe una combinación donde p,q son V y r es F. La estructura interna ("todos", "algunos") se pierde.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Con lógica de predicados…</h3>
                    <span class="case-badge valid">Funciona</span>
                </div>
                <p class="case-desc" style="font-size:17px; line-height:2.0; color:var(--ucv-accent);">
                    $\forall x:[H(x)\to M(x)]$<br>
                    $\forall x:[G(x)\to H(x)]$<br>
                    $\therefore\ \forall x:[G(x)\to M(x)]$
                </p>
            </div>
        </div>
        <div class="note-bar" style="margin-top:12px;">
            La <strong>lógica de predicados</strong> extiende la proposicional con: <strong>predicados</strong> (propiedades), <strong>variables</strong> (sujetos), <strong>constantes</strong> (individuos específicos) y <strong>cuantificadores</strong> ($\forall$ y $\exists$).
        </div>
    </div>
</div>`;

export const predicadosSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 1 · Fundamentos</span>
    <h2 class="slide-title">Predicados y <span>Proposiciones Abiertas</span></h2>
    <div class="content">
        <div class="concept-grid" style="grid-template-columns: repeat(2,1fr); margin-bottom:14px;">
            <div class="concept-card">
                <span class="concept-tag" title="Una oración que involucra variables y no tiene valor de verdad definido hasta que se sustituye la variable">Proposición Abierta</span>
                <h3>Predicado $P(x)$</h3>
                <p>Oración que involucra variables. No tiene valor de verdad hasta que <strong>$x$ toma un valor</strong> del universo.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag" title="El conjunto de todos los valores válidos para la variable x">Universo del Discurso</span>
                <h3>Universo $\mathbb{U}$</h3>
                <p>El conjunto de <strong>todos los valores válidos</strong> para la variable. Ejemplo: $\mathbb{U} = \mathbb{Z}$, $\mathbb{U} = \{\text{personas}\}$.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag" title="Nombres propios fijos. Letras iniciales minúsculas: a, b, c...">Constantes</span>
                <h3>Individuos específicos</h3>
                <p>Representan individuos fijos del universo. Se escriben con letras iniciales del alfabeto: <strong>a, b, c, j</strong>…</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag" title="Sujetos que pueden variar. Letras finales minúsculas: x, y, z...">Variables</span>
                <h3>Sujetos que varían</h3>
                <p>Pueden tomar cualquier valor del universo. Se escriben con letras finales: <strong>x, y, z</strong>… También con subíndices.</p>
            </div>
        </div>
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card">
                <h3>Ejemplo 1: predicado simple</h3>
                <div class="example-item">
                    <span class="step">$Q(x)$</span>
                    <span class="text">$Q(x)$ : x es una ciudad capital &nbsp;&nbsp;— $\mathbb{U} = \{\text{ciudades}\}$</span>
                </div>
                <div class="example-item">
                    <span class="step">$Q(c)$</span>
                    <span class="text">Caracas es una ciudad capital → <strong style="color:var(--ucv-accent);">VERDADERO</strong></span>
                </div>
                <div class="example-item">
                    <span class="step">$Q(v)$</span>
                    <span class="text">Valparaíso es una ciudad capital → <strong style="color:#ff9a9a;">FALSO</strong></span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Notación</span>
                <p>Los <strong>predicados compuestos</strong> combinan predicados simples:<br>
                $[P(x) \land Q(x)]$, $[P(x) \to Q(x)]$, $\lnot P(x)$</p>
                <p class="final" style="font-size:17px;">Las leyes proposicionales se aplican directamente a predicados.</p>
            </div>
        </div>
    </div>
</div>`;

export const cuantificadoresSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 1 · Fundamentos</span>
    <h2 class="slide-title">Cuantificadores: <span>$\forall$</span> y <span>$\exists$</span></h2>
    <div class="content">
        <div class="case-grid" style="margin-bottom:14px;">
            <div class="case-card">
                <div class="case-head">
                    <h3 style="font-size:28px; color:var(--ucv-accent);">$\forall x : P(x)$</h3>
                    <span class="case-badge valid" title="Cuantificador Universal: afirma que el predicado es verdadero para TODOS los elementos del universo">Universal ∀</span>
                </div>
                <p class="case-desc">"<strong>Para todo</strong> $x$ en $\mathbb{U}$ se tiene que $P(x)$"</p>
                <div class="case-formula" style="font-size:18px; text-align:left; padding:8px 14px;">
                    $\forall x:P(x) \equiv P(x_1) \land P(x_2) \land \cdots \land P(x_n)$
                </div>
                <p class="case-desc">Es <span style="color:var(--ucv-accent);">VERDADERA</span> cuando $P(x_i)$ es V para <em>cada</em> $x_i \in \mathbb{U}$.<br>
                Es <span style="color:#ff9a9a;">FALSA</span> cuando existe al menos un $x_i$ tal que $P(x_i)$ es F.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3 style="font-size:28px; color:var(--ucv-accent);">$\exists x : P(x)$</h3>
                    <span class="case-badge valid" title="Cuantificador Existencial: afirma que el predicado es verdadero para AL MENOS UN elemento del universo">Existencial ∃</span>
                </div>
                <p class="case-desc">"<strong>Existe al menos</strong> un $x$ en $\mathbb{U}$ tal que $P(x)$"</p>
                <div class="case-formula" style="font-size:18px; text-align:left; padding:8px 14px;">
                    $\exists x:P(x) \equiv P(x_1) \lor P(x_2) \lor \cdots \lor P(x_n)$
                </div>
                <p class="case-desc">Es <span style="color:var(--ucv-accent);">VERDADERA</span> cuando al menos un $P(x_i)$ es V.<br>
                Es <span style="color:#ff9a9a;">FALSA</span> cuando $P(x_i)$ es F para <em>todos</em> los $x_i \in \mathbb{U}$.</p>
            </div>
        </div>
        <div class="example-panel" style="margin-top:0; grid-template-columns: 1.3fr 0.7fr;">
            <div class="example-card">
                <h3>Ejemplo: $\mathbb{U} = \mathbb{Z}$, $P(x): x \geq 0$, $Q(x): x^2 \geq 0$</h3>
                <div class="example-item">
                    <span class="step">$\forall x:P(x)$</span>
                    <span class="text"><strong style="color:#ff9a9a;">FALSO</strong> — $x = -1$ hace $P(x)$ falsa. Contraejemplo suficiente.</span>
                </div>
                <div class="example-item">
                    <span class="step">$\forall x:Q(x)$</span>
                    <span class="text"><strong style="color:var(--ucv-accent);">VERDADERO</strong> — todo entero al cuadrado es $\geq 0$.</span>
                </div>
                <div class="example-item">
                    <span class="step">$\exists x:P(x)$</span>
                    <span class="text"><strong style="color:var(--ucv-accent);">VERDADERO</strong> — $x = 2$ satisface $P(x)$. Un testigo es suficiente.</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">⚠ Clave</span>
                <p>Para falsificar $\forall x:P(x)$ basta un <strong>contraejemplo</strong>.</p>
                <p>Para verificar $\exists x:P(x)$ basta un <strong>testigo</strong>.</p>
            </div>
        </div>
    </div>
</div>`;

export const negacionAlcanceSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 1 · Fundamentos</span>
    <h2 class="slide-title">Negación, Alcance y <span>Variable Libre</span></h2>
    <div class="content">
        <div class="case-grid" style="margin-bottom:12px;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Leyes de Negación</h3>
                    <span class="case-badge valid" title="Estas equivalencias son fundamentales en toda prueba de lógica de predicados">Equivalencias</span>
                </div>
                <div class="case-formula" style="font-size:21px; text-align:left; line-height:2.0; padding:12px 16px;">
                    $\lnot[\forall x:P(x)] \equiv \exists x:\lnot P(x)$<br>
                    $\lnot[\exists x:P(x)] \equiv \forall x:\lnot P(x)$
                </div>
                <p class="case-desc" style="font-size:16px;">
                    "No todos cumplen P" $\equiv$ "Existe alguno que no cumple P"<br>
                    "No existe ninguno que cumpla P" $\equiv$ "Todos no cumplen P"
                </p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Alcance de un Cuantificador</h3>
                    <span class="case-badge valid" title="La mínima fórmula bien formada que sigue al cuantificador">Definición</span>
                </div>
                <p class="case-desc">El <strong>alcance</strong> es la <em>mínima fbf</em> que sigue al cuantificador.</p>
                <div class="case-formula" style="font-size:17px; padding:10px; line-height:2.0; text-align:left;">
                    $\exists x:\underline{P(x)} \leftrightarrow \exists y:\underline{R(y)} \land Q(x)$<br>
                    <span style="font-size:13px; color:var(--text-dim);">&nbsp;&nbsp;&nbsp;alcance∃x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; alcance∃y &nbsp;&nbsp; libre</span>
                </div>
                <p class="case-desc" style="font-size:16px;">En el ejemplo: $Q(x)$ es <strong>variable libre</strong> — no está bajo ningún cuantificador.</p>
            </div>
        </div>
        <div class="guide-grid" style="grid-template-columns: 1fr 1fr 1fr;">
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:19px;">Importante</h3>
                <ul>
                    <li>$\lnot[\exists x:[G(x)\land S(x)]] \equiv \forall x:[G(x)\to\lnot S(x)]$</li>
                    <li>$\forall x:[G(x)\to S(x)] \equiv \lnot[\exists x:[G(x)\land\lnot S(x)]]$</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:19px;">Variable Ligada</h3>
                <ul>
                    <li>Una variable es <strong>ligada</strong> si está bajo el alcance de un cuantificador</li>
                    <li>Una variable es <strong>libre</strong> si no lo está</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:19px;">FBF válida</h3>
                <ul>
                    <li>Todo predicado $P(x)$ es fbf</li>
                    <li>$\lnot P(x)$, $P(x)\land Q(x)$, $P(x)\to Q(x)$ son fbf</li>
                    <li>$\forall x:P(x)$ y $\exists x:P(x)$ son fbf</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
