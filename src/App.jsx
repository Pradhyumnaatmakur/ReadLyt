import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SpeedReader from "./SpeedReader";
import Header from "./Header";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Header />

      {/* Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<SpeedReader />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
