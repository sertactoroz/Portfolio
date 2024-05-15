import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/avatar2bd.png";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Social from "../../components/Social";
import ScoreBoard from "../scoreBoard/ScoreBoard";
import GeoLocation from "../GeoLocation";
const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Sertaç Toröz",
  heroDesignation: "Software Developer",
  heroDescriptions: `
  I'm a Turkish full-stack developer dedicated to crafting seamless and user-centric digital experiences. My passion lies in leveraging technology to create innovative solutions that enhance the lives of others.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ScoreBoard />
      <div className="row home-details-container align-items-center">

        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage
              })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font" style={{ fontSize: '3em' }}>
              I'm {heroContent.heroTitleName}.
              <span style={{ fontSize: '0.8em' }}>{heroContent.heroDesignation}</span>
            </h1>

            <p className="open-sans-font">{heroContent.heroDescriptions}</p>

            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>

              <span className="button-icon fa fa-arrow-right"></span>
            </button>

            <div className="contact p-2 pt-4">
              <Social />
            </div>
            <GeoLocation />

          </div>

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
