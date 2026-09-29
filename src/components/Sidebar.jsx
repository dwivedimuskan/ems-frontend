import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">

      {/* Logo */}

      <div className="mb-10">

        <h1 className="text-2xl font-bold">
          EMS
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Employee Management
        </p>

      </div>


      {/* Navigation */}

      <nav className="space-y-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `block w-full px-4 py-3 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          Dashboard
        </NavLink>


        <NavLink
          to="/employees"
          className={({ isActive }) =>
            `block w-full px-4 py-3 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          Employees
        </NavLink>


        <NavLink
          to="/departments"
          className={({ isActive }) =>
            `block w-full px-4 py-3 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          Departments
        </NavLink>


        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `block w-full px-4 py-3 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          Settings
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;