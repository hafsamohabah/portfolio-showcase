import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>No projects found.</h3>
        <p>Try another search or category.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;