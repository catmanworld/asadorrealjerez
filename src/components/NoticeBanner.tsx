import React from 'react';
import { ArrowRight, Phone, Clock } from 'lucide-react';
import { ASADOR_INFO } from '../data/products';

interface NoticeBannerProps {
  isOpenNow: boolean;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ isOpenNow }) => {
  return (
    <aside
      aria-label="Aviso de pedidos y servicio"
      className="w-full bg-[#faecd8] border-b border-[#eed0af] text-[#2d1600] py-2 px-4 shadow-2xs relative"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs sm:text-sm font-sans">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ffdcbe] text-[#884e00] text-[11px] font-bold uppercase tracking-wider">
            <Clock className="w-3 h-3 text-[#c47c2b]" />
            {isOpenNow ? 'Abierto Hoy' : 'Horario Diario'}
          </span>
          <span className="font-semibold text-[#884e00]">Horario de atención al público:</span>
          <span className="text-[#524437]">
            De 9:00 a 15:45 (Lunes a Domingo) • C. Federico García Lorca, 33 (Jerez)
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${ASADOR_INFO.phoneClean}`}
            className="inline-flex items-center gap-1 font-sans font-bold text-xs text-[#884e00] hover:text-[#c47c2b] hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Teléfono de pedidos: {ASADOR_INFO.phone}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </aside>
  );
};
