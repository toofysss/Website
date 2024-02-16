// Eduction.js
import React from "react";

function Eduction({ data }) {
  const { eductionData } = data;

  const midpointIndex = Math.ceil(eductionData.length / 2);
  const firstHalfData = eductionData.slice(0, midpointIndex);
  const secondHalfData = eductionData.slice(midpointIndex);

  return (
    <section className="eduction" id="eduction">
      <h2 className="heading">
        <span>Eduction</span>
      </h2>
      <div className="eduction-row">
        <div className="eduction-column">
          {firstHalfData.length > 0 && (
            <div className="eduction-box">
              {firstHalfData.map((item, index) => (
                <div className="eduction-content" key={index}>
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
        <div className="eduction-column">
          {secondHalfData.length > 0 && (
            <div className="eduction-box">
              {secondHalfData.map((item, index) => (
                <div className="eduction-content" key={index}>
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

export default Eduction;
