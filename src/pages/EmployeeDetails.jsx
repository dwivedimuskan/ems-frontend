import { useNavigate, useParams } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "Muskan Dwivedi",
    email: "muskan@gmail.com",
    phone: "9876543210",
    department: "IT",
    designation: "Software Developer",
    salary: "₹50,000",
    joiningDate: "10 August 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876543211",
    department: "HR",
    designation: "HR Manager",
    salary: "₹60,000",
    joiningDate: "15 July 2025",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "9876543212",
    department: "Finance",
    designation: "Accountant",
    salary: "₹45,000",
    joiningDate: "20 March 2026",
    status: "On Leave",
  },
  {
    id: 4,
    name: "Aman Verma",
    email: "aman@gmail.com",
    phone: "9876543213",
    department: "IT",
    designation: "Frontend Developer",
    salary: "₹48,000",
    joiningDate: "5 January 2026",
    status: "Active",
  },
];

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employees.find((employee) => employee.id === Number(id));

  if (!employee) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-slate-900">
          Employee Not Found
        </h1>

        <p className="text-slate-500 mt-2">
          The employee you are looking for does not exist.
        </p>

        <button
          onClick={() => navigate("/employees")}
          className="mt-6 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Employees
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <button
            onClick={() => navigate("/employees")}
            className="text-sm text-blue-600 hover:text-blue-700 mb-3"
          >
            ← Back to Employees
          </button>

          <h1 className="text-3xl font-bold text-slate-900">
            Employee Details
          </h1>

          <p className="text-slate-500 mt-1">
            View detailed information about the employee.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/employees/${employee.id}/edit`)}
            className="px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
          >
            Edit Employee
          </button>

          <button className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>

      {/* Employee Profile */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6">
        <div className="p-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-xl font-bold text-blue-600">
              {employee.name.charAt(0)}
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {employee.name}
            </h2>

            <p className="text-slate-500 mt-1">
              {employee.designation} • {employee.department}
            </p>
          </div>

          <span
            className={`ml-auto px-3 py-1 text-xs font-medium rounded-full ${
              employee.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {employee.status}
          </span>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Personal Information
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Basic contact information of the employee.
          </p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-500">Full Name</p>

            <p className="font-medium text-slate-900 mt-1">{employee.name}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Email</p>

            <p className="font-medium text-slate-900 mt-1">{employee.email}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Phone Number</p>

            <p className="font-medium text-slate-900 mt-1">{employee.phone}</p>
          </div>
        </div>
      </div>

      {/* Work Information */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Work Information
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Professional information of the employee.
          </p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-500">Department</p>

            <p className="font-medium text-slate-900 mt-1">
              {employee.department}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Designation</p>

            <p className="font-medium text-slate-900 mt-1">
              {employee.designation}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Salary</p>

            <p className="font-medium text-slate-900 mt-1">{employee.salary}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Joining Date</p>

            <p className="font-medium text-slate-900 mt-1">
              {employee.joiningDate}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Employment Status</p>

            <p className="font-medium text-slate-900 mt-1">{employee.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
