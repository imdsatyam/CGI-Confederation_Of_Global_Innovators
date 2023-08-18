import "./About.css";
import bg from "../../Assets/about-us-image.png";

function About() {
  return (
    <div className="about">
      <div className="who__are">
        <h3>Who are we</h3>
        <p>
          The Confederation of Global Innovators (also known as CGI) is a
          platform created for the demographic dividend of our nation. We
          strongly believe that today our country’s youth, which comprises more
          than 65% of the total population, is the biggest asset for our
          country. From the point of inception, the CGI, as a community, has
          worked tirelessly in the field of bridging the gap between the
          stakeholders of development (like students, professional aspirants
          etc) and the opportunities like the corporate houses. The CGI is
          created to serve as a platform to connect innovators, stakeholders of
          development and the student community.
        </p>
        <button className="btn__about">Read more...</button>
      </div>
      <div className="who__bg">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default About;
