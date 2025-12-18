import { useState } from 'react';
import { UserPlus, Eye, Trash2, Archive, Search, X, Edit2, Building2, Users } from 'lucide-react';

export default function Stakeholders() {
  const [activeTab, setActiveTab] = useState('current');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Demo stakeholders data
  const [stakeholders, setStakeholders] = useState([
    {
      id: 1,
      stakeholderId: 'SH-001',
      logo: '🏢',
      organization: 'Ministry of Health',
      type: 'Government',
      stage: 'Engaged',
      importance: 'High',
      influence: 'High',
      interest: 'High',
      owner: 'Corporate Affairs',
      nextAction: 'Quarterly review meeting',
      contactPerson: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@moh.gov',
      phone: '+233 24 123 4567',
      archived: false
    },
    {
      id: 2,
      stakeholderId: 'SH-002',
      logo: '🏛️',
      organization: 'Ghana Medical Association',
      type: 'Professional Body',
      stage: 'Active Partner',
      importance: 'High',
      influence: 'Medium',
      interest: 'High',
      owner: 'General',
      nextAction: 'Annual conference collaboration',
      contactPerson: 'Prof. Michael Asante',
      email: 'masante@gma.org',
      phone: '+233 26 987 6543',
      archived: false
    },
    {
      id: 3,
      stakeholderId: 'SH-003',
      logo: '🏥',
      organization: 'Korle Bu Teaching Hospital',
      type: 'Healthcare Facility',
      stage: 'Prospective',
      importance: 'Medium',
      influence: 'Medium',
      interest: 'Medium',
      owner: 'Technical',
      nextAction: 'Initial consultation meeting',
      contactPerson: 'Dr. Kwame Mensah',
      email: 'kmensah@kbth.gov.gh',
      phone: '+233 30 222 3456',
      archived: false
    }
  ]);

  const [formData, setFormData] = useState({
    organization: '',
    type: '',
    stage: '',
    importance: '',
    influence: '',
    interest: '',
    owner: '',
    nextAction: '',
    contactPerson: '',
    email: '',
    phone: '',
    logo: null,
    logoPreview: null
  });

  // Filter stakeholders
  const filteredStakeholders = stakeholders.filter(stakeholder => {
    const matchesTab = activeTab === 'current' ? !stakeholder.archived : stakeholder.archived;
    const matchesSearch = stakeholder.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          stakeholder.stakeholderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          stakeholder.contactPerson.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Badge color functions
  const getStageColor = (stage) => {
    switch (stage) {
      case 'Active Partner': return 'bg-green-100 text-green-800';
      case 'Engaged': return 'bg-blue-100 text-blue-800';
      case 'Prospective': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getInfluenceColor = (influence) => {
    switch (influence) {
      case 'High': return 'bg-purple-100 text-purple-800';
      case 'Medium': return 'bg-indigo-100 text-indigo-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ 
          ...formData, 
          logo: reader.result,
          logoPreview: reader.result 
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    const newStakeholder = {
      id: stakeholders.length + 1,
      stakeholderId: `SH-${String(stakeholders.length + 1).padStart(3, '0')}`,
      logo: formData.logo || '🏢',
      organization: formData.organization,
      type: formData.type,
      stage: formData.stage,
      importance: formData.importance,
      influence: formData.influence,
      interest: formData.interest,
      owner: formData.owner,
      nextAction: formData.nextAction,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      archived: false
    };

    setStakeholders([newStakeholder, ...stakeholders]);
    setShowAddModal(false);
    setFormData({
      organization: '',
      type: '',
      stage: '',
      importance: '',
      influence: '',
      interest: '',
      owner: '',
      nextAction: '',
      contactPerson: '',
      email: '',
      phone: '',
      logo: null,
      logoPreview: null
    });
  };

  const handleArchive = (id) => {
    setStakeholders(stakeholders.map(s => 
      s.id === id ? { ...s, archived: !s.archived } : s
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this stakeholder?')) {
      setStakeholders(stakeholders.filter(s => s.id !== id));
    }
  };

  const handleView = (stakeholder) => {
    setSelectedStakeholder(stakeholder);
    setShowViewModal(true);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <div className="p-8 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Stakeholders Register</h1>
              <p className="text-white/80 text-sm">
                Track external stakeholders with enrollment stages, priorities, comms cadence, and archive controls
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-lg"
          >
            <UserPlus className="w-5 h-5" />
            <span>Add Stakeholder</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 pb-8">
        <div className="bg-white rounded-xl shadow-xl">
          {/* Tabs and Search */}
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between p-6">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('current')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'current'
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Current
                </button>
                <button
                  onClick={() => setActiveTab('archived')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'archived'
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Archived
                </button>
              </div>

              {/* Search */}
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search stakeholders..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Count */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                {activeTab === 'current' ? 'Current Stakeholders' : 'Archived Stakeholders'}
              </h2>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {filteredStakeholders.length} items
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Logo</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Organization</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Stage</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Importance</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Influence</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Interest</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Owner</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Next Action</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStakeholders.map((stakeholder) => (
                  <tr key={stakeholder.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                        {stakeholder.logo && stakeholder.logo.startsWith('data:image') ? (
                          <img 
                            src={stakeholder.logo} 
                            alt={stakeholder.organization}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl">{stakeholder.logo}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        {stakeholder.stakeholderId}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{stakeholder.organization}</p>
                        <p className="text-xs text-gray-500">{stakeholder.contactPerson}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{stakeholder.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStageColor(stakeholder.stage)}`}>
                        {stakeholder.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(stakeholder.importance)}`}>
                        {stakeholder.importance}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInfluenceColor(stakeholder.influence)}`}>
                        {stakeholder.influence}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInfluenceColor(stakeholder.interest)}`}>
                        {stakeholder.interest}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{stakeholder.owner}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{stakeholder.nextAction}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleView(stakeholder)}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleArchive(stakeholder.id)}
                          className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                          title={stakeholder.archived ? "Unarchive" : "Archive"}
                        >
                          <Archive className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(stakeholder.id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredStakeholders.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No stakeholders yet</p>
                <p className="text-gray-400 text-sm">
                  Click <span className="font-semibold">Add Stakeholder</span> to create one
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Stakeholder Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Add Stakeholder</h2>
              <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Logo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleLogoChange}
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    className="hidden"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    {formData.logoPreview ? (
                      <img
                        src={formData.logoPreview}
                        alt="Logo Preview"
                        className="w-24 h-24 object-cover rounded-lg mx-auto mb-2 border-2 border-purple-200"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Building2 className="w-12 h-12 text-purple-400" />
                      </div>
                    )}
                    <p className="text-sm text-gray-600">
                      {formData.logoPreview ? 'Click to change logo' : 'Click to upload logo'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      JPG, PNG, GIF or WEBP (max 5MB)
                    </p>
                  </label>
                </div>
              </div>

              {/* Organization Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Organization name"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select name="type" value={formData.type} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option value="">Select Type</option>
                    <option value="Government">Government</option>
                    <option value="Professional Body">Professional Body</option>
                    <option value="Healthcare Facility">Healthcare Facility</option>
                    <option value="NGO">NGO</option>
                    <option value="Private Sector">Private Sector</option>
                    <option value="Academic Institution">Academic Institution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stage</label>
                  <select name="stage" value={formData.stage} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option value="">Select Stage</option>
                    <option value="Active Partner">Active Partner</option>
                    <option value="Engaged">Engaged</option>
                    <option value="Prospective">Prospective</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Importance</label>
                  <select name="importance" value={formData.importance} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option value="">Select</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Influence</label>
                  <select name="influence" value={formData.influence} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option value="">Select</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                  <select name="interest" value={formData.interest} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option value="">Select</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Owner/Department</label>
                  <select name="owner" value={formData.owner} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option value="">Select Owner</option>
                    <option value="General">General</option>
                    <option value="Admin & Finance">Admin & Finance</option>
                    <option value="Technical">Technical</option>
                    <option value="Corporate Affairs">Corporate Affairs</option>
                    <option value="Directorate">Directorate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Contact name"
                  />
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
              </div>

              {/* Row 6 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Next Action</label>
                <textarea
                  name="nextAction"
                  value={formData.nextAction}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Describe the next action or engagement..."
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 p-6 border-t">
              <button onClick={() => setShowAddModal(false)} className="px-6 py-2 border rounded-lg hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={handleAdd} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Add Stakeholder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Stakeholder Modal */}
      {showViewModal && selectedStakeholder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Stakeholder Details</h2>
              <button onClick={() => setShowViewModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 flex items-center space-x-4">
                  <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                    {selectedStakeholder.logo && selectedStakeholder.logo.startsWith('data:image') ? (
                      <img 
                        src={selectedStakeholder.logo} 
                        alt={selectedStakeholder.organization}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl">{selectedStakeholder.logo}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedStakeholder.organization}</h3>
                    <p className="text-gray-600">{selectedStakeholder.stakeholderId}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Type</label>
                  <p className="text-lg text-gray-900">{selectedStakeholder.type}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Stage</label>
                  <p><span className={`px-3 py-1 rounded-full text-sm font-medium ${getStageColor(selectedStakeholder.stage)}`}>{selectedStakeholder.stage}</span></p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Importance</label>
                  <p><span className={`px-3 py-1 rounded-full text-sm font-medium ${getImportanceColor(selectedStakeholder.importance)}`}>{selectedStakeholder.importance}</span></p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Influence</label>
                  <p><span className={`px-3 py-1 rounded-full text-sm font-medium ${getInfluenceColor(selectedStakeholder.influence)}`}>{selectedStakeholder.influence}</span></p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Interest</label>
                  <p><span className={`px-3 py-1 rounded-full text-sm font-medium ${getInfluenceColor(selectedStakeholder.interest)}`}>{selectedStakeholder.interest}</span></p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Owner</label>
                  <p className="text-lg text-gray-900">{selectedStakeholder.owner}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Contact Person</label>
                  <p className="text-lg text-gray-900">{selectedStakeholder.contactPerson}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-lg text-gray-900">{selectedStakeholder.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <p className="text-lg text-gray-900">{selectedStakeholder.phone}</p>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-gray-500">Next Action</label>
                  <p className="text-lg text-gray-900">{selectedStakeholder.nextAction}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end p-6 border-t">
              <button onClick={() => setShowViewModal(false)} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}