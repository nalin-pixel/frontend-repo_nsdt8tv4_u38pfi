import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/60 px-3 py-1 text-xs text-sky-700 shadow-sm">
              <Star className="h-3.5 w-3.5" />
              Премиальная стоматология в вашем городе
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Здоровая и красивая улыбка — легко
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Терапия, имплантация, эстетика и гигиена — в одном месте. Современное оборудование, опытные врачи и бережный подход.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#appointment" className="inline-flex items-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700">Записаться на приём</a>
              <a href="#services" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">Услуги и цены</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Работаем ежедневно с 9:00 до 21:00</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1588771930296-88c2cb03f850?q=80&w=1670&auto=format&fit=crop"
                alt="Стоматолог осматривает пациента"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
