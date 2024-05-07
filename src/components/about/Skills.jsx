import React from "react";

const skillsContent = [
  { skillClass: "", skillPercent: "85", skillName: "HTML" },
  { skillClass: "", skillPercent: "65", skillName: "JAVASCRIPT" },
  { skillClass: "", skillPercent: "60", skillName: "CSS" },
  { skillClass: "", skillPercent: "55", skillName: "PHP" },
  { skillClass: "", skillPercent: "85", skillName: "WORDPRESS" },
  { skillClass: "", skillPercent: "80", skillName: "JQUERY" },
  { skillClass: "", skillPercent: "55", skillName: "FLUTTER", skillLogo: "src/assets/img/hero/flutter.png" },
  { skillClass: "", skillPercent: "45", skillName: "REACT" },
];

skillsContent.forEach(skill => {
  skill.skillClass = "p" + skill.skillPercent;
});

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          {/* <img src={val.skillLogo} alt={val.skillName} /> */}
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
