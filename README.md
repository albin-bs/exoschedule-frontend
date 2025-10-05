<<<<<<< HEAD
# ExoSchedule Frontend

Frontend for ExoSchedule – an AI-powered exoplanet follow-up scheduler for NASA Space Apps Challenge.

## Overview

ExoSchedule helps astronomers prioritize ground-based telescope follow-up observations of exoplanet candidates. Built with React + Vite, this frontend is deployed on GitHub Pages at [https://flowbound.me](https://flowbound.me).

- Live schedule dashboard
- TESS Object of Interest (TOI) table
- Project summary for hackathons and demos

## Quick Start
git clone https://github.com/albin-bs/exoschedule-frontend.git
cd exoschedule-frontend
npm install
npm run dev


Static files are output to `dist/` for deployment.

## Environment Variable

- `VITE_API_BASE` – URL of your ExoSchedule backend API  
  _Set as a GitHub Pages repo secret for production, or in `.env` locally._

## Live Demo

[https://flowbound.me](https://flowbound.me)

## Technologies Used

React, Vite, JavaScript, GitHub Pages

## Data & Challenge

This solution responds to the NASA Space Apps Challenge "A World Away: Hunting for Exoplanets with AI." NASA datasets used include TESS and Exoplanet Archive data.

## License

MIT

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 88de301 (feat: init vite app)
