import React, { useState, useMemo } from 'react';
import {
  Phone,
  Search,
  Sparkles,
  Info,
  Flame,
  ArrowRight,
  Eye,
  X,
  Clock,
  MapPin,
} from 'lucide-react';
import { CATEGORIES, PRODUCTS, ASADOR_INFO, Product } from '../data/products';

interface MenuViewProps {
  onNavigateToTab: (tab: 'inicio' | 'carta' | 'contacto') => void;
}

export const MenuView: React.FC<MenuViewProps> = ({
  onNavigateToTab,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.highlight && item.highlight.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Group filtered products by category for section display
  const groupedProducts = useMemo(() => {
    const map = new Map<string, Product[]>();
    for (const p of filteredProducts) {
      const cat = p.category;
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push(p);
    }
    return map;
  }, [filteredProducts]);

  return (
    <div className="w-full flex flex-col gap-10 pb-24">
      {/* HEADER SECTION */}
      <section className="w-full px-4 lg:px-8 pt-6 sm:pt-10 max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#d8c3b2]/60">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faecd8] text-[#884e00] font-sans text-xs uppercase tracking-wider border border-[#eed0af] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#c47c2b]" />
              <span>Lista de Precios Oficial de Asador Real</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-bold tracking-tight">
              Nuestra Carta &amp; Especialidades
            </h1>
            <p className="font-serif text-base sm:text-lg text-[#524437] leading-relaxed">
              Elaboraciones tradicionales elaboradas a diario en Jerez. Raciones generosas,
              ingredientes frescos y atención al público de <strong>9:00h a 15:45h</strong>.
            </p>
          </div>

          {/* Direct Phone Order Pill */}
          <div className="bg-[#f7f3ec] p-4 rounded-2xl border border-[#d8c3b2]/60 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#c47c2b] text-white flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-xs font-sans text-[#857465] block font-semibold">
                Encargos por Teléfono
              </span>
              <a
                href={`tel:${ASADOR_INFO.phoneClean}`}
                className="font-serif text-2xl font-bold text-[#884e00] hover:text-[#c47c2b] transition-colors tabular-nums"
              >
                {ASADOR_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* SEARCH AND CATEGORY FILTER BAR */}
        <div className="mt-8 flex flex-col gap-4">
          {/* Live Search Input */}
          <div className="relative max-w-md w-full">
            <Search className="w-5 h-5 text-[#857465] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar en la carta (ej. tortilla, empanada, croquetas, dorada...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#d8c3b2] rounded-xl pl-10 pr-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#c47c2b] focus:border-[#c47c2b] shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-sans bg-[#f1ede6] hover:bg-[#ebe8e1] px-2 py-1 rounded text-[#524437] cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#c47c2b] text-white shadow-xs'
                      : 'bg-white text-[#524437] hover:bg-[#faecd8] hover:text-[#884e00] border border-[#d8c3b2]/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHT BANNER: FAMILIAR OFFER */}
      {(selectedCategory === 'all' || selectedCategory === 'ofertas') && !searchQuery && (
        <section className="w-full px-4 lg:px-8 max-w-[1240px] mx-auto">
          <div className="bg-[#884e00] text-white rounded-3xl overflow-hidden shadow-md border border-[#703f00] flex flex-col lg:flex-row items-center justify-between">
            <div className="p-6 sm:p-10 lg:w-7/12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#ffdcbe] font-sans text-xs uppercase tracking-wider font-bold">
                <Flame className="w-4 h-4 text-[#ffdcbe]" />
                <span>Oferta Especial Familia &amp; Amigos</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Menú Familiar Asador Real
              </h2>
              <p className="font-serif text-base text-[#ffdcbe] leading-relaxed">
                2 Pollos Asados enteros en su jugo + Patatas grandes + 1/4 kg Croquetas artesanas + 1/4 kg Filetes empanados + 1 Refresco de 2 Litros + A elegir entre Pan, Picos, Aceitunas o Postre.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#ffdcbe] block font-sans">
                    Precio Completo
                  </span>
                  <span className="font-serif text-4xl font-bold text-white tabular-nums">
                    37,00€
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${ASADOR_INFO.phoneClean}`}
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#ffdcbe] text-[#884e00] px-5 py-3 rounded-xl font-sans text-sm font-bold shadow-xs transition-colors"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Reservar: {ASADOR_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Poster Thumbnail */}
            <div
              className="lg:w-5/12 relative min-h-[300px] lg:min-h-full bg-[#faecd8] p-4 flex items-center justify-center cursor-pointer group"
              onClick={() => setSelectedFlyer('/menu familiar.jfif')}
            >
              <img
                src="/menu familiar.jfif"
                alt="Cartel Menú Familiar Asador Real"
                className="max-h-[360px] w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/menu-familiar.jpg')) {
                    target.src = '/menu-familiar.jpg';
                  }
                }}
              />
              <div className="absolute top-4 right-4 bg-black/60 text-white px-2.5 py-1 rounded-md text-xs font-sans font-bold flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>Ampliar Cartel</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PRODUCTS LIST BY CATEGORY */}
      <div className="w-full px-4 lg:px-8 max-w-[1240px] mx-auto space-y-12">
        {CATEGORIES.filter((c) => c.id !== 'all').map((category) => {
          const itemsInCategory = groupedProducts.get(category.id);
          if (!itemsInCategory || itemsInCategory.length === 0) return null;

          return (
            <section key={category.id} className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#d8c3b2]/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-6 rounded-full bg-[#c47c2b]" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1c18]">
                    {category.label}
                  </h3>
                </div>
                <span className="font-sans text-xs text-[#857465]">
                  {itemsInCategory.length} {itemsInCategory.length === 1 ? 'producto' : 'productos'}
                </span>
              </div>

              {/* Grid of Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {itemsInCategory.map((product) => {
                  const isMenuWithPoster = Boolean(product.image);

                  return (
                    <article
                      key={product.id}
                      className="bg-white rounded-xl p-4 sm:p-5 shadow-2xs border border-[#d8c3b2]/50 flex flex-col justify-between hover:shadow-md transition-all group"
                    >
                      <div className="space-y-3">
                        {/* If it's one of the official menus with flyer image */}
                        {isMenuWithPoster && (
                          <div
                            className="relative aspect-[3/4] max-h-72 rounded-lg overflow-hidden bg-[#faecd8] cursor-pointer"
                            onClick={() => product.image && setSelectedFlyer(product.image)}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.currentTarget;
                                const altSrc = target.src.replace('.jfif', '.jpg').replace('%20', '-').replace(' ', '-');
                                if (target.src !== altSrc) {
                                  target.src = altSrc;
                                }
                              }}
                            />
                            {product.highlight && (
                              <span className="absolute top-2 left-2 bg-[#884e00] text-white font-sans text-[11px] font-bold px-2 py-0.5 rounded-md shadow-2xs">
                                {product.highlight}
                              </span>
                            )}
                            <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-0.5 rounded text-[11px] font-sans flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>Ampliar</span>
                            </div>
                          </div>
                        )}

                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-lg font-bold text-[#1c1c18] leading-snug">
                              {product.name}
                            </h4>
                            <span className="font-serif text-xl font-bold text-[#884e00] shrink-0 tabular-nums">
                              {product.price.toFixed(2)}€
                            </span>
                          </div>

                          <p className="font-serif text-xs text-[#524437] mt-1 leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Badges / Meta */}
                        <div className="flex flex-wrap items-center gap-1.5 font-sans text-[11px] text-[#857465]">
                          {product.unit && (
                            <span className="bg-[#f7f3ec] px-2 py-0.5 rounded text-[#524437] font-medium">
                              {product.unit}
                            </span>
                          )}
                          {product.glutenFree && (
                            <span className="bg-[#e8f5e9] text-[#1b5e20] px-2 py-0.5 rounded font-bold">
                              Sin Gluten
                            </span>
                          )}
                          {product.popular && (
                            <span className="bg-[#faecd8] text-[#884e00] px-2 py-0.5 rounded font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="mt-4 pt-3 border-t border-[#f1ede6] flex items-center justify-between gap-2">
                        {isMenuWithPoster ? (
                          <>
                            <button
                              onClick={() => product.image && setSelectedFlyer(product.image)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-sans text-xs font-semibold bg-[#f1ede6] hover:bg-[#ebe8e1] text-[#1c1c18] cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5 text-[#c47c2b]" />
                              <span>Ver Cartel</span>
                            </button>
                            <a
                              href={`tel:${ASADOR_INFO.phoneClean}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-sans text-xs font-bold bg-[#c47c2b] hover:bg-[#884e00] text-white transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>Encargar</span>
                            </a>
                          </>
                        ) : (
                          <div className="w-full flex items-center justify-between">
                            <span className="text-[11px] font-sans text-[#857465]">
                              Encargo al {ASADOR_INFO.phone}
                            </span>
                            <a
                              href={`tel:${ASADOR_INFO.phoneClean}`}
                              className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#884e00] hover:text-[#c47c2b]"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>Llamar</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-white rounded-2xl border border-[#d8c3b2]/50 p-8">
            <p className="font-serif text-2xl text-[#1c1c18] font-bold">
              No hemos encontrado platos para "{searchQuery}"
            </p>
            <p className="font-serif text-sm text-[#524437]">
              Prueba con otro término como pollo, patatas, aliños, o pulsa para restablecer la búsqueda.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="inline-flex items-center gap-2 bg-[#c47c2b] text-white px-4 py-2 rounded-lg font-sans text-xs font-bold cursor-pointer"
            >
              Ver toda la carta
            </button>
          </div>
        )}
      </div>

      {/* STICKY BOTTOM PHONE BAR */}
      <aside className="sticky bottom-4 z-40 px-4 max-w-[900px] mx-auto w-full pointer-events-none">
        <div className="bg-[#1c1c18] text-white p-3.5 sm:p-4 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-auto border border-[#d8c3b2]/30">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-[#c47c2b] flex items-center justify-center text-white shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-sm sm:text-base text-white font-bold leading-tight">
                Encargos y Pedidos Telefónicos
              </p>
              <p className="font-sans text-xs text-[#d8c3b2]">
                Llámanos al <strong className="text-[#ffdcbe]">{ASADOR_INFO.phone}</strong> • Horario: 9:00 a 15:45 h
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${ASADOR_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#c47c2b] hover:bg-[#a86513] text-white px-5 py-2.5 rounded-lg font-sans text-xs font-bold transition-all shadow-xs whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Llamar al {ASADOR_INFO.phone}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* FLYER ZOOM MODAL */}
      {selectedFlyer && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col items-center">
            <button
              onClick={() => setSelectedFlyer(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer z-10"
              aria-label="Cerrar cartel"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedFlyer}
              alt="Cartel oficial de Asador Real"
              className="max-h-[80vh] w-auto object-contain rounded-lg"
              onError={(e) => {
                const target = e.currentTarget;
                const altSrc = target.src.replace('.jfif', '.jpg').replace('%20', '-').replace(' ', '-');
                if (target.src !== altSrc) {
                  target.src = altSrc;
                }
              }}
            />
            <div className="mt-3 w-full flex items-center justify-between text-xs font-sans">
              <span className="text-[#524437]">Cartelería oficial de Asador Real (Jerez)</span>
              <a
                href={`tel:${ASADOR_INFO.phoneClean}`}
                className="font-bold text-[#884e00] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Encargar: {ASADOR_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
