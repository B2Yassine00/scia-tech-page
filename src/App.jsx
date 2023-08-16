import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoUpButton from "./components/GoUpButton"; // Import the GoUpButton component

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <Navbar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About className='h-screen' />
        <Services />
        <Features />
        <Steps />
        <Contact />
        <Footer />
        <GoUpButton /> 
      </div>
    </BrowserRouter>
  );
};

export default App;
