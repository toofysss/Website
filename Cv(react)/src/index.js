import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import api from "./api";
import { collection, getDocs } from "firebase/firestore";

export const fetchHomeData = async () => {
  const colRef = collection(api, "Home");
  const snapshot = await getDocs(colRef).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return { Title: doc.data().lang };
    })
  );
  return snapshot;
};

export const fetchAboutData = async () => {
  const colRef = collection(api, "About");
  const snapshot = await getDocs(colRef).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return {
        link: doc.data().linkCv,
        linkCvA: doc.data().linkCvA,
      };
    })
  );
  return snapshot;
};

export const fetchExperienceData = async () => {
  const colRef = collection(api, "Experience");
  const snapshot = await getDocs(colRef).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return {
        Title: doc.data().Title,
        TitleA: doc.data().TitleA,
        Dscrp: doc.data().Dscrp,
        DscrpA: doc.data().DscrpA,
        Year: doc.data().year,
      };
    })
  );
  return snapshot;
};

export const fetchEductionData = async () => {
  const colRef = collection(api, "Eduction");
  const snapshot = await getDocs(colRef).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return {
        Title: doc.data().Title,
        TitleA: doc.data().TitleA,
        Dscrp: doc.data().Dscrp,
        DscrpA: doc.data().DscrpA,
        Year: doc.data().year,
      };
    })
  );
  return snapshot;
};

export const fetchSkillsData = async () => {
  const colRef = collection(api, "Skills");

  const snapshot = await getDocs(colRef).then((snapshot) => {
    const promises = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const subSkillsColRef = collection(api, "Skills", doc.id, "Skills");
      const subSkillsSnapshot = await getDocs(subSkillsColRef);
      const subSkills = subSkillsSnapshot.docs.map((subDoc) => subDoc.data());
      return { Title: data.Title, TitleA: data.TitleA, Skills: subSkills };
    });

    return Promise.all(promises);
  });
  return snapshot;
};

export const fetchProjectData = async () => {
  const colRef = collection(api, "Project");

  const snapshot = await getDocs(colRef).then((snapshot) => {
    const promises = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const subProgramColRef = collection(api, "Project", doc.id, "Program");
      const subProgramSnapshot = await getDocs(subProgramColRef);
      const subProgram = subProgramSnapshot.docs.map((subDoc) => subDoc.data());
      return { Title: data.Title, TitleA: data.TitleA, Program: subProgram };
    });

    return Promise.all(promises);
  });
  return snapshot;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
