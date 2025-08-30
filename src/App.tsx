import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { PortfolioPage } from "./pages/PortfolioPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-VeryLightGray">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <ContactCTA />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
