import React, { useState } from "react";
import Details from "./Details";
import { useTranslation } from "react-i18next";

function Project({ data }) {
  const { ProjectData } = data;
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("*");
  const [t, il8n] = useTranslation();

  const openPopup = (index) => {
    console.log(index);
    setSelectedProject(index);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };

  const filteredProjects = ProjectData.filter(
    (project) => currentFilter === "*" || project.Title === currentFilter
  );

  return (
    <section className="project" id="project">
      <h2 className="heading">
        <span>{t("N6")}</span>
      </h2>
      <div className="part" dir={il8n.language == "en" ? "ltr" : "rtl"}>
        <div className="project-nav" id="filter-button">
          <ul>
            <li
              onClick={() => handleFilterClick("*")}
              className={currentFilter === "*" ? "current" : ""}
            >
              <span>{t("allcatagory")}</span>
            </li>
            {ProjectData.length > 0 &&
              ProjectData.map((item, index) => (
                <li
                  onClick={() => handleFilterClick(item.Title)}
                  className={currentFilter === item.Title ? "current" : ""}
                  key={index}
                >
                  <span>
                    {il8n.language == "en" ? item.Title : item.TitleA}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div class="portfoliocontainer">
          {filteredProjects.map(
            (project, index) =>
              project.Program &&
              project.Program.length > 0 && (
                <div
                  className={`grid-item ${project.Title}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  key={index}
                >
                  {project.Program.map((programItem, programIndex) => (
                    <div key={programIndex}>
                      <div
                        class="card__projects"
                        dir={il8n.language == "en" ? "ltr" : "ltr"}
                      >
                        <div class="card__img">
                          <img src={programItem.ImgProfile} alt="" />
                        </div>
                        <div class="card__info">
                          <h2 className="card__title">{programItem.Name}</h2>
                          <p className="card-text">{programItem.Dscrp}</p>
                          <button
                            className="bt__card"
                            onClick={() => openPopup(programItem)}
                          >
                            {t("Details")}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
      {selectedProject !== null && (
        <Details
          data={{
            selectedProject,
            closePopup,
          }}
        />
      )}
    </section>
  );
}

export default Project;
