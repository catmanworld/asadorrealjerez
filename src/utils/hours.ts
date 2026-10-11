export interface BusinessStatus {
  isOpen: boolean;
  message: string;
  isWeekend: boolean;
}

export function getBusinessStatus(): BusinessStatus {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const isWeekend = day === 0 || day === 6;

  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const totalMinutes = currentHour * 60 + currentMinute;

  const openMinutes = 9 * 60; // 9:00
  const closeMinutes = 15 * 60 + 45; // 15:45

  const isOpen = totalMinutes >= openMinutes && totalMinutes <= closeMinutes;

  let message = '';
  if (isOpen) {
    message = 'Abierto ahora • Atención al público de 9:00 a 15:45';
  } else if (totalMinutes < openMinutes) {
    message = 'Abrimos hoy a las 9:00h';
  } else {
    message = 'Cerrado por hoy • Abrimos mañana a las 9:00h';
  }

  return {
    isOpen,
    message,
    isWeekend,
  };
}
