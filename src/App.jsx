import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-sky-100/40 text-gray-900">
      <Navbar />
      <Hero />

      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Почему выбирают нас</h2>
              <p className="mt-3 text-gray-600">
                Мы объединили опыт, технологии и заботу о пациентах. У нас — цифровая диагностика, бережная анестезия и комфорт в каждой детали.
              </p>
              <ul className="mt-6 grid gap-3">
                <li className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">Современное оборудование и высокие стандарты стерилизации</li>
                <li className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">Прозрачные цены и честные планы лечения</li>
                <li className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">Гарантия на работы и индивидуальный подход</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop"
                alt="Современная стоматология"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section id="appointment" className="bg-gradient-to-b from-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Запишитесь на приём</h2>
              <p className="mt-2 text-gray-600">Оставьте контакты — администратор перезвонит для подтверждения и подберёт удобное время.</p>
              <div className="mt-6">
                <AppointmentForm />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1598257006560-8a5f05c3b4b4?q=80&w=1600&auto=format&fit=crop"
                alt="Пациент в стоматологии"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
