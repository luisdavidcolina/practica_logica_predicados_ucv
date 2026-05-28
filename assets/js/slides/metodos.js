export const metodoDirectoSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 2 · Herramientas</span>
    <h2 class="slide-title">Métodos de Prueba de <span>Validez</span></h2>
    <div class="content">
        <div class="guide-grid" style="margin-bottom:14px;">
            <div class="guide-card">
                <h3>Método Directo (ARD)</h3>
                <ul>
                    <li>Se parte de las premisas</li>
                    <li>Se aplican PU, PE, GU, GE y reglas proposicionales</li>
                    <li>Se llega a la conclusión</li>
                    <li>⚠ Aplicar PE antes que PU</li>
                </ul>
            </div>
            <div class="guide-card">
                <h3>Método Condicional (PC)</h3>
                <ul>
                    <li>Si la conclusión es $A \to B$</li>
                    <li>Se asume $A$ como premisa adicional</li>
                    <li>Se demuestra $B$ por método directo</li>
                    <li>Se concluye $A \to B$ por Prueba Condicional</li>
                </ul>
            </div>
            <div class="guide-card">
                <h3>Reducción al Absurdo (RAA)</h3>
                <ul>
                    <li>Se asume la negación de la conclusión</li>
                    <li>Se deriva una contradicción ($P \land \lnot P$)</li>
                    <li>Por RAA se concluye la conclusión original</li>
                    <li>Útil cuando la conclusión es difícil de alcanzar directo</li>
                </ul>
            </div>
        </div>
        <div class="example-panel" style="margin-top:0;">
            <div class="example-card">
                <h3>Estrategia de ataque para cualquier argumento</h3>
                <div class="example-item">
                    <span class="step">1. Leer</span>
                    <span class="text">Identificar cuántos $\exists$ hay en las premisas. Aplicarles PE <strong>primero</strong> con constantes distintas.</span>
                </div>
                <div class="example-item">
                    <span class="step">2. Particularizar</span>
                    <span class="text">Aplicar PU a los $\forall$ usando las <strong>mismas constantes</strong> que ya obtuviste del PE.</span>
                </div>
                <div class="example-item">
                    <span class="step">3. Razonar</span>
                    <span class="text">Aplicar reglas proposicionales (MP, MT, SD, Simp., Adición, Conj.) para derivar la conclusión.</span>
                </div>
                <div class="example-item">
                    <span class="step">4. Generalizar</span>
                    <span class="text">Si la conclusión es $\forall x:C(x)$, usar GU. Si es $\exists x:C(x)$, usar GE sobre la instancia obtenida.</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Reglas útiles</span>
                <p><strong>SD</strong>: Silogismo Disyuntivo<br>$A\lor B,\ \lnot A\ \therefore B$</p>
                <p><strong>SH</strong>: Silogismo Hipotético<br>$A\to B,\ B\to C\ \therefore A\to C$</p>
                <p><strong>MT</strong>: Modus Tollens<br>$A\to B,\ \lnot B\ \therefore \lnot A$</p>
            </div>
        </div>
    </div>
</div>`;

export const pruebaInvalidezSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 2 · Herramientas</span>
    <h2 class="slide-title">Prueba de <span>Invalidez</span> por Contraejemplo</h2>
    <div class="content">
        <div class="note-bar" style="margin-bottom:14px;">
            Un argumento en lógica de predicados es <strong>inválido</strong> si existe un universo del discurso y una interpretación donde todas las premisas son V y la conclusión es F.
        </div>
        <div class="guide-grid" style="margin-bottom:14px;">
            <div class="guide-card">
                <h3>Paso 1: Probar $\mathbb{U} = \{a\}$</h3>
                <ul>
                    <li>Los cuantificadores desaparecen</li>
                    <li>Se convierte en argumento proposicional</li>
                    <li>Si resulta siempre válido → ir al Paso 2</li>
                    <li>Si se encuentra contraejemplo → inválido ✓</li>
                </ul>
            </div>
            <div class="guide-card">
                <h3>Paso 2: Probar $\mathbb{U} = \{a,b\}$</h3>
                <ul>
                    <li>Expandir cuantificadores según $\mathbb{U}$ finito</li>
                    <li>Buscar valores de verdad tal que: premisas V y conclusión F</li>
                    <li>Estrategia: empezar por la conclusión (hacerla F)</li>
                    <li>Luego verificar si alguna premisa fuerza contradicción</li>
                </ul>
            </div>
            <div class="guide-card">
                <h3>Estrategia de búsqueda</h3>
                <ul>
                    <li>Hacer la conclusión F primero</li>
                    <li>Trabajar hacia atrás: ¿qué deben ser las premisas?</li>
                    <li>Para P1: $F(b)\to\forall x:P(x)$: hacer $F(b)=$F para tener P1 verdadera automáticamente</li>
                    <li>Verificar con tabla final</li>
                </ul>
            </div>
        </div>
        <div class="example-panel" style="margin-top:0; grid-template-columns: 1.4fr 0.6fr;">
            <div class="example-card">
                <h3>Tabla de Verificación (modelo)</h3>
                <table class="logic-table" style="margin-top:8px; font-size:16px;">
                    <thead><tr><th>F(a)</th><th>F(b)</th><th>P(a)</th><th>P(b)</th><th>R(a)</th><th>R(b)</th><th>P1</th><th>P2</th><th>P3</th><th>C</th></tr></thead>
                    <tbody>
                        <tr>
                            <td style="color:var(--ucv-accent);">V</td>
                            <td style="color:#ff9a9a;">F</td>
                            <td style="color:#ff9a9a;">F</td>
                            <td style="color:var(--ucv-accent);">V</td>
                            <td style="color:#ff9a9a;">F</td>
                            <td style="color:#ff9a9a;">F</td>
                            <td style="color:var(--ucv-accent);">V</td>
                            <td style="color:var(--ucv-accent);">V</td>
                            <td style="color:var(--ucv-accent);">V</td>
                            <td style="color:#ff9a9a;font-weight:900;">F ✓</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="example-side">
                <span class="tag">Clave</span>
                <p>La tabla debe mostrar <strong>todas las premisas V</strong> y la <strong>conclusión F</strong>.</p>
                <p>Esto es el <strong>contraejemplo</strong> que demuestra la invalidez.</p>
            </div>
        </div>
    </div>
</div>`;
