import { Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from './navigation/Navbar';
const HomePage = () => <div>Home Page</div>;
const ModelerPage = () => <div>Modeler Page</div>;
const FrameworksPage = () => <div>Frameworks Page</div>;

export default () => (
  <div>
    <Navbar />
    <hr />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="modeler" element={<ModelerPage />} />
      <Route path="frameworks" element={<FrameworksPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);
