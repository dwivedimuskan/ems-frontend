import StatCard from "../components/StatCard";
import EmployeeTable from "../components/EmployeeTable";

function Dashboard() {
  return (
    <div>

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + Add Employee
        </button>

      </div>


      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <StatCard
          title="Total Employees"
          value="25"
          description="Currently registered"
        />

        <StatCard
          title="Active Employees"
          value="22"
          description="Currently working"
        />

        <StatCard
          title="On Leave"
          value="3"
          description="Currently on leave"
        />

      </div>


      {/* Employee Table */}

      <EmployeeTable />

    </div>
  );
}

export default Dashboard;