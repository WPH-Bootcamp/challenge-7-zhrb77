import Header from "./components/container/Header";
import Hero from "./components/container/HeroSection";
import About from "./components/container/About";
import Portfolio from "./components/container/Portfolio";
import Services from "./components/container/ServiceSection";
import Contact from "./components/container/Contact";
import Footer from "./components/container/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-[#0A0D12] dark:bg-black dark:text-[#FDFDFD]">
      <Header />
      <main className="flex flex-col items-center p-0 w-full">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
