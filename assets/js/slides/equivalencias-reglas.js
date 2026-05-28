export const equivalenciasSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 2 · Herramientas</span>
    <h2 class="slide-title">Equivalencias Lógicas con <span>Cuantificadores</span></h2>
    <div class="content">
        <table class="formal-table" style="margin-top:0;">
            <thead>
                <tr>
                    <th style="width:40px;">#</th>
                    <th>Equivalencia</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td title="Negación del universal: si no todos cumplen P, entonces existe uno que no cumple">$\forall x:P(x) \equiv \lnot\exists x:\lnot P(x)$</td><td>Negación del ∀</td></tr>
                <tr><td>2</td><td title="Negación del existencial: si no existe ninguno que cumpla P, entonces todos no cumplen P">$\exists x:P(x) \equiv \lnot\forall x:\lnot P(x)$</td><td>Negación del ∃</td></tr>
                <tr><td>3</td><td title="El universal de una conjunción equivale a la conjunción de los universales">$\forall x:[P(x)\land Q(x)] \equiv \forall x:P(x) \land \forall x:Q(x)$</td><td>Distributiva ∀ sobre ∧</td></tr>
                <tr><td>4</td><td title="El existencial de una disyunción equivale a la disyunción de los existenciales">$\exists x:[P(x)\lor Q(x)] \equiv \exists x:P(x) \lor \exists x:Q(x)$</td><td>Distributiva ∃ sobre ∨</td></tr>
                <tr><td>5</td><td title="Cuando P(j) es una proposición constante (no depende de x), puede salirse del cuantificador">$\forall x:[P(j)\to Q(x)] \equiv P(j) \to \forall x:Q(x)$</td><td>P(j) constante, j ∈ 𝕌</td></tr>
                <tr><td>6</td><td title="Cuando la conclusión es constante, el existencial se convierte en un universal en el antecedente">$\forall x:[Q(x)\to P(j)] \equiv \exists x:Q(x) \to P(j)$</td><td>P(j) constante, j ∈ 𝕌</td></tr>
                <tr><td>7</td><td title="Equivalencia existencial con implicación y constante">$\exists x:[P(j)\to Q(x)] \equiv P(j) \to \exists x:Q(x)$</td><td>P(j) constante, j ∈ 𝕌</td></tr>
                <tr><td>8</td><td title="Clave en demostraciones: existencial de implicación equivale a universal implica existencial">$\exists x:[P(x)\to Q(x)] \equiv \forall x:P(x) \to \exists x:Q(x)$</td><td>Por EPI + leyes ∀ y ∃</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:12px;">
            ⚠ <strong>Atención:</strong> No se puede distribuir ∀ sobre ∨, ni ∃ sobre ∧ en general (solo son implicaciones, ver siguiente lámina).
        </div>
    </div>
</div>`;

export const implicacionesSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 2 · Herramientas</span>
    <h2 class="slide-title">Implicaciones Lógicas con <span>Cuantificadores</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:12px;">
            Estas son <strong>implicaciones ($\Rightarrow$)</strong>, no equivalencias ($\equiv$). Solo valen en una dirección y se demuestran normalmente con el método condicional.
        </div>
        <table class="formal-table" style="margin-top:0;">
            <thead>
                <tr>
                    <th style="width:40px;">#</th>
                    <th>Implicación</th>
                    <th>Lectura intuitiva</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>a</td><td title="Si algo es verdadero para todos, entonces en particular es verdadero para alguno">$\forall x:P(x) \Rightarrow \exists x:P(x)$</td><td>Premisa "para todos" es más fuerte que "existe alguno"</td></tr>
                <tr><td>b</td><td title="Tener el universal de cada uno por separado implica el universal de su disyunción">$\forall x:P(x) \lor \forall x:Q(x) \Rightarrow \forall x:[P(x)\lor Q(x)]$</td><td>El recíproco es falso en general</td></tr>
                <tr><td>c</td><td title="Si existe un x que cumple ambos predicados, entonces existe uno que cumple cada uno">$\exists x:[P(x)\land Q(x)] \Rightarrow \exists x:P(x) \land \exists x:Q(x)$</td><td>El recíproco es falso: podrían cumplirlos distintos x</td></tr>
                <tr><td>d</td><td title="Si todos los P implican Q, y todos son P, entonces todos son Q">$\forall x:[P(x)\to Q(x)] \Rightarrow \forall x:P(x) \to \forall x:Q(x)$</td><td>Regla de inferencia clave (Modus Ponens universal)</td></tr>
                <tr><td>e</td><td title="Si todos los P implican Q, y todos son P, entonces existe algún Q">$\forall x:[P(x)\to Q(x)] \Rightarrow \forall x:P(x) \to \exists x:Q(x)$</td><td>Versión más débil de la anterior</td></tr>
                <tr><td>f</td><td title="Si todos los P implican Q, y existe algún P, entonces existe algún Q">$\forall x:[P(x)\to Q(x)] \Rightarrow \exists x:P(x) \to \exists x:Q(x)$</td><td>Fundamental en demostraciones directas</td></tr>
            </tbody>
        </table>
        <div class="example-panel" style="margin-top:10px; grid-template-columns:1fr 1fr;">
            <div class="example-card">
                <h3>Demostración del ítem d (Práctica 2, Ej. 8d)</h3>
                <p style="font-size:17px;">Se usa el <strong>Método Condicional</strong> asumiendo $\forall x:P(x)$ como premisa adicional y derivando $\forall x:Q(x)$ mediante PU + MP + GU.</p>
            </div>
            <div class="example-side">
                <span class="tag">Recuerda</span>
                <p>b, c, e, f no son equivalencias — solo implican en una dirección. El recíproco puede ser falso.</p>
            </div>
        </div>
    </div>
</div>`;

