import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "aos/dist/aos.css";
import AOS from "aos";

function Main() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1200, delay: 300 });
  }, []);
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
