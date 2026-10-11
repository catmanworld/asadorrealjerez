import React from 'react';
import { Phone, Clock, MapPin, AlertCircle, ExternalLink } from 'lucide-react';
import { ASADOR_INFO } from '../data/products';

interface FooterProps {
  onNavigateToTab: (tab: 'inicio' | 'carta' | 'contacto') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToTab }) => {
  return (
    <footer className="w-full bg-[#f7f3ec] text-[#1c1c18] border-t border-[#e6e2db] shadow-2xs mt-auto">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={ASADOR_INFO.logoUrl}
                alt={ASADOR_INFO.name}
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('googleusercontent')) {
                    target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkTTw1KswCZHVTEMWXRmd6cbuDetzkHTmQLA7HwLMRZ4ZP1FyzMJhpznWMouyKKCbEl4SJ_OIercVB4T7WbI0_blBHBIaxeMHUmOjv51U6xUEeTpkcDKUO7JjdPvqbO_OIgGCMzIdSXrF4C6HxqOgtXUBjKm6hxOdw_G7pmEbivXOaJHbAs4QIKE8OkbvNLSWauKJv37pZrgeo2ljFDYBOs8TXjckMWlMHhDJSN4xyUZDAwmvZFt2f5CUn6cRd5eX_98E';
                  }
                }}
              />
              <div>
                <span className="font-serif text-2xl font-bold text-[#c47c2b] block leading-none">
                  Asador Real
                </span>
                <span className="font-sans text-[11px] text-[#524437] uppercase tracking-wider font-semibold">
                  Jerez de la Frontera
                </span>
              </div>
            </div>
            <p className="font-serif text-xs text-[#524437] leading-relaxed">
              Tradición de asador artesano en Jerez de la Frontera. Pollos asados con nuestro estilo tradicional de receta
              familiar y guarniciones caseras elaboradas a diario con ingredientes frescos.
            </p>
          </div>

          {/* Horarios */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#1c1c18] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c47c2b]" />
              <span>Horarios de Atención</span>
            </h3>
            <ul className="space-y-1.5 font-serif text-xs text-[#524437]">
              <li>
                <strong className="text-[#1c1c18]">Lunes a Domingo:</strong> 9:00h – 15:45h
              </li>
              <li>Atención en mostrador y pedidos por teléfono</li>
              <li className="text-[#884e00] font-sans text-[11px] pt-1 font-semibold">
                ★ Abierto fines de semana y festivos
              </li>
            </ul>
          </div>

          {/* Ubicación */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#1c1c18] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c47c2b]" />
              <span>Ubicación</span>
            </h3>
            <address className="not-italic space-y-1 font-serif text-xs text-[#524437]">
              <p className="font-bold text-[#1c1c18]">{ASADOR_INFO.addressStreet}</p>
              <p>
                {ASADOR_INFO.addressPostal} {ASADOR_INFO.addressCity}, {ASADOR_INFO.addressProvince}
              </p>
              <p className="text-[#524437] font-sans text-[11px]">{ASADOR_INFO.neighborhood}</p>
              <p className="text-[#166534] font-sans font-semibold pt-1">
                Fácil acceso y parking cercano
              </p>
            </address>
          </div>

          {/* Encargos Telefónicos */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#1c1c18] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#c47c2b]" />
              <span>Teléfono Oficial</span>
            </h3>
            <div className="p-3.5 rounded-xl bg-white border border-[#d8c3b2]/60 font-sans text-xs">
              <p className="text-[#524437] leading-snug">
                Encargos y reservas por teléfono:
              </p>
              <a
                href={`tel:${ASADOR_INFO.phoneClean}`}
                className="inline-flex items-center gap-1.5 font-serif text-2xl text-[#c47c2b] hover:text-[#884e00] mt-1 font-bold block tabular-nums"
              >
                <Phone className="w-4 h-4 fill-current shrink-0" />
                <span>{ASADOR_INFO.phone}</span>
              </a>
              <p className="text-[11px] text-[#857465] mt-1">
                Aconsejamos llamar con antelación para fines de semana y festivos.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-10 pt-4 border-t border-[#e6e2db] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-serif text-[#857465]">
          <p>© Asador Real Jerez. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 font-sans text-xs">
            <button
              onClick={() => onNavigateToTab('inicio')}
              className="hover:text-[#c47c2b] transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigateToTab('carta')}
              className="hover:text-[#c47c2b] transition-colors cursor-pointer"
            >
              Nuestra Carta
            </button>
            <button
              onClick={() => onNavigateToTab('contacto')}
              className="hover:text-[#c47c2b] transition-colors cursor-pointer"
            >
              Horarios y Ubicación
            </button>
            <a
              href={ASADOR_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c47c2b] transition-colors flex items-center gap-1"
            >
              <span>Ficha Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
