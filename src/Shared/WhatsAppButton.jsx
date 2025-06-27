import React from 'react';

const WhatsAppCard = () => {
  const phoneNumber = '+628887945964';
  const message = 'Halo, saya ingin bertanya tentang layanan Anda';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-0 z-50 bg-[var(--nmj-persian)] text-white px-4 py-3 rounded-l-full flex items-center shadow-lg animate-bounce hover:bg-green-600 transition-colors"
    >
      <img
        src="/whatsapp.png" // Taruh file di /public
        alt="WhatsApp"
        className="w-10 h-10 mr-2"
      />
      <span className="font-semibold text-sm">Hubungi WhatsApp</span>
    </a>
  );
};

export default WhatsAppCard;
