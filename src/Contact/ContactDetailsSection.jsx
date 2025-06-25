import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const ContactDetailsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Layout Grid 2 Kolom untuk Info dan Form ada di sini */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="grid grid-cols-1 mt-10">
            <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;