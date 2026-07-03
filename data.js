// ---------- Shared product data (used by script.js and lookbook.js) ----------
// Bump this whenever an asset image file is replaced, so browsers can't serve a stale cached copy.
const ASSET_V = 5;
function assetUrl(src){ return src ? `${src}?v=${ASSET_V}` : src; }

const GARMENT_TYPES = [
  { id: 'camiseta', label: 'Camisetas', plural: 'camisetas' },
  { id: 'sudadera', label: 'Sudaderas', plural: 'sudaderas' },
  { id: 'gorra',    label: 'Gorras',    plural: 'gorras' },
];

const STYLE_TAGS = {
  simple: 'Simple Design',
  fusion: 'Logo Fusion',
  coords: 'Coordinates',
  mix:    'Mix of Styles',
};

const PRODUCTS = [
  // ---- Camisetas ----
  {
    id: 'fusion-tipografica', name: 'Fusión Tipográfica', garment: 'camiseta', style: 'fusion', color: 'Blanco',
    desc: 'El rostro icónico de WOZ sustituye la O del propio wordmark, flanqueado por fragmentos geométricos de Bits&Atoms.',
    detail: 'El wordmark WOZ actúa como lienzo: la letra O se sustituye por el perfil del rostro y las letras W y Z se disuelven en fragmentos triangulares que citan el isotipo de Bits&Atoms. Estampado centrado al pecho, tinta única sobre algodón blanco.',
    front: 'assets/products/fusion-tipografica-front.png', back: null,
  },
  {
    id: 'abstraccion-pura', name: 'Abstracción Pura', garment: 'camiseta', style: 'mix', color: 'Blanco',
    desc: 'Reducción máxima del concepto corporativo: la letra central del wordmark es reemplazada por completo por la geometría triangular.',
    detail: 'Última parada de la serie tipográfica: ninguna letra queda intacta salvo su silueta general, y el hueco de la O se llena por completo con la retícula triangular de Bits&Atoms. Pieza pensada para quien ya reconoce el código visual de la colaboración sin necesidad del rostro explícito.',
    front: 'assets/products/abstraccion-pura-front.png', back: null,
  },
  {
    id: 'retrato-geometrico', name: 'El Retrato Geométrico', garment: 'camiseta', style: 'mix', color: 'Blanco',
    desc: 'Reinterpretación del rostro construida directamente a partir del ADN gráfico de Bits&Atoms.',
    detail: 'El perfil de WOZ se reconstruye con la trama triangular de Bits&Atoms; en el patrón de ojos y barba se esconde una tipografía fragmentada, un detalle pensado para descubrirse de cerca. Estampado a gran formato, centrado en el pecho.',
    front: 'assets/products/retrato-geometrico-front.png', back: null,
  },
  {
    id: 'disolucion-digital', name: 'Disolución Digital', garment: 'camiseta', style: 'mix', color: 'Blanco',
    desc: 'Pieza de vanguardia donde el lado humano se fragmenta en píxeles triangulares, simbolizando la transformación del código.',
    detail: 'Retrato partido en dos estados: la mitad izquierda conserva el trazo humano y sólido, la derecha se disuelve en una retícula de triángulos de tamaño decreciente — metáfora visual de la digitalización de una identidad.',
    front: 'assets/products/disolucion-digital-front.png', back: null,
  },
  {
    id: 'vision-compartida', name: 'Visión Compartida', garment: 'camiseta', style: 'mix', color: 'Blanco',
    desc: 'Diseño experimental donde los ojos del retrato son sustituidos por la identidad triangular, repetido en frontal y espalda.',
    detail: 'El mismo retrato aparece en frontal y espalda, pero con los ojos sustituidos por pequeños mosaicos triangulares — la identidad de Bits&Atoms "mirando" a través del rostro de WOZ. Es la única camiseta blanca de la colección con estampado a doble cara.',
    front: 'assets/products/vision-compartida-front.png', back: 'assets/products/vision-compartida-back.png',
  },
  {
    id: 'enlace-global', name: 'El Enlace Global', garment: 'camiseta', style: 'coords', color: 'Negro',
    desc: 'Lockup frontal sobrio de ambas marcas que se despliega, en la espalda, en un mapa que conecta Las Vegas con Barcelona.',
    detail: 'En el pecho, el lockup sobrio WOZ + isotipo de Bits&Atoms, separados por una línea vertical. Al girar la prenda, la espalda revela un mapamundi punteado con el arco que une Las Vegas y Barcelona, más las coordenadas exactas de ambas sedes.',
    front: 'assets/products/enlace-global-front.png', back: 'assets/products/enlace-global-back.png',
  },
  {
    id: 'coordenadas-compartidas', name: 'Coordenadas Compartidas', garment: 'camiseta', style: 'coords', color: 'Negro',
    desc: 'Ficha técnica minimalista que traza una línea directa entre las coordenadas de ambas sedes.',
    detail: 'Ficha técnica minimalista en la espalda: una línea vertical conecta dos coordenadas GPS — Las Vegas y Barcelona — marcadas con círculos de color, rematada por el lema "Two schools. One mission." Frontal completamente liso.',
    front: 'assets/products/coordenadas-compartidas-front.png', back: null,
  },
  {
    id: 'sistema-coordenadas', name: 'Sistema de Coordenadas', garment: 'camiseta', style: 'coords', color: 'Negro',
    desc: 'Versión ampliada del sistema de coordenadas, con retícula técnica y datos completos de ambas sedes.',
    detail: 'Versión ampliada de la ficha de coordenadas: retícula técnica, círculos concéntricos a modo de radar y los datos completos de WOZ U (Las Vegas) y Bits&Atoms (Barcelona), enmarcados por las etiquetas "Connected by code" y "Building the future".',
    front: 'assets/products/sistema-coordenadas-front.png', back: null,
  },
  {
    id: 'ruta-global', name: 'Ruta Global', garment: 'camiseta', style: 'coords', color: 'Negro',
    desc: 'El lockup de ambas marcas en el pecho da paso, en la espalda, a un globo terráqueo punteado que traza la ruta entre Las Vegas y Barcelona.',
    detail: 'El mismo lockup sobrio del pecho da paso, en la espalda, a un globo terráqueo de puntos con la ruta discontinua entre Las Vegas y Barcelona — una variante más ilustrada del concepto cartográfico de la colección.',
    front: 'assets/products/ruta-global-front.png', back: 'assets/products/ruta-global-back.png',
  },
  {
    id: 'orbita-woz-u', name: 'Órbita WOZ U', garment: 'camiseta', style: 'coords', color: 'Negro',
    desc: 'Lockup de WOZ U con el isotipo de Bits&Atoms al pecho, y en la espalda un globo terráqueo punteado con la ruta Las Vegas — Barcelona.',
    detail: 'Edición co-branded con WOZ U: al pecho, el lockup WOZ U junto al isotipo triangular; en la espalda, un globo de semitonos con la ruta discontinua entre las dos sedes y sus coordenadas resaltadas en verde WOZ.',
    front: 'assets/products/orbita-woz-u-front.png', back: 'assets/products/orbita-woz-u-back.png',
  },
  {
    id: 'lockup-iconico', name: 'Lockup Icónico', garment: 'camiseta', style: 'fusion', color: 'Negro',
    desc: 'Camiseta esencial con el lockup WOZ (rostro en la O) junto al isotipo de Bits&Atoms al pecho, en blanco sobre negro.',
    detail: 'La versión más directa del lockup de la colaboración: el wordmark WOZ con el rostro sustituyendo la O, seguido del isotipo triangular de Bits&Atoms, estampado en pequeño formato al pecho. Frontal única.',
    front: 'assets/products/lockup-iconico-front.png', back: null,
  },
  {
    id: 'lockup-woz-u', name: 'Lockup WOZ U', garment: 'camiseta', style: 'fusion', color: 'Negro',
    desc: 'Variante del lockup con la marca educativa WOZ U y el isotipo de Bits&Atoms, con el acento verde característico.',
    detail: 'Misma composición de lockup al pecho pero con la identidad WOZ U — la U enmarcada en verde — junto al isotipo triangular de Bits&Atoms. Frontal única.',
    front: 'assets/products/lockup-woz-u-front.png', back: null,
  },
  // ---- Sudaderas ----
  {
    id: 'identidad-woz', name: 'Identidad WOZ', garment: 'sudadera', style: 'fusion', color: 'Negro',
    desc: 'Chaqueta técnica con el wordmark de Woz al pecho y el isotipo triangular de Bits&Atoms a gran escala en la espalda.',
    detail: 'Chaqueta técnica con capucha: wordmark WOZ (con la O sustituida por el perfil) al pecho, y el isotipo triangular de Bits&Atoms a gran escala en la espalda, en blanco sobre negro para máximo contraste.',
    front: 'assets/products/identidad-woz-front.png', back: 'assets/products/identidad-woz-back.png',
  },
  {
    id: 'identidad-ba', name: 'Identidad B&A', garment: 'sudadera', style: 'simple', color: 'Negro',
    desc: 'Sobria en el frontal con la firma de Bits&Atoms, revela en la espalda un retrato de WOZ pintado a todo color.',
    detail: 'Frontal sobrio con la firma "B&A" en el pecho; al girar la prenda aparece un retrato de WOZ pintado a todo color con degradado arcoíris — la pieza más expresiva y colorida de toda la colección.',
    front: 'assets/products/identidad-ba-front.png', back: 'assets/products/identidad-ba-back.png',
  },
  {
    id: 'identidad-triangulo', name: 'Identidad Triangular', garment: 'sudadera', style: 'mix', color: 'Negro',
    desc: 'Variante que antepone el isotipo de Bits&Atoms al pecho, con el mismo retrato multicolor de WOZ en la espalda.',
    detail: 'Variante de la chaqueta técnica que antepone el isotipo triangular de Bits&Atoms al pecho; comparte con "Identidad B&A" el mismo retrato multicolor de WOZ en la espalda.',
    front: 'assets/products/identidad-triangulo-front.png', back: 'assets/products/identidad-triangulo-back.png',
  },
  {
    id: 'woz-u-jacket', name: 'Chaqueta WOZ U', garment: 'sudadera', style: 'simple', color: 'Negro',
    desc: 'Chaqueta técnica con capucha: la marca WOZ U al pecho y el isotipo triangular de Bits&Atoms a gran escala en la espalda.',
    detail: 'Softshell con capucha en la edición WOZ U: al pecho el lockup WOZ U con el acento verde, y en la espalda el isotipo triangular de Bits&Atoms a gran escala, en blanco sobre negro.',
    front: 'assets/products/woz-u-jacket-front.png', back: 'assets/products/woz-u-jacket-back.png',
  },
  // ---- Gorras ----
  {
    id: 'gorra-woz', name: 'Icono WOZ', garment: 'gorra', style: 'simple', color: 'Negro',
    desc: 'Gorra bordada que reduce la colaboración a su gesto más simple: el wordmark de Woz con el isotipo de Bits&Atoms integrado.',
    detail: 'Gorra estructurada bordada en blanco sobre negro: el wordmark WOZ con la O sustituida por el perfil, y el isotipo de Bits&Atoms integrado a la derecha. Panel trasero liso.',
    front: 'assets/caps/gorra-woz-front.png', back: 'assets/caps/gorra-woz-back.png',
  },
  {
    id: 'gorra-trucker', name: 'Trucker Fusión', garment: 'gorra', style: 'fusion', color: 'Gris',
    desc: 'Trucker cap que enfrenta el rostro de WOZ con el isotipo de Bits&Atoms, separados por una línea que resume la colaboración.',
    detail: 'Trucker cap de dos tonos: panel frontal gris jaspeado y malla trasera negra, con el perfil de WOZ y el isotipo de Bits&Atoms enfrentados y separados por una línea vertical — el gesto más literal de la colaboración.',
    front: 'assets/caps/gorra-trucker-front.png', back: 'assets/caps/gorra-trucker-back.png',
  },
];

function countByGarment(id){ return PRODUCTS.filter(p => p.garment === id).length; }
function garmentLabel(id){ return GARMENT_TYPES.find(g => g.id === id).label; }
