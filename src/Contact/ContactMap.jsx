import React from 'react';

const ContactMap = () => {
  return (
    <div className="w-full h-80 md:h-96 overflow-hidden shadow-xl" data-aos="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89754.57759306581!2d106.80950084793237!3d-6.180332901511126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1751025225543!5m2!1sen!2sid"
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