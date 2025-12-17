export default function Budgets() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#132552' }}>
          Budgets
        </h1>
        <p className="text-gray-600">
          Budget planning and tracking
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Budget Management</h2>
        <p className="text-gray-600 mb-4">
          Plan, track, and manage departmental budgets.
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4">
            <h3 className="font-semibold text-gray-800">Coming Soon</h3>
            <p className="text-sm text-gray-600">Budget management interface will be available here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}