import React from "react";
import { useTranslation } from "react-i18next";

function Experience({ data }) {
  const { ExperienceData } = data;
  const [t, il8n] = useTranslation();

  const midpointIndex = Math.ceil(ExperienceData.length / 2);
  const firstHalfData = ExperienceData.slice(0, midpointIndex);
  const secondHalfData = ExperienceData.slice(midpointIndex);

  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <span>{t("N4")}</span>
      </h2>
      <div
        dir={il8n.language == "en" ? "ltr" : "rtl"}
        className="experience-row"
      >
        <div className="experience-column">
          {firstHalfData.length > 0 && (
            <div
              dir={il8n.language == "en" ? "ltr" : "rtl"}
              className="experience-box"
            >
              {firstHalfData.map((item, index) => (
                <div className="experience-content" key={index}>
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i> {item.Year}
                    </div>
                    <h3>{il8n.language == "en" ? item.Title : item.TitleA}</h3>
                    <p>{il8n.language == "en" ? item.Dscrp : item.DscrpA}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="experience-column">
          {secondHalfData.length > 0 && (
            <div
              dir={il8n.language == "en" ? "ltr" : "rtl"}
              className="experience-box"
            >
              {secondHalfData.map((item, index) => (
                <div className="experience-content" key={index}>
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i> {item.Year}
                    </div>
                    <h3>{il8n.language == "en" ? item.Title : item.TitleA}</h3>
                    <p>{il8n.language == "en" ? item.Dscrp : item.DscrpA}</p>
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
