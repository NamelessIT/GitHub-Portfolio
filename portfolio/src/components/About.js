import React from "react";


const skills = [
  { name: "C", img: "slider_1.svg" },
  { name: "C++", img: "slider_2.svg" },
  { name: "C#", img: "slider_3.svg" },
  { name: "Html", img: "slider_4.svg" },
  { name: "Css", img: "slider_5.svg" },
  { name: "Javascript", img: "slider_6.svg" },
  { name: "Tailwind CSS", img: "slider_8.svg" },
  { name: "ReactJS", img: "slider_9.svg" },
  { name: "PHP", img: "slider_11.svg" },
  { name: "Java", img: "slider_12.svg" },
  { name: "Spring boot", img: "slider_13.svg" },
  { name: "Python", img: "slider_14.svg" },
  { name: "Unity", img: "slider_15.svg" },
];

function About() {
  return (
    <section className="about section" id="About">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>About me</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-content padd-15">
                    <div className="row autoShow">
                        <div className="about-text padd-15">
                            <h3>I'm Phan Viet Toan and a fourth-year  <span>Software Engineer</span> student at Saigon University in Vietnam</h3>
                            <p>I am passionate about technology and have a strong foundation in programming, problem-solving, software development and game development. I am currently seeking internship opportunities to further enhance my skills and gain hands-on experience in the software development field.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="personal-info padd-15">
                            <div className="row autoShow">
                                        <div className="info-item padd-15">
                                            <p>Birthday : <span>19 October 2004</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Age : <span>21</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Facebook : <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><span>click-here</span></a></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Email : <span>haonghuygoblin@gmail.com</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>GitHub : <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><span>click-here</span></a></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Freelance : <span>Available</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>LinkedIn : <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer"><span>click-here</span></a></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Phone : <span>+00 000 000 000</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>City : <span>Ho Chi Minh City</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Nationality : <span>Viet Nam</span></p>
                                        </div>

                                    </div>
                            <div className="row autoShow">
                                <div className="buttons padd-15">
                                            <a href="#Resume" target="_blank" className="btn">Download CV</a>
                                            <a href="#Contact" className="btn hire-me">Hire Me</a>
                                </div>
                            </div>
                        </div>
                        <div className="skills padd-15">
                            <h3 className="title">Skills</h3>
                            <div className="slider" style={{ "--quantity": skills.length }}>
                                <div className="list">
                                    {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="item"
                                        style={{ "--position": index + 1 }}
                                    >
                                        <div className="card shadow-dark">
                                        <img src={`${skill.img}`} alt={skill.name} />
                                        <p className="skill-name">{skill.name}</p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
