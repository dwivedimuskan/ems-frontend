import { useState } from "react";

function Departments() {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "IT",
      manager: "Rahul Sharma",
      employees: 12,
      description: "Information Technology and software development",
    },
    {
      id: 2,
      name: "HR",
      manager: "Priya Singh",
      employees: 5,
      description: "Human resources and employee management",
    },
    {
      id: 3,
      name: "Finance",
      manager: "Aman Verma",
      employees: 4,
      description: "Financial management and accounting",
    },
    {
      id: 4,
      name: "Marketing",
      manager: "Neha Gupta",
      employees: 4,
      description: "Marketing, branding and promotions",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    manager: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDepartment = {
      id: departments.length + 1,
      name: formData.name,
      manager: formData.manager,
      employees: 0,
      description: formData.description,
    };

    setDepartments([...departments, newDepartment]);

    setFormData({
      name: "",
      manager: "",
      description: "",
    });

    setShowForm(false);
  };

  const handleDelete = (id) => {
    const department = departments.find(
      (department) => department.id === id
    );

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${department.name} department?`
    );

    if (!confirmDelete) {
      return;
    }

    setDepartments(
      departments.filter((department) => department.id !== id)
    );
  };

  return (
    <div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Departments
          </h1>

          <p className="text-slate-500 mt-1">
            Manage departments in your organization.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Add Department
        </button>

      </div>

      {/* Add Department Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6"
        >

          <div className="p-6 border-b border-slate-200">

            <h2 className="text-lg font-semibold text-slate-900">
              Add Department
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Create a new department for your organization.
            </p>

          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Department Name */}
            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Department Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Operations"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Manager */}
            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Department Manager
              </label>

              <input
                type="text"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
                placeholder="Enter manager name"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Description */}
            <div className="md:col-span-2">

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter department description"
                rows="3"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          <div className="p-6 border-t border-slate-200 flex justify-end gap-3">

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Department
            </button>

          </div>

        </form>
      )}

      {/* Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        {departments.map((department) => (

          <div
            key={department.id}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600">
                  {department.name.charAt(0)}
                </span>
              </div>

              <span className="text-sm text-slate-500">
                {department.employees} Employees
              </span>

            </div>

            <h2 className="text-xl font-semibold text-slate-900 mt-5">
              {department.name}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              {department.description}
            </p>

            <div className="mt-5">

              <p className="text-xs text-slate-500">
                Department Manager
              </p>

              <p className="text-sm font-medium text-slate-900 mt-1">
                {department.manager}
              </p>

            </div>

            <button
              onClick={() => handleDelete(department.id)}
              className="mt-5 text-sm text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-md"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Departments;