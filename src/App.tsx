import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Groups from "./components/Groups";
import Machines from "./components/Machines";
import Profile from "./components/Profile";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import SidebarWithHeader from "./components/Nav/SidebarWithHeader";

export default function App() {
  return (
    <>
      <SidebarWithHeader>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </SidebarWithHeader>
    </>
  );
}
