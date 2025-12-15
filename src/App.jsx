import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
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
          
          {/* Catch all - redirect to dashboard */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App