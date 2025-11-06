export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">© 2025 Smile Dental. Все права защищены.</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#services" className="hover:text-sky-700">Услуги</a>
            <a href="#about" className="hover:text-sky-700">О нас</a>
            <a href="#appointment" className="hover:text-sky-700">Запись</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
