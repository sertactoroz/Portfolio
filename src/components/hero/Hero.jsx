import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/avatar2b.png";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Social from "../../components/Social";
import GeoLocation from "../GeoLocation";
const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Sertaç Toröz",
  heroDesignation: "Software Developer",
  heroDescription1: `
  I'm a multifaceted developer who loves solving problems and building innovative web and mobile apps that focus on a great user experience and smooth functionality.`,
  heroDescription2: `My background spans both frontend and backend development, with hands-on experience in technologies like React, React Native, and Flutter. I'm passionate about crafting elegant, efficient code and delivering top-notch products. I thrive where creativity meets tech, always looking to learn, grow, and make meaningful contributions.`,
  heroDescription3: `When I'm not coding, you’ll find me playing guitar and singing at a local surf club—because I love creating music and performing live!`,
  heroBtn: "more about me",
};
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage})`,
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            backgroundBlendMode: 'overlay' 
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            {/* <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            /> */}
            <h1 className="text-uppercase poppins-font" style={{ fontSize: '3em' }}>
              I'm {heroContent.heroTitleName}.
              <span style={{ fontSize: '0.8em' }}>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font" style={{ marginBottom: 0 }}>{heroContent.heroDescription1}</p>
            <p className="open-sans-font" style={{ marginBottom: 0 }}>{heroContent.heroDescription2}</p>
            <p className="open-sans-font">{heroContent.heroDescription3}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
            <div className="contact p-2 pt-4">
              <Social />
            </div>
            <GeoLocation />
          </div>
          {/* <ScoreBoard /> */}
        </div>
      </div>
      {/* End home-details-container */}
      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}
          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};
export default Hero;
