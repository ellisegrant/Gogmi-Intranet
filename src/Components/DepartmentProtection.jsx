import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, AlertCircle, ArrowLeft } from 'lucide-react';

export default function DepartmentProtection({ departmentId, children }) {
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    checkAccess();
  }, [departmentId]);

  const checkAccess = () => {
    // General department is always accessible
    if (departmentId === 'general') {
      setHasAccess(true);
      setChecking(false);
      return;
    }

    // Check if department is verified
    const verifiedDepts = JSON.parse(localStorage.getItem('verifiedDepartments') || '[]');
    
    if (verifiedDepts.includes(departmentId)) {
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }
    
    setChecking(false);
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
            style={{ borderColor: '#132552' }}></div>
          <p className="text-gray-600">Checking access...</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: 'rgba(220, 38, 38, 0.1)' }}>
            <Lock className="w-8 h-8 text-red-500" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-6">
            You need to verify your department access code from the dashboard first.
          </p>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 text-left">
                Go back to the dashboard and click on this department card to enter the access code.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg, #132552 0%, #8e3400 100%)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return children;
}