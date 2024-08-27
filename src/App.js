import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './auth/LoginPage';
import AdminRoutes from './pages/admin/AdminRoutes';
import CPGRoutes from './pages/cpg/CPGRoutes';
import OEMRoutes from './pages/oem/OEMRoutes';
import DistributorRoutes from './pages/distributor/DistributorRoutes';


function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} /> 
          {/* huboem.dev/admin/parts --> admin/parts/invoiceID --> admin/machines ==> admin/parts/machines <- wrong */}
          <Route path="/cpg/*" element={<CPGRoutes />} />
          <Route path="/oem/*" element={<OEMRoutes />} />
          <Route path="/distributor/*" element={<DistributorRoutes />} />
          {/* Define the public route */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Define the private admin route */}
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminRoutes from './pages/admin/AdminRoutes'
// import LoginPage from './auth/LoginPage';
// // import AdminDashboard from './pages/admin/Dashboard';
// // import AdminRoutes from './pages/admin/AdminRoutes'
// import CPGDashboard from './pages/cpg/Dashboard';
// import OEMDashboard from './pages/oem/Dashboard';
// import DistributorDashboard from './pages/distributor/Dashboard';


// function App() {
//   // State to store user type
//   const [userType, setUserType] = useState(null);

//   // Function to handle user login
//   const handleLogin = (type) => {
//     setUserType(type);
//   };

//   // Function to handle user logout
//   const handleLogout = () => {
//     setUserType(null);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//         {/* Render appropriate dashboard based on user type */}
//         {userType === 'admin' && <Route element={<AdminRoutes onLogout={handleLogout} />} />}
//         {userType === 'cpg' && <Route path="/cpg" element={<CPGDashboard onLogout={handleLogout} />} />}
//         {userType === 'oem' && <Route path="/oem" element={<OEMDashboard onLogout={handleLogout} />} />}
//         {userType === 'distributor' && <Route path="/distributor" element={<DistributorDashboard onLogout={handleLogout} />} />}
//         {/* Redirect to login page if user is not logged in */}
//         {!userType && <Route to="/login" />}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';


// import Shell from './layout/Shell.js'
// import LoginPage from './auth/LoginPage.js'

// // import AdminRoutes from './pages/admin/AdminRoutes.js'
// import AdminDashboard from './pages/admin/Dashboard.js'
// import CPGDashboard from './pages/cpg/Dashboard.js'
// import OEMDashboard from './pages/oem/Dashboard.js'
// import DistributorDashboard from './pages/distributor/Dashboard.js'

// const USER_TYPES = {
//   ADMIN: 'ADMIN',
//   OEM: 'OEM',
//   CPG: 'CPG',
//   DISTRIBUTOR: 'DISTRIBUTOR',
// }

// const CURRENT_USER_TYPE = USER_TYPES.CPG

// const App = () => {

//   return (
//     <Router>
//       <Shell />
//       <Routes>

//         <Route
//           path="/admin_dashboard"
//           element={
//             <AdminElement>
//               <AdminDashboard />
//             </AdminElement>
//           } />
//         <Route
//           path="/oem_dashboard"
//           element={
//             <OEMElement>
//               <OEMDashboard />
//             </OEMElement>
//           } />
//         <Route
//           path="/distributor_dashboard"
//           element={
//             <DistributorElement>
//               <DistributorDashboard />
//             </DistributorElement>
//           } />
//         <Route
//           path="/cpg_dashboard"
//           element={
//             <CPGElement>
//               <CPGDashboard />
//             </CPGElement>
//           } />

//         <Route path="/login" element={<LoginPage />} />
//         <Route path="*" element={<div>Page Not Found,  puta.</div>} />

//       </Routes>
//     </Router>
//   );
// };

// function AdminElement({ children }) {
//   if (CURRENT_USER_TYPE === USER_TYPES.ADMIN) {
//     return <>{children}</>;
//   } else {
//     return <div className="p-10 lg:ml-64 font-bold">fuk yo az doin nigga, ya aint got no got dam rite ta be hur</div>;
//   }
// }
// function OEMElement({ children }) {
//   if (CURRENT_USER_TYPE === USER_TYPES.OEM) {
//     return <>{children}</>;
//   } else {
//     return <div className="p-10 lg:ml-64 font-bold">fuk yo az doin nigga, ya aint got no got dam rite ta be hur</div>;
//   }
// }
// function DistributorElement({ children }) {
//   if (CURRENT_USER_TYPE === USER_TYPES.DISTRIBUTOR) {
//     return <>{children}</>;
//   } else {
//     return <div className="p-10 lg:ml-64 font-bold">fuk yo az doin nigga, ya aint got no got dam rite ta be hur</div>;
//   }
// }
// function CPGElement({ children }) {
//   if (CURRENT_USER_TYPE === USER_TYPES.CPG) {
//     return <>{children}</>;
//   } else {
//     return <div className="p-10 lg:ml-64 font-bold">fuk yo az doin nigga, ya aint got no got dam rite ta be hur</div>;
//   }
// }

// export default App;




// // import React from 'react'
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// // } from 'react-router-dom';


// // import Shell from './layout/Shell.js'
// // import LoginPage from './auth/LoginPage.js'

// // import AdminRoutes from './pages/admin/AdminRoutes.js'

// // import AdminDashboard from './pages/admin/Dashboard.js'
// // import AdminSettings from './pages/admin/Settings.js'

