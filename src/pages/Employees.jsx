import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getEmployees, deleteEmployee } from "../api/employeeApi";

function Employees() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  // Backend se employees fetch karna
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();

      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Employee delete
  const handleDelete = async (id) => {
    const employee = employees.find(
      (employee) => employee.id === id
    );

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteEmployee(id);

      // Delete hone ke baad frontend list bhi update
      setEmployees(
        employees.filter((employee) => employee.id !== id)
      );
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Employees
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all employees in your organization.
          </p>
        </div>

        <button
          onClick={() => navigate("/employees/add")}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Add Employee
        </button>
      </div>

      {/* Search & Filter */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search employees..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            className="px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Departments</option>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
          </select>
        </div>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Employee
                </th>

                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Department
                </th>

                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Designation
                </th>

                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-sm font-medium text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">
                      {employee.name}
                    </p>

                    <p className="text-sm text-slate-500">
                      {employee.email}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {employee.department}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {employee.designation}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {/* View */}
                      <button
                        onClick={() =>
                          navigate(`/employees/${employee.id}`)
                        }
                        className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-md"
                      >
                        View
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() =>
                          navigate(`/employees/${employee.id}/edit`)
                        }
                        className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-md"
                      >
                        Edit
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          handleDelete(employee.id)
                        }
                        className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;