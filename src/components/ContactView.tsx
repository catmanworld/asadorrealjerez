import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Car,
  Bus,
  Accessibility,
  ExternalLink,
  Navigation,
  Compass,
} from 'lucide-react';
import { ASADOR_INFO } from '../data/products';

interface ContactViewProps {
  isOpenNow: boolean;
}

export const ContactView: React.FC<ContactViewProps> = ({ isOpenNow }) => {
  return (
    <div className="w-full flex flex-col gap-10 pb-16">
      {/* HEADER SECTION */}
      <section className="w-full px-4 lg:px-8 pt-6 sm:pt-10 max-w-[1240px] mx-auto">
        <div className="max-w-2xl space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faecd8] text-[#884e00] font-sans text-xs uppercase tracking-wider border border-[#eed0af] font-bold">
            <MapPin className="w-3.5 h-3.5 text-[#c47c2b]" />
            <span>Enclave &amp; Acceso en Jerez</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-bold tracking-tight">
            Ubicación y Contacto
          </h1>
          <p className="font-serif text-base sm:text-lg text-[#524437] leading-relaxed">
            {ASADOR_INFO.addressStreet}, {ASADOR_INFO.addressPostal} {ASADOR_INFO.addressCity} ({ASADOR_INFO.neighborhood}).
            Fácil acceso, cómodo aparcamiento y espacio para parar a recoger tu encargo recién asado.
          </p>
        </div>

        {/* TOP CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Phone */}
          <div className="bg-white p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#faecd8] flex items-center justify-center text-[#c47c2b]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1c1c18]">Teléfono de Encargos</h3>
              <p className="font-serif text-xs text-[#524437]">
                Atención telefónica directa todos los días para reservar pollos y raciones.
              </p>
              <a
                href={`tel:${ASADOR_INFO.phoneClean}`}
                className="font-serif text-3xl font-bold text-[#c47c2b] hover:text-[#884e00] transition-colors block tabular-nums"
              >
                {ASADOR_INFO.phone}
              </a>
            </div>
            <div className="pt-4 mt-2 border-t border-[#f1ede6]">
              <a
                href={`tel:${ASADOR_INFO.phoneClean}`}
                className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#884e00] hover:underline"
              >
                <span>Llamar ahora</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Hours */}
          <div className="bg-white p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#faecd8] flex items-center justify-center text-[#c47c2b]">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-[#1c1c18]">Horario al Público</h3>
                <span className="text-[11px] font-sans font-bold px-2 py-0.5 rounded-full bg-[#e8f5e9] text-[#1b5e20]">
                  {isOpenNow ? 'Abierto' : 'Abierto a diario'}
                </span>
              </div>
              <p className="font-serif text-3xl font-bold text-[#884e00] tabular-nums">9:00h – 15:45h</p>
              <p className="font-serif text-xs text-[#524437]">
                De lunes a domingo. Fines de semana y festivos abierto.
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-[#f1ede6]">
              <span className="font-sans text-xs text-[#524437]">
                Lunes a Domingo: 9:00 a 15:45 h
              </span>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bg-white p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#faecd8] flex items-center justify-center text-[#c47c2b]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1c1c18]">Dirección del Local</h3>
              <p className="font-serif text-sm font-bold text-[#1c1c18]">
                {ASADOR_INFO.addressStreet}
              </p>
              <p className="font-serif text-xs text-[#524437]">
                {ASADOR_INFO.addressPostal} Jerez de la Frontera ({ASADOR_INFO.neighborhood})
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-[#f1ede6]">
              <a
                href={ASADOR_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#884e00] hover:underline"
              >
                <span>Ver en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* MAP & ACCESS LOGISTICS DECK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Map Representation (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-xs border border-[#d8c3b2]/60 bg-[#f4ede4] flex flex-col justify-between min-h-[420px] relative">
            {/* Vector Map Canvas */}
            <div className="w-full h-full min-h-[380px] p-6 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c47c2b 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              {/* Map Top Status */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#d8c3b2]/60 shadow-2xs flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c47c2b]" />
                  <span className="font-sans text-xs font-bold text-[#1c1c18]">
                    Jerez de la Frontera, Cádiz
                  </span>
                </div>
                <span className="bg-[#884e00] text-white text-[11px] font-sans font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                  Bda. San Ginés / Lorca
                </span>
              </div>

              {/* Center Pin */}
              <div className="relative z-10 my-auto text-center py-6">
                <div className="inline-flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#c47c2b] text-white shadow-xl flex items-center justify-center animate-bounce border-2 border-white">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="mt-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-[#c47c2b]/30 text-center">
                    <p className="font-serif text-lg font-bold text-[#1c1c18] leading-tight">
                      Asador Real
                    </p>
                    <p className="font-serif text-xs text-[#524437]">
                      {ASADOR_INFO.addressStreet} • Jerez de la Frontera
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Directions Strip */}
              <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-xl p-4 border border-[#d8c3b2]/60 shadow-2xs">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <p className="font-sans text-xs font-bold text-[#1c1c18]">
                      {ASADOR_INFO.addressStreet}, {ASADOR_INFO.addressPostal} Jerez
                    </p>
                    <p className="font-serif text-xs text-[#524437]">
                      Próximo a Av. de Arcos y Av. Cruz Roja
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={ASADOR_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#c47c2b] hover:bg-[#a86513] text-white font-sans text-xs font-bold transition-colors shadow-2xs"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Ficha de Google</span>
                    </a>
                    <a
                      href={ASADOR_INFO.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#f1ede6] hover:bg-[#ebe8e1] text-[#1c1c18] font-sans text-xs font-bold transition-colors border border-[#d8c3b2]"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#c47c2b]" />
                      <span>Waze</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mobility & Transit Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Parada y Fácil Acceso Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/60 space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#faecd8] flex items-center justify-center shrink-0 text-[#c47c2b]">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#1c1c18]">
                    Fácil Acceso y Cómodo Aparcamiento
                  </h4>
                  <p className="font-serif text-xs text-[#524437] mt-1 leading-relaxed">
                    En C. Federico García Lorca dispones de facilidades de estacionamiento y parada de cortesía
                    justo frente al asador para recoger tu pedido sin complicaciones.
                  </p>
                  <p className="font-sans text-xs text-[#166534] font-semibold mt-2">
                    ✓ Estacionamiento cómodo en C. Federico García Lorca
                  </p>
                </div>
              </div>
            </div>

            {/* Transit Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-2xs border border-[#d8c3b2]/60 space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#faecd8] flex items-center justify-center shrink-0 text-[#c47c2b]">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#1c1c18]">
                    Cómo Llegar en Jerez
                  </h4>
                  <ul className="space-y-2 mt-2 font-sans text-xs text-[#524437]">
                    <li className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#c47c2b] text-white font-bold text-[10px]">
                        En Coche
                      </span>
                      <span>Conexión directa desde Av. de Arcos y Ronda de Circunvalación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#f1ede6] text-[#1c1c18] font-bold text-[10px]">
                        Autobús
                      </span>
                      <span>Líneas de autobús urbano con parada a 2 minutos a pie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accessibility Card */}
            <div className="bg-[#f7f3ec] p-4 sm:p-5 rounded-2xl border border-[#d8c3b2]/60 flex items-center gap-3">
              <Accessibility className="w-6 h-6 text-[#c47c2b] shrink-0" />
              <p className="font-serif text-xs text-[#524437] leading-relaxed">
                Mostrador a pie de calle en C. Federico García Lorca adaptado con rampa accesible para cochecitos de bebé
                y personas con movilidad reducida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE LOCATION HIGHLIGHT CALLOUT */}
      <section className="w-full px-4 lg:px-8 max-w-[1240px] mx-auto">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-[#d8c3b2]/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl text-[#1c1c18] font-bold">
              ¿Quieres encargar para recoger a una hora concreta?
            </h3>
            <p className="font-serif text-sm text-[#524437]">
              Llámanos con antelación al teléfono oficial para tener tu comida recién preparada a la hora convenida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${ASADOR_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#a86513] text-white px-6 py-3 rounded-xl font-sans text-xs font-bold shadow-xs hover:shadow-md transition-all text-center"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Llamar al {ASADOR_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
