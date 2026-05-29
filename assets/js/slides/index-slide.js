/**
 * buildIndexSlides(sections, perPage = 4)
 *
 * Genera una o más láminas de índice automáticamente desde sections[].
 * Si hay más de `perPage` secciones, crea páginas adicionales.
 * Cada topic es { id, label } — viene directo de index.js, sin duplicación.
 *
 * Retorna un array de strings HTML (una por página de índice).
 */
export const buildIndexSlides = (sections, perPage = 4) => {
    // Dividir secciones en páginas
    const pages = [];
    for (let i = 0; i < sections.length; i += perPage) {
        pages.push(sections.slice(i, i + perPage));
    }
    const totalPages = pages.length;

    return pages.map((pageSections, pageIdx) => {
        const pageNum  = pageIdx + 1;
        const pageLabel = totalPages > 1 ? ` (${pageNum}/${totalPages})` : '';

        const topicItem = ({ id, label }) => `
                <li class="index-topic-item"
                    onclick="event.stopPropagation(); window.goToSlideId('${id}')"
                    title="${label}"
                ><span class="index-topic-bullet">›</span>${label}</li>`;

        const sectionCard = (section) => {
            const anchorId = section.slides[0].id;
            const count    = section.slides.length;
            return `
            <div class="concept-card index-section-card" onclick="window.goToSlideId('${anchorId}')">
                <div class="index-card-header">
                    <span class="concept-tag">${section.tag}</span>
                    <span class="index-count">${count}&thinsp;láminas</span>
                </div>
                <h3 class="index-card-title">${section.title}</h3>
                <ul class="index-topic-list">
                    ${section.slides.map(topicItem).join('')}
                </ul>
            </div>`;
        };

        // Nota de navegación (solo en la primera página)
        const navNote = pageIdx === 0 ? `
        <div class="note-bar" style="font-size:13px; padding:8px 16px; line-height:1.6;">
            Clic en <strong>tarjeta</strong> → inicio de sección &nbsp;·&nbsp;
            Clic en <strong>tema</strong> → esa lámina &nbsp;·&nbsp;
            ← → · Espacio · Enter para navegar &nbsp;·&nbsp;
            <i class="fas fa-home" style="color:var(--ucv-accent);"></i> volver al índice &nbsp;·&nbsp;
            <i class="fas fa-sun" style="color:var(--ucv-accent);"></i> cambiar tema
        </div>` : `
        <div class="note-bar" style="font-size:13px; padding:8px 16px;">
            ← flecha izquierda para ver la primera página del índice
        </div>`;

        return `
<div class="slide" id="${pageIdx === 0 ? 'slide-index' : `slide-index-${pageNum}`}">
    <h2 class="slide-title">Índice de <span>Contenido</span>${pageLabel}</h2>
    <div class="content">
        <div class="concept-grid" style="grid-template-columns:repeat(2,1fr); gap:11px; margin-bottom:10px;">
            ${pageSections.map(sectionCard).join('')}
        </div>
        ${navNote}
    </div>
</div>`;
    });
};