// // import AdminOrdersList from './pages/admin/orders/OrdersList.js'
// // import AdminOrderProfile from './pages/admin/orders/OrderProfile.js'
// // import AdminOrderInvoice from './pages/admin/orders/OrderInvoice.js'
// // import AdminPartProfile from './pages/admin/PartProfile.js'

// // import AdminServicesList from './pages/admin/service/ServicesList.js'
// // import AdminServiceProfile from './pages/admin/service/ServiceProfile.js'
// // import AdminServiceInvoice from './pages/admin/service/ServiceInvoice.js'

// // import AdminOEMsList from './pages/admin/oem/OEMsList.js'
// // import AdminOEMProfile from './pages/admin/oem/OEMProfile.js'
// // import AdminOEMInfo from './pages/admin/oem/OEMInfo.js'

// // import AdminCPGsList from './pages/admin/cpg/CPGsList.js'
// // import AdminCPGProfile from './pages/admin/cpg/CPGProfile.js'

// // import AdminDistributorsList from './pages/admin/distributor/DistributorsList.js'
// // import AdminDistributorProfile from './pages/admin/distributor/DistributorProfile.js'

// // import CPGDashboard from './pages/cpg/Dashboard.js'
// // import OEMDashboard from './pages/oem/Dashboard.js'
// // import DistributorDashboard from './pages/distributor/Dashboard.js'

// // const USER_TYPES = {
// //   ADMIN: 'ADMIN',
// //   OEM: 'OEM',
// //   CPG: 'CPG',
// //   DISTRIBUTOR: 'DISTRIBUTOR',
// // }

// // const CURRENT_USER_TYPE = USER_TYPES.ADMIN

// // const App = () => {

// //   return (
// //     <Router>
// //       <Shell />
// //       <Routes>

// //         <Route path="*" element={<div>Page Not Found,  puta.</div>} />
        
// //         <Route
// //           path="/admin_dashboard/*"
// //           element={
// //             <AdminElement>
// //               {""}
// //               <AdminRoutes />
// //             </AdminElement>
// //           } />
// //         <Route
// //           path="/oem_dashboard"
// //           element={
// //             <OEMElement>
// //               {""}
// //               <OEMDashboard />
// //             </OEMElement>
// //           } />
// //         <Route
// //           path="/distributor_dashboard"
// //           element={
// //             <DistributorElement>
// //               {""}
// //               <DistributorDashboard />
// //             </DistributorElement>
// //           } />
// //         <Route
// //           path="/cpg_dashboard"
// //           element={
// //             <CPGElement>
// //               {""}
// //               <CPGDashboard />
// //             </CPGElement>
// //           } />


// //         {/* Admin */}
// //         <Route path="/" element={<AdminDashboard />} />
// //         {/* <Route path="/admin_dashboard" element={<AdminDashboard />} /> */}
// //         <Route path="/admin_settings" element={<AdminSettings />} />

// //         <Route path="/master_orders_view" element={<AdminOrdersList />} />
// //         <Route path="/order_{id}" element={<AdminOrderProfile />} />
// //         <Route path="/order_{id}/invoice" element={<AdminOrderInvoice />} />
// //         <Route path="/part_{id}" element={<AdminPartProfile />} />

// //         <Route path="/master_service_requests_view" element={<AdminServicesList />} />
// //         <Route path="/service_{id}" element={<AdminServiceProfile />} />
// //         <Route path="/service_{id}/invoice" element={<AdminServiceInvoice />} />

// //         <Route path="/master_oems_view" element={<AdminOEMsList />} />
// //         <Route path="/oem_{id}" element={<AdminOEMProfile />} />
// //         <Route path="/oem_info" element={<AdminOEMInfo />} />

// //         <Route path="/master_cpgs_view" element={<AdminCPGsList />} />
// //         <Route path="/cpg_{id}" element={<AdminCPGProfile />} />

// //         <Route path="/master_distributors_view" element={<AdminDistributorsList />} />
// //         <Route path="/distributor_{id}" element={<AdminDistributorProfile />} />

// //         <Route path="/login" element={<LoginPage />} />

// //       </Routes>
// //     </Router>
// //   );
// // };

// // function AdminElement({ children }) {
// //   if (CURRENT_USER_TYPE === USER_TYPES.ADMIN) {
// //     return <>{children}</>;
// //   } else {
// //     return <div className="p-10 lg:ml-64 font-bold">fuk yo az doin nigga, ya aint got no got dam rite ta be hur</div>;
// //   }
// // }
// // function OEMElement({ children }) {
// //   if (CURRENT_USER_TYPE === USER_TYPES.OEM) {
// //     return <>{children}</>;
// //   } else {
// //     return <div className="p-10 lg:ml-64 font-bold">fuk yo az doin nigga, ya aint got no got dam rite ta be hur</div>;
// //   }
// // }
// // function DistributorElement({ children }) {
// //   if (CURRENT_USER_TYPE === USER_TYPES.DISTRIBUTOR) {
// //     return <>{children}</>;
// //   } else {
// //     return <div className="p-10 lg:ml-64 font-bold">fuk yo az doin nigga, ya aint got no got dam rite ta be hur</div>;
// //   }
// // }
// // function CPGElement({ children }) {
// //   if (CURRENT_USER_TYPE === USER_TYPES.CPG) {
// //     return <>{children}</>;
// //   } else {
// //     return <div className="p-10 lg:ml-64 font-bold">fuk yo az doin nigga, ya aint got no got dam rite ta be hur</div>;
// //   }
// // }

// // export default App;
