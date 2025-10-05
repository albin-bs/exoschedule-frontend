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

