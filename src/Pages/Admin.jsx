export default function Admin() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#132552' }}>
          Admin and Finance Department
        </h1>
        <p className="text-gray-600">
          Administrative and financial operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder sub-modules */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Payroll</h3>
          <p className="text-gray-600 text-sm">Salary and compensation management</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Assets</h3>
          <p className="text-gray-600 text-sm">Company assets and inventory</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Budgets</h3>
          <p className="text-gray-600 text-sm">Budget planning and tracking</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Procurement</h3>
          <p className="text-gray-600 text-sm">Purchasing and procurement</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">HR</h3>
          <p className="text-gray-600 text-sm">Human resources management</p>
        </div>
      </div>
    </div>
  );
}