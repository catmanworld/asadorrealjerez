import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { ASADOR_INFO } from '../data/products';

interface HeaderProps {
  currentTab: 'inicio' | 'carta' | 'contacto';
  onSelectTab: (tab: 'inicio' | 'carta' | 'contacto') => void;
  isOpenNow: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  isOpenNow,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'carta', label: 'Nuestra Carta' },
    { id: 'contacto', label: 'Horarios y Ubicación' },
  ] as const;

  const handleTabClick = (tabId: 'inicio' | 'carta' | 'contacto') => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#fdf9f2]/95 backdrop-blur-md border-b border-[#e6e2db] shadow-xs">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Area */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleTabClick('inicio')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <img
              src={ASADOR_INFO.logoUrl}
              alt={ASADOR_INFO.name}
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('googleusercontent')) {
                  target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkTTw1KswCZHVTEMWXRmd6cbuDetzkHTmQLA7HwLMRZ4ZP1FyzMJhpznWMouyKKCbEl4SJ_OIercVB4T7WbI0_blBHBIaxeMHUmOjv51U6xUEeTpkcDKUO7JjdPvqbO_OIgGCMzIdSXrF4C6HxqOgtXUBjKm6hxOdw_G7pmEbivXOaJHbAs4QIKE8OkbvNLSWauKJv37pZrgeo2ljFDYBOs8TXjckMWlMHhDJSN4xyUZDAwmvZFt2f5CUn6cRd5eX_98E';
                }
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-[#c47c2b] group-hover:text-[#884e00] transition-colors leading-none">
                Asador Real
              </span>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#524437] font-semibold mt-1">
                Jerez de la Frontera
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`px-4 py-2 rounded-lg font-sans text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c47c2b] text-white shadow-xs'
                    : 'text-[#524437] hover:bg-[#ebe8e1] hover:text-[#1c1c18]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Call CTA Button */}
          <a
            href={`tel:${ASADOR_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#a86513] text-white px-4 sm:px-5 py-2.5 rounded-lg font-sans text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4 fill-current shrink-0" />
            <span className="hidden sm:inline">Pedidos: {ASADOR_INFO.phone}</span>
            <span className="sm:hidden font-bold">{ASADOR_INFO.phone}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1c1c18] hover:bg-[#f1ede6] transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdf9f2] border-b border-[#e6e2db] px-4 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  className={`text-left px-4 py-2.5 rounded-lg font-sans text-sm font-semibold cursor-pointer ${
                    isActive
                      ? 'bg-[#c47c2b] text-white shadow-xs'
                      : 'text-[#524437] hover:bg-[#ebe8e1] hover:text-[#1c1c18]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#e6e2db] space-y-2 text-xs font-sans text-[#524437]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c47c2b]" />
              <span>Horario de atención: 9:00 a 15:45 (Lunes a Domingo)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c47c2b]" />
              <span>{ASADOR_INFO.addressStreet}, Jerez</span>
            </div>
          </div>

          <a
            href={`tel:${ASADOR_INFO.phoneClean}`}
            className="w-full inline-flex justify-center items-center gap-2 bg-[#c47c2b] hover:bg-[#a86513] text-white py-3 rounded-xl font-sans text-sm font-bold shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Llamar para Pedidos ({ASADOR_INFO.phone})</span>
          </a>
        </div>
      )}
    </header>
  );
};
