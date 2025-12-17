import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './Pages/Dashboard'
import General from './Pages/General'
import Admin from './Pages/Admin'
import Technical from './Pages/Technical'
import Corporate from './Pages/Corporate'
import Directorate from './Pages/Directorate'

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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Dashboard/Home Route */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Department Routes */}
          <Route path="/general" element={<General />} />
          <Route path="/admin-finance" element={<Admin />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/corporate-affairs" element={<Corporate />} />
          <Route path="/directorate" element={<Directorate />} />
          
          {/* General Sub-Module Routes */}
          <Route path="/general/policies" element={<Policies />} />
          <Route path="/general/stakeholders" element={<Stakeholders />} />
          <Route path="/general/assets" element={<Assets />} />
          <Route path="/general/imswg" element={<IMSWG />} />
          <Route path="/general/employee-data" element={<EmployeeData />} />
          
          {/* Admin & Finance Sub-Module Routes */}
          <Route path="/admin-finance/payroll" element={<Payroll />} />
          <Route path="/admin-finance/assets" element={<AdminAssets />} />
          <Route path="/admin-finance/budgets" element={<Budgets />} />
          <Route path="/admin-finance/procurement" element={<Procurement />} />
          <Route path="/admin-finance/hr" element={<HR />} />
          
          {/* Technical Sub-Module Routes */}
          <Route path="/technical/research-work" element={<ResearchWork />} />
          
          {/* Corporate Affairs Sub-Module Routes */}
          <Route path="/corporate-affairs/stakeholders" element={<CorporateStakeholders />} />
          <Route path="/corporate-affairs/it" element={<IT />} />
          
          {/* Directorate Sub-Module Routes */}
          <Route path="/directorate/executive-management" element={<ExecutiveManagement />} />
          
          {/* Catch all - redirect to dashboard */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App





