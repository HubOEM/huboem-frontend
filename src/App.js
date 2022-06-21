// blue = [#679CE8]/, hard blue = [#4586e1]
// green = [#5ED797], hard green = [#28cf76]

import { Routes, Route } from 'react-router-dom'

import Navbar from "./Components/Navbar"
import TopNavbar from "./Components/TopNavbar"
import Footer from "./Pages/General/Footer.js"

import Dashboard from "./Pages/General/Dashboard.js"

import OrderParts from "./Pages/Parts/OrderParts.js"
import OrderHistory from "./Pages/Parts/OrderHistory.js"
import OrderDetails from "./Pages/Parts/OrderDetails.js"
import RecurringOrders from "./Pages/Parts/RecurringOrders.js"
import UploadPart from "./Pages/Parts/UploadPart.js"
import ViewPart from "./Pages/Parts/ViewPart.js"

import RequestServices from "./Pages/Services/RequestServices.js"
import ServicesHistory from "./Pages/Services/ServicesHistory.js"
import ServicesCalendar from "./Pages/Services/ServicesCalendar.js"

import DocumentsList from "./Pages/Documents/DocumentsList.js"
import UploadDoc from "./Pages/Documents/UploadDoc.js"

import Machines from "./Pages/Machines/Machines.js"
import Machine from "./Pages/Machines/Machine.js"

import Companies from "./Pages/OEMs/Companies.js"
import Company from "./Pages/OEMs/Company.js"
import Contacts from "./Pages/OEMs/Contacts.js"

import Messages from "./Pages/Messages/Messages.js"
import NewMessages from "./Pages/Messages/NewMessages.js"
import ContactAdmin from "./Pages/Messages/ContactAdmin.js"

import Profile from "./Pages/General/Profile.js"
import FAQ from "./Pages/General/FAQ.js"


function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <TopNavbar />
        </div>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          {/* Parts */}
          <Route path="/Order_Parts" element={<OrderParts />} />
          <Route path="/Parts_Order_History" element={<OrderHistory />} />
          <Route path="/Order_Details" element={<OrderDetails />} />
          <Route path="/Recurring_Parts" element={<RecurringOrders />} />
          <Route path="/Upload_Part" element={<UploadPart />} />
          <Route path="/View_Part" element={<ViewPart />} />

          {/* Services */}
          <Route path="/Request_Services" element={<RequestServices />} />
          <Route path="/Services_History" element={<ServicesHistory />} />
          <Route path="/Services_Calendar" element={<ServicesCalendar />} />

          {/* Documents */}
          <Route path="/View_Documents" element={<DocumentsList />} />
          <Route path="/Add_Documents" element={<UploadDoc />} />

          {/* Machines */}
          <Route path="/Machines" element={<Machines />} />
          <Route path="/Machine" element={<Machine />} />

          {/* OEMs */}
          <Route path="/OEM_Companies" element={<Companies />} />
          <Route path="/OEM_Company" element={<Company />} />
          <Route path="/OEM_Contacts" element={<Contacts />} />

          {/* Messages */}
          <Route path="/View_Messages" element={<Messages />} />
          <Route path="/New_Messages" element={<NewMessages />} />
          <Route path="/Contact_Admin" element={<ContactAdmin />} />

          {/* Profile */}
          <Route path="/Profile" element={<Profile />} />

          {/* FAQ */}
          <Route path="/FAQ" element={<FAQ />} />

        </Routes>
      </div>
      <div>
<Footer />
      </div>
    </>
  )
}
export default App