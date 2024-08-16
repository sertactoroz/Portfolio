import React from "react";

const SocialShare = [
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/sertactoroz/" },
  { iconName: "fa fa-facebook", link: "https://www.facebook.com/sertac.toroz/" },
  { iconName: "fa fa-youtube", link: "https://www.youtube.com/@sertactoroz6504" },
  { iconName: "fa fa-google", link: "https://dribbble.com/" },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/serta%C3%A7tor%C3%B6z/" },
  { iconName: "fa fa-github", link: "https://github.com/sertactoroz" },
  { iconName: "fa fa-xing", link: "https://www.xing.com/profile/MustafaSertac_Toroez/web_profiles" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
