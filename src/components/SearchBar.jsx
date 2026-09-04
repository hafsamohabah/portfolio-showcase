function SearchBar({
  query,
  setQuery,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="search-area">
      <div className="search-box">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects..."
          aria-label="Search projects"
        />
      </div>

      <div className="filter-list">
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;