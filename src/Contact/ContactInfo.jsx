import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const InfoItem = ({ icon, label, children, isLast = false }) => (
  <div className={`flex items-start gap-5 ${!isLast ? 'pb-8 border-b border-gray-200' : ''}`}>
    <div className="flex-shrink-0 text-[var(--nmj-red)] mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{label}</h3>
      <div className="text-lg text-gray-800 font-medium">{children}</div>
    </div>
  </div>
);

const ContactInfo = () => {
  // Langsung return kontennya tanpa div pembungkus tambahan
  return (
    <div data-aos="fade-right">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Hubungi Tim Kami
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Kami selalu terbuka untuk diskusi mengenai proyek baru, peluang kreatif, atau bagaimana kami bisa membantu Anda.
      </p>
      <div className="space-y-8">
        <InfoItem icon={<Phone size={22} />} label="Hubungi Langsung">
          <a href="tel:+62 888-7945-964" className="hover:text-[var(--nmj-red)] transition-colors">
            +62 888-7945-964
          </a>
        </InfoItem>
        <InfoItem icon={<Mail size={22} />} label="Kirim Email">
          <a href="mailto:info@nmj.co.id" className="hover:text-[var(--nmj-red)] transition-colors">
            info@nmj.co.id
          </a>
        </InfoItem>
        <InfoItem icon={<MapPin size={22} />} label="Kunjungi Kami" isLast={true}>
          <p>Merdeka Square, Jakarta, Jalan Lapangan Monas, Gambir, Central Jakarta City, Jakarta 10110</p>
        </InfoItem>
      </div>
    </div>
  );
};

export default ContactInfo;