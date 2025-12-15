export default function Directorate() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#132552' }}>
          Directorate
        </h1>
        <p className="text-gray-600">
          Executive management and strategic oversight
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder sub-modules */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-rose-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Executive Board</h3>
          <p className="text-gray-600 text-sm">Executive board management</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-rose-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Strategic Planning</h3>
          <p className="text-gray-600 text-sm">Long-term strategy and planning</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-rose-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Performance Review</h3>
          <p className="text-gray-600 text-sm">Performance tracking and KPIs</p>
        </div>
      </div>
    </div>
  );
}