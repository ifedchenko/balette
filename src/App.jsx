import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Teachers = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const Trainings = lazy(() =>
  import("./pages/TrainingProgramPage/TrainingProgramPage")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/training-program" index element={<Trainings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
