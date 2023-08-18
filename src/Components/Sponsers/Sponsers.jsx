import "./Sponsers.css";
import SponsersLogo_1 from "../../Assets/chandigarh-university-seal.png";
import SponsersLogo_2 from "../../Assets/sewapoint.png";
import SponsersLogo_3 from "../../Assets/cu-tbi-logo.png";

function Sponsers() {
  return (
    <div className="sponsers">
      <div className="sponser__head">
        <h2>
          <span>OFFICIAL </span>SPONSERS
        </h2>
      </div>
      <div className="sponsers__logo">
        <div className="spl">
          <div className="image_spon">
            <img src={SponsersLogo_1} alt="" />
          </div>
        </div>
        <div className="spl">
          <div className="image_spon">
            <img src={SponsersLogo_2} alt="" />
          </div>
        </div>
        <div className="spl">
          <div className="image_spon">
            <img src={SponsersLogo_3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
