
import { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    name: "Muskan Dwivedi",
    email: "muskan@gmail.com",
    company: "Employee Management System",
    notifications: true,
    emailAlerts: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Settings:", settings);

    alert("Settings saved successfully!");
  };

  return (
    <div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="text-slate-500 mt-1">
          Manage your account and application preferences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Profile Settings */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-slate-900">
            Profile Settings
          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">
            Update your personal information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={settings.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>
        </div>

        {/* Company Settings */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-slate-900">
            Company Settings
          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">
            Manage basic organization information.
          </p>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              value={settings.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Notification Settings */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-slate-900">
            Notification Settings
          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">
            Choose which notifications you want to receive.
          </p>

          <div className="space-y-5">

            <label className="flex items-center justify-between cursor-pointer">

              <div>
                <p className="font-medium text-slate-900">
                  Notifications
                </p>

                <p className="text-sm text-slate-500">
                  Receive application notifications.
                </p>
              </div>

              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="w-5 h-5 accent-blue-600"
              />

            </label>

            <label className="flex items-center justify-between cursor-pointer">

              <div>
                <p className="font-medium text-slate-900">
                  Email Alerts
                </p>

                <p className="text-sm text-slate-500">
                  Receive important updates through email.
                </p>
              </div>

              <input
                type="checkbox"
                name="emailAlerts"
                checked={settings.emailAlerts}
                onChange={handleChange}
                className="w-5 h-5 accent-blue-600"
              />

            </label>

          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
}

export default Settings;
