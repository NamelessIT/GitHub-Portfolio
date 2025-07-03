import React from "react";

const Projects = () => {
  return (
            <section className="portfolio section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-heading padd-15">
                            <h2>My Last Projects: </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-item autoShow padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src="pokemon.jpg" alt="Pokemon"></img>
                                    <div className="portfolio-overlay">
                                        <h3>Game: Pokemon</h3>
                                        <p>A Pokemon game developed using Unity</p>
                                        <div className="portfolio-buttons">
                                            <a href="https://github.com/" target="_blank" className="btn">GitHub</a>
                                            <a href="https://www.google.gg/" target="_blank" className="btn">Live
                                                Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item autoShow padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src="awesun.jpg" alt="Awesun"></img>
                                    <div className="portfolio-overlay">
                                        <h3>AweSun phần mềm máy tính từ xa</h3>
                                        <p>A remote computer software developed using React Native</p>
                                        <div className="portfolio-buttons">
                                            <a href="https://github.com/" target="_blank" className="btn">GitHub</a>
                                            <a href="https://www.google.gg/" target="_blank" className="btn">Live
                                                Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item autoShow padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src="facebook.jpg" alt="Spotify"></img>
                                    <div className="portfolio-overlay">
                                        <h3>Website: My FaceBook</h3>
                                        <p>A social media platform for connecting with friends and family using Reactjs for front-end and Spring Boot for back-end</p>
                                        <div className="portfolio-buttons">
                                            <a href="https://github.com/NTDat-16/Social_Media" target="_blank" className="btn">GitHub</a>
                                            <a href="https://www.google.gg/" target="_blank" className="btn">Live
                                                Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item autoShow padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src="spotify.jpg" alt="Spotify"></img>
                                    <div className="portfolio-overlay">
                                        <h3>Website: Music-app</h3>
                                        <p>A Spotify-clone website using Reactjs for front-end and Django for back-end
                                        </p>
                                        <div className="portfolio-buttons">
                                            <a href="https://github.com/sieunguyen28/Website_Spotify/tree/main" target="_blank" className="btn">GitHub</a>
                                            <a href="https://www.google.gg/" target="_blank" className="btn">Live
                                                Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  );
};

export default Projects;
