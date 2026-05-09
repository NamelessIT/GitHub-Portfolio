import React from "react";


const skills = [
  { name: "JavaScript", img: "slider_6.svg" },
  { name: "TypeScript", img: "slider_7.svg" },
  { name: "Java", img: "slider_12.svg" },
  { name: "C#", img: "slider_3.svg" },
  { name: "HTML", img: "slider_4.svg" },
  { name: "CSS", img: "slider_5.svg" },
  { name: "ReactJS", img: "slider_9.svg" },
  { name: "Tailwind CSS", img: "slider_8.svg" },
  { name: "Spring Boot", img: "slider_13.svg" },
  { name: "Node.js", img: "slider_10.svg" },
  { name: "Docker", img: "slider_1.svg" },
  { name: "AWS", img: "slider_2.svg" },
];

const PUBLIC_URL = process.env.PUBLIC_URL;

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
                            <h3>I'm Lê Hoàng Huy — a <span>Software Engineering</span> student at Saigon University, Vietnam</h3>
                            <p>Enthusiastic Software Engineering student with hands-on experience in full-stack web development and AWS serverless architecture through academic projects and self-learning. Passionate about solving problems, designing scalable systems, and continuously learning new technologies in a team environment.</p>
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
                                            <p>Email : <span>hoanghuy192004@gmail.com</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Phone : <span>+84 981 544 288</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>GitHub : <a href="https://github.com/NamelessIT" target="_blank" rel="noopener noreferrer"><span>NamelessIT</span></a></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>LinkedIn : <a href="https://www.linkedin.com/in/ho%C3%A0ng-huy-l%C3%AA-6a03a4363/" target="_blank" rel="noopener noreferrer"><span>Lê Hoàng Huy</span></a></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>English : <span>B2 (IELTS 5.5)</span></p>
                                        </div>
                                        <div className="info-item padd-15">
                                            <p>Freelance : <span>Available</span></p>
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
                                            <a href="/Resume.pdf" download className="btn">
                                                Download CV
                                            </a>
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
                                        <img src={`${PUBLIC_URL}/${skill.img}`} alt={skill.name} />
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
