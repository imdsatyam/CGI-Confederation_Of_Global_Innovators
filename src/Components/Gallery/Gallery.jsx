import "./Gallery.css";
import ImageGallery_1 from "../../Assets/gallery-1.png";
import ImageGallery_2 from "../../Assets/gallery-2.png";
import ImageGallery_3 from "../../Assets/gallery-3.png";
import ImageGallery_4 from "../../Assets/gallery-4.png";
import ImageGallery_5 from "../../Assets/gallery-5.png";
import ImageGallery_6 from "../../Assets/gallery-6.png";

function Gallery() {
  return (
    <div className="gallery">
      <h2>
        <span>PHOTO </span>GALLERY
      </h2>
      <div className="gallery__img">
          <img src={ImageGallery_1} alt="" />
          <img src={ImageGallery_2} alt="" />
          <img src={ImageGallery_3} alt="" />
          <img src={ImageGallery_4} alt="" />
          <img src={ImageGallery_5} alt="" />
          <img src={ImageGallery_6} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
