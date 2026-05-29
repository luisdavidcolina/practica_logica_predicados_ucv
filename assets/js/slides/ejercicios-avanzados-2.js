// Parciales II-2025 — ejercicios completos

export const parcialLucinaAnalisisSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 7: Prueba Condicional — <span>Parcial II, Ej. 3</span></h2>
    <div class="content">
        <div class="case-intro" style="font-size:17px; line-height:1.6;">
            "Si Lucina no aprueba, nadie aprueba. Si Lucina estudia, todos estudian. Si Lucina aprueba, es porque estudió. Por lo tanto, si alguien no estudia, nadie aprueba."
        </div>
        <div class="example-panel" style="margin-top:10px;">
            <div class="example-card">
                <h3>Paso 1: Definición y Simbolización</h3>
                <div class="example-item">
                    <span class="step">$\mathbb{U}$, pred.</span>
                    <span class="text">$\mathbb{U}=\{\text{personas}\}$ &nbsp; $A(x)$: x aprueba &nbsp; $E(x)$: x estudia &nbsp; $l$: Lucina</span>
                </div>
                <div class="example-item">
                    <span class="step">P1</span>
                    <span class="text" style="color:var(--ucv-accent);">$\lnot A(l) \to \forall x:\lnot A(x)$</span>
                </div>
                <div class="example-item">
                    <span class="step">P2</span>
                    <span class="text" style="color:var(--ucv-accent);">$E(l) \to \forall x:E(x)$</span>
                </div>
                <div class="example-item">
                    <span class="step">P3</span>
                    <span class="text" style="color:var(--ucv-accent);">$A(l) \to E(l)$</span>
                </div>
                <div class="example-item">
                    <span class="step">$\therefore$ C</span>
                    <span class="text" style="color:var(--ucv-accent);">$\exists x:\lnot E(x) \to \forall x:\lnot A(x)$</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Estrategia</span>
                <p>La conclusión es de forma <strong>$A \to B$</strong>, entonces se usa el <strong>Método Condicional (PC)</strong>.</p>
                <p>Asumimos $\exists x:\lnot E(x)$ como premisa 4 y derivamos $\forall x:\lnot A(x)$.</p>
                <p>Nota: $\exists x:\lnot E(x) \equiv \lnot[\forall x:E(x)]$</p>
                <p><strong>No se necesita PE ni PU</strong> — las proposiciones son sobre constante $l$, no sobre variable $x$ arbitraria.</p>
            </div>
        </div>
        <div class="note-bar" style="margin-top:10px;">
            <strong>Observación:</strong> Cuando las premisas involucran constantes (como $l$ = Lucina) en lugar de predicados cuantificados universalmente, se puede trabajar como en lógica proposicional directamente, sin necesitar PU ni GU.
        </div>
    </div>
</div>`;

export const parcialLucinaSolucionSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 7: Prueba Condicional — <span>Solución (Lucina)</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:10px;">
            Aplicamos PC: asumimos $\exists x:\lnot E(x)$ (equivalente a $\lnot[\forall x:E(x)]$) como Premisa 4 adicional y derivamos $\forall x:\lnot A(x)$.
        </div>
        <table class="formal-table" style="margin-top:0; font-size:17px;">
            <thead>
                <tr>
                    <th style="width:55px;">Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\lnot A(l) \to \forall x:\lnot A(x)$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$E(l) \to \forall x:E(x)$</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>$A(l) \to E(l)$</td><td>Premisa 3</td></tr>
                <tr><td>4</td><td>$\lnot[\forall x:E(x)]$</td><td>Premisa condicional (asumida por PC)</td></tr>
                <tr><td>5</td><td>$\lnot E(l)$</td><td>Modus Tollendo Tollens entre 2 y 4</td></tr>
                <tr><td>6</td><td>$\lnot A(l)$</td><td>Modus Tollendo Tollens entre 3 y 5</td></tr>
                <tr><td>7</td><td>$\forall x:\lnot A(x)$</td><td>Modus Ponendo Ponens entre 1 y 6</td></tr>
                <tr><td>8</td><td>$\exists x:\lnot E(x) \to \forall x:\lnot A(x)$</td><td>Prueba Condicional (PC)</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:10px;">
            <strong>El argumento es VÁLIDO.</strong> En ningún momento se necesitó particularizar ni generalizar proposiciones cuantificadas — las premisas operaban sobre la constante $l$ (Lucina) directamente. Solución del Parcial II - Sem. I-2025.
        </div>
    </div>
</div>`;

