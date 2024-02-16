import logo from "../../Asset/logo.jpg";
function About({ data }) {
  const { aboutData } = data;

  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-img">
        <img src={logo} alt=""></img>
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        {aboutData &&
          aboutData.length > 0 &&
          aboutData.map((item) => <p key={item.Title}>{item.Title}</p>)}
      </div>
    </section>
  );
}

export default About;
