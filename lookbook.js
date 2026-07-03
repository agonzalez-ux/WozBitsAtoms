// ---------- Lookbook / design manual renderer ----------
function specImageBox(src, label){
  if (!src) return '';
  return `
    <div class="spec-img-box">
      <img src="${assetUrl(src)}" alt="${label}" loading="lazy">
    </div>
  `;
}

function specRow(product, index){
  return `
    <article class="spec-row">
      <div class="spec-images">
        ${specImageBox(product.front, product.name + ' - vista frontal')}
        ${product.back ? specImageBox(product.back, product.name + ' - vista trasera') : ''}
      </div>
      <div class="spec-info">
        <span class="spec-index">${String(index).padStart(2,'0')}</span>
        <span class="brand-tag">${garmentLabel(product.garment)}</span>
        <h3>${product.name}</h3>
        <div class="spec-meta">
          <span>${product.color}</span>
          <span>${STYLE_TAGS[product.style]}</span>
          <span>${product.back ? 'Frontal + espalda' : 'Frontal única'}</span>
        </div>
        <p>${product.detail || product.desc}</p>
      </div>
    </article>
  `;
}

function renderLookbook(){
  const wrap = document.getElementById('lookbookSections');
  let counter = 0;
  wrap.innerHTML = GARMENT_TYPES
    .filter(g => countByGarment(g.id) > 0)
    .map(g => {
      const items = PRODUCTS.filter(p => p.garment === g.id);
      return `
        <section class="spec-section">
          <div class="section-head">
            <h2>${g.label}</h2>
            <p>${items.length} ${items.length === 1 ? 'boceto' : 'bocetos'} en esta categoría.</p>
          </div>
          <div class="spec-list">
            ${items.map(p => specRow(p, ++counter)).join('')}
          </div>
        </section>
      `;
    }).join('');
}

renderLookbook();
