/**
 * buildIndexSlide(sections)
 *
 * Genera el slide de índice dinámicamente desde el array sectionMeta
 * definido en index.js. Para navegar a subsecciones específicas, cada
 * topic es { text, anchorId }. Para actualizar el índice, solo edita
 * sectionMeta — no toques este archivo.
 */
export const buildIndexSlide = (sections) => {

    const topicItem = (t) => `
        <li
            class="index-topic-item"
            onclick="event.stopPropagation(); window.goToSlideId('${t.anchorId}')"
            title="Ir a: ${t.text}"
        ><span class="index-topic-bullet">›</span>${t.text}</li>`;

    const sectionCard = (s) => `
        <div class="concept-card index-section-card" onclick="window.goToSlideId('${s.anchorId}')">
            <div class="index-card-header">
                <span class="concept-tag">${s.tag}</span>
                <span class="index-count">${s.count}&thinsp;láminas</span>
            </div>
            <h3 class="index-card-title">${s.title}</h3>
            <ul class="index-topic-list">
                ${s.topics.map(topicItem).join('')}
            </ul>
        </div>`;

    return `
<div class="slide" id="slide-index">
    <h2 class="slide-title">Índice de <span>Contenido</span></h2>
    <div class="content">
        <div class="concept-grid" style="grid-template-columns:repeat(2,1fr); gap:12px; margin-bottom:10px;">
            ${sections.map(sectionCard).join('')}
        </div>
        <div class="note-bar" style="font-size:14px; padding:9px 16px; line-height:1.6;">
            Haz clic en la <strong>tarjeta</strong> para ir al inicio de una sección, o en un <strong>tema</strong> para ir directamente a esa lámina. &nbsp;·&nbsp;
            Navega con ← → · Espacio · Enter. &nbsp;·&nbsp;
            <i class="fas fa-home" style="color:var(--ucv-accent);"></i> volver al índice &nbsp;·&nbsp;
            <i class="fas fa-sun" style="color:var(--ucv-accent);"></i> cambiar tema.
        </div>
    </div>
</div>`;
};
