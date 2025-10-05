import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TOIList from './pages/TOIList';
import Schedule from './pages/Schedule';
import SpaceApps from './pages/SpaceApps';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
        <Link to="/toi">TOI List</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/spaceapps">Space Apps</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toi" element={<TOIList />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/spaceapps" element={<SpaceApps />} />
      </Routes>
    </BrowserRouter>
  );
}
