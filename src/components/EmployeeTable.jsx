const employees = [
  {
    id: 1,
    name: "Muskan Dwivedi",
    email: "muskan@gmail.com",
    department: "IT",
    designation: "Software Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    department: "HR",
    designation: "HR Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya@gmail.com",
    department: "Finance",
    designation: "Accountant",
    status: "On Leave",
  },
];

function EmployeeTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">

      <div className="p-6 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Recent Employees
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Recently added employees
        </p>
      </div>

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

            </tr>

          </thead>

          <tbody>

            {employees.map((employee) => (

              <tr
                key={employee.id}
                className="border-t border-slate-100 hover:bg-slate-50"
              >

                <td className="px-6 py-4">

                  <div>
                    <p className="font-medium text-slate-900">
                      {employee.name}
                    </p>

                    <p className="text-sm text-slate-500">
                      {employee.email}
                    </p>
                  </div>

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

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default EmployeeTable;