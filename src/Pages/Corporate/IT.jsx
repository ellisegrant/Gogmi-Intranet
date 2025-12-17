export default function IT() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#132552' }}>
          IT
        </h1>
        <p className="text-gray-600">
          Information technology services
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">IT Services Management</h2>
        <p className="text-gray-600 mb-4">
          Manage information technology services and infrastructure.
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-amber-500 bg-amber-50 p-4">
            <h3 className="font-semibold text-gray-800">Coming Soon</h3>
            <p className="text-sm text-gray-600">IT services management interface will be available here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}