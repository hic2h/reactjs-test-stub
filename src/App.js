import { Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from './components/Navigation';
import HomePage from './pages/HomePage';
import ModelerPage from './pages/ModelerPage';

const FrameworksPage = () => <div>Frameworks Page</div>;

export default () => (
  <div>
    <Navbar />
    <hr />
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
