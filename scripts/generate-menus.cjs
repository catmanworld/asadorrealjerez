const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const logoBase64 = fs.readFileSync(path.join(publicDir, 'logo.png')).toString('base64');

const menus = [
  {
    jfifName: 'menu 1.jfif',
    jpgName: 'menu-1.jpg',
    svgName: 'menu-1.svg',
    title: 'MENÚ 1',
    price: '17,30 €',
    items: [
      '1 POLLO ASADO',
      '+ TORTILLA DE PATATAS CASERA',
      '+ A ELEGIR:'
    ],
    extra: 'PICOS, POSTRE, PAN O ACEITUNAS',
    badge: 'OFERTA DESTACADA'
  },
  {
    jfifName: 'menu 2.jfif',
    jpgName: 'menu-2.jpg',
    svgName: 'menu-2.svg',
    title: 'MENÚ 2',
    price: '17,30 €',
    items: [
      '1 POLLO ASADO',
      '+ PATATAS CON SALCHICHAS',
      '+ A ELEGIR:'
    ],
    extra: 'PICOS, POSTRE, PAN O ACEITUNAS',
    badge: 'MENÚ INFANTIL Y FAMILIAR'
  },
  {
    jfifName: 'menu 3.jfif',
    jpgName: 'menu-3.jpg',
    svgName: 'menu-3.svg',
    title: 'MENÚ 3',
    price: '17,30 €',
    items: [
      '1 POLLO ASADO',
      '+ 1 EMPANADA ARTESANA',
      '+ A ELEGIR:'
    ],
    extra: 'PICOS, POSTRE, PAN O ACEITUNAS',
    badge: 'RECETA TRADICIONAL'
  },
  {
    jfifName: 'menu 4.jfif',
    jpgName: 'menu-4.jpg',
    svgName: 'menu-4.svg',
    title: 'MENÚ 4',
    price: '17,30 €',
    items: [
      '1 POLLO ASADO',
      '+ 1 ALIÑO A ELEGIR',
      '+ A ELEGIR:'
    ],
    subitems: '(Mariscos, Huevas, Ensaladilla Rusa...)',
    extra: 'PICOS, POSTRE, PAN O ACEITUNAS',
    badge: 'EL MÁS FRESCO'
  },
  {
    jfifName: 'menu 5.jfif',
    jpgName: 'menu-5.jpg',
    svgName: 'menu-5.svg',
    title: 'MENÚ 5',
    price: '18,50 €',
    items: [
      '1 POLLO ASADO',
      '+ RACIÓN DE PESCADO FRITO',
      '+ A ELEGIR:'
    ],
    subitems: '(Chocos, Cazón, Calamares o Fritura)',
    extra: 'PICOS, POSTRE, PAN O ACEITUNAS',
    badge: 'ESPECIAL COSTA DE CÁDIZ'
  },
  {
    jfifName: 'menu 6.jfif',
    jpgName: 'menu-6.jpg',
    svgName: 'menu-6.svg',
    title: 'MENÚ 6',
    price: '17,50 €',
    items: [
      '1 POLLO ASADO',
      '+ 1/4 KG CROQUETAS CASERAS',
      '+ PATATAS PEQUEÑAS'
    ],
    badge: 'FAVORITO DE LA CASA'
  },
  {
    jfifName: 'menu familiar.jfif',
    jpgName: 'menu-familiar.jpg',
    svgName: 'menu-familiar.svg',
    title: 'MENÚ FAMILIAR',
    price: '37,00 €',
    items: [
      '2 POLLOS ASADOS ENTEROS',
      '+ PATATAS (RACIÓN GRANDE)',
      '+ 1/4 KG CROQUETAS CASERAS',
      '+ 1/4 KG FILETES EMPANADOS',
      '+ 1 REFRESCO DE 2 LITROS'
    ],
    extra: '+ A ELEGIR: ACEITUNAS, PAN, PICOS O POSTRE',
    subitems: 'Especial para compartir en familia (6-8 comensales)',
    badge: 'GRAN FESTÍN FAMILIAR'
  }
];

