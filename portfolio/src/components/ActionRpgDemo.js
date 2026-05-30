import React, { useState, useEffect } from "react";

const PUBLIC_URL = process.env.PUBLIC_URL;

/* ============================================================
 *  📌 MEDIA — THAY ẢNH / VIDEO CỦA BẠN Ở ĐÂY
 *
 *  • ẢNH: copy file ảnh vào thư mục  portfolio/public/action-rpg/
 *         rồi sửa tên file bên dưới (vd: "hero.jpg").
 *         Để trống "" => sẽ hiện ô placeholder "sẽ cập nhật".
 *
 *  • VIDEO: dán YouTube *video id* (phần sau "watch?v=" trong link)
 *         vào trường id. VD link https://youtu.be/dQw4w9WgXcQ
 *         => id là "dQw4w9WgXcQ". Để trống "" => hiện placeholder.
 *
 *  • KÊNH YOUTUBE: đổi YOUTUBE_CHANNEL sang link kênh của bạn.
 * ============================================================ */

const YOUTUBE_CHANNEL = "https://www.youtube.com/channel/UC1Rc-Oh1P1sWc7y8tH-ju-Q"; // TODO: kênh YouTube của bạn
const GITHUB_REPO = "https://github.com/NamelessIT/Action_RPG";

const MEDIA = {
  heroImage: "hero.jpg",       // public/action-rpg/hero.jpg
  trailerId: "_5EhcYyoDDE",    // Demo Gameplay — https://youtu.be/_5EhcYyoDDE
  gameplayClips: [
    { id: "qTgTLwAWFk0", title: "Directional Combat Showcase" }, // https://youtu.be/qTgTLwAWFk0
    { id: "klago4fTMjU", title: "Skill Tree & Classes" },        // https://youtu.be/klago4fTMjU
  ],
};

const FEATURES = [
  {
    img: "feature-combat.jpg",
    title: "Angle-Based Directional Combat",
    desc:
      "A 5-tier damage model (front → flank → back) where armor and magic-resist penetration plus a damage bonus scale with the attack angle — layered with crit, auto/manual block, true damage (armor pen) and a stackable buff/debuff system.",
  },
  {
    img: "feature-ai.jpg",
    title: "Enemy & Boss AI",
    desc:
      "Telegraphed attacks with frame-accurate sweep-past hit detection (wind-up / active / recovery windows), giving players a readable window to dodge — plus boss combos and reactive dodge logic.",
  },
  {
    img: "feature-companion.jpg",
    title: "Companion AI",
    desc:
      "A NavMesh-driven ally with a follow / reposition / combat state machine, automatic target scanning, and position-based team-synergy buffs for cooperative play.",
  },
  {
    img: "feature-fog.jpg",
    title: "Vision & Fog of War",
    desc:
      "A custom URP ScriptableRendererFeature + HLSL post-process shader that reconstructs world position from the depth buffer and blends multiple vision sources (player + companion). Covered by edit-mode unit tests.",
  },
  {
    img: "feature-skills.jpg",
    title: "Class Skill System & Skill Tree",
    desc:
      "A Factory-pattern skill registry spanning 20+ classes with active / signature / passive abilities, cooldowns, and an upgradeable skill tree that feeds bonuses back into combat math.",
  },
  {
    img: "feature-tools.jpg",
    title: "Data-Driven Systems & Editor Tooling",
    desc:
      "ScriptableObject databases (players, weapons, accessories, stats, checkpoints) with a DAO save/load layer, drag-and-drop inventory & equipment, and in-house Unity Editor tools to speed up content creation.",
  },
];

const TECH = [
  "Unity Engine",
  "C#",
  "Universal Render Pipeline (URP)",
  "Unity Input System",
  "NavMesh AI",
  "Cinemachine",
  "ScriptableObjects",
  "HLSL Shaders",
  "TextMeshPro",
];

/* ---- Helpers: tự hiện placeholder khi chưa có media ---- */
const DemoImg = ({ file, alt, className }) => {
  const [err, setErr] = useState(false);
  if (!file || err) {
    return (
      <div className={`demo-media-placeholder ${className || ""}`}>
        <i className="fa fa-image"></i>
        <span>{alt || "Hình ảnh sẽ cập nhật"}</span>
      </div>
    );
  }
  return (
    <img
      src={`${PUBLIC_URL}/action-rpg/${file}`}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErr(true)}
    />
  );
};

