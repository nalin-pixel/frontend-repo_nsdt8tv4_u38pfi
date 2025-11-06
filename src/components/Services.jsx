import { CheckCircle2, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: CheckCircle2,
    title: 'Терапия и лечение',
    desc: 'Кариес, пломбы, лечение каналов с применением микроскопа и анестезии нового поколения.'
  },
  {
    icon: Sparkles,
    title: 'Эстетическая стоматология',
    desc: 'Отбеливание, виниры и реставрации для идеальной улыбки.'
  },
  {
    icon: ShieldCheck,
    title: 'Имплантация и хирургия',
    desc: 'Надёжные импланты, синус-лифтинг и безболезненные операции.'
  },
  {
    icon: HeartPulse,
    title: 'Гигиена и профилактика',
    desc: 'Профессиональная чистка, AirFlow и индивидуальные рекомендации.'
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900">Услуги</h2>
        <p className="mt-2 text-gray-600">Всё, что нужно вашей улыбке — от диагностики до эстетики.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-gray-100/50 transition hover:shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
