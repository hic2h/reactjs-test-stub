import { Routes, Route, Navigate, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ModelerPage from './pages/ModelerPage';
import FrameworksPage from './pages/FrameworksPage';

export default () => (
  <div>
    <Navigation />
    <hr className="box-shadow" />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="modeler" element={<ModelerPage />} />
        <Route path="frameworks" element={<FrameworksPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </div>
);
