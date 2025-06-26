import React from 'react';
import { MapPin, Calendar, Layers } from 'lucide-react'; // Impor ikon

// Komponen kecil untuk menampilkan item info, agar lebih rapi
const InfoItem = ({ icon, label, value }) => (
  <div>
    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
      {icon}
      <span>{label}</span>
    </div>
    <p className="text-lg text-gray-800 font-medium">{value}</p>
  </div>
);

const ProjectDetailContent = ({ project }) => {
  if (!project) return null;

  // Ambil tahun selesai dari end_date, jika tidak ada pakai start_date
  let year = "-";
  if (project.end_date) {
    year = new Date(project.end_date).getFullYear();
  } else if (project.start_date) {
    year = new Date(project.start_date).getFullYear();
  }
  // Jika ongoing, tampilkan "Ongoing"
  if (project.is_ongoing) {
    year = "Ongoing";
  }

  return (
    <div className="bg-gray-50 w-full py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Kolom Kiri: Info Proyek */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-[var(--nmj-red)] pb-4">
              Detail Proyek
            </h2>
            <div className="space-y-6">
              <InfoItem icon={<MapPin size={20} className="text-[var(--nmj-red)]" />} label="Lokasi" value={project.location} />
              <InfoItem icon={<Calendar size={20} className="text-[var(--nmj-red)]" />} label="Tahun Selesai" value={year} />
              <InfoItem icon={<Layers size={20} className="text-[var(--nmj-red)]" />} label="Kategori" value={project.construction_category} />
            </div>
          </div>

          {/* Kolom Kanan: Gambar & Deskripsi */}
          <div className="lg:col-span-2">
            <div className="mb-8 shadow-2xl rounded-lg overflow-hidden">
              <img
                src={project.image_url || "/gambar.png"}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tentang Proyek
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>{project.description}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailContent;