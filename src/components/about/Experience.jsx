import React from "react";

const experienceContent = [
  {
    year: "Sep 2021 - June 2024",
    position: "Frontend Developer",
    companyName: "NGI Tech",
    details: `Contributed to the development of the CCI Filo, a vehicle and personnel tracking application for Coca Cola Co., using React Native.
Developed the Contentlab corporate website with scroll-triggered SVG animations, which was part of a design competition.
Delivered the Addad.io advertisement billboard platform, used by companies like Opet and Watsons, by developing the frontend for the billboard, the administration panel for real-time monitoring, the backend, and various shell scripts for operation. Utilized PHP, MySQL, React, and Raspberry Pi technology to stream targeted ads.`,
  },
  {
    year: "June 2022 - Jan 2023",
    position: "Frontend Developer (Outsourced)",
    companyName: "Balance Network Exchange",
    details: `Assigned to the cryptocurrency exchange platform team with a React codebase to implement new features such as spot trading and various improvements.
Improved codebase type safety by enforcing strict types and relationships.
Implemented contract-based development through data type reviews, validation criteria, and unit testing in both front-end and back-end.`,
  },
  {
    year: "Jan 2023 - May 2023",
    position: "Mobile Developer (Volunteer)",
    companyName: "JuniusTech",
    details: `Volunteered as a mobile developer, contributing to the development of Juniflow, a credit-based task management platform targeting freelance and contractor development, using Dart and Flutter.`,
  },
  {
    year: "2012 - 2020",
    position: "Web Developer",
    companyName: "Freelance",
    details: `Delivered various corporate websites, web applications, and WordPress systems as a freelancer.`,
  }
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
