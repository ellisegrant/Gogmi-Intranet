export default function Corporate() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#132552' }}>
          Corporate Affairs Department
        </h1>
        <p className="text-gray-600">
          Corporate governance and public relations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder sub-modules */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Policies</h3>
          <p className="text-gray-600 text-sm">Company policies and procedures</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Stakeholders</h3>
          <p className="text-gray-600 text-sm">Stakeholder engangement</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Board Meetings</h3>
          <p className="text-gray-600 text-sm">Board meeting scheduling and minutes</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">IT Support</h3>
          <p className="text-gray-600 text-sm">IT help desk</p>
        </div>
      </div>
    </div>
  );
}