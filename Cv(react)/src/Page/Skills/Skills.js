import React from "react";

function Skills({ data }) {
  const { SkillsData } = data;
  return (
    <section className="Skills" id="Skills">
      <h2 className="heading">
        <span>Skills</span>
      </h2>
      <div className="Skills-row">
        {SkillsData.map((item, index) => (
          <div className="Skills-column" key={index}>
            <h2 className="title">{item.Title}</h2>
            <div className="Skills-box">
              <div className="Skills-content">
                {item.Skills.map((item, index) => (
                  <div className="progress_bar" key={index}>
                    <h3>
                      {item.lang} <span>{item.Count}%</span>
                    </h3>
                    <div className="bar">
                      <span style={{ width: `${item.Count}%` }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
