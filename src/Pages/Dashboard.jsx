import { LayoutGrid, DollarSign, Wrench, Building2, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate(); 

  // 5 Main Departments - Each will have sub-modules/tasks underneath
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
      description: 'Research Work',
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
      description: 'Corporate governance and Stakeholder engangements',
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

  // Mock user data - will come from auth later
  const user = {
    name: 'Enoch Nikoi',
    role: 'Creative, Design & Communication Specialist'
  };

  const handleDepartmentClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Welcome Banner - Solid primary color */}
      <div className="text-white shadow-lg" style={{ backgroundColor: '#132552' }}>
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">
            Welcome back, {user.name.split(' ')[0]} 👋
          </h1>
          <p className="text-blue-100">
            {user.role}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#132552' }}>
            Department Overview
          </h2>
          <p className="text-gray-600">
            Select a department to access its modules and tasks
          </p>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <button
                key={dept.id}
                onClick={() => handleDepartmentClick(dept.path)}
                className={`relative ${dept.bgColor} ${dept.hoverBgColor} rounded-lg shadow-md hover:shadow-lg p-8 text-left overflow-hidden`}
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

        {/* Info Banner */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
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
  );
}