export const parcialComplejoBSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 8: Validez Compleja — <span>Parcial II, Ej. 4</span> (Análisis)</h2>
    <div class="content">
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card" style="flex:1.4;">
                <h3>Argumento (5 puntos — Parcial II, Sem. I-2025)</h3>
                <div class="case-formula" style="font-size:16px; line-height:2.0; text-align:left; padding:10px 14px;">
                    P1: $\forall x:[A(x) \lor \lnot R(x)]$<br>
                    P2: $\forall x:[[G(x) \land \lnot U(x)] \lor M(x)]$<br>
                    P3: $\forall x:[\lnot U(x) \to \lnot A(x)]$<br>
                    P4: $\exists x:[W(x) \land \lnot[M(x) \lor N(x)]]$<br>
                    P5: $\forall x:[\lnot T(x) \to R(x)]$<br>
                    $\therefore\ \exists x:[T(x) \land \lnot U(x)]$
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Análisis Estratégico</span>
                <p><strong>P4</strong> es existencial → aplicar PE primero con constante <strong>$a$</strong>.</p>
                <p>De $W(a)\land\lnot[M(a)\lor N(a)]$ extraer $\lnot M(a)$ por simplificación+De Morgan.</p>
                <p>Con $\lnot M(a)$ y P2[PU] → $\lnot U(a)$ por distributiva+MT.</p>
                <p>Cadena: $\lnot U(a)\to\lnot A(a)$ por P3, luego $\lnot R(a)$ por P1, luego $T(a)$ por P5. Conclusión por GE.</p>
            </div>
        </div>
        <div class="guide-grid" style="margin-top:12px;">
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Reglas involucradas</h3>
                <ul>
                    <li>PE (de P4 — única existencial)</li>
                    <li>PU (de P1, P2, P3, P5)</li>
                    <li>Simplificación, De Morgan, Distributiva</li>
                    <li>MT, MP, GE</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Pasos totales</h3>
                <ul>
                    <li>21 pasos — argumento complejo</li>
                    <li>Método directo (ARD)</li>
                    <li>Ver próximas 2 láminas</li>
                </ul>
            </div>
            <div class="guide-card" style="min-height:0;">
                <h3 style="font-size:18px;">Clave: paso 10</h3>
                <ul>
                    <li>De $[G(a)\land\lnot U(a)]\lor M(a)$ se aplica distributiva: $[G(a)\lor M(a)]\land[\lnot U(a)\lor M(a)]$</li>
                    <li>Luego simplificación para obtener $\lnot U(a)\lor M(a) \equiv U(a)\to M(a)$</li>
                    <li>Con $\lnot M(a)$ por MT: $\lnot U(a)$</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

export const parcialComplejoSolucionSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 8: Validez Compleja — <span>Solución Pasos 1–11</span></h2>
    <div class="content">
        <table class="formal-table" style="margin-top:0; font-size:15.5px;">
            <thead>
                <tr><th style="width:48px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$\forall x:[A(x)\lor\lnot R(x)]$</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>$\forall x:[[G(x)\land\lnot U(x)]\lor M(x)]$</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>$\forall x:[\lnot U(x)\to\lnot A(x)]$</td><td>Premisa 3</td></tr>
                <tr><td>4</td><td>$\exists x:[W(x)\land\lnot[M(x)\lor N(x)]]$</td><td>Premisa 4</td></tr>
                <tr><td>5</td><td>$\forall x:[\lnot T(x)\to R(x)]$</td><td>Premisa 5</td></tr>
                <tr><td>6</td><td>$W(a)\land\lnot[M(a)\lor N(a)]$</td><td>PE para $x=a$ en 4</td></tr>
                <tr><td>7</td><td>$\lnot M(a)\land\lnot N(a)$</td><td>Simp. y De Morgan en 6</td></tr>
                <tr><td>8</td><td>$\lnot M(a)$</td><td>Simplificación en 7</td></tr>
                <tr><td>9</td><td>$[G(a)\land\lnot U(a)]\lor M(a)$</td><td>PU para $x=a$ en 2</td></tr>
                <tr><td>10</td><td>$[G(a)\lor M(a)]\land[\lnot U(a)\lor M(a)]$</td><td>Distributiva ∨ en 9</td></tr>
                <tr><td>11</td><td>$U(a)\to M(a)$</td><td>Simp. en 10 y EPI</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:10px; font-size:15px;">
            Establecido: $\lnot M(a)$ (8) y $U(a)\to M(a)$ (11). Clave: aplicar MT → $\lnot U(a)$. Continúa →
        </div>
    </div>
