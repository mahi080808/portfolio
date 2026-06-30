import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/p.png";
import resume from "../assets/mahendra.pdf";

function Hero() {
  const isMobile = window.innerWidth <= 768;

  const buttonStyle = {
    backgroundColor: "#38BDF8",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    minWidth: "170px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(56, 189, 248, 0.4)",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minHeight: "80vh",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <img
        src={profilePic}
        alt="Mahendra"
        style={{
          width: isMobile ? "200px" : "240px",
          height: isMobile ? "200px" : "240px",
          maxWidth: "80vw",
          maxHeight: "80vw",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "38% 12%",
          transform: "scale(1.2)",
        }}
      />

      <h1
        style={{
          fontSize: isMobile ? "28px" : "48px",
          lineHeight: "1.1",
          marginTop: "20px",
          marginBottom: "10px",
          padding: isMobile ? "0 15px" : "0",
        }}
      >
        Mahendra Kondapalli
      </h1>

      <h2
        style={{
          color: "#38BDF8",
          fontSize: isMobile ? "18px" : "28px",
          padding: isMobile ? "0 15px" : "0",
        }}
      >
        AI/ML Engineer | Generative AI | LLMs | MLOps
      </h2>

      <p style={{ padding: isMobile ? "0 20px" : "0" }}>
        Building Production-Scale AI Systems and Generative AI Applications.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a href={resume} download>
          <button style={buttonStyle}>
            Download Resume
          </button>
        </a>

        <a href="/portfolio/projects">
          <button style={buttonStyle}>
            View Projects
          </button>
        </a>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "30px",
          fontSize: "30px",
        }}
      >
        <a
          href="https://github.com/mahi080808"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#38BDF8" }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/mahendra-kondapalli-9bb51a20a"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#38BDF8" }}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Hero;