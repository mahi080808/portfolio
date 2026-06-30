function Projects() {
  const projects = [
    {
      title: "Multi-PDF RAG Chatbot",
      description:
        "Built a Retrieval-Augmented Generation chatbot using LangChain and OpenAI to answer questions from multiple PDF documents.",
      tech: "LangChain, OpenAI, FAISS, Python",
    },
    {
      title: "AI Resume Screening System",
      description:
        "Developed an AI system that analyzes resumes and matches candidates to job descriptions using NLP techniques.",
      tech: "Python, NLP, Streamlit, Scikit-Learn",
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model to predict customer churn using XGBoost and feature engineering techniques.",
      tech: "Python, XGBoost, Pandas, SQL",
    },
    {
      title: "End-to-End MLOps Pipeline",
      description:
        "Designed and deployed an end-to-end MLOps pipeline on AWS with model training, deployment, and monitoring.",
      tech: "AWS, Docker, MLflow, FastAPI",
    },
    {
      title: "GenAI Document Summarization Assistant",
      description:
        "Developed a Generative AI application to summarize large documents and generate concise insights.",
      tech: "OpenAI, LangChain, Python, Streamlit",
    },
  ];

  return (
    <div style={{ marginTop: "80px" }}>
      <h2>Projects</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid #38BDF8",
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p style={{ color: "#38BDF8" }}>
              <strong>Tech:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;