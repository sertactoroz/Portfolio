import React from "react";
import { Link } from "react-router-dom";
// import image404 from "../assets/img/404.jpg";
import MatrixEffect from "../components/MatrixEffect";

localStorage.setItem("theme-color", "dark");
  document.querySelector("body").classList.add("dark");
  document.querySelector("body").classList.remove("light");
const NotFound = () => {
  
  return (
    <div className="error_page">
      <div
        className="hero bg-image "
        // style={{
        //   backgroundImage: `url(${process.env.PUBLIC_URL + image404})`,
        // }}
      >
       <MatrixEffect />
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            The page you are looking for could not be found.
          </p>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/">BACK TO HOME</Link> 
          </div>
          {/* End purchase_button */}
        </div>
      </div>
      {/* End .hero */}
    </div>
  );
};

export default NotFound;
