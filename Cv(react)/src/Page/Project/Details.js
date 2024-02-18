import applestore from "../../Asset/apple-app-store.svg";
import googlePlay from "../../Asset/google-play.svg";
import uptdown from "../../Asset/uptdown.png";
import { useTranslation } from "react-i18next";

function Details({ data }) {
  const { selectedProject, closePopup } = data;
  const [t, il8n] = useTranslation();

  return (
    <div className="popup">
      <div
        className="popup-content"
        dir={il8n.language == "en" ? "ltr" : "rtl"}
      >
        <button className="close-button" onClick={closePopup}>
          <i className="bx bx-x"></i>
        </button>
        <div className="details-content">
          <img
            className="ProjectImg"
            src={selectedProject.ImgProfile}
            alt=""
          ></img>
          <div className="details-text">
            <h3>{selectedProject.Name}</h3>
            <h4>{selectedProject.Dscrp}</h4>
            <div className="app-icons">
              {selectedProject.Links && (
                <div>
                  {selectedProject.Links.Appstore && (
                    <a
                      href={selectedProject.Links.Appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={applestore} alt="Apple Store" />
                    </a>
                  )}

                  {selectedProject.Links.GooglePlay && (
                    <a
                      href={selectedProject.Links.GooglePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={googlePlay} alt="Apple Store" />
                    </a>
                  )}

                  {selectedProject.Links.Uptdown && (
                    <a
                      rel="noopener noreferrer"
                      href={selectedProject.Links.Uptdown}
                      target="_blank"
                    >
                      <img src={uptdown} alt="Apple Store" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="listimage">
          {selectedProject.ImgList &&
            selectedProject.ImgList.map((img, index) => (
              <img key={index} src={img} alt=""></img>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
