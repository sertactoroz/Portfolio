import React from "react";

const educationContent = [
  {
    year: "2014",
    degree: "Materials Science & Engineering",
    institute: "Gebze Institute Of Technology",
    details: ``,
  },
  {
    year: "M.Sc.",
    degree: "Nano Science & Nano Engineering",
    institute: "Istanbul Technical University",
    details: ``,
  },
  {
    year: "M.B.A.",
    degree: "Master Of Business Administration",
    institute: "Gebze Institute Of Technology & SRH Hochschule Heidelberg (Erasmus)",
    details: ``,
  },
  {
    year: "2022",
    degree: "Modern Javascript & React",
    institute: "Udemy",
    details: `Completed a course in Modern Javascript & React.`,
  },
  {
    year: "2023",
    degree: "Mobile Application Development (Dart/Flutter)",
    institute: "Softito IT Academy",
    details: `Completed a course in Mobile Application Development using Dart/Flutter.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
