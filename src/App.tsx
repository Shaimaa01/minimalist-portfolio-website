import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="bg-[#FAFAFA]">
      <Header />
      <HomePage />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
