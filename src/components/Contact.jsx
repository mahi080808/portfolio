import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div
      style={{
        marginTop: "80px",
        textAlign: "center",
      }}
    >
      <h2>Contact</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <p>
          <FaEnvelope /> mahendrakondapalli647@gmail.com
        </p>

        <p>
          <FaPhone /> +1 (720) 689-4237
        </p>

        <p>
          <FaMapMarkerAlt /> San Francisco, CA
        </p>

        <p>
          <a
            href="https://github.com/mahi080808"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#38BDF8",
              textDecoration: "none",
            }}
          >
            <FaGithub /> GitHub
          </a>
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/mahendra-kondapalli-9bb51a20a"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#38BDF8",
              textDecoration: "none",
            }}
          >
            <FaLinkedin /> LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;