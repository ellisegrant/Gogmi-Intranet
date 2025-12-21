import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RecentActivityContext = createContext(null);

export const useRecentActivity = () => {
  const context = useContext(RecentActivityContext);
  if (!context) {
    throw new Error('useRecentActivity must be used within RecentActivityProvider');
  }
  return context;
};

export const RecentActivityProvider = ({ children }) => {
  const [recentPages, setRecentPages] = useState([]);
  const location = useLocation();

  const pageNames = {
    '/': 'Dashboard',
    '/profile': 'Profile',
    '/general': 'General Department',
    '/admin-finance': 'Admin & Finance',
    '/technical': 'Technical',
    '/corporate-affairs': 'Corporate Affairs',
    '/directorate': 'Directorate',
    '/general/policies': 'Policies',
    '/general/stakeholders': 'Stakeholders',
    '/general/assets': 'Assets',
    '/general/imswg': 'IMSWG',
    '/general/employee-data': 'Employee Data',
    '/admin-finance/payroll': 'Payroll',
    '/admin-finance/assets': 'Admin Assets',
    '/admin-finance/budgets': 'Budgets',
    '/admin-finance/procurement': 'Procurement',
    '/admin-finance/hr': 'HR',
    '/technical/research-work': 'Research Work',
    '/corporate-affairs/stakeholders': 'Corporate Stakeholders',
    '/corporate-affairs/it': 'IT',
    '/directorate/executive-management': 'Executive Management'
  };

  useEffect(() => {
    if (location.pathname === '/login') return;

    const pageName = pageNames[location.pathname] || location.pathname;
    const timestamp = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const newPage = {
      path: location.pathname,
      name: pageName,
      timestamp: timestamp,
      fullDate: new Date()
    };

    setRecentPages(prev => {
      if (prev[0]?.path === location.pathname) {
        return prev;
      }

      const updated = [newPage, ...prev].slice(0, 10);
      
      try {
        localStorage.setItem('recentPages', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save recent pages:', e);
      }

      return updated;
    });
  }, [location.pathname]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('recentPages');
      if (saved) {
        setRecentPages(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load recent pages:', e);
    }
  }, []);

  const clearRecentPages = () => {
    setRecentPages([]);
    localStorage.removeItem('recentPages');
  };

  const value = {
    recentPages,
    clearRecentPages
  };

  return (
    <RecentActivityContext.Provider value={value}>
      {children}
    </RecentActivityContext.Provider>
  );
};