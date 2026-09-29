function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      {/* Left Side */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Employee Management System
        </h2>

        <p className="text-xs text-slate-500">
          Manage your organization efficiently
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100">
          <span className="text-xl">
            🔔
          </span>

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="font-semibold text-blue-600">
              M
            </span>
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-900">
              Muskan Dwivedi
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;