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
                    btnContainer.innerHTML = `<button class="reveal-eye-btn-mini has-tip tip-left" data-tip="Revelar siguiente paso" style="background: transparent; border: none; color: var(--ucv-accent); font-size: 20px; cursor: pointer; transition: transform 0.2s, opacity 0.2s; opacity: 0.7;"><i class="fas fa-eye"></i></button>`;

                    lastTh.appendChild(btnContainer);

                    const btn = btnContainer.querySelector('.reveal-eye-btn-mini');
                    btn.addEventListener('mouseover', () => { btn.style.transform = 'scale(1.2)'; btn.style.opacity = '1'; });
                    btn.addEventListener('mouseout', () => { btn.style.transform = 'scale(1)'; btn.style.opacity = '0.7'; });

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

    // Scale to fit any screen
    const scaleToFit = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let scale;
        if (windowWidth < 768) {
            scale = (windowWidth / 1280) * 0.98;
        } else {
            const scaleX = windowWidth / 1280;
            const scaleY = windowHeight / 720;
            scale = Math.min(scaleX, scaleY) * 0.95;
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
    indexUI.innerHTML = `
        <button id="go-to-index" aria-label="Volver al índice" style="position: absolute; bottom: 40px; left: 80px; background: rgba(11,15,18,0.8); border: 1px solid rgba(255,255,255,0.1); color: var(--text-dim); font-size: 16px; padding: 12px 20px; border-radius: 30px; cursor: pointer; display: flex; align-items: center; gap: 8px; z-index: 1000; backdrop-filter: blur(8px); opacity: 0.15; transition: all 0.2s;">
            <i class="fas fa-home"></i> Índice
        </button>
    `;
    root.appendChild(indexUI);

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

    // Theme Toggle
    const themeUI = document.createElement('div');
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