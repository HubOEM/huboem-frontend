import { Routes, Route } from 'react-router-dom'

import Navbar from "./Components/Navbar"

import Dashboard from "./Pages/Dashboard.js"

import OrderParts from "./Pages/Parts/OrderParts.js"
import OrderHistory from "./Pages/Parts/OrderHistory.js"
import RecurringOrders from "./Pages/Parts/RecurringOrders.js"
import UploadPart from "./Pages/Parts/UploadPart.js"

import RequestServices from "./Pages/Services/RequestServices.js"

import UploadDoc from "./Pages/Documents/UploadDoc.js"
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

      {/* Documents */}
        <Route path="/UploadDoc" element={<UploadDoc />}/>

      {/* Machines */}
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