export default function Policies() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#132552' }}>
          Policies
        </h1>
        <p className="text-gray-600">
          Company policies and procedures
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Policy Management</h2>
        <p className="text-gray-600 mb-4">
          Manage and view all company policies and procedures.
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
            <h3 className="font-semibold text-gray-800">Coming Soon</h3>
            <p className="text-sm text-gray-600">Policy management interface will be available here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}