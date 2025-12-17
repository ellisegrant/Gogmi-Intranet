export default function Payroll() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#132552' }}>
          Payroll
        </h1>
        <p className="text-gray-600">
          Salary and compensation management
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Payroll Management</h2>
        <p className="text-gray-600 mb-4">
          Manage employee salaries, bonuses, and compensation.
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4">
            <h3 className="font-semibold text-gray-800">Coming Soon</h3>
            <p className="text-sm text-gray-600">Payroll management interface will be available here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}