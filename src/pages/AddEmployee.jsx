import { useState } from "react";

function AddEmployee() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
    status: "Active",
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

    console.log(formData);
  };


  return (
    <div>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Add Employee
        </h1>

        <p className="text-slate-500 mt-1">
          Add a new employee to your organization.
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
            Enter the employee's basic information.
          </p>

        </div>


        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}

          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
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
              placeholder="Enter email address"
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
              placeholder="Enter phone number"
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
            Enter the employee's professional information.
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

              <option value="">
                Select department
              </option>

              <option value="IT">
                IT
              </option>

              <option value="HR">
                HR
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="Marketing">
                Marketing
              </option>

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
              placeholder="e.g. Software Developer"
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
              placeholder="Enter salary"
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

              <option value="Active">
                Active
              </option>

              <option value="On Leave">
                On Leave
              </option>

              <option value="Inactive">
                Inactive
              </option>

            </select>

          </div>

        </div>


        {/* Buttons */}

        <div className="p-6 border-t border-slate-200 flex justify-end gap-3">

          <button
            type="button"
            className="px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Employee
          </button>

        </div>

      </form>

    </div>
  );
}

export default AddEmployee;