import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import NeuralCanvas from './components/NeuralCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DiscoveryModal from './components/DiscoveryModal';

// Dedicated Full Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import EstimatorPage from './pages/EstimatorPage';
import ProcessPage from './pages/ProcessPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen relative flex flex-col justify-between selection:bg-[#00D2FF] selection:text-black transition-colors duration-300 ${
      isDark ? 'bg-[#07090E] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0F172A]'
    }`}>
      {/* Ambient Neural Particle Network Background */}
      <NeuralCanvas />

      {/* Global Navigation Bar */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* Route Stream */}
      <main className="relative z-10 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/services" element={<ServicesPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/estimator" element={<EstimatorPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/process" element={<ProcessPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenModal={() => setModalOpen(true)} />

      {/* Global Discovery Booking Modal */}
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
