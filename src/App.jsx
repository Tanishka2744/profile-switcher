import { useState } from "react";
import "./App.css";

const profiles = [
  {
    id: 1,
    name: "Tanishka",
    role: "Frontend Developer",
    image: "👩‍💻",
    bio: "Building beautiful and interactive user interfaces with modern frontend technologies.",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    name: "Rahul",
    role: "UI/UX Designer",
    image: "👨‍🎨",
    bio: "Creating clean, user-friendly designs that make digital experiences simple and enjoyable.",
    skills: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: 3,
    name: "Priya",
    role: "Product Designer",
    image: "👩‍🎨",
    bio: "Turning creative ideas into meaningful products with thoughtful design and strategy.",
    skills: ["Research", "Design", "Strategy"],
  },
  {
    id: 4,
    name: "Arjun",
    role: "Full Stack Developer",
    image: "👨‍💻",
    bio: "Developing reliable web applications and bringing ideas to life with modern technologies.",
    skills: ["React", "Node.js", "APIs"],
  },
];

function ProfileCard({ profile, isActive, onClick }) {
  return (
    <button
      className={`profile-card ${isActive ? "active" : ""}`}
      onClick={onClick}>
      <div className="profile-image">{profile.image}</div>
      <div className="profile-mini-info">
        <h3>{profile.name}</h3>
        <p>{profile.role}</p>
      </div>
    </button>
  );
}

function ProfileDetails({ profile }) {
  return (
    <div className="profile-details">
      <div className="details-image">{profile.image}</div>
      <div className="details-content">
        <span className="details-label">ACTIVE PROFILE</span>
        <h2>{profile.name}</h2>
        <h3>{profile.role}</h3>
        <p className="bio">{profile.bio}</p>
        <div className="skills">
          {profile.skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeProfile, setActiveProfile] = useState(profiles[0]);

  return (
    <div className="app">
      <main className="profile-container">
        <header className="header">
          <span className="badge">✨ React UI</span>
          <h1>Our Team</h1>
          <p>
            Choose a profile to explore their role, skills and experience.
          </p>
        </header>

        <div className="profiles">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              isActive={activeProfile.id === profile.id}
              onClick={() => setActiveProfile(profile)}
            />
          ))}
        </div>

        <ProfileDetails
        profile={activeProfile}
        />
      </main>
    </div>
  );
}

export default App;