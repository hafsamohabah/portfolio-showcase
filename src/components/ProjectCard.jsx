function ProjectCard({ project, index }) {
  return (
    <article className={`project-card card-${index + 1}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <a
          href="#about"
          className="project-arrow"
          aria-label={`View ${project.title}`}
        >
          ↗
        </a>
      </div>

      <div className="project-info">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;