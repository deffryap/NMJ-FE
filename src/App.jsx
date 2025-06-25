import "./App.css";
import Navbar from "./Shared/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Shared/Footer";
import WhatsAppButton from "./Shared/WhatsAppButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="bg-[var(--nmj-college)] min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton /> {/* Tetap muncul di semua halaman */}
      </Router>
    </div>
  );
}

export default App;