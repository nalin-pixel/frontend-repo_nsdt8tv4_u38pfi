import { Phone, Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white">
              <span className="font-bold">SD</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">Smile Dental</p>
              <p className="text-xs text-gray-500">Стоматологическая клиника</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-sky-700 transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-sky-700 transition-colors">О нас</a>
            <a href="#appointment" className="text-sm font-medium text-gray-700 hover:text-sky-700 transition-colors">Запись</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+79990000000"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <Phone className="h-4 w-4 text-sky-600" /> +7 (999) 000-00-00
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700"
            >
              <Calendar className="h-4 w-4" /> Записаться
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
