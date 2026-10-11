import React, { useState } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Flame,
  Award,
  ShieldCheck,
  ExternalLink,
  Eye,
  X,
} from 'lucide-react';
import { ASADOR_INFO, PRODUCTS, Product } from '../data/products';

interface HomeViewProps {
  onNavigateToTab: (tab: 'inicio' | 'carta' | 'contacto') => void;
  isOpenNow: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateToTab,
  isOpenNow,
}) => {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  const wholeChicken = PRODUCTS.find((p) => p.id === 'pollo-entero') || PRODUCTS[0];
  const halfChicken = PRODUCTS.find((p) => p.id === 'medio-pollo') || PRODUCTS[1];
  const familiarOffer = PRODUCTS.find((p) => p.id === 'oferta-familiar') || PRODUCTS[2];

  // Official menus with posters
  const officialMenus = PRODUCTS.filter((p) => p.category === 'ofertas');

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-6 sm:pt-10 pb-12 px-4 lg:px-8 max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1ede6] border border-[#d8c3b2]/60 w-fit shadow-2xs">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#c47c2b] animate-pulse" />
              <span className="font-sans text-[11px] sm:text-xs text-[#524437] font-bold uppercase tracking-wider">
                Solo para recoger en local • Encargos por teléfono
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1c1c18] tracking-tight leading-[1.1]">
              El Auténtico Pollo Asado Tradicional en{' '}
              <span className="text-[#c47c2b] italic font-serif">Asador Real</span>
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[#524437] max-w-xl leading-relaxed">
              Dorados a fuego lento con nuestra receta tradicional y especias selectas. Recién asados
              cada mediodía en su punto perfecto de jugo y sabor casero en Jerez.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${ASADOR_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#a86513] text-white px-5 sm:px-6 py-3.5 rounded-xl font-sans text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Encargar: {ASADOR_INFO.phone}</span>
              </a>

              <button
                onClick={() => onNavigateToTab('carta')}
                className="inline-flex items-center gap-2 bg-[#f1ede6] hover:bg-[#ebe8e1] text-[#1c1c18] px-5 sm:px-6 py-3.5 rounded-xl font-sans text-sm sm:text-base font-bold shadow-2xs border border-[#d8c3b2] transition-colors cursor-pointer"
              >
                <span>Ver Carta y Precios</span>
                <ArrowRight className="w-4 h-4 text-[#c47c2b]" />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 bg-[#f7f3ec] p-4 rounded-xl border border-[#d8c3b2]/50 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#faecd8] flex items-center justify-center shrink-0 text-[#c47c2b]">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold text-[#1c1c18]">Receta Tradicional</span>
                  <span className="font-serif text-xs text-[#524437]">Asado en su propio jugo</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#faecd8] flex items-center justify-center shrink-0 text-[#c47c2b]">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold text-[#1c1c18]">Ingredientes Top</span>
                  <span className="font-serif text-xs text-[#524437]">Cocinados al momento</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#faecd8] flex items-center justify-center shrink-0 text-[#c47c2b]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold text-[#1c1c18]">Adobo Secreto</span>
                  <span className="font-serif text-xs text-[#524437]">Receta familiar Jerez</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual (5 cols) - Showcasing the authentic Menú Familiar flyer */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute -inset-4 bg-[#ffdcbe]/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-white border border-[#d8c3b2]/50 group">
              <div className="relative w-full h-[400px] sm:h-[480px] bg-[#faecd8] flex items-center justify-center overflow-hidden">
                <img
                  src="/menu familiar.jfif"
                  alt="Menú Familiar Asador Real - 2 Pollos, Patatas grandes, Croquetas, Filetes, Refresco 2L"
                  className="w-full h-full object-contain cursor-pointer transition-transform duration-500 group-hover:scale-102"
                  onClick={() => setSelectedFlyer('/menu familiar.jfif')}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/menu-familiar.jpg')) {
                      target.src = '/menu-familiar.jpg';
                    }
                  }}
                />
                
                {/* Click to expand overlay button */}
                <button
                  onClick={() => setSelectedFlyer('/menu familiar.jfif')}
                  className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#1c1c18] px-3 py-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 shadow-md border border-[#d8c3b2]/60 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#c47c2b]" />
                  <span>Ampliar Cartel</span>
                </button>
              </div>

              <div className="p-4 bg-white border-t border-[#d8c3b2]/50 flex items-center justify-between">
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#884e00] font-bold block">
                    Menú Completo para Compartir
                  </span>
                  <p className="font-serif text-sm font-bold text-[#1c1c18]">
                    Menú Familiar Asador Real • 37,00€
                  </p>
                </div>

                <a
                  href={`tel:${ASADOR_INFO.phoneClean}`}
                  className="inline-flex items-center gap-1.5 bg-[#884e00] hover:bg-[#c47c2b] text-white px-3 py-1.5 rounded-lg text-xs font-sans font-bold shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Encargar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTY SPOTLIGHT: EL POLLO ASADO */}
      <section className="w-full px-4 lg:px-8 max-w-[1240px] mx-auto">
        <div className="bg-[#f7f3ec] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#d8c3b2]/60 shadow-xs flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d8c3b2]/50 pb-6">
            <div className="max-w-2xl space-y-2">
              <span className="font-sans text-xs text-[#884e00] font-bold uppercase tracking-wider">
                Nuestra Gran Especialidad
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1c18] font-bold tracking-tight">
                El Pollo Asado en su Jugo
              </h2>
              <p className="font-serif text-base text-[#524437] leading-relaxed">
                Marinado y asado lentamente con y especias seleccionadas de nuestra tierra.
                Piel crujiente, dorada y uniforme, conservando todo el jugo interior para conseguir la
                carne más jugosa.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-white p-3 rounded-xl shadow-2xs border border-[#d8c3b2]/40 self-start md:self-auto">
              <Sparkles className="w-5 h-5 text-[#c47c2b]" />
              <div className="text-xs font-sans">
                <span className="font-bold text-[#1c1c18] block">Receta Secreta Jerezana</span>
                <span className="text-[#524437]">Jugos propios naturales desgrasados</span>
              </div>
            </div>
          </div>

          {/* Formatos en Grid Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tarjeta 1: Pollo Entero */}
            <div className="bg-white p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/50 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#faecd8] font-sans text-xs text-[#884e00] font-bold">
                    El Más Popular
                  </span>
                  <span className="font-serif text-3xl font-bold text-[#884e00] tabular-nums">
                    {wholeChicken.price.toFixed(2)}€
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#1c1c18] font-bold">Pollo Asado Entero</h3>
                <p className="font-serif text-sm text-[#524437] leading-relaxed">
                  Ración ideal para 3 o 4 personas. Cortado a mano en cuartos o entero listo para servir en familia.
                  Bañado en su jugo tradicional de asador.
                </p>
                <ul className="space-y-1.5 font-serif text-xs text-[#524437] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                    <span>Incluye tarrina de salsa de asador concentrada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                    <span>Envasado térmico para mantener el calor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                    <span>Apto para celíacos (Sin gluten)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={`tel:${ASADOR_INFO.phoneClean}`}
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#c47c2b] hover:bg-[#884e00] text-white py-3 rounded-xl font-sans text-xs font-bold shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Encargar: {ASADOR_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Tarjeta 2: Medio Pollo */}
            <div className="bg-white p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/50 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f1ede6] font-sans text-xs text-[#524437] font-bold">
                    Ración Individual o Pareja
                  </span>
                  <span className="font-serif text-3xl font-bold text-[#884e00] tabular-nums">
                    {halfChicken.price.toFixed(2)}€
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#1c1c18] font-bold">Medio Pollo Asado</h3>
                <p className="font-serif text-sm text-[#524437] leading-relaxed">
                  Mitad perfecta (pechuga y muslo) con piel dorada crujiente y jugo. Perfecto para comida individual
                  contundente o almuerzo completo.
                </p>
                <ul className="space-y-1.5 font-serif text-xs text-[#524437] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                    <span>Guarnición de salsa y jugo incluida</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                    <span>Opción con patatas por solo 8,00€</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                    <span>Listo en caja térmica para llevar</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={`tel:${ASADOR_INFO.phoneClean}`}
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#c47c2b] hover:bg-[#884e00] text-white py-3 rounded-xl font-sans text-xs font-bold shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Encargar: {ASADOR_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Tarjeta 3: Pack Familiar Especial */}
            <div className="bg-[#884e00] text-white p-6 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-[#884e00] font-sans text-xs font-bold">
                    Cartel Oficial
                  </span>
                  <span className="font-serif text-3xl font-bold text-[#ffdcbe] tabular-nums">
                    {familiarOffer.price.toFixed(2)}€
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-white font-bold">Menú Familiar Asador Real</h3>
                <p className="font-serif text-sm text-[#ffdcbe] leading-relaxed">
                  2 Pollos Asados enteros + Patatas (Grande) + 1/4 kg Croquetas + 1/4 kg Filetes empanados + 1 Refresco 2L
                  + A elegir (Aceitunas, Pan, Picos o Postre).
                </p>
                <ul className="space-y-1.5 font-serif text-xs text-white/90 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ffdcbe]" />
                    <span>Comida completa para 6 a 8 comensales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ffdcbe]" />
                    <span>Ahorro notable respecto a raciones sueltas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ffdcbe]" />
                    <span>Ver cartel original con 1 clic</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 relative z-10">
                <a
                  href={`tel:${ASADOR_INFO.phoneClean}`}
                  className="w-full inline-flex justify-center items-center gap-2 bg-white hover:bg-[#ffdcbe] text-[#884e00] py-3 rounded-xl font-sans text-xs font-bold shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Encargar Menú: {ASADOR_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENÚS OFICIALES CON CARTELES ORIGINALES */}
      <section className="w-full px-4 lg:px-8 max-w-[1240px] mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-sans text-xs text-[#884e00] uppercase tracking-wider font-bold">
            Cartelería Oficial de Asador Real
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1c18] tracking-tight">
            Nuestros Menús y Ofertas
          </h2>
          <p className="font-serif text-base text-[#524437]">
            Los menús combinados más pedidos de nuestro asador. Pulsa sobre cualquier cartel para ampliarlo o llama
            directamente para reservar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {officialMenus.map((menu) => (
            <div
              key={menu.id}
              className="bg-white rounded-2xl overflow-hidden shadow-2xs border border-[#d8c3b2]/50 flex flex-col justify-between group hover:shadow-md transition-all"
            >
              {/* Menu Poster Thumbnail */}
              <div
                className="relative aspect-[3/4] bg-[#faecd8] overflow-hidden cursor-pointer"
                onClick={() => menu.image && setSelectedFlyer(menu.image)}
              >
                {menu.image ? (
                  <img
                    src={menu.image}
                    alt={menu.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-103 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const altSrc = target.src.replace('.jfif', '.jpg').replace('%20', '-').replace(' ', '-');
                      if (target.src !== altSrc) {
                        target.src = altSrc;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <span className="font-serif text-2xl font-bold text-[#884e00]">{menu.name}</span>
                    <span className="font-serif text-3xl font-bold text-[#c47c2b] mt-2">{menu.price.toFixed(2)}€</span>
                  </div>
                )}

                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-sans font-bold text-[#884e00] shadow-xs">
                  {menu.price.toFixed(2)}€
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#1c1c18] px-3 py-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-4 h-4 text-[#c47c2b]" />
                    <span>Ver Cartel</span>
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1 gap-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1c1c18] leading-snug">
                    {menu.name}
                  </h3>
                  <p className="font-serif text-xs text-[#524437] mt-1 line-clamp-2">
                    {menu.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f1ede6] flex items-center justify-between gap-2">
                  <span className="font-serif text-xl font-bold text-[#884e00] tabular-nums">
                    {menu.price.toFixed(2)}€
                  </span>
                  <a
                    href={`tel:${ASADOR_INFO.phoneClean}`}
                    className="inline-flex items-center gap-1.5 bg-[#faecd8] hover:bg-[#c47c2b] text-[#884e00] hover:text-white px-3 py-1.5 rounded-lg font-sans text-xs font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Encargar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HORARIOS, UBICACIÓN Y CONTACTO */}
      <section className="w-full px-4 lg:px-8 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Schedule & Phone (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="space-y-1">
              <span className="font-sans text-xs text-[#884e00] font-bold uppercase tracking-wider">
                Visítanos o Reserva
              </span>
              <h2 className="font-serif text-3xl text-[#1c1c18] font-bold">Horarios y Ubicación</h2>
              <p className="font-serif text-sm text-[#524437]">
                Situados en Jerez de la Frontera, en una zona de fácil acceso para parar y recoger tu comida cómodamente.
              </p>
            </div>

            {/* Schedule Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/50 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#c47c2b]" />
                  <h3 className="font-serif text-xl font-bold text-[#1c1c18]">Horario de Atención al Público</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#faecd8] text-[#884e00] font-sans text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
                  {isOpenNow ? 'Abierto Hoy' : 'Atención Diaria'}
                </span>
              </div>

              <div className="space-y-2 pt-1 font-sans">
                <div className="flex justify-between items-center py-2 border-b border-[#f1ede6]">
                  <span className="text-sm font-semibold text-[#1c1c18]">De Lunes a Domingo:</span>
                  <span className="font-serif text-xl font-bold text-[#884e00] tabular-nums">9:00h – 15:45h</span>
                </div>
              </div>

              <p className="font-serif text-xs text-[#524437] bg-[#fdf9f2] p-3 rounded-xl border border-[#d8c3b2]/40">
                Atención telefónica y servicio en mostrador abiertos todos los días de <strong>9:00h a 15:45h</strong>.
              </p>
            </div>

            {/* Phone Quick Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/50 space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#c47c2b]" />
                <h3 className="font-serif text-xl font-bold text-[#1c1c18]">Teléfono de Encargos</h3>
              </div>
              <div>
                <a
                  href={`tel:${ASADOR_INFO.phoneClean}`}
                  className="font-serif text-4xl sm:text-5xl font-bold text-[#c47c2b] hover:text-[#884e00] transition-colors block tracking-tight tabular-nums"
                >
                  {ASADOR_INFO.phone}
                </a>
                <p className="font-serif text-xs text-[#524437] mt-1">
                  Pulsa directamente sobre el número desde tu móvil para realizar tu encargo.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Map & Directions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-[#f4ede4] rounded-2xl p-6 border border-[#d8c3b2]/60 shadow-2xs flex flex-col justify-between min-h-[380px] relative overflow-hidden">
              <div className="relative z-10 flex items-start justify-between">
                <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#d8c3b2]/60 shadow-2xs flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c47c2b]" />
                  <span className="font-sans text-xs font-bold text-[#1c1c18]">
                    {ASADOR_INFO.addressStreet}, Jerez
                  </span>
                </div>
                <span className="bg-[#884e00] text-white text-[11px] font-sans font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Barriada San Ginés
                </span>
              </div>

              {/* Decorative map visual representation */}
              <div className="relative z-10 my-auto text-center py-6">
                <div className="inline-flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#c47c2b] text-white shadow-xl flex items-center justify-center animate-bounce border-2 border-white">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="mt-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-[#c47c2b]/30">
                    <p className="font-serif text-lg font-bold text-[#1c1c18]">Asador Real</p>
                    <p className="font-serif text-xs text-[#524437]">
                      {ASADOR_INFO.addressStreet} • {ASADOR_INFO.neighborhood}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Footer Links */}
              <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-xl p-4 border border-[#d8c3b2]/60 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs font-sans text-[#524437]">
                  <span className="font-bold text-[#1c1c18] block">¿Cómo llegar?</span>
                  <span>Fácil aparcamiento junto al asador en C. Federico García Lorca</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={ASADOR_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#c47c2b] hover:bg-[#a86513] text-white font-sans text-xs font-bold transition-colors shadow-2xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Ficha Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Practical Access Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-xl border border-[#d8c3b2]/50 text-xs font-serif text-[#524437] space-y-1">
                <span className="font-sans font-bold text-[#1c1c18] block">Zona de Parking cercana</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#d8c3b2]/50 text-xs font-serif text-[#524437] space-y-1">
                <span className="font-sans font-bold text-[#1c1c18] block">Atención en Mostrador</span>
                <p>Atención directa y personalizada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL DIRECT PHONE CALLOUT */}
      <section className="w-full px-4 lg:px-8 max-w-[1240px] mx-auto">
        <div className="bg-[#884e00] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10 max-w-xl">
            <span className="font-sans text-xs uppercase tracking-wider text-[#ffdcbe] font-bold">
              Atención Telefónica Directa
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              ¿Listo para encargar tu comida casera?
            </h2>
            <p className="font-serif text-sm sm:text-base text-[#ffdcbe]">
              Llámanos al <strong className="text-white underline">{ASADOR_INFO.phone}</strong> y dinos la hora a la que
              deseas pasar a recoger.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full sm:w-auto">
            <a
              href={`tel:${ASADOR_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-[#ffdcbe] text-[#884e00] px-6 py-3.5 rounded-xl font-sans text-sm font-bold shadow-xs transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Llamar al {ASADOR_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

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
