import "./About.css";
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I am a professional photographer passionate about capturing
            authentic moments and timeless stories. With years of experience
            in portrait, event, and lifestyle photography, I focus on emotion,
            light, and detail in every shot.
          </p>
          <p>
            My goal is simple — to create images that feel natural, meaningful,
            and unforgettable.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="Photographer" />
        </div>
      </div>
    </section>
  );
};

export default About;
