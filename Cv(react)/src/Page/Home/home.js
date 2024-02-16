import React from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "../../Asset/logo.jpg";

function Home({ data }) {
  const { homeData, aboutData } = data;
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="text-animate">
          <h1>
            <span>Mustafa Saad </span>
          </h1>
          <h3>
            <span style={{ color: "white" }}>And I'm </span>
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

          {aboutData &&
            aboutData.length > 0 &&
            aboutData.map((item) => <p key={item.Title}>{item.Title}</p>)}

          {aboutData && aboutData.length > 0 && aboutData[0].link && (
            <a href={aboutData[0].link} className="btn">
              Download Cv
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

// function Home({ homeData }) {
//   return (
//     <section className="home" id="home">
//       <div className="home-content">
//         <div className="text-animate">
//           <h1>
//             <span>Mustafa Saad </span>
//           </h1>
//           <h3>
//             <span style={{ color: "white" }}>And I'm </span>
//             {homeData && homeData.length > 0 && homeData[0].Title && (
//               <Typewriter
//                 words={homeData.map((item) => item.Title)}
//                 loop={Infinity}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={100}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             )}
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;
