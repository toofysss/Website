import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import logo from "../../Asset/logo.jpg";

function Home({ data }) {
  const { homeData, aboutData } = data;
  const [t, il8n] = useTranslation();
  return (
    <section
      dir={il8n.language == "en" ? "ltr" : "rtl"}
      className="home"
      id="home"
    >
      <div className="home-content">
        <div className="text-animate">
          <h1>
            <span>{t("Name")} </span>
          </h1>
          <h3>
            <span style={{ color: "white" }}>{t("i")} </span>
            {homeData && homeData.length > 0 && homeData[0].Title && (
              <Typewriter
                words={homeData.map((item) => item.Title)}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            )}
          </h3>

          <p>{t("About")} </p>

          {aboutData && aboutData.length > 0 && aboutData[0].link && (
            <a
              href={
                il8n.language == "en" ? aboutData[0].link : aboutData[0].linkCvA
              }
              className="btn"
            >
              {t("DownloadCv")}
            </a>
          )}
        </div>
      </div>

      <div className="home-img">
        <img src={logo} alt="My Logo"></img>
        <span className="circle-spin"></span>
      </div>
    </section>
  );
}

export default Home;
