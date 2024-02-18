// Eduction.js
import React from "react";
import { useTranslation } from "react-i18next";
function Eduction({ data }) {
  const { eductionData } = data;
  const [t, il8n] = useTranslation();

  const midpointIndex = Math.ceil(eductionData.length / 2);
  const firstHalfData = eductionData.slice(0, midpointIndex);
  const secondHalfData = eductionData.slice(midpointIndex);

  return (
    <section className="eduction" id="eduction">
      <h2 className="heading">
        <span>{t("N3")}</span>
      </h2>
      <div dir={il8n.language == "en" ? "ltr" : "rtl"} className="eduction-row">
        <div className="eduction-column">
          {firstHalfData.length > 0 && (
            <div
              dir={il8n.language == "en" ? "ltr" : "rtl"}
              className="eduction-box"
            >
              {firstHalfData.map((item, index) => (
                <div className="eduction-content" key={index}>
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
        <div className="eduction-column">
          {secondHalfData.length > 0 && (
            <div
              dir={il8n.language == "en" ? "ltr" : "rtl"}
              className="eduction-box"
            >
              {secondHalfData.map((item, index) => (
                <div className="eduction-content" key={index}>
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

export default Eduction;
