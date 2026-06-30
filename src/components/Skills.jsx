function Skills() {
  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "LLMs",
    "LangChain",
    "TensorFlow",
    "PyTorch",
    "AWS",
    "Docker",
    "MLOps",
    "SQL",
  ];

  return (
    <div style={{ marginTop: "80px" }}>
      <h2>Skills</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
          justifyContent: "center",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              backgroundColor: "#1e293b",
              padding: "15px 25px",
              borderRadius: "12px",
              border: "1px solid #38BDF8",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;