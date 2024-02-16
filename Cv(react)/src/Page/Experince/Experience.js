import React from "react";

function Experience({ data }) {
  const { ExperienceData } = data;

  const midpointIndex = Math.ceil(ExperienceData.length / 2);
  const firstHalfData = ExperienceData.slice(0, midpointIndex);
  const secondHalfData = ExperienceData.slice(midpointIndex);

  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <span>Experience</span>
      </h2>
      <div className="experience-row">
        <div className="experience-column">
          {firstHalfData.length > 0 && (
            <div className="experience-box">
              {firstHalfData.map((item, index) => (
                <div className="experience-content" key={index}>
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i> {item.Year}
                    </div>
                    <h3>{item.Title}</h3>
                    <p>{item.Dscrp}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="experience-column">
          {secondHalfData.length > 0 && (
            <div className="experience-box">
              {secondHalfData.map((item, index) => (
                <div className="experience-content" key={index}>
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i> {item.Year}
                    </div>
                    <h3>{item.Title}</h3>
                    <p>{item.Dscrp}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;
