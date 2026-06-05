import { slides } from './slides/index.js';

// Theme persistence
const savedTheme = localStorage.getItem('ucv-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

const root = document.getElementById('slides-root');

if (root) {
    const total = slides.length;
    const numberedSlides = slides.map((slide, index) => {
        const slideNum = `<div class="slide-counter">${index + 1} / ${total}</div>`;
        let finalSlide = slide;
        const lastDivIndex = slide.lastIndexOf('</div>');
        if (lastDivIndex !== -1) {
            finalSlide = slide.substring(0, lastDivIndex) + slideNum + slide.substring(lastDivIndex);
        } else {
            finalSlide = slide + slideNum;
        }

        return `<div class="slide-wrapper" data-index="${index}" style="display: ${index === 0 ? 'block' : 'none'}; width: 100%; height: 100%;">
            ${finalSlide}
        </div>`;
    });

    root.innerHTML = numberedSlides.join('\n');

    // Render KaTeX math
    if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(root, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
    }

    // Global Tooltip Conversion
    root.querySelectorAll('[title]').forEach(el => {
        const titleText = el.getAttribute('title');
        el.setAttribute('data-tip', titleText);
        el.classList.add('has-tip');
        el.removeAttribute('title');
    });

    // Step-by-Step Proof Reveal Logic
    root.querySelectorAll('table').forEach(table => {
        const headers = Array.from(table.querySelectorAll('th'));
        const isProofTable = headers.some(th => th.textContent.includes('Justificación'));

        if (isProofTable) {
            const tbody = table.querySelector('tbody');
            if (!tbody) return;

            const rows = Array.from(tbody.querySelectorAll('tr'));
            let startIndex = -1;

            for (let i = 0; i < rows.length; i++) {
                const text = rows[i].textContent.toLowerCase();
                if (!text.includes('premisa') && text.trim().length > 5 && startIndex === -1) {
                    startIndex = i;
                }
            }

            if (startIndex !== -1 && startIndex < rows.length) {
                for (let i = startIndex; i < rows.length; i++) {
                    rows[i].classList.add('hidden-proof-step');
                }

                const theadTr = table.querySelector('thead tr');
                let btnContainer = null;

                if (theadTr) {
                    const lastTh = theadTr.lastElementChild;

                    btnContainer = document.createElement('span');
                    btnContainer.className = 'inline-reveal-container';
                    btnContainer.style.float = 'right';
                    btnContainer.innerHTML = `<button class="reveal-eye-btn-mini has-tip tip-left" data-tip="Revelar siguiente paso" class="reveal-eye-btn-mini has-tip tip-left" data-tip="Revelar siguiente paso" style="background:transparent;border:none;color:var(--ucv-accent);cursor:pointer;transition:transform 0.2s,opacity 0.2s;"><i class="fas fa-eye"></i></button>`;

                    lastTh.appendChild(btnContainer);

                    const btn = btnContainer.querySelector('.reveal-eye-btn-mini');
                    btn.addEventListener('mouseover', () => { btn.style.transform = 'scale(1.2)'; if (!isTouch) btn.style.opacity = '1'; });
                    btn.addEventListener('mouseout', () => { btn.style.transform = 'scale(1)'; if (!isTouch) btn.style.opacity = '0.7'; });

                    btn.addEventListener('click', () => {
                        const nextHidden = tbody.querySelector('.hidden-proof-step');
                        if (nextHidden) {
                            nextHidden.classList.remove('hidden-proof-step');
                            nextHidden.classList.add('revealed-proof-step');

                            if (!tbody.querySelector('.hidden-proof-step')) {
                                btnContainer.style.opacity = '0';
                                setTimeout(() => btnContainer.remove(), 300);
                            }
                        }
                    });
                }
            }
        }
    });

    // En touch no hay hover — los mouseover/mouseout deben ser no-ops para que el CSS !important mande
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
        root.querySelectorAll('.reveal-eye-btn-mini').forEach(btn => {
            btn.style.opacity = '';      // limpiar inline opacity para que CSS tome control
            btn.style.transform = '';
        });
    }

    // ── Auto-reveal para example-card / guide-card con pasos P1/P2/C ────────────
    const isAnswerItem = (item) => {
        const step = item.querySelector('.step');
        if (!step) return false;
        const t = step.textContent.trim();
        return /^P[1-9]$/.test(t)   // P1, P2, P3
            || t.startsWith('∴')     // ∴ C, ∴
            || t === 'Conclusión'
            || t === 'Condicional'
            || t === '✓ Correcto'
            || t === '✗ Error'
            || t === '✓ Válido'
            || t.startsWith('Correcto')
            || t.startsWith('Error');
    };

    root.querySelectorAll('.example-card, .guide-card').forEach(card => {
        const items = Array.from(card.querySelectorAll('.example-item'));
        if (items.length < 2) return;

        let startIdx = -1;
        for (let i = 0; i < items.length; i++) {
            if (isAnswerItem(items[i])) { startIdx = i; break; }
        }
        if (startIdx === -1) return;

        for (let i = startIdx; i < items.length; i++) {
            items[i].classList.add('hidden-proof-step');
        }

        const h3 = card.querySelector('h3');
        if (!h3) return;

        const btnSpan = document.createElement('span');
        btnSpan.className = 'inline-reveal-container';
        btnSpan.style.float = 'right';
        btnSpan.innerHTML = `<button class="reveal-eye-btn-mini has-tip tip-left" data-tip="Revelar siguiente paso" class="reveal-eye-btn-mini has-tip tip-left" data-tip="Revelar siguiente paso" style="background:transparent;border:none;color:var(--ucv-accent);cursor:pointer;transition:transform 0.2s,opacity 0.2s;"><i class="fas fa-eye"></i></button>`;
        h3.appendChild(btnSpan);

        const btn = btnSpan.querySelector('button');
        btn.addEventListener('mouseover', () => { btn.style.transform = 'scale(1.2)'; btn.style.opacity = '1'; });
        btn.addEventListener('mouseout',  () => { btn.style.transform = 'scale(1)';   btn.style.opacity = '0.7'; });
        btn.addEventListener('click', () => {
            const next = card.querySelector('.hidden-proof-step');
            if (next) {
                next.classList.remove('hidden-proof-step');
                next.classList.add('revealed-proof-step');
                if (!card.querySelector('.hidden-proof-step')) {
                    btnSpan.style.opacity = '0';
                    setTimeout(() => btnSpan.remove(), 300);
                }
            }
        });
    });

    // Sandbox click handler — wire specific evaluators per exercise in each slide file
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.var-toggle');
        if (!btn) return;

        const currentVal = btn.getAttribute('data-val');
        let newVal;
        if (currentVal === '?') newVal = 'V';
        else if (currentVal === 'V') newVal = 'F';
        else newVal = 'V';

        btn.setAttribute('data-val', newVal);
        btn.querySelector('.val').textContent = newVal;

        const sandboxParent = btn.closest('.sandbox-panel');
        if (sandboxParent && typeof window[`updateSandbox_${sandboxParent.id}`] === 'function') {
            window[`updateSandbox_${sandboxParent.id}`]();
        }
    });

    // ── Sandbox evaluadores de invalidez ──────────────────────────────────────
    const _imp = (a,b) => (a===null||b===null)?null:(!a||b);
    const _or  = (a,b) => (a===null||b===null)?null:(a||b);
    const _and = (a,b) => (a===null||b===null)?null:(a&&b);
    const _not = (a)   => a===null?null:!a;

    const _readVars = (sandboxEl) => {
        const vars = {}; let ok = true;
        sandboxEl.querySelectorAll('.var-toggle').forEach(btn => {
            const v = btn.getAttribute('data-val');
            if (v === '?') { ok = false; vars[btn.getAttribute('data-var')] = null; }
            else vars[btn.getAttribute('data-var')] = v === 'V';
        });
        return { vars, ok };
    };

    const _setBox = (id, val) => {
        const box = document.getElementById(id);
        if (!box) return;
        box.querySelector('.res').textContent = val===null?'?':(val?'V':'F');
        box.classList.remove('is-v','is-f');
        if (val!==null) box.classList.add(val?'is-v':'is-f');
    };

    const _setMsg = (msgId, sbEl, allOk, premisasOk, cOk) => {
        const msg = document.getElementById(msgId);
        if (!msg) return;
        if (!allOk) {
            msg.textContent = 'Haz clic en las variables para asignar V o F.';
            msg.style.background = 'rgba(255,255,255,0.05)';
            msg.style.color = 'var(--text-dim)';
            sbEl.classList.remove('success-pulse');
        } else if (premisasOk && !cOk) {
            msg.innerHTML = '¡Éxito! Encontraste el <strong>contraejemplo</strong>: todas las premisas V y la conclusión F. Argumento INVÁLIDO.';
            msg.style.background = 'rgba(200,240,122,0.18)';
            msg.style.color = 'var(--ucv-accent)';
            sbEl.classList.add('success-pulse');
        } else {
            msg.textContent = 'Sigue buscando… necesitas premisas V y conclusión F simultáneamente.';
            msg.style.background = 'rgba(255,120,120,0.1)';
            msg.style.color = '#ff9a9a';
            sbEl.classList.remove('success-pulse');
        }
    };

    // Sandbox inv1 — Quiz II Ej.2 / Parcial 2 Ej.4 (U={a,b})
    // P1: F(b)→[P(a)∧P(b)]  P2: F(a)∨F(b)  P3: [P(a)→R(a)]∨[P(b)→R(b)]  C: R(a)∨R(b)
    window.updateSandbox_sandbox_inv1 = () => {
        const sb = document.getElementById('sandbox_inv1'); if (!sb) return;
        const {vars:v, ok} = _readVars(sb);
        const p1 = _imp(v.fb, _and(v.pa, v.pb));
        const p2 = _or(v.fa, v.fb);
        const p3 = _or(_imp(v.pa, v.ra), _imp(v.pb, v.rb));
        const c  = _or(v.ra, v.rb);
        _setBox('inv1-p1',p1); _setBox('inv1-p2',p2); _setBox('inv1-p3',p3); _setBox('inv1-c',c);
        _setMsg('inv1-msg', sb, ok, p1&&p2&&p3, c);
    };

    // Sandbox inv2 — Práctica 2 Ej.10a (U={a})
    // P1: P(a)∨R(a)  P2: P(a)∧S(a)  C: R(a)∧S(a)
    window.updateSandbox_sandbox_inv2 = () => {
        const sb = document.getElementById('sandbox_inv2'); if (!sb) return;
        const {vars:v, ok} = _readVars(sb);
        const p1 = _or(v.pa, v.ra);
        const p2 = _and(v.pa, v.sa);
        const c  = _and(v.ra, v.sa);
        _setBox('inv2-p1',p1); _setBox('inv2-p2',p2); _setBox('inv2-c',c);
        _setMsg('inv2-msg', sb, ok, p1&&p2, c);
    };

    // Sandbox inv3 — Práctica 2 Ej.10c (U={a,b})
    // P1: ∃x:[F(x)→G(a)] = [F(a)→G(a)] ∨ [F(b)→G(a)]
    // P2: ∃x:G(x)→∀x:H(x) = [G(a)∨G(b)]→[H(a)∧H(b)]
    // P3: F(a)   C: ∃x:H(x) = H(a)∨H(b)
    window.updateSandbox_sandbox_inv3 = () => {
        const sb = document.getElementById('sandbox_inv3'); if (!sb) return;
        const {vars:v, ok} = _readVars(sb);
        const p1 = _or(_imp(v.fa, v.ga), _imp(v.fb, v.ga));
        const p2 = _imp(_or(v.ga, v.gb), _and(v.ha, v.hb));
        const p3 = v.fa;
        const c  = _or(v.ha, v.hb);
        _setBox('inv3-p1',p1); _setBox('inv3-p2',p2); _setBox('inv3-p3',p3); _setBox('inv3-c',c);
        _setMsg('inv3-msg', sb, ok, p1&&p2&&p3, c);
    };

    // Scale to fit any screen
    const scaleToFit = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const isPortrait = h > w;

        let scale;
        if (isPortrait) {
            // Portrait (cualquier dispositivo): escalar por ancho, scroll vertical
            scale = (w / 1280) * 0.98;
        } else {
            // Landscape (desktop o móvil): ajustar ambas dimensiones
            // El slide es 720px alto en landscape (no 860px — el @media ya está filtrado)
            scale = Math.min(w / 1280, h / 720) * 0.95;
        }

        root.style.transform = `scale(${scale})`;
    };

    window.addEventListener('resize', scaleToFit);
    scaleToFit();

    // Navigation Logic
    let currentIndex = 0;
    const slideWrappers = document.querySelectorAll('.slide-wrapper');

    const updateSlide = (newIndex) => {
        if (newIndex < 0 || newIndex >= total) return;
        slideWrappers[currentIndex].style.display = 'none';
        currentIndex = newIndex;
        slideWrappers[currentIndex].style.display = 'block';
    };

    window.goToSlideId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const wrapper = el.closest('.slide-wrapper');
            if (wrapper) {
                const index = parseInt(wrapper.getAttribute('data-index'));
                updateSlide(index);
            }
        }
    };

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        const isTypingField = e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName);
        if (isTypingField || e.target?.isContentEditable) return;

        if (e.key === 'ArrowRight' || e.code === 'Space' || e.key === 'Enter') {
            e.preventDefault();
            updateSlide(currentIndex + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
            e.preventDefault();
            updateSlide(currentIndex - 1);
        }
    });

    // UI Navigation Arrows
    const navUI = document.createElement('div');
    navUI.className = 'ui-overlay';
    navUI.innerHTML = `
        <div id="nav-controls" style="position: fixed; bottom: 50px; left: 50%; transform: translateX(-50%); display: flex; gap: 20px; background: rgba(11,15,18,0.9); padding: 8px 25px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.15); z-index: 1000; backdrop-filter: blur(8px); opacity: 0.15; transition: opacity 0.3s ease, transform 0.3s ease;">
            <button id="prev-slide" aria-label="Ir a la diapositiva anterior" style="background: none; border: none; color: var(--ucv-accent); font-size: 20px; cursor: pointer; transition: transform 0.2s;"><i class="fas fa-chevron-left"></i></button>
            <span style="color: var(--text-dim); font-size: 13px; display: flex; align-items: center; user-select: none; gap: 8px; text-transform: uppercase; letter-spacing: 1px;">
                <span>Navegación</span>
                <span style="opacity: 0.7;">← → / Espacio / Enter</span>
            </span>
            <button id="next-slide" aria-label="Ir a la siguiente diapositiva" style="background: none; border: none; color: var(--ucv-accent); font-size: 20px; cursor: pointer; transition: transform 0.2s;"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
    document.body.appendChild(navUI);

    const navBar = document.getElementById('nav-controls');
    navBar.addEventListener('mouseover', () => navBar.style.opacity = '1');
    navBar.addEventListener('mouseout', () => navBar.style.opacity = '0.15');

    // Index Button
    const indexUI = document.createElement('div');
    indexUI.className = 'ui-overlay';
    indexUI.innerHTML = `
        <button id="go-to-index" aria-label="Volver al índice" style="position: fixed; bottom: 40px; left: 80px; background: rgba(11,15,18,0.8); border: 1px solid rgba(255,255,255,0.1); color: var(--text-dim); font-size: 16px; padding: 12px 20px; border-radius: 30px; cursor: pointer; display: flex; align-items: center; gap: 8px; z-index: 1000; backdrop-filter: blur(8px); opacity: 0.15; transition: all 0.2s;">
            <i class="fas fa-home"></i> Índice
        </button>
    `;
    document.body.appendChild(indexUI);

    const btnPrev = document.getElementById('prev-slide');
    const btnNext = document.getElementById('next-slide');
    const btnIndex = document.getElementById('go-to-index');

    btnPrev.addEventListener('mouseover', () => btnPrev.style.transform = 'scale(1.2)');
    btnPrev.addEventListener('mouseout', () => btnPrev.style.transform = 'scale(1)');
    btnPrev.addEventListener('click', () => updateSlide(currentIndex - 1));

    btnNext.addEventListener('mouseover', () => btnNext.style.transform = 'scale(1.2)');
    btnNext.addEventListener('mouseout', () => btnNext.style.transform = 'scale(1)');
    btnNext.addEventListener('click', () => updateSlide(currentIndex + 1));

    btnIndex.addEventListener('mouseover', () => {
        btnIndex.style.color = 'var(--ucv-accent)';
        btnIndex.style.transform = 'scale(1.05)';
        btnIndex.style.borderColor = 'var(--ucv-accent)';
        btnIndex.style.opacity = '1';
    });
    btnIndex.addEventListener('mouseout', () => {
        btnIndex.style.color = 'var(--text-dim)';
        btnIndex.style.transform = 'scale(1)';
        btnIndex.style.borderColor = 'rgba(255,255,255,0.1)';
        btnIndex.style.opacity = '0.15';
    });
    btnIndex.addEventListener('click', () => updateSlide(1));

    // PDF Download
    const pdfUI = document.createElement('div');
    pdfUI.className = 'ui-overlay';
    pdfUI.innerHTML = `
        <button id="pdf-download" aria-label="Descargar PDF completo" style="position: fixed; bottom: 40px; right: 220px; background: rgba(11,15,18,0.8); border: 1px solid rgba(255,255,255,0.1); color: var(--text-dim); font-size: 16px; padding: 12px 20px; border-radius: 30px; cursor: pointer; display: flex; align-items: center; gap: 8px; z-index: 1000; backdrop-filter: blur(8px); opacity: 0.15; transition: all 0.2s;">
            <i class="fas fa-file-pdf"></i> PDF
        </button>
    `;
    document.body.appendChild(pdfUI);

    const btnPdf = document.getElementById('pdf-download');
    btnPdf.addEventListener('mouseover', () => {
        btnPdf.style.color = 'var(--ucv-accent)';
        btnPdf.style.transform = 'scale(1.05)';
        btnPdf.style.borderColor = 'var(--ucv-accent)';
        btnPdf.style.opacity = '1';
    });
    btnPdf.addEventListener('mouseout', () => {
        btnPdf.style.color = 'var(--text-dim)';
        btnPdf.style.transform = 'scale(1)';
        btnPdf.style.borderColor = 'rgba(255,255,255,0.1)';
        btnPdf.style.opacity = '0.15';
    });
    btnPdf.addEventListener('click', async () => {
        // Feedback visual mientras prepara
        btnPdf.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparando…';
        btnPdf.style.opacity = '1';
        btnPdf.style.pointerEvents = 'none';

        // 1. Mostrar todas las láminas
        slideWrappers.forEach(w => { w.style.display = 'block'; });

        // 2. Esperar fuentes + varios frames de layout
        await document.fonts.ready;
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(r))));
        await new Promise(r => setTimeout(r, 1400));

        // 3. Restaurar estado al cerrar el diálogo
        const afterPrint = () => {
            slideWrappers.forEach((w, i) => {
                w.style.display = i === currentIndex ? 'block' : 'none';
            });
            btnPdf.innerHTML = '<i class="fas fa-file-pdf"></i> PDF';
            btnPdf.style.pointerEvents = '';
            window.removeEventListener('afterprint', afterPrint);
        };
        window.addEventListener('afterprint', afterPrint);

        window.print();
    });

    // Theme Toggle
    const themeUI = document.createElement('div');
    themeUI.className = 'ui-overlay';
    themeUI.innerHTML = `
        <button id="theme-toggle" aria-label="Cambiar tema" style="position: fixed; bottom: 40px; right: 80px; background: rgba(11,15,18,0.8); border: 1px solid rgba(255,255,255,0.1); color: var(--text-dim); font-size: 16px; padding: 12px 20px; border-radius: 30px; cursor: pointer; display: flex; align-items: center; gap: 8px; z-index: 1000; backdrop-filter: blur(8px); opacity: 0.15; transition: all 0.2s;">
            <i class="fas fa-sun"></i> Tema
        </button>
    `;
    document.body.appendChild(themeUI);

    const btnTheme = document.getElementById('theme-toggle');

    const syncThemeBtn = () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        btnTheme.querySelector('i').className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    };
    syncThemeBtn();

    btnTheme.addEventListener('mouseover', () => {
        btnTheme.style.color = 'var(--ucv-accent)';
        btnTheme.style.transform = 'scale(1.05)';
        btnTheme.style.borderColor = 'var(--ucv-accent)';
        btnTheme.style.opacity = '1';
    });
    btnTheme.addEventListener('mouseout', () => {
        btnTheme.style.color = 'var(--text-dim)';
        btnTheme.style.transform = 'scale(1)';
        btnTheme.style.borderColor = '';
        btnTheme.style.opacity = '0.15';
    });
    btnTheme.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const next = isLight ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('ucv-theme', next);
        syncThemeBtn();
    });

    // Touch / Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) updateSlide(currentIndex + 1);
        if (touchEndX > touchStartX + threshold) updateSlide(currentIndex - 1);
    }, false);
}