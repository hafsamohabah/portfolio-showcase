# Studio Portfolio Showcase

## Project Description

Studio Portfolio Showcase is a responsive React single-page application designed for a creative agency to display its portfolio of projects.

The application allows users to browse creative projects, search and filter the project collection, and add new projects dynamically through a form.

The project was built with a focus on reusable React components, state management, props, event handling, responsive design, and maintainable code structure.

## Author

**Hafsa Mohammed**

## Features

- Responsive portfolio landing page
- Display of creative projects using reusable project cards
- Live project search
- Project category filtering
- Dynamic project creation through a form
- Form validation for required fields
- Newly added projects appear immediately in the project collection
- Responsive navigation menu for smaller screens
- Responsive layout for desktop, tablet, and mobile devices
- Empty-state message when no projects match a search
- Automated tests for important user interactions

## Technologies Used

- React
- Vite
- JavaScript
- JSX
- CSS
- Vitest
- React Testing Library
- Lucide React
- Git
- GitHub

## Project Structure

```text
portfolio-showcase/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddProjectForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGrid.jsx
│   │   └── SearchBar.jsx
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── App.test.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── LICENSE
├── package.json
├── README.md
└── vite.config.js