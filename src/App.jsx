import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import EditEmployee from "./pages/EditEmployee";
import Departments from "./pages/Department";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-100">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col">

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-1 p-8">
            <Routes>

              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* Employees */}
              <Route path="/employees" element={<Employees />} />

              {/* Add Employee */}
              <Route
                path="/employees/add"
                element={<AddEmployee />}
              />

              {/* Employee Details */}
              <Route
                path="/employees/:id"
                element={<EmployeeDetails />}
              />

              {/* Edit Employee */}
              <Route
                path="/employees/:id/edit"
                element={<EditEmployee />}
              />

              {/* Departments */}
              <Route
                path="/departments"
                element={<Departments />}
              />

              <Route path="/settings" element={<Settings />} />

            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;