Tahwul – Digital Transformation Platform
Project Overview

This project is a frontend implementation of a Digital Transformation and Compliance Tracking platform based on the provided Figma designs. It focuses on visual accuracy, clean component structure, and maintainable React code.

The application is intended to help government entities track progress against strategic standards (for example, initiatives aligned with Saudi Vision 2030).
All data is mocked and static — there is no backend integration.

Tech Stack

React 18

Vite for local development and builds

React Router DOM (v6) for routing

Recharts for charts and progress visualizations

Lucide React for icons

Styling: Plain CSS with CSS variables and component-scoped styles

How to Run the Project
Prerequisites

Node.js 18+

npm 9+

Start the project locally
npm install
npm run dev


The app will be available at:
http://localhost:5173

Build and preview production version
npm run build
npm run preview

Project Structure
src/
├── components/       # Reusable UI components
│   ├── layout/       # Layout, sidebar, top bar
│   ├── cards/        # Statistic cards, perspective cards, timeline
│   ├── charts/       # Bar and gauge charts
│   ├── tables/       # Tables and status indicators
│   └── tabs/         # Tab navigation
├── pages/            # Screen-level views
│   ├── Dashboard.jsx
│   ├── DetailsOverview.jsx   # Strategic Planning – Overview tab
│   └── DetailsEvidence.jsx   # Strategic Planning – Evidence tab
├── data/
│   └── mockData.js   # Centralized mock data
├── styles/
│   └── index.css     # Global styles and CSS variables
├── App.jsx           # Application routes and layout
└── main.jsx          # Application entry point


Structure rationale:
The project uses a simple, flat structure suitable for a small to medium React application. Screen-level views live under pages/, while reusable UI elements are grouped by type under components/. Mock data is centralized in a single file to keep components clean and focused on presentation.

Assumptions

No backend or API integration; all data is static and mocked.

Authentication is not implemented; user information is static.

Actions such as filtering or navigation are UI-only and not persisted.

User avatars use placeholder image services where required.

Possible Improvements

Given more time, the following areas could be improved:

Performance: Code splitting and lazy loading for charts and heavier components.

Accessibility: Improved keyboard navigation, ARIA attributes, and screen reader testing.

State management: Introducing a lightweight global store if shared state grows.

Testing: Unit tests for components and logic, plus E2E tests for critical flows.

Responsiveness: Additional refinement for smaller screens and touch interactions.

Backend integration: Replace mock data with real APIs, including loading and error states.