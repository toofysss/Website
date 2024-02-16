import React, { useState, useEffect } from "react";
import {
  fetchAboutData,
  fetchHomeData,
  fetchEductionData,
  fetchExperienceData,
  fetchSkillsData,
  fetchProjectData,
} from "./index";
import About from "./Page/About/about";
import Experience from "./Page/Experince/Experience";
import Homes from "./Page/Home/home";
import Navbar from "./Page/Navbar/Navbar";
import Eduction from "./Page/Eduction/Eduction";
import Project from "./Page/Project/Project";
import Skills from "./Page/Skills/Skills";
import Footer from "./Page/Footer/Footer";
import Waiting from "./Page/Waiting";

function App() {
  const [homeData, setHomeData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eductionData, setEductionData] = useState([]);
  const [ExperienceData, setExperienceData] = useState([]);
  const [SkillsData, setSkillsData] = useState([]);
  const [ProjectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setHomeData(await fetchHomeData());
      setAboutData(await fetchAboutData());
      setEductionData(await fetchEductionData());
      setExperienceData(await fetchExperienceData());

      setSkillsData(await fetchSkillsData());
      setLoading(false);
      setProjectData(await fetchProjectData());
    };

    fetchData();
  }, []);
  if (loading) {
    return <Waiting />;
  }
  return (
    <div className="App">
      {
        <>
          <Navbar />
          <Homes data={{ homeData, aboutData }} />
          <About data={{ aboutData }} />
          <Eduction data={{ eductionData }} />
          <Experience data={{ ExperienceData }} />
          <Skills data={{ SkillsData }} />
          <Project data={{ ProjectData }} />
          {/* <Project /> */}
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
