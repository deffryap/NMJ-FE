import React from 'react';

const ContactMap = () => {
  return (
    <div className="w-full h-80 md:h-96 overflow-hidden shadow-xl" data-aos="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.241334810619!2d106.80415957474965!3d-6.231904493755913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a23de33a23%3A0x1c21f73544f47582!2sPacific%20Century%20Place%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1678886543210!5m2!1sen!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Kantor NMJ"
      ></iframe>
    </div>
  );
};

export default ContactMap;