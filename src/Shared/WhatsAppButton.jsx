// src/components/WhatsAppCard.jsx
import React from 'react';

const WhatsAppCard = () => {
  const phoneNumber = '628000000'; // Ganti nomor WA kamu
  const message = 'Halo, saya ingin bertanya tentang layanan Anda';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-0 z-50 bg-[var(--nmj-persian)] text-white px-4 py-3 rounded-l-full flex items-center shadow-lg animate-pulse hover:bg-green-600 transition-colors hover:animate-none"
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
