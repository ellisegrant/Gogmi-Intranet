import { useState } from 'react';
import { LayoutGrid, DollarSign, Wrench, Building2, Briefcase, MapPin, User, Calendar, Clock, Edit2, Search, Bell, Gift, Award, FileText, Target, Plane, TrendingUp, Users, ChevronRight, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  // Temporarily disable auth
  const user = { name: 'Enoch Nikoi', departments: ['general'] };
  const hasAccessToDepartment = () => true;
  const [searchQuery, setSearchQuery] = useState('');

  // 5 Main Departments
  const departments = [
    {
      id: 'general',
      name: 'General',
      icon: LayoutGrid,
      path: '/general',
      description: 'General operations and management (includes IMSWG)',
      bgColor: 'bg-slate-700',
      hoverBgColor: 'hover:bg-slate-800',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-700',
      subModules: 5
    },
    {
      id: 'admin-finance',
      name: 'Admin and Finance',
      icon: DollarSign,
      path: '/admin-finance',
      description: 'Administrative and financial operations',
      bgColor: 'bg-gray-700',
      hoverBgColor: 'hover:bg-gray-800',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
      subModules: 5
    },
    {
      id: 'technical',
      name: 'Technical',
      icon: Wrench,
      path: '/technical',
      description: 'Technical operations and support',
      bgColor: 'bg-zinc-700',
      hoverBgColor: 'hover:bg-zinc-800',
      iconBg: 'bg-zinc-100',
      iconColor: 'text-zinc-700',
      subModules: 4
    },
    {
      id: 'corporate-affairs',
      name: 'Corporate Affairs',
      icon: Building2,
      path: '/corporate-affairs',
      description: 'Corporate governance and public relations',
      bgColor: 'bg-neutral-700',
      hoverBgColor: 'hover:bg-neutral-800',
      iconBg: 'bg-neutral-100',
      iconColor: 'text-neutral-700',
      subModules: 4
    },
    {
      id: 'directorate',
      name: 'Directorate',
      icon: Briefcase,
      path: '/directorate',
      description: 'Executive management and strategic oversight',
      bgColor: 'bg-stone-700',
      hoverBgColor: 'hover:bg-stone-800',
      iconBg: 'bg-stone-100',
      iconColor: 'text-stone-700',
      subModules: 3
    }
  ];

  // Demo data
  const announcements = [
    {
      id: 1,
      title: 'Year-End Performance Review',
      message: 'All employees are required to complete their H2 2025 performance appraisals by December 31st.',
      date: 'Dec 18, 2025',
      type: 'important'
    }
  ];

  const employees = [
    { id: 1, name: 'Chukwunalu Mobi', role: 'Agile Delivery Manager', avatar: 'CM', color: 'bg-pink-500' },
    { id: 2, name: 'Prince Amarh', role: 'Admin Manager', avatar: 'PA', color: 'bg-pink-500' },
    { id: 3, name: 'Apolline Perez', role: 'HR Consultant', avatar: 'AP', color: 'bg-pink-500' },
    { id: 4, name: 'Yemi Adegoke', role: 'CTO', avatar: 'YA', color: 'bg-pink-500' }
  ];

  const birthdays = [
    { name: 'Victory Ukpong', date: 'Dec 7th', avatar: 'VU', color: 'bg-pink-500' },
    { name: 'Emmanuel Arthur', date: 'Dec 12th', avatar: 'EA', color: 'bg-pink-500' },
    { name: 'Israel Okpamen', date: 'Dec 24th', avatar: 'IO', color: 'bg-pink-500' }
  ];

  const anniversaries = [
    { name: 'Belinda Noi', date: 'Dec 2nd (1 year)', avatar: 'BN', color: 'bg-blue-500' },
    { name: 'Oyewole Oyelaye', date: 'Dec 3rd (1 year)', avatar: 'OO', color: 'bg-blue-500' },
    { name: 'Emmanuel Arthur', date: 'Dec 4th (2 years)', avatar: 'EA', color: 'bg-blue-500' }
  ];

  const leaveBalance = [
    { type: 'Annual Leave', used: 0, total: 22, color: 'bg-blue-600' },
    { type: 'Compassionate Leave', used: 0, total: 5, color: 'bg-blue-600' },
    { type: 'Paternity Leave', used: 0, total: 5, color: 'bg-blue-600' },
    { type: 'Sick Leave', used: 0, total: 5, color: 'bg-blue-600' }
  ];

  const performanceMetrics = [
    { title: 'Documentation of Product Operations workflow and processes', progress: 0, updated: 'Thursday, Dec 18, 2025 at 06:37 pm' },
    { title: 'Learning and Growth', progress: 0, updated: 'Thursday, Dec 18, 2025 at 06:37 pm' }
  ];

  const quickActions = [
    { label: 'Request Leave', icon: Plane, color: 'text-blue-600', action: () => console.log('Request Leave') },
    { label: 'Set KPI Goals', icon: Target, color: 'text-blue-600', action: () => console.log('Set KPI') },
    { label: 'View Payslip', icon: DollarSign, color: 'text-blue-600', action: () => console.log('Payslip') },
    { label: 'Update profile', icon: User, color: 'text-blue-600', action: () => navigate('/profile') }
  ];

  const handleDepartmentClick = (path) => {
    navigate(path);
  };

  const getDepartmentName = () => {
    if (!user?.departments || user.departments.length === 0) return 'General';
    const dept = user.departments[0];
    const labels = {
      'general': 'General',
      'admin-finance': 'Admin & Finance',
      'technical': 'Technical',
      'corporate-affairs': 'Corporate Affairs',
      'directorate': 'Directorate'
    };
    return labels[dept] || dept;
  };

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Banner */}
      <div className="text-white shadow-lg" style={{ backgroundColor: '#132552' }}>
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 uppercase">
            WELCOME {user?.name?.toUpperCase() || 'USER'} 👋
          </h1>
          <p className="text-blue-100">
            Creative, Design & Communication Specialist
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - User Info */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 lg:sticky lg:top-20">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Department</p>
                    <p className="text-sm font-medium text-gray-900">{getDepartmentName()}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-gray-900">Accra</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <User className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Supervisor</p>
                    <p className="text-sm font-medium text-gray-900">Lois Gaba</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Work Anniversary</p>
                    <p className="text-sm font-medium text-gray-900">Feb 1st</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Time in Company</p>
                    <p className="text-sm font-medium text-gray-900">1 year 10 months</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigate('/profile')}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <span className="text-sm font-medium">Edit Profile</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Recent Announcements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Announcement(s)</h2>
              {announcements.length > 0 ? (
                <div className="space-y-3">
                  {announcements.map(announcement => (
                    <div key={announcement.id} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{announcement.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
                        </div>
                        <Megaphone className="w-5 h-5 text-blue-500 ml-3" />
                      </div>
                    </div>
                  ))}
                  <button className="text-sm text-blue-600 hover:underline">Read</button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Bell className="w-16 h-16 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No recent announcements</p>
                </div>
              )}
            </div>

            {/* Department Overview */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#132552' }}>
                  Department Overview
                </h2>
                <p className="text-gray-600">
                  Select a department to access its modules and tasks
                </p>
              </div>

              {/* Department Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {departments.filter(dept => hasAccessToDepartment(dept.id)).map((dept) => {
                  const Icon = dept.icon;
                  return (
                    <button
                      key={dept.id}
                      onClick={() => handleDepartmentClick(dept.path)}
                      className={`relative ${dept.bgColor} ${dept.hoverBgColor} rounded-lg shadow-md hover:shadow-lg p-8 text-left overflow-hidden transition-shadow`}
                    >
                      {/* Decorative Circle */}
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full"></div>
                      <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/5 rounded-full"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`${dept.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                          <Icon className={`w-7 h-7 ${dept.iconColor}`} />
                        </div>

                        {/* Department Name */}
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {dept.name}
                        </h3>

                        {/* Description */}
                        <p className="text-white/90 text-sm mb-4">
                          {dept.description}
                        </p>

                        {/* Sub-modules indicator */}
                        <div className="flex items-center space-x-2 text-white/80 text-sm">
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <span>{dept.subModules} modules available</span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-6 right-6">
                        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <action.icon className={`w-6 h-6 ${action.color} mb-2`} />
                    <span className="text-xs text-center text-gray-700 font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Employee Directory, Birthdays, Anniversaries */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Employee Directory */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-900">All Employees</h3>
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search employee"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {filteredEmployees.map(emp => (
                    <div key={emp.id} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${emp.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                        {emp.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{emp.name}</p>
                        <p className="text-xs text-gray-500 truncate">{emp.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Birthdays */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Birthdays</h3>
                <div className="space-y-3">
                  {birthdays.map((birthday, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${birthday.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                        {birthday.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{birthday.name}</p>
                        <p className="text-xs text-gray-500">{birthday.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t text-center">
                  <span className="text-xs text-blue-600 hover:underline cursor-pointer">This week | This month</span>
                </div>
              </div>

              {/* Work Anniversaries */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Work Anniversaries</h3>
                <div className="space-y-3">
                  {anniversaries.map((anniversary, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${anniversary.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{anniversary.name}</p>
                        <p className="text-xs text-gray-500">{anniversary.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t text-center">
                  <span className="text-xs text-blue-600 hover:underline cursor-pointer">Today | This week | This month</span>
                </div>
              </div>
            </div>

            {/* Performance & Leave Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Performance</h2>
                  <p className="text-sm"><span className="text-pink-600 font-semibold">Overall Progress:</span> 0%</p>
                </div>
                <div className="space-y-4">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <p className="text-sm text-gray-900 flex-1">{metric.title}</p>
                        <p className="text-sm font-semibold text-blue-600 ml-3">{metric.progress}%</p>
                      </div>
                      <p className="text-xs text-gray-500">Last updated, {metric.updated}</p>
                      {index < performanceMetrics.length - 1 && <div className="border-t pt-2"></div>}
                    </div>
                  ))}
                  <button className="w-full text-sm text-blue-600 hover:underline text-right">View More</button>
                </div>
              </div>

              {/* Leave Management */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Leave Days</h2>
                <div className="space-y-3">
                  {leaveBalance.map((leave, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-gray-900">{leave.type}</p>
                        <p className="text-sm text-gray-600">{leave.total - leave.used} of {leave.total} day(s)</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${leave.color} h-2 rounded-full`} 
                          style={{ width: `${((leave.total - leave.used) / leave.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full text-sm text-blue-600 hover:underline text-right mt-2">View all</button>
                </div>
              </div>
            </div>

            {/* Info Banner */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(142, 52, 0, 0.1)' }}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#8e3400' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Quick Tip
                  </h3>
                  <p className="text-gray-600">
                    Click on any department card to access its specific modules and tasks. Each department contains multiple sub-sections tailored to its operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}