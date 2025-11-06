import { useState } from 'react';
import { Send, User, Phone, CalendarDays } from 'lucide-react';

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to backend. For now just show confirmation UI
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-800">
        <h3 className="text-xl font-semibold">Заявка отправлена!</h3>
        <p className="mt-2 text-sm">Мы свяжемся с вами в ближайшее время, чтобы подтвердить запись.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">
          Отправить новую заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-gray-100/50">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2">
          <User className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            required
          />
        </label>
        <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2">
          <Phone className="h-4 w-4 text-gray-500" />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Телефон"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            required
          />
        </label>
        <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 sm:col-span-2">
          <CalendarDays className="h-4 w-4 text-gray-500" />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            required
          />
        </label>
      </div>
      <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700">
        <Send className="h-4 w-4" /> Отправить заявку
      </button>
    </form>
  );
}
