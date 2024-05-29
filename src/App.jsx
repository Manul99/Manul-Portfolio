import "./app.scss"
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar';
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
     <Hero/>
    </section>
    <section id="About">
      <About/>
</section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
</section>
  
  </div>;
};

export default App;
