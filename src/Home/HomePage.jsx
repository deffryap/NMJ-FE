import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full pt-20">
      {/* Hero Section */}
      <section
        className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-0 pt-8 sm:pt-12 pb-6 sm:pb-8 bg-white overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
        style={{
          backgroundImage: "url('/gambar.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        {/* Left Gradient Overlay */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-2/3 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))",
          }}
        />
        <div className="flex-1 z-20 pl-4 sm:pl-8 lg:pl-20 py-6 sm:py-8 flex flex-col items-start text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-4 sm:mb-6 drop-shadow-lg text-left">
            The Link to <br /> Construction Excellence
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mb-6 sm:mb-8 max-w-lg drop-shadow-lg text-left">
            We stand as the ultimate link to excellence in the construction
            sector, driving progress and building sustainable infrastructure for
            the future.
          </p>
          <button className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold mb-6 sm:mb-8 shadow hover:bg-red-700 transition self-start text-sm sm:text-base">
            Explore More
          </button>
          {/* Slider Bullets */}
          <div className="flex items-center gap-3 sm:gap-4 mt-4">
            <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray-200 rounded-full text-gray-100 text-xs sm:text-sm bg-black/20">
              01
            </span>
            <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border-2 border-white rounded-full text-white text-xs sm:text-sm font-bold bg-black/40">
              02
            </span>
            <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray-200 rounded-full text-gray-100 text-xs sm:text-sm bg-black/20">
              03
            </span>
          </div>
        </div>
        {/* Right: Kosong, hanya untuk layout */}
        <div className="flex-1 hidden lg:block" />
      </section>

      {/* Info Card di bawah gambar, tempel kanan */}
      <div className="flex justify-center lg:justify-end w-full px-4 sm:px-6 lg:px-0 mt-[-2rem] sm:mt-[-2.5rem] mb-6 sm:mb-8 relative z-20">
        <div className="bg-red-600 text-white shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-4 w-full max-w-sm">
          <div className="flex items-center flex-col gap-2">
            <span className="material-icons text-xl sm:text-2xl">
              Location on
            </span>
            <div className="text-center sm:text-left">
              <div className="text-xs">Location</div>
              <div className="font-bold text-sm">Jakarta, Indonesia</div>
            </div>
          </div>
          <div className="w-px h-8 bg-white/30 hidden sm:block"></div>
          <div className="flex gap-2 flex-col items-center sm:items-start">
            <span className="material-icons text-xl sm:text-2xl">Phone</span>
            <div className="text-center sm:text-left">
              <div className="text-xs">Phone Number</div>
              <div className="font-bold text-sm">(+62) 21 1234 5678</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Video & About Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-0 py-12 sm:py-16 gap-8 sm:gap-12 bg-white">
        {/* Video */}
        <div className="flex-1 relative flex items-start justify-center pl-4 sm:pl-8 lg:pl-20 order-2 lg:order-1">
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[720px] aspect-[4/3] shadow-lg bg-white">
            <img
              src="/gambar.png"
              alt="Company Video"
              className="w-full h-full object-cover"
            />
            {/* Decorative Squares */}
            <div
              className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-white"
              style={{ zIndex: 2 }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-red-600"
              style={{ zIndex: 2 }}
            ></div>
            <div
              className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 bg-white"
              style={{ zIndex: 2 }}
            ></div>
            {/* Play Button */}
            <button className="absolute bottom-0 left-0 flex items-center gap-2 sm:gap-3 bg-red-600 text-white px-4 sm:px-7 py-3 sm:py-5 rounded-none rounded-tr-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-7 sm:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <polygon points="10,8 16,12 10,16" fill="white" />
              </svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs">Play</span>
                <span className="font-bold text-sm sm:text-base leading-tight">
                  Company Video
                </span>
              </div>
            </button>
          </div>
        </div>
        {/* About & Progress */}
        <div className="flex-1 pr-4 sm:pr-8 lg:pr-20 flex flex-col justify-center order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight text-center lg:text-left">
            A Glimpse Closer to PT NMJ Construction
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl text-center lg:text-left">
            PT NAEK MAJU JAYA (NMJ) is a leading construction company, dedicated
            to providing innovative building solutions and infrastructure
            development across Indonesia.
          </p>
          <div className="mb-6 sm:mb-8 flex flex-col gap-4 sm:gap-5">
            {/* Progress Item */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-slate-800">
                <span>Client Satisfaction</span>
                <span>95%</span>
              </div>
              <div className="w-full h-1 bg-gray-200">
                <div className="bg-red-600 h-1" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-slate-800">
                <span>Project Completion</span>
                <span>85%</span>
              </div>
              <div className="w-full h-1 bg-gray-200">
                <div className="bg-red-600 h-1" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-slate-800">
                <span>Safety Standards</span>
                <span>98%</span>
              </div>
              <div className="w-full h-1 bg-gray-200">
                <div className="bg-red-600 h-1" style={{ width: "98%" }}></div>
              </div>
            </div>
          </div>
          <button className="mt-2 text-slate-800 font-bold border-b-2 border-red-600 hover:text-red-600 transition w-max px-0 py-1 rounded-none shadow-none text-sm sm:text-base mx-auto lg:mx-0">
            MORE ABOUT US
          </button>
        </div>
      </section>

      {/* --- FINAL UI-ACCURATE VALUES SECTION --- */}
      <section
        className="w-full flex justify-center mt-30 items-stretch bg-white p-0 m-0 relative"
        style={{ position: "relative" }}
      >
        <div className="w-full max-w-9xl mx-auto h-[400px] sm:h-[450px] lg:h-[500px] min-h-0 relative lg:ml-[500px]">
          {/* Blue background full width except for left margin */}
          <div
            className="absolute inset-0 left-0 bg-[#102331] w-full h-full z-0"
            style={{ borderRadius: 0 }}
          ></div>
          {/* Content: Values and Image */}
          <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
            {/* Values Content */}
            <div className="flex flex-col justify-center text-white w-full lg:w-1/2 h-full min-h-0 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
              <div className="text-xs tracking-widest text-gray-300 mb-2">
                VALUES
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-center lg:text-left">
                We Believe in
                <br />
                This Quality
              </h2>
              <div className="flex flex-col gap-5 sm:gap-7">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rotate-45 inline-block flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm sm:text-base mb-1">
                      Integrity
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      We uphold the highest ethical standards in all our
                      construction projects, fostering trust and transparency
                      with our clients and partners.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rotate-45 inline-block flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm sm:text-base mb-1">
                      Innovation
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      We continuously seek and implement innovative construction
                      solutions to drive efficiency, sustainability, and
                      progress in building infrastructure.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rotate-45 inline-block flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm sm:text-base mb-1">
                      Safety
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      We are unwavering in our commitment to safeguarding the
                      well-being of our workers, clients, and the environment on
                      every construction site.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image, sits on top of blue bg with geometric layers, and overflows out of the section */}
            <div className="h-full flex items-stretch justify-center relative overflow-visible  lg:block">
              <div className="relative w-[60%] h-[90%] mb-8 flex items-end">
                <img
                  src="/gambar.png"
                  alt="Construction Site"
                  className="w-full h-full object-cover relative z-20"
                  style={{
                    transform: "translate(30%, -8%)",
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Red Experience Box absolutely at bottom left, outside blue box */}
        <div
          className="absolute left-4 sm:left-8 lg:left-0 bottom-0 bg-red-600 text-white px-6 sm:px-8 lg:px-10 py-6 sm:py-8"
          style={{
            minWidth: "280px",
            minHeight: "100px",
            zIndex: 30,
            marginLeft: "220px",
          }}
        >
          {/* Decorative squares */}
          <div
            className="absolute top-0 right-12 sm:right-16 w-6 h-2 sm:w-8 sm:h-3 bg-white"
            style={{ zIndex: 2 }}
          ></div>
          <div
            className="absolute top-2 sm:top-3 right-6 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 bg-red-600"
            style={{ zIndex: 2 }}
          ></div>
          <div className="text-4xl sm:text-5xl font-extrabold mb-2">15</div>
          <div className="text-sm sm:text-base font-light leading-tight">
            Years of Construction
            <br />
            Industry Experience
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full bg-white py-16 px-4 sm:px-8 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-red-600 font-semibold tracking-widest uppercase">
              Services
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white text-slate-800 hover:bg-gray-100 transition">
                <span className="material-icons text-base">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white text-slate-800 hover:bg-gray-100 transition">
                <span className="material-icons text-base">chevron_right</span>
              </button>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 leading-tight">
            What We Do About Construction
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
            {/* Card 1 */}
            <div className="flex-1 bg-gray-50 shadow-md p-8 flex flex-col items-start relative border border-gray-100">
              {/* Dekorasi sudut kanan atas */}
              <div
                className="absolute top-0 right-0 w-8 h-3 bg-white"
                style={{ zIndex: 2 }}
              ></div>
              <div
                className="absolute top-3 right-0 w-4 h-4 bg-gray-50"
                style={{ zIndex: 2 }}
              ></div>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <span className="material-icons text-3xl text-red-600">
                  apartment
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-800 mb-2">
                Building Construction
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                We specialize in constructing high-quality buildings for
                commercial, residential, and industrial purposes with a focus on
                safety and durability.
              </p>
              <button className="mt-auto text-xs font-extrabold text-slate-800 border-b-2 border-slate-800 hover:text-red-600 hover:border-red-600 transition uppercase">
                Learn More
              </button>
            </div>
            {/* Card 2 (highlighted) */}
            <div className="flex-1 bg-red-600 shadow-md p-8 flex flex-col items-start relative text-white border border-red-700">
              {/* Dekorasi sudut kanan atas */}
              <div
                className="absolute top-0 right-0 w-8 h-3 bg-white"
                style={{ zIndex: 2 }}
              ></div>
              <div
                className="absolute top-3 right-0 w-4 h-4 bg-red-600"
                style={{ zIndex: 2 }}
              ></div>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <span className="material-icons text-3xl text-white">
                  engineering
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-2">
                Project Management
              </h3>
              <p className="text-white/90 text-sm mb-6">
                We provide expert project management services to ensure every
                construction project is completed on time, within budget, and to
                the highest standards.
              </p>
              <button className="mt-auto text-xs font-extrabold text-white border-b-2 border-white hover:text-red-600 hover:border-red-600 transition uppercase">
                Learn More
              </button>
            </div>
            {/* Card 3 */}
            <div className="flex-1 bg-gray-50 shadow-md p-8 flex flex-col items-start relative border border-gray-100">
              {/* Dekorasi sudut kanan atas */}
              <div
                className="absolute top-0 right-0 w-8 h-3 bg-white"
                style={{ zIndex: 2 }}
              ></div>
              <div
                className="absolute top-3 right-0 w-4 h-4 bg-gray-50"
                style={{ zIndex: 2 }}
              ></div>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <span className="material-icons text-3xl text-red-600">
                  foundation
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-800 mb-2">
                Infrastructure Development
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                We offer comprehensive infrastructure development solutions,
                from roads and bridges to utilities, supporting sustainable
                growth.
              </p>
              <button className="mt-auto text-xs font-extrabold text-slate-800 border-b-2 border-slate-800 hover:text-red-600 hover:border-red-600 transition uppercase">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
