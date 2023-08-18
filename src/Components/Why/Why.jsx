import "./Why.css";
import logoWhy from "../../Assets/why-cgi-icon.png";

function Why() {
  return (
    <div className="why">
      <div className="why__info">
        <h2>
          <span>WHY </span>CGI
        </h2>
        <p>
          CGI is a structured network of startups that facilitates Founders to
          network with other Entrepreneurs, Mentors, Investors, Job Seekers and
          Professionals. The key to the success of all startups under us are the
          offerings we bring. Being the biggest innovation accelerator we
          provide all our members with multiple premium services.
        </p>
      </div>
      <div className="why__banner">
        <div className="banner">
          <img src={logoWhy} alt="" />
          <p>
            CGI is a global accelerator that provides a nurturing holistic
            environment for startups to attain their maximum potential. A
            platform supporting all kinds of business, technical, scientific,
            agricultural, educational and what not.
          </p>
        </div>
        <div className="banner" id="banner__spl">
          <img src={logoWhy} alt="" />
          <p>
            From seed funding to mentoring to growth hacking. CGI offers all
            services so you don’t lack behind when it’s the time to touch great
            heights. Our world wide corporate connections help you generate
            business leads for your startup.
          </p>
        </div>
        <div className="banner">
          <img src={logoWhy} alt="" />
          <p>
            Entrepreneurs, mentors or investors, CGI has a global approach to
            back you up. With our around the world network, we help you build
            your personal connections as well to grow your business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