const DemoVideo = ({ id, title }) => {
  if (!id) {
    return (
      <div className="demo-media-placeholder demo-video-placeholder">
        <i className="fa fa-play-circle"></i>
        <span>{title || "Video sẽ cập nhật"}</span>
      </div>
    );
  }
  return (
    <div className="demo-video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const ActionRpgDemo = ({ onBack }) => {
  // Khóa scroll nền + đưa trang demo lên đầu khi mở
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="demo-page">
      <button className="demo-back" onClick={onBack}>
        <i className="fa fa-arrow-left"></i> Back to Portfolio
      </button>

      <div className="demo-inner">
        {/* ---------- HERO ---------- */}
        <header className="demo-hero">
          <div className="demo-hero-media">
            <DemoImg file={MEDIA.heroImage} alt="Action RPG — key art" />
          </div>
          <div className="demo-hero-text">
            <span className="demo-eyebrow">Unity · 2.5D Action RPG</span>
            <h1>Action RPG</h1>
            <p className="demo-tagline">
              A 2.5D action RPG with angle-based directional combat, class skill
              trees, companion AI, and a custom fog-of-war system — built in Unity.
            </p>
            <div className="demo-meta">
              <span><strong>Role</strong> Unity Developer &amp; Gameplay Programmer</span>
              <span><strong>Team</strong> 2 members</span>
              <span><strong>Year</strong> 2026 – Present</span>
              <span><strong>Scale</strong> 140+ C# scripts</span>
            </div>
            <div className="demo-hero-buttons">
              <a className="btn" href={GITHUB_REPO} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a className="btn demo-btn-alt" href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube"></i> YouTube
              </a>
            </div>
          </div>
        </header>

        {/* ---------- DEMO VIDEO ---------- */}
        <section className="demo-section">
          <h2 className="demo-h2">Gameplay Demo</h2>
          <DemoVideo id={MEDIA.trailerId} title="Action RPG — Gameplay Demo" />
        </section>

        {/* ---------- OVERVIEW ---------- */}
        <section className="demo-section">
          <h2 className="demo-h2">Overview</h2>
          <p className="demo-body">
            Action RPG is a 2.5D action role-playing game built on a modular,
            data-driven Unity architecture. The combat rewards positioning: hitting
            an enemy from the flank or back deals more damage and ignores more
            armor, while readable telegraphs and tight dodge windows make every
            fight about timing. Players pick a class, grow it through an upgradeable
            skill tree, fight alongside a companion AI, and explore the world under
            a custom vision &amp; fog-of-war system.
          </p>
          <div className="demo-role-card">
            <h3>My Role</h3>
            <p>
              As the <strong>Unity Developer &amp; Gameplay Programmer</strong>, I
              owned in-engine implementation and systems programming: the directional
              combat math, enemy/boss and companion AI, the vision/fog-of-war render
              feature, the class skill system &amp; tree, inventory/equipment,
              save/load, and custom Unity Editor tooling across 140+ C# scripts.
            </p>
          </div>
        </section>

        {/* ---------- FEATURES ---------- */}
        <section className="demo-section">
          <h2 className="demo-h2">Key Features</h2>
          <div className="demo-features">
            {FEATURES.map((f, i) => (
              <article className="demo-feature" key={i}>
                <div className="demo-feature-media">
                  <DemoImg file={f.img} alt={f.title} />
                </div>
                <div className="demo-feature-text">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- GAMEPLAY CLIPS ---------- */}
        <section className="demo-section">
          <h2 className="demo-h2">Highlights</h2>
          <div className="demo-video-grid">
            {MEDIA.gameplayClips.map((clip, i) => (
              <div className="demo-video-cell" key={i}>
                <DemoVideo id={clip.id} title={clip.title} />
                <span className="demo-video-caption">{clip.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- TECH ---------- */}
        <section className="demo-section">
          <h2 className="demo-h2">Tech Stack</h2>
          <div className="demo-tags">
            {TECH.map((t, i) => (
              <span className="demo-tag" key={i}>{t}</span>
            ))}
          </div>
        </section>

        <footer className="demo-footer">
          <button className="btn" onClick={onBack}>
            <i className="fa fa-arrow-left"></i> Back to Portfolio
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ActionRpgDemo;
