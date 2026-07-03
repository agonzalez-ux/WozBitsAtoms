// ---------- Data + shared helpers live in data.js (also used by lookbook.js) ----------

const ROTATE_ICON = `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-2.34-5.66L15 9V3h-6l2.35 2.35A9.96 9.96 0 0 0 12 2z"/></svg>`;

// ---------- Tilt card markup (used everywhere: hero, categories, grid, lightbox) ----------
function tiltCardMarkup(product, opts={}){
  const hasBack = !!product.back;
  const tiltClass = opts.tiltClass || 'tilt-a';
  return `
    <div class="tilt-wrap ${tiltClass}">
      <div class="flip-scene ${hasBack ? 'has-back' : 'no-back'}" data-id="${product.id}">
        ${hasBack ? `<span class="badge-360">${ROTATE_ICON} 360°</span>` : ''}
        <div class="flip-inner">
          <div class="flip-face flip-front">
            <img src="${assetUrl(product.front)}" alt="${product.name} - vista frontal" loading="lazy">
          </div>
          ${hasBack ? `
          <div class="flip-face flip-back has-photo">
            <img src="${assetUrl(product.back)}" alt="${product.name} - vista trasera" loading="lazy">
          </div>` : ''}
        </div>
      </div>
    </div>
  `;
}

const TILT_CYCLE = ['tilt-a','tilt-b','tilt-c','tilt-a'];

// ---------- Filters ----------
let currentFilter = 'all';
function renderFilters(){
  const el = document.getElementById('filters');
  const available = GARMENT_TYPES.filter(g => countByGarment(g.id) > 0);
  const all = [{id:'all', label:`Todo (${PRODUCTS.length})`}, ...available.map(g => ({id:g.id, label:`${g.label} (${countByGarment(g.id)})`}))];
  el.innerHTML = all.map(f => `<button class="filter-pill ${f.id==='all'?'active':''}" data-filter="${f.id}">${f.label}</button>`).join('');
  el.querySelectorAll('.filter-pill').forEach(btn => btn.addEventListener('click', () => setFilter(btn.dataset.filter)));
}

function setFilter(id){
  currentFilter = id;
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.toggle('active', b.dataset.filter === id));
  renderGrid();
}

// ---------- Product grid ----------
function renderGrid(){
  const grid = document.getElementById('productGrid');
  const list = currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.garment === currentFilter);
  grid.innerHTML = list.map((p, i) => `
    <div class="product-card">
      <div class="card-box">
        ${tiltCardMarkup(p, { tiltClass: TILT_CYCLE[i % TILT_CYCLE.length] })}
      </div>
      <div class="product-info">
        <span class="brand-tag">${garmentLabel(p.garment)}</span>
        <h4 class="name">${p.name}</h4>
        <div class="meta">${p.color} · ${STYLE_TAGS[p.style]}</div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.flip-scene').forEach(scene => {
    scene.addEventListener('click', () => openLightbox(scene.dataset.id));
  });

  observeCards();
}

function observeCards(){
  const cards = document.querySelectorAll('.product-card:not(.in-view)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('in-view'), i * 40);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => io.observe(c));
}

// ---------- Lightbox (zoomable photo only, no product info) ----------
const ZOOM_ICON = `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-2.34-5.66L15 9V3h-6l2.35 2.35A9.96 9.96 0 0 0 12 2z"/></svg>`;
let lbZoom = 1;
let lbSide = 'front';

function openLightbox(id){
  const p = PRODUCTS.find(x => x.id === id);
  const hasBack = !!p.back;
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  lbSide = 'front';
  content.innerHTML = `
    <div class="lb-zoom-wrap">
      <img id="lbImage" src="${assetUrl(p.front)}" alt="${p.name}">
    </div>
    ${hasBack ? `<button class="lb-flip-btn" id="lbFlipBtn">${ZOOM_ICON} Ver espalda</button>` : ''}
  `;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';

  const wrap = content.querySelector('.lb-zoom-wrap');
  const img = document.getElementById('lbImage');
  lbZoom = 1;
  img.style.transform = 'scale(1)';
  wrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    lbZoom = Math.min(4.5, Math.max(1, lbZoom - e.deltaY * 0.0016));
    img.style.transform = `scale(${lbZoom})`;
  }, { passive:false });

  const flipBtn = document.getElementById('lbFlipBtn');
  if (flipBtn){
    flipBtn.addEventListener('click', () => {
      lbSide = lbSide === 'front' ? 'back' : 'front';
      img.src = assetUrl(lbSide === 'front' ? p.front : p.back);
      flipBtn.innerHTML = `${ZOOM_ICON} ${lbSide === 'front' ? 'Ver espalda' : 'Ver frontal'}`;
      lbZoom = 1;
      img.style.transform = 'scale(1)';
    });
  }
}

function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// ---------- Header scroll ----------
function initHeaderScroll(){
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30), { passive:true });
}

// ---------- Init ----------
renderFilters();
renderGrid();
initHeaderScroll();
