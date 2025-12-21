import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const demoUsers = [
      { id: 1, name: 'Admin User', email: 'admin@intranet.com', password: 'admin123', role: 'admin', departments: ['admin-finance', 'technical', 'corporate-affairs', 'directorate'] },
      { id: 2, name: 'Finance User', email: 'finance@intranet.com', password: 'finance123', role: 'user', departments: ['admin-finance'] },
      { id: 3, name: 'Technical User', email: 'technical@intranet.com', password: 'technical123', role: 'user', departments: ['technical'] },
      { id: 4, name: 'Corporate User', email: 'corporate@intranet.com', password: 'corporate123', role: 'user', departments: ['corporate-affairs'] },
      { id: 5, name: 'Directorate User', email: 'directorate@intranet.com', password: 'directorate123', role: 'user', departments: ['directorate'] },
      { id: 6, name: 'Multi Dept User', email: 'multi@intranet.com', password: 'multi123', role: 'user', departments: ['admin-finance', 'technical'] }
    ];

    const foundUser = demoUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasAccessToDepartment = (departmentId) => {
    if (!user) return false;
    if (departmentId === 'general') return true;
    if (user.role === 'admin') return true;
    return user.departments && user.departments.includes(departmentId);
  };

  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const value = {
    user,
    login,
    logout,
    hasAccessToDepartment,
    isAdmin,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};