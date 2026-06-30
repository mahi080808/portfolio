function Experience() {
  const experiences = [
    {
      company: "H2O.ai",
      role: "Generative AI Engineer",
      duration: "Feb 2024 - Present",
      description:
        "Building enterprise Generative AI applications, RAG systems, AI agents, and LLMOps solutions using LangChain, GPT-4o, Claude, AWS, Docker, and Kubernetes.",
    },
    {
      company: "Razorpay",
      role: "Machine Learning Engineer",
      duration: "Mar 2022 - Jul 2023",
      description:
        "Developed fraud detection systems, customer analytics solutions, and production ML pipelines using XGBoost, Apache Spark, Airflow, Docker, and AWS.",
    },
  ];

  return (
    <div style={{ marginTop: "80px" }}>
      <h2 style={{ textAlign: "center" }}>Experience</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {experiences.map((exp) => (
          <div
            key={exp.company}
            style={{
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid #38BDF8",
            }}
          >
            <h3>{exp.role}</h3>

            <h4 style={{ color: "#38BDF8" }}>
              {exp.company}
            </h4>

            <p>{exp.duration}</p>

            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;