import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SidebarWithHeader from "./components/SidebarWithHeader";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <SidebarWithHeader>{}</SidebarWithHeader>
    </>
  );
}
