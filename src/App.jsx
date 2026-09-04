import { useMemo, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProjectGrid from "./components/ProjectGrid";
import AddProjectForm from "./components/AddProjectForm";
import Footer from "./components/Footer";

import "./styles.css";

const initialProjects = [
  {
    id: 1,
    title: "Nairobi After Dark",
    category: "Branding",
    year: "2026",
    description:
      "A visual identity exploring Nairobi's energy after sunset.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Form & Function",
    category: "Digital",
    year: "2026",
    description:
      "A clean digital experience built around clarity and movement.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Soft Geometry",
    category: "Art Direction",
    year: "2025",
    description:
      "An art direction project balancing structure with softness.",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Common Ground",
    category: "Campaign",
    year: "2025",
    description:
      "A campaign celebrating shared spaces and everyday connection.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Kijani House",
    category: "Web Design",
    year: "2025",
    description:
      "A warm editorial website for a modern Nairobi creative space.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Everyday Objects",
    category: "Photography",
    year: "2024",
    description:
      "A photographic study of familiar objects and quiet moments.",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
  },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return [...new Set(projects.map((project) => project.category))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const text = `
        ${project.title}
        ${project.category}
        ${project.year}
        ${project.description}
      `.toLowerCase();

      const matchesSearch = text.includes(query.toLowerCase());

      const matchesCategory =
        category === "All" || project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [projects, query, category]);

  function addProject(newProject) {
    setProjects([newProject, ...projects]);
  }

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <span className="section-label">01 / Selected work</span>
              <h2>Projects</h2>
            </div>

            <span className="project-count">
              {filteredProjects.length} / {projects.length}
            </span>
          </div>

          <SearchBar
            query={query}
            setQuery={setQuery}
            category={category}
            setCategory={setCategory}
            categories={categories}
          />

          <ProjectGrid projects={filteredProjects} />
        </section>

        <AddProjectForm onAdd={addProject} />
      </main>

      <Footer />
    </>
  );
}

export default App;