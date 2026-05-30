import React from "react";

const projects = [
  {
    img: "action_rpg.jpg",
    alt: "Action RPG — Unity Game",
    title: "Action RPG — 2.5D Action Role-Playing Game",
    year: "2026 – Present",
    role: "Unity Developer & Gameplay Programmer · Team (2 members)",
    description:
      "A 2.5D action RPG with angle-based directional combat, class-based skill trees, companion AI, and a custom vision/fog-of-war system, built on a modular, data-driven architecture across 140+ C# scripts.",
    tech: "Unity · C# · URP · Unity Input System · NavMesh AI · Cinemachine · ScriptableObjects · HLSL Shaders",
    github: "https://github.com/NamelessIT/Action_RPG",
    // demoPage => mở trang demo trong portfolio (component ActionRpgDemo)
    demoPage: "action-rpg",
  },
  {
    img: "spotify.jpg",
    alt: "AWS Serverless Spotify Clone",
    title: "AWS Serverless Spotify Clone",
    year: "2025",
    role: "Full-Stack Developer · Team (2 members)",
    description:
      "A music streaming platform built entirely on AWS serverless architecture, mirroring Spotify's core features for audio streaming, playlist management, and social interaction.",
    tech: "React · Vite · Tailwind CSS · Redux Toolkit · Node.js · AWS Lambda · API Gateway · DynamoDB · S3 · Cognito · AWS SAM",
    github: "https://github.com/khiemHoang1410/aws-prj-spotify",
    // demoUrl => link demo ngoài (mở tab mới). Để trống/không có => nút Live Demo bị khóa.
    demoUrl: null,
  },
  {
    img: "facebook.jpg",
    alt: "Facebook Clone",
    title: "Facebook Clone — Fullstack Social Network",
    year: "2025",
    role: "Full-Stack Developer · Personal Project",
    description:
      "A production-oriented social network replicating Facebook's core features with clean architecture, real-time chat via SignalR, Reels (chunked video upload), and containerized deployment.",
    tech: "React · TypeScript · Vite · ASP.NET Core · C# · PostgreSQL · Redis · SignalR · Entity Framework Core · Docker Compose · Nginx",
    github: "https://github.com/NamelessIT/Facebook_Clone",
  },
  {
    img: "shop_store.jpg",
    alt: "Sale Management System",
    title: "Sale Management System",
    year: "2024",
    role: "Frontend Developer · Team (5 members)",
    description:
      "A comprehensive CMS-based web application featuring product management, analytics dashboards with Chart.js, JWT authentication, and PDF export functionality.",
    tech: "React 19 · Vite · Tailwind CSS · Chart.js · JWT · Swagger",
    github: "https://github.com/NTDat-16/CaiTiemTapHoa",
  },
  {
    img: "uno_platform.jpg",
    alt: "Mobile Shopping App",
    title: "Mobile Shopping App",
    year: "2024",
    role: "Mobile Frontend Developer · Team (4 members)",
    description:
      "Cross-platform mobile application for online product purchases. Built shopping cart, order confirmation, and toast notification system. Consistent UI/UX across Web and Android via Uno Platform.",
    tech: "Uno Platform · C# (.NET) · Swagger · REST API",
    github: "https://github.com/tiendoha/dotnet-frontend",
  },
];

const Projects = ({ onOpenDemo }) => {
  const publicUrl = process.env.PUBLIC_URL;

  // Quyết định cách render nút "Live Demo" cho từng project:
  // 1) demoPage  -> mở trang demo trong portfolio
  // 2) demoUrl   -> mở link demo ngoài ở tab mới
  // 3) không có  -> nút bị khóa (disabled, không bấm được)
  const renderLiveDemo = (project) => {
    if (project.demoPage) {
      return (
        <button
          type="button"
          className="btn"
          onClick={() => onOpenDemo && onOpenDemo(project.demoPage)}
        >
          Live Demo
        </button>
      );
    }
    if (project.demoUrl) {
      return (
        <a href={project.demoUrl} target="_blank" className="btn" rel="noreferrer">
          Live Demo
        </a>
      );
    }
    return (
      <span
        className="btn btn--disabled"
        title="No live demo available yet"
        aria-disabled="true"
      >
        Live Demo
      </span>
    );
  };
  return (
    <section className="portfolio section" id="Projects">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Recent Projects:</h2>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item autoShow padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={`${publicUrl}/${project.img}`} alt={project.alt} />
                  <div className="portfolio-overlay">
                    <h3>{project.title}</h3>
                    <span className="project-meta">{project.role} &nbsp;|&nbsp; {project.year}</span>
                    <p>{project.description}</p>
                    <p className="project-tech"><em>{project.tech}</em></p>
                    <div className="portfolio-buttons">
                      {renderLiveDemo(project)}
                      <a
                        href={project.github}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
