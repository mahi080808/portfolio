import Projects from "../components/Projects";

function ProjectsPage() {
  return (
    <div>
      <a
        href="/"
        style={{
          color: "#38BDF8",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        ← Back to Home
      </a>

      <Projects />
    </div>
  );
}

export default ProjectsPage;