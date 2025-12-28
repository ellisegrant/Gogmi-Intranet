import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Components/Layout'
import Login from './Pages/Login'
import RequestAccess from './Pages/RequestAccess'
import Dashboard from './Pages/Dashboard'
import General from './Pages/General'
import Admin from './Pages/Admin'
import Technical from './Pages/Technical'
import Corporate from './Pages/Corporate'
import Directorate from './Pages/Directorate'
import PayslipView from './Pages/PayslipView'
import EmployeePayslips from './Pages/EmployeePayslips'
import CompanySettings from './Pages/Companysettings'


// General sub-modules
import Policies from './Pages/General/Policies'
import Stakeholders from './Pages/General/Stakeholders'
import Assets from './Pages/General/Assets'
import IMSWG from './Pages/General/IMSWG'
import EmployeeData from './Pages/General/EmployeeData'

// Admin & Finance sub-modules
import Payroll from './Pages/Admin/Payroll'
import AdminAssets from './Pages/Admin/AdminAssets'
import Budgets from './Pages/Admin/Budgets'
import Procurement from './Pages/Admin/Procurement'
import HR from './Pages/Admin/Hr'

// Technical sub-modules
import ResearchWork from './Pages/Technical/ResearchWork'

// Corporate Affairs sub-modules
import CorporateStakeholders from './Pages/Corporate/CorporateStakeholders'
import IT from './Pages/Corporate/IT'

// Directorate sub-modules
import ExecutiveManagement from './Pages/Directorate/ExecutiveManagement'

// PROTECTED ROUTE COMPONENT
// Redirects to login if not logged in

function ProtectedRoute({ children }) {
  const user = localStorage.getItem('user');
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
            {/* PUBLIC ROUTES - No Login Required */}
          
        <Route path="/login" element={<Login />} />
        <Route path="/request-access" element={<RequestAccess />} />



      <Route path="/my-payslips" element={
        <ProtectedRoute>
          <EmployeePayslips />
        </ProtectedRoute>
      } />


        
        {/* ============================================
            PROTECTED ROUTES - Require Login
            All wrapped in Layout (has sidebar)
            ============================================ */}
        <Route path="/" element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        } />
        
        {/* Department Routes */}
        <Route path="/general" element={
          <ProtectedRoute>
            <Layout>
              <General />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/admin-finance" element={
          <ProtectedRoute>
            <Layout>
              <Admin />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/technical" element={
          <ProtectedRoute>
            <Layout>
              <Technical />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/corporate-affairs" element={
          <ProtectedRoute>
            <Layout>
              <Corporate />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/directorate" element={
          <ProtectedRoute>
            <Layout>
              <Directorate />
            </Layout>
          </ProtectedRoute>
        } />
        
        {/* General Sub-Module Routes */}
        <Route path="/general/policies" element={
          <ProtectedRoute>
            <Layout>
              <Policies />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/general/stakeholders" element={
          <ProtectedRoute>
            <Layout>
              <Stakeholders />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/general/assets" element={
          <ProtectedRoute>
            <Assets />
          </ProtectedRoute>
        } />
        
        <Route path="/general/imswg" element={
          <ProtectedRoute>
            <Layout>
              <IMSWG />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/general/employee-data" element={
          <ProtectedRoute>
            <Layout>
              <EmployeeData />
            </Layout>
          </ProtectedRoute>
        } />
        
        {/* Admin & Finance Sub-Module Routes */}
        <Route path="/admin-finance/payroll" element={
          <ProtectedRoute>
            <Layout>
              <Payroll />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/admin-finance/assets" element={
          <ProtectedRoute>
            <Layout>
              <AdminAssets />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/admin-finance/budgets" element={
          <ProtectedRoute>
            <Layout>
              <Budgets />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/admin-finance/procurement" element={
          <ProtectedRoute>
            <Layout>
              <Procurement />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/admin-finance/hr" element={
          <ProtectedRoute>
            <Layout>
              <HR />
            </Layout>
          </ProtectedRoute>
        } />
        
        {/* Technical Sub-Module Routes */}
        <Route path="/technical/research-work" element={
          <ProtectedRoute>
            <Layout>
              <ResearchWork />
            </Layout>
          </ProtectedRoute>
        } />
        
        {/* Corporate Affairs Sub-Module Routes */}
        <Route path="/corporate-affairs/stakeholders" element={
          <ProtectedRoute>
            <Layout>
              <CorporateStakeholders />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/corporate-affairs/it" element={
          <ProtectedRoute>
            <Layout>
              <IT />
            </Layout>
          </ProtectedRoute>
        } />


        <Route path="/payslip/:id" element={
          <ProtectedRoute>
          <PayslipView />
           </ProtectedRoute>
         } />
        
        {/* Directorate Sub-Module Routes */}
        <Route path="/directorate/executive-management" element={
          <ProtectedRoute>
            <Layout>
              <ExecutiveManagement />
            </Layout>
          </ProtectedRoute>
        } />




      <Route path="/admin-finance/settings" element={
        <ProtectedRoute>
          <CompanySettings />
        </ProtectedRoute>
      } />



        
        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App