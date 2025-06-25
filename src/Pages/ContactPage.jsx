import React from 'react';
import ContactHero from '../Contact/ContactHero';
import ContactDetailsSection from '../Contact/ContactDetailsSection'; // <-- Panggil komponen baru
import ContactMap from '../Contact/ContactMap';

const ContactPage = () => {
  return (
    // Kita ganti bg-gray-100 ke bg-white karena section yang akan mengatur warnanya
    <div className="w-full min-h-screen bg-white">
      <ContactHero />
      <ContactDetailsSection />
    </div>
  );
};

export default ContactPage;