import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      // Navbar
      N1: "Home",
      N2: "About",
      N3: "Eduction",
      N4: "Experience",
      N5: "Skills",
      N6: "Projects",
      // Lang
      lang: "Language",
      Ar: "Arabic",
      En: "English",
      Name: "Mustafa Saad",
      About:
        "Passionate Technologe Developer And Enginner With A Diverse Projects Background Enjoy Sharing Knowledge And Always Eager To Expand My Skills. Committed To Excelling As A Programmer,Bringing A Con-Tinuous Learning Mindset To Contribute Valuable Insights And En-hance Team Effectivenes",
      DownloadCv: "View CV",
      i: "I'm",
      allcatagory: "All Categories",
      Details: "Details",
    },
  },
  ar: {
    translation: {
      // Navbar
      N1: "الصفحة الرئيسية",
      N2: "نبذة عني",
      N3: "التعليم",
      N4: "الخبرة",
      N5: "المهارات",
      N6: "المشاريع",
      // Lang
      lang: "اللغة",
      Ar: "العربية",
      En: "الأنكليزية",
      Name: "مصطفى سعد",
      About:
        "مطور تكنولوجي شغوف ومشارك مع خلفية مشاريع متنوعة استمتع بمشاركة المعرفة وحريص دائما على توسيع مهاراتي. ملتزمون بالتفوق كمبرمج ، وتقديم عقلية التعلم المستمر للمساهمة برؤى قيمة وفعالية الفريق",
      DownloadCv: "مشاهدة السيرة الذاتية",
      i: "أنا",
      Details: "عرض التفاصيل",
      allcatagory: "جميع الاقسام",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
