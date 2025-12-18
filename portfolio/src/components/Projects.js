import React from "react";

const Projects = () => {
 const publicUrl = process.env.PUBLIC_URL;
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
                                    <img src={`${publicUrl}/fast_food.jpg`} alt="Fastfood Store"></img>
                                    <div className="portfolio-overlay">
                                        <h3>Website: Fastfood Store</h3>
                                        <p>
                                            A fast food ordering website developed using PHP Laravel following the MVC architecture,
                                            with MySQL used as the backend database.
                                        </p>
                                        <div className="portfolio-buttons">
                                            <a
                                                href="https://github.com/NamelessIT/fast_food"
                                                target="_blank"
                                                className="btn"
                                                rel="noreferrer"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="portfolio-item autoShow padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={`${publicUrl}/spotify.jpg`} alt="Spotify"></img>
                                    <div className="portfolio-overlay">
                                        <h3>Website: Spotify Clone</h3>
                                        <p>
                                            A Spotify clone web application using ReactJS for frontend and
                                            Django REST Framework for backend, deployed on AWS EC2. Supporting real-time chat via WebSocket.
                                        </p>
                                        <div className="portfolio-buttons">
                                            <a
                                                href="https://github.com/sieunguyen28/Website_Spotify"
                                                target="_blank"
                                                className="btn"
                                                rel="noreferrer"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item autoShow padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={`${publicUrl}/shop_store.jpg`} alt="Shop Store"></img>
                                    <div className="portfolio-overlay">
                                        <h3>Website: Shop Store</h3>
                                        <p>
                                            An e-commerce website developed with React 19, Vite and Ant Design 5,
                                            featuring responsive UI and PDF export functionality.
                                        </p>
                                        <div className="portfolio-buttons">
                                            <a
                                                href="https://github.com/NTDat-16/CaiTiemTapHoa"
                                                target="_blank"
                                                className="btn"
                                                rel="noreferrer"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item autoShow padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={`${publicUrl}/uno_platform.jpg`} alt="Cross-platform App"></img>
                                    <div className="portfolio-overlay">
                                        <h3>Application: Cross-platform Store App</h3>
                                        <p>
                                            A cross-platform store application built with Uno Platform and C#,
                                            supporting Android and Web with a consistent UI experience.
                                        </p>
                                        <div className="portfolio-buttons">
                                            <a
                                                href="https://github.com/tiendoha/dotnet-frontend"
                                                target="_blank"
                                                className="btn"
                                                rel="noreferrer"
                                            >
                                                GitHub
                                            </a>
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
