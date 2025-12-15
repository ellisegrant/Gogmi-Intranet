export default function Technical() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#132552' }}>
          Technical Department
        </h1>
        <p className="text-gray-600">
          Technical operations and support
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder sub-modules */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-violet-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Research</h3>
          <p className="text-gray-600 text-sm">Research work</p>
        </div>
        {/* <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-violet-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Maintenance</h3>
          <p className="text-gray-600 text-sm">System maintenance and updates</p>
        </div> */}
        {/* <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-violet-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Systems</h3>
          <p className="text-gray-600 text-sm">System administration</p>
        </div> */}
        {/* <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-violet-500 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">IT Support</h3>
          <p className="text-gray-600 text-sm">Technical support and helpdesk</p>
        </div> */}
      </div>
    </div>
  );
}