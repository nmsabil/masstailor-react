import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Services />
      <Reviews />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
