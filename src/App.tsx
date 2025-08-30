import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { PortfolioPage } from "./pages/PortfolioPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        className="bg-VeryLightGray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <ContactCTA />
      </motion.main>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
