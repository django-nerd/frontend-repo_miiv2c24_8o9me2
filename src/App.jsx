import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactOrder from "./components/ContactOrder";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactOrder />
      </main>
      <Footer />
    </div>
  );
}

export default App;
