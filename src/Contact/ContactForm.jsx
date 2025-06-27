import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Pesan Anda telah dikirim!');
  };

  const inputStyle = "w-full bg-transparent border-0 border-b-2 border-gray-300 px-1 py-3 text-gray-900 focus:outline-none focus:ring-0 focus:border-[var(--nmj-red)] transition-colors";
  const labelStyle = "text-sm font-semibold text-gray-600";

  // Langsung return konten form tanpa div pembungkus tambahan
  return (
    <div className="bg-gray-50 p-8 md:p-12" data-aos="fade-left">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Kirim Pesan Cepat
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className={labelStyle}>Nama Lengkap</label>
            <input type="text" id="name" name="name" required className={inputStyle} />
          </div>
          <div>
            <label htmlFor="email" className={labelStyle}>Alamat Email</label>
            <input type="email" id="email" name="email" required className={inputStyle} />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className={labelStyle}>Subjek Pesan</label>
          <input type="text" id="subject" name="subject" required className={inputStyle} />
        </div>
        <div>
          <label htmlFor="message" className={labelStyle}>Pesan Anda</label>
          <textarea id="message" name="message" rows="4" required className={inputStyle}></textarea>
        </div>
        <div>
          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 bg-[var(--nmj-red)] text-white font-bold py-4 px-6 hover:brightness-110 transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <Send size={18} />
            <span>KIRIM PESAN SEKARANG</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;