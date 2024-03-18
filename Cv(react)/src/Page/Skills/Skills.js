import React from "react";
import { useTranslation } from "react-i18next";

function Skills({ data }) {
  const { SkillsData } = data;
  const [t, il8n] = useTranslation();

  return (
    <section className="Skills" id="Skills">
      <h2 className="heading">
        <span>{t("N5")}</span>
      </h2>
      <div className="Skills-row">
        {SkillsData.map((item, index) => (
          <div className="Skills-column" key={index}>
            <h2 className="title" dir={il8n.language == "en" ? "ltr" : "rtl"}>
              {il8n.language == "en" ? item.Title : item.TitleA}
            </h2>
            <div className="Skills-box">
              <div className="Skills-content">
                {item.Skills.map((item, index) => (
                  <div className="progress_bar" key={index}>
                    <ul>
                      <li>{item.lang}</li>
                    </ul>
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
