import "./Gallery.css";

import img1 from "../assets/images/p1.jpg";
import img2 from "../assets/images/p2.jpg";
import img3 from "../assets/images/p3.jpg";
import img4 from "../assets/images/p4.jpg";
import img6 from "../assets/images/p6.jpg";


const Gallery = () => {
  return (
    <section className="gallery">
      <h1>Gallery</h1>

      <div className="gallery-grid">
        <img src={img1} alt="Gallery 1" />
        <img src={img2} alt="Gallery 2" />
        <img src={img3} alt="Gallery 3" />
        <img src={img4} alt="Gallery 4" />
        <img src={img6} alt="Gallery 6" />
      </div>
    </section>
  );
};

export default Gallery;
