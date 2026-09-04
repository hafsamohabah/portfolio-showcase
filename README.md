# Studio Portfolio Showcase

A responsive React single-page portfolio for a creative agency. The website displays a collection of projects and allows users to search, filter, and add new projects.

## Features

- Responsive portfolio landing page
- Project cards displayed dynamically
- Search projects by title, category, year, or description
- Filter projects by category
- Add new projects using a form
- Form validation for required fields
- New projects appear immediately without refreshing the page
- Responsive mobile navigation
- Automated tests using Vitest and React Testing Library

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Vitest
- React Testing Library
- Lucide React

## Project Structure

```text
src/
├── components/
│   ├── AddProjectForm.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectGrid.jsx
│   └── SearchBar.jsx
├── test/
│   └── setup.js
├── App.jsx
├── App.test.jsx
├── main.jsx
└── styles.css