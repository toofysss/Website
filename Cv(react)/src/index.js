import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyACCP_rjYf0kpUIHJEcXrDWHZp8j_-UosE",
  authDomain: "mustafa--cv.firebaseapp.com",
  projectId: "mustafa--cv",
  storageBucket: "mustafa--cv.appspot.com",
  messagingSenderId: "133717791006",
  appId: "1:133717791006:web:36d73113fbcd2a5986390f",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export const fetchHomeData = async () => {
  const colRef = collection(db, "Home");
  const snapshot = await getDocs(colRef).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return { Title: doc.data().lang };
    })
  );
  return snapshot;
};

export const fetchAboutData = async () => {
  const colRef = collection(db, "About");
  const snapshot = await getDocs(colRef).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return { Title: doc.data().about, link: doc.data().linkCv };
    })
  );
  return snapshot;
};

export const fetchExperienceData = async () => {
  const colRef = collection(db, "Experience");
  const snapshot = await getDocs(colRef).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return {
        Title: doc.data().Title,
        Dscrp: doc.data().Dscrp,
        Year: doc.data().year,
      };
    })
  );
  return snapshot;
};

export const fetchEductionData = async () => {
  const colRef = collection(db, "Eduction");
  const snapshot = await getDocs(colRef).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return {
        Title: doc.data().Title,
        Dscrp: doc.data().Dscrp,
        Year: doc.data().year,
      };
    })
  );
  return snapshot;
};

export const fetchSkillsData = async () => {
  const colRef = collection(db, "Skills");

  const snapshot = await getDocs(colRef).then((snapshot) => {
    const promises = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const subSkillsColRef = collection(db, "Skills", doc.id, "Skills");
      const subSkillsSnapshot = await getDocs(subSkillsColRef);
      const subSkills = subSkillsSnapshot.docs.map((subDoc) => subDoc.data());
      return { Title: data.Title, Skills: subSkills };
    });

    return Promise.all(promises);
  });
  return snapshot;
};

export const fetchProjectData = async () => {
  const colRef = collection(db, "Project");

  const snapshot = await getDocs(colRef).then((snapshot) => {
    const promises = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const subProgramColRef = collection(db, "Project", doc.id, "Program");
      const subProgramSnapshot = await getDocs(subProgramColRef);
      const subProgram = subProgramSnapshot.docs.map((subDoc) => subDoc.data());
      return { Title: data.Title, Program: subProgram };
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
