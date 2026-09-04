import { useState } from "react";

function AddProjectForm({ onAdd }) {
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get("title");
    const category = formData.get("category");
    const year = formData.get("year");
    const description = formData.get("description");
    const image = formData.get("image");

    if (!title || !category || !description) {
      setError("Please complete the required fields.");
      return;
    }

    const newProject = {
      id: Date.now(),
      title,
      category,
      year,
      description,
      image:
        image ||
        "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
    };

    onAdd(newProject);

    event.target.reset();
    setError("");
  }

  return (
    <section className="add-section" id="add-project">
      <div className="section-label">02 / Add to the archive</div>

      <div className="add-layout">
        <div>
          <h2>
            Have a new
            <br />
            <em>project?</em>
          </h2>

          <p>
            Add work to the collection. New projects appear instantly at the
            beginning of the archive.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="project-form">
          <label>
            Project name *
            <input
              type="text"
              name="title"
              placeholder="e.g. Future Forms"
              required
            />
          </label>

          <div className="form-row">
            <label>
              Category *
              <input
                type="text"
                name="category"
                placeholder="Branding"
                required
              />
            </label>

            <label>
              Year
              <input
                type="text"
                name="year"
                defaultValue="2026"
                placeholder="2026"
              />
            </label>
          </div>

          <label>
            Description *
            <textarea
              name="description"
              placeholder="A short description of the project..."
              rows="4"
              required
            />
          </label>

          <label>
            Image URL
            <input
              type="text"
              name="image"
              placeholder="https://..."
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="submit-button">
            + Add project
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProjectForm;