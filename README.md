# Studio Portfolio Showcase

A responsive React portfolio website for displaying creative projects in a clean and modern layout. The application allows users to browse projects, search and filter the project collection, and add new projects dynamically.

## Author

**Hafsa Mohammed**

## Project Description

This project was developed as a React single-page application for a creative agency. The goal is to create a modern, responsive, and maintainable portfolio website where projects can be displayed and managed interactively.

The application demonstrates React component-based development, state management, props, event handling, form handling, dynamic rendering, and responsive design.

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
- JavaScript (JSX)
- CSS
- Vitest
- React Testing Library
- Lucide React
- Git and GitHub

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
├── package.json
├── README.md
└── vite.config.js