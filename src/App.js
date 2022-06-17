import { Routes, Route } from 'react-router-dom'

import Navbar from "./Components/Navbar"

import Dashboard from "./Pages/Dashboard.js"

import OrderParts from "./Pages/Parts/OrderParts.js"
import OrderHistory from "./Pages/Parts/OrderHistory.js"
import RecurringOrders from "./Pages/Parts/RecurringOrders.js"
import UploadPart from "./Pages/Parts/UploadPart.js"

import RequestServices from "./Pages/Services/RequestServices.js"
import ServicesHistory from "./Pages/Services/ServicesHistory.js"
import ServicesCalendar from "./Pages/Services/ServicesCalendar.js"

import DocumentsList from "./Pages/Documents/DocumentsList.js"
import UploadDoc from "./Pages/Documents/UploadDoc.js"

import Machines from "./Pages/Machines/Machines.js"
import Machine from "./Pages/Machines/Machine.js"

import Profile from "./Pages/Profile.js"
import FAQ from "./Pages/FAQ.js"


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
      {/* Dashboard */}
        <Route path="/" element={<Dashboard />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>

      {/* Parts */}
        <Route path="/Order_Parts" element={<OrderParts />}/>
        <Route path="/Parts_Order_History" element={<OrderHistory />}/>
        <Route path="/Recurring_Parts" element={<RecurringOrders />}/>
        <Route path="/Upload_Part" element={<UploadPart />}/>

      {/* Services */}
        <Route path="/Request_Services" element={<RequestServices />}/>
        <Route path="/Services_History" element={<ServicesHistory />}/>
        <Route path="/Services_Calendar" element={<ServicesCalendar />}/>

      {/* Documents */}
        <Route path="/View_Documents" element={<DocumentsList />}/>
        <Route path="/Add_Documents" element={<UploadDoc />}/>

      {/* Machines */}
        <Route path="/Machines" element={<Machines />}/>
        <Route path="/Machine" element={<Machine />}/>

      {/* OEMs */}
      {/* Messages */}

      {/* Profile */}
        <Route path="/Profile" element={<Profile />}/>

      {/* FAQ */}
        <Route path="/FAQ" element={<FAQ />}/>

      </Routes>
    </div>
  )
}
export default App