function createSvg(m) {
  let itemsXml = '';
  let yPos = 445;
  for (const it of m.items) {
    const isSub = it.startsWith('+');
    const fill = !isSub ? '#78350f' : '#92400e';
    const weight = !isSub ? '900' : '700';
    const size = !isSub ? '34' : '28';
    itemsXml += `<text x="400" y="${yPos}" text-anchor="middle" font-family="sans-serif" font-weight="${weight}" font-size="${size}" fill="${fill}">${it}</text>\n`;
    yPos += 46;
  }

  if (m.subitems) {
    itemsXml += `<text x="400" y="${yPos}" text-anchor="middle" font-family="sans-serif" font-style="italic" font-weight="600" font-size="22" fill="#b45309">${m.subitems}</text>\n`;
    yPos += 44;
  }

  if (m.extra) {
    itemsXml += `<rect x="120" y="${yPos - 28}" width="560" height="52" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2" />\n`;
    itemsXml += `<text x="400" y="${yPos + 8}" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="20" fill="#92400e">${m.extra}</text>\n`;
    yPos += 58;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1060" width="800" height="1060">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fffdf7" />
      <stop offset="50%" stop-color="#fef3c7" />
      <stop offset="100%" stop-color="#fde68a" />
    </linearGradient>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#78350f" />
      <stop offset="50%" stop-color="#92400e" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="1060" fill="url(#bgGrad)" />

  <!-- Outer Border -->
  <rect x="20" y="20" width="760" height="1020" rx="20" fill="none" stroke="#b45309" stroke-width="6" />
  <rect x="30" y="30" width="740" height="1000" rx="16" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="10 6" />

  <!-- Corner Ornaments -->
  <circle cx="45" cy="45" r="10" fill="#b45309" />
  <circle cx="755" cy="45" r="10" fill="#b45309" />
  <circle cx="45" cy="1015" r="10" fill="#b45309" />
  <circle cx="755" cy="1015" r="10" fill="#b45309" />

  <!-- Header Banner -->
  <rect x="65" y="55" width="670" height="120" rx="16" fill="url(#headerGrad)" />
  <image href="data:image/png;base64,${logoBase64}" x="85" y="65" width="100" height="100" />
  <text x="440" y="115" text-anchor="middle" font-family="serif" font-weight="900" font-size="44" fill="#fbbf24" letter-spacing="2">ASADOR REAL</text>
  <text x="440" y="152" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="18" fill="#fef3c7" letter-spacing="3">JEREZ DE LA FRONTERA • ASADOR TRADICIONAL</text>

  <!-- Menu Badge -->
  <rect x="200" y="200" width="400" height="64" rx="32" fill="url(#goldGrad)" />
  <text x="400" y="244" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="34" fill="#78350f" letter-spacing="2">${m.title}</text>

  <!-- Subtitle Tag -->
  <rect x="250" y="278" width="300" height="34" rx="17" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" />
  <text x="400" y="301" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="14" fill="#92400e" letter-spacing="1">${m.badge}</text>

  <!-- White Card for Items -->
  <rect x="65" y="335" width="670" height="425" rx="20" fill="#ffffff" stroke="#fcd34d" stroke-width="2" />

  <!-- Items -->
  ${itemsXml}

  <!-- Price Badge Seal -->
  <g transform="translate(400, 835)">
    <circle cx="0" cy="0" r="76" fill="url(#goldGrad)" stroke="#78350f" stroke-width="4" />
    <circle cx="0" cy="0" r="68" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 4" />
    <text x="0" y="-12" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="16" fill="#78350f" letter-spacing="2">TOTAL</text>
    <text x="0" y="22" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="36" fill="#78350f">${m.price}</text>
    <text x="0" y="44" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="12" fill="#78350f">IVA INCLUIDO</text>
  </g>

  <!-- Footer Contact Strip -->
  <rect x="65" y="935" width="670" height="75" rx="14" fill="#78350f" />
  <text x="400" y="964" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="22" fill="#fbbf24">PEDIDOS Y ENCARGOS: 956 31 48 64</text>
  <text x="400" y="992" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="14" fill="#fef3c7">Horario: 9:00 a 15:45 h • C. Federico García Lorca, 33 (Jerez)</text>
</svg>`;
}

async function run() {
  for (const m of menus) {
    const svgStr = createSvg(m);
    const svgBuffer = Buffer.from(svgStr);

    // Save SVG file
    fs.writeFileSync(path.join(publicDir, m.svgName), svgBuffer);

    // Render JPEG
    const jpgBuffer = await sharp(svgBuffer).jpeg({ quality: 95 }).toBuffer();
    
    // Save as .jpg
    fs.writeFileSync(path.join(publicDir, m.jpgName), jpgBuffer);
    
    // Save as .jfif (with exact file name uploaded by user)
    fs.writeFileSync(path.join(publicDir, m.jfifName), jpgBuffer);

    console.log(`Saved ${m.jfifName} and ${m.jpgName} (${jpgBuffer.length} bytes)`);
  }
  console.log('All menu posters generated successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
