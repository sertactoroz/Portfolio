import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "M. Sertaç" },
  { meta: "last name", metaInfo: "Toröz" },
  { meta: "Age", metaInfo: "34 Years" },
  { meta: "Nationality", metaInfo: "Turkish" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Datça,Mugla,TR" },
  { meta: "phone", metaInfo: "+905355167003" },
  { meta: "Email", metaInfo: "msertactoroz@gmail.com" },
  { meta: "Skype", metaInfo: " sertactoroz" },
  { meta: "langages", metaInfo: "Turkish, English, German" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block" style={{ color: val.metaInfo === "Available" ? "#5be85b" : "inherit" }}>
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
