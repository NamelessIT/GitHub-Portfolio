import React from "react";

const Education = () => {
    return (
            <div id="Education" className="row">
                    <div className="education padd-15" style={{ scrollMarginTop: "50px" }}>
                        <h3 className="title">Education</h3>
                                    <div className="row autoShow">
                                            <div className="timeline-box padd-15">
                                                <div className="timeline shadow-dark">
                                                    <div className="timeline-item">
                                                        <div className="circle-dot"></div>
                                                        <h3 className="timeline-date">
                                                            <i className="fa fa-calendar"></i> Sep 2022 – Aug 2026 (Expected)
                                                        </h3>
                                                        <h4 className="timeline-title">Bachelor of Software Engineering — Saigon University, Vietnam</h4>
                                                        <p className="timeline-text">GPA: 3.0 / 4.0. Currently a 4th-year student with a strong foundation in software development, algorithms, and system design. Gained hands-on experience in full-stack web development, cloud architecture, database management, and software design patterns. Built multiple projects applying modern technologies and industry best practices.</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                    </div>
                    <div className="certification padd-15">
                        <h3 className="title">Certification</h3>
                        <div className="row autoShow">
                                            <div className="timeline-box padd-15">
                                                <div className="timeline shadow-dark">
                                                    <div className="timeline-item">
                                                        <div className="circle-dot"></div>
                                                        <h3 className="timeline-date">
                                                            <i className="fa fa-calendar"></i> 2022
                                                        </h3>
                                                        <h4 className="timeline-title">IELTS Certification - Band 5.5</h4>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                        </div>
                    </div>
            </div>
    );
};

export default Education;
