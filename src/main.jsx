import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Contact from "./Contact.jsx";
import Events from "./Events.jsx";
import Register from "./Register.jsx";
import Verify from "./Verify.jsx";
import ChuckGliderTutorial from "./ChuckGliderTutorial.jsx";
import WaterRocketTutorial from "./WaterRocketTutorial";
import Schedule from "./Schedule";
import FlightSimulatorTutorial from "./FlightSimulatorTutorial";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />

        {/* Chuck Glider Tutorial */}
        <Route
          path="/chuck-glider-tutorial"
          element={<ChuckGliderTutorial />}
        />
        {/* Water Rocket Tutorial */}
        <Route
          path="/water-rocket-tutorial"
          element={<WaterRocketTutorial />}
        />
        <Route path="/schedule" element={<Schedule />} />
        <Route
          path="/flight-simulator-tutorial"
          element={<FlightSimulatorTutorial />}
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);