import "./Home.css";

// About & Gallery components
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay">
          <h1>Capturing Life’s Beautiful Moments</h1>
          <p>Professional photography for timeless memories</p>
          <button className="hero-btn">View Portfolio</button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default Home;