export const reglasInferenciaSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 2 · Herramientas</span>
    <h2 class="slide-title">Reglas de Inferencia con <span>Cuantificadores</span></h2>
    <div class="content">
        <div class="concept-grid" style="grid-template-columns:repeat(4,1fr); margin-bottom:12px;">
            <div class="concept-card">
                <span class="concept-tag" title="Particularización Universal: de lo que es verdadero para todos, se puede concluir para un elemento específico">PU</span>
                <h3 style="font-size:19px;">Particularización Universal</h3>
                <p style="color:var(--ucv-accent); font-size:17px; text-align:center;">$\dfrac{\forall x:P(x)}{P(a),\; a \in \mathbb{U}}$</p>
                <p>"Si vale para todos, vale para $a$"</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag" title="Particularización Existencial: si existe algún x que cumple P, nombramos un elemento específico que lo cumple">PE</span>
                <h3 style="font-size:19px;">Particularización Existencial</h3>
                <p style="color:var(--ucv-accent); font-size:17px; text-align:center;">$\dfrac{\exists x:P(x)}{P(a),\; a\ \text{nuevo}}$</p>
                <p>"Existe alguien; le llamamos $a$"</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag" title="Generalización Universal: si P(x) es válida para cualquier x arbitrario, entonces vale para todos">GU</span>
                <h3 style="font-size:19px;">Generalización Universal</h3>
                <p style="color:var(--ucv-accent); font-size:17px; text-align:center;">$\dfrac{P(x)\ \text{arbitrario}}{\forall x:P(x)}$</p>
                <p>"Vale para $x$ cualquiera → vale para todos"</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag" title="Generalización Existencial: si P(a) es verdadero para algún elemento concreto a, entonces existe algún x que cumple P">GE</span>
                <h3 style="font-size:19px;">Generalización Existencial</h3>
                <p style="color:var(--ucv-accent); font-size:17px; text-align:center;">$\dfrac{P(a),\; a \in \mathbb{U}}{\exists x:P(x)}$</p>
                <p>"$a$ cumple $P$ → existe alguno que cumple $P$"</p>
            </div>
        </div>
        <div class="case-grid">
            <div class="case-card" style="border-color: rgba(255,154,154,0.5);">
                <div class="case-head">
                    <h3>⚠ ORDEN CRÍTICO</h3>
                    <span class="case-badge invalid">Error fatal</span>
                </div>
                <p class="case-desc" style="font-size:17px;">
                    Cuando hay tanto $\exists$ como $\forall$ en las premisas, <strong>SIEMPRE se particulariza primero el $\exists$ (PE)</strong> y luego el $\forall$ (PU).<br><br>
                    Si se hace al revés, la constante del $\forall$ puede coincidir con la del $\exists$ por coincidencia — y la prueba sería incorrecta.
                </p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Condiciones para GU</h3>
                    <span class="case-badge valid">Restricción</span>
                </div>
                <p class="case-desc" style="font-size:17px;">
                    Solo se puede aplicar GU a $P(x)$ si $x$ es <strong>completamente arbitraria</strong>: no se obtuvo por PE de ninguna premisa, y no aparece libre en ninguna premisa.
                </p>
            </div>
        </div>
    </div>
</div>`;
