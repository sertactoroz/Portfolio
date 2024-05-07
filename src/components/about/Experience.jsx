import React from "react";

const experienceContent = [
  {
    year: "2023 - Present",
    position: "Full-stack Developer",
    compnayName: "NGI Tech",
    details: `NGI provides software solutions, encompassing AR, VR, and Image Processing to a global clientele. 
    CCI Filo - Involved in the development of the CCI Filo, a vehicle and personnel tracking application for Coca Cola Co. 
    Contentlab - Contributed to the Contentlab project, developed using HTML, CSS, and Vanilla JavaScript, focusing on scroll-triggered svg animations. 
    Addad.io - Currently involved in the Addad.io project aimed at revolutionizing advertising dynamics for various enterprises.`,
  },
  {
    year: "2022 - 2023",
    position: "Full-stack Developer",
    compnayName: "Balance Network Exchange",
    details: `Joined as a full-stack developer, actively participated in backlog grooming, sprint planning & other agile ceremonies.
    Improved scalability via feature refactoring, bug fixes, and optimization. Frontend enhancements utilized React and TypeScript, and backend improvements with Java / Spring Boot for API requests.`,
  },
  {
    year: "2023 - Present",
    position: "Mobile Developer (Volunteer)",
    compnayName: "JuniusTech",
    details: `Volunteering as a mobile developer, contributing to the development of Juniflow, a project management tool. Utilizing Dart/Flutter for implementation.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
