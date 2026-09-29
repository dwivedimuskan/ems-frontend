import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "Muskan Dwivedi",
    email: "muskan@gmail.com",
    phone: "9876543210",
    department: "IT",
    designation: "Software Developer",
    salary: "50000",
    joiningDate: "2026-08-10",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876543211",
    department: "HR",
    designation: "HR Manager",
    salary: "60000",
    joiningDate: "2025-07-15",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "9876543212",
    department: "Finance",
    designation: "Accountant",
    salary: "45000",
    joiningDate: "2026-03-20",
    status: "On Leave",
  },
  {
    id: 4,
    name: "Aman Verma",
    email: "aman@gmail.com",
    phone: "9876543213",
    department: "IT",
    designation: "Frontend Developer",
    salary: "48000",
    joiningDate: "2026-01-05",
    status: "Active",
  },
];

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (employee) => employee.id === Number(id)
  );

  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Employee:", formData);

    navigate(`/employees/${id}`);
  };

  if (!employee) {
    return (
      <div className="text-center py-20">

        <h1 className="text-2xl font-bold text-slate-900">
          Employee Not Found
        </h1>

        <p className="text-slate-500 mt-2">
          The employee you are trying to edit does not exist.
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
      <div className="mb-8">

        <button
          onClick={() => navigate(`/employees/${id}`)}
          className="text-sm text-blue-600 hover:text-blue-700 mb-3"
        >
          ← Back to Employee Details
        </button>

        <h1 className="text-3xl font-bold text-slate-900">
          Edit Employee
        </h1>

        <p className="text-slate-500 mt-1">
          Update the employee's information.
        </p>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-xl shadow-sm"
      >

        {/* Personal Information */}
        <div className="p-6 border-b border-slate-200">

          <h2 className="text-lg font-semibold text-slate-900">
            Personal Information
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Update the employee's basic information.
          </p>

        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Full Name */}
          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Email */}
          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Phone */}
          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        </div>

        {/* Work Information */}
        <div className="p-6 border-t border-b border-slate-200">

          <h2 className="text-lg font-semibold text-slate-900">
            Work Information
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Update the employee's professional information.
          </p>

        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Department */}
          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Department
            </label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>

          </div>

          {/* Designation */}
          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Designation
            </label>

            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Salary */}
          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Salary
            </label>

            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Joining Date */}
          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Joining Date
            </label>

            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Status */}
          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
              <option value="Inactive">Inactive</option>
            </select>

          </div>

        </div>

        {/* Buttons */}
        <div className="p-6 border-t border-slate-200 flex justify-end gap-3">

          <button
            type="button"
            onClick={() => navigate(`/employees/${id}`)}
            className="px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Update Employee
          </button>

        </div>

      </form>

    </div>
  );
}

export default EditEmployee;