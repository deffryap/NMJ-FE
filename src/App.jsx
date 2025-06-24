import "./App.css";
import Navbar from "./Shared/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="bg-[var(--nmj-college)] min-h-screen">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