</div>`;

export const parcialComplejoSolucionSlide2 = String.raw`
<div class="slide">
    <h2 class="slide-title">Ejercicio 8: Validez Compleja — <span>Solución Pasos 12–21</span></h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:10px; font-size:15px;">
            Contexto: (8) $\lnot M(a)$ · (11) $U(a)\to M(a)$ · (Prems. 1,3,5 aún disponibles)
        </div>
        <table class="formal-table" style="margin-top:0; font-size:15.5px;">
            <thead>
                <tr><th style="width:48px;">Paso</th><th>Proposición</th><th>Justificación</th></tr>
            </thead>
            <tbody>
                <tr><td>12</td><td>$\lnot U(a)$</td><td>Modus Tollens entre 8 y 11</td></tr>
                <tr><td>13</td><td>$\lnot U(a)\to\lnot A(a)$</td><td>PU para $x=a$ en 3</td></tr>
                <tr><td>14</td><td>$\lnot A(a)$</td><td>Modus Ponens entre 12 y 13</td></tr>
                <tr><td>15</td><td>$A(a)\lor\lnot R(a)$</td><td>PU para $x=a$ en 1</td></tr>
                <tr><td>16</td><td>$R(a)\to A(a)$</td><td>Conmutativa ∨ y EPI en 15</td></tr>
                <tr><td>17</td><td>$\lnot R(a)$</td><td>Modus Tollens entre 14 y 16</td></tr>
                <tr><td>18</td><td>$\lnot T(a)\to R(a)$</td><td>PU para $x=a$ en 5</td></tr>
                <tr><td>19</td><td>$T(a)$</td><td>Modus Tollens entre 17,18 y doble negación</td></tr>
                <tr><td>20</td><td>$T(a)\land\lnot U(a)$</td><td>Conjunción entre 19 y 12</td></tr>
                <tr><td>21</td><td>$\exists x:[T(x)\land\lnot U(x)]$</td><td>GE en 20</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top:10px;">
            <strong>Argumento VÁLIDO.</strong> Parcial II Sem. I-2025 — Grupo docente MDI.
        </div>
    </div>
</div>`;

export const bibliografiaSlide = String.raw`
<div class="slide">
    <h2 class="slide-title">Referencias y <span>Materiales de la Cátedra</span></h2>
    <div class="content">
        <div class="guide-grid" style="margin-bottom:14px;">
            <div class="guide-card">
                <h3>Libro Principal</h3>
                <ul>
                    <li><strong>Monsalve Leal, M.</strong> — <em>Matemáticas Discretas, Vol. I</em> (DRAFT, Oct. 2018). Universidad Central de Venezuela, Facultad de Ciencias.</li>
                    <li>Capítulo 1: Conceptos básicos (pp. 9–32)</li>
                    <li>Capítulo 2: Argumentación lógica (pp. 33–62)</li>
                </ul>
            </div>
            <div class="guide-card">
                <h3>Guías de Ejercicios</h3>
                <ul>
                    <li><strong>Quijada, P.</strong> — <em>Práctica 2 (parte I): Lógica de Predicados</em>. UCV, Sem. II-2024 (18 Dic. 2024).</li>
                    <li>Basada en guías de los Profs. Monsalve y L.M. Hernández.</li>
                </ul>
            </div>
            <div class="guide-card">
                <h3>Evaluaciones UCV</h3>
                <ul>
                    <li><strong>Quiz II — Sección C7</strong> (12/12/2025). Prof. Yuliana Fernández / Prep. Luisdavid Colina.</li>
                    <li><strong>Parcial 2</strong> (17/12/2025). Grupo docente MDI, Sem. II-2025.</li>
                    <li><strong>Parcial II</strong> (06/06/2025). Grupo docente MDI, Sem. I-2025.</li>
                </ul>
            </div>
        </div>
        <div class="case-grid" style="margin-top:0;">
            <div class="case-card">
                <div class="case-head">
                    <h3>Preparador</h3>
                    <span class="case-badge valid">Créditos</span>
                </div>
                <p class="case-desc">Esta presentación interactiva fue elaborada por <strong>Luisdavid Colina</strong> para la Sección C4 de Matemática Discreta I — Universidad Central de Venezuela, Escuela de Computación, Sem. I-2026.</p>
            </div>
            <div class="case-card">
                <div class="case-head">
                    <h3>Profesora</h3>
                    <span class="case-badge valid">Cátedra</span>
                </div>
                <p class="case-desc"><strong>Profesora Yuliana Fernández</strong> — Cátedra de Matemática Discreta I, Escuela de Computación, Facultad de Ciencias, Universidad Central de Venezuela.</p>
            </div>
        </div>
    </div>
</div>`;
