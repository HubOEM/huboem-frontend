import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Shell from './CPGShell.js';

import Dashboard from "./Dashboard.js"
import Settings from "./Settings.js"

import PartsList from "./parts/PartsList.js"
import PartProfile from "./parts/PartProfile.js"
import OrderProfile from "./orders/OrderProfile.js"
import OrderInvoice from "./orders/OrderInvoice.js"

import ServicesList from "./services/ServicesList.js"
import ServiceItemProfile from "./services/ServiceItemProfile.js"

import DocumentsList from "./documents/DocumentsList.js"

import Cart from "./cart/Cart.js"
import OrderConfirmation from "./cart/OrderConfirmation.js"

import MyMachines from "./myMachines/MyMachines.js"
import MachineProfile from "./myMachines/MachineProfile.js"

import MyVendors from "./myVendors/MyVendors.js"
import VendorProfile from "./myVendors/VendorProfile.js"

export default function AdminRoutes() {
    return (
        <Routes>
            <Route element={<Shell />}>

                {/* redux: financial info, orders, partners (recent) */}
                <Route
                    path="/"
                    element={<Dashboard />}
                />
                <Route
                    path="dashboard"
                    element={<Dashboard />}
                />

                {/* redux: 
                    general - user info, group info
                    notifications - app specific stuff
                    plan - licenses, price, remaining months
                    billing - user group info
                    team members - user group info
                */}
                <Route
                    path="settings"
                    element={<Settings />}
                />


                {/* Parts */}
                {/* redux - cpg all parts */}
                <Route
                    path="parts"
                    element={<PartsList />}
                />
                {/* redux - part info */}
                <Route
                    path="part{id}"
                    element={<PartProfile />}
                />


                {/* Orders */}
                {/* redux - orders rendered based on id */}
                <Route
                    path="order{id}"
                    element={<OrderProfile />}
                />
                {/* redux - order id invoice */}
                <Route
                    path="invoice{id}"
                    element={<OrderInvoice />}
                />

                {/* Cart */}
                {/* redux - cart */}
                <Route
                    path="cart"
                    element={<Cart />}
                />
                {/* redux - orders info */}
                <Route
                    path="order_confirmation"
                    element={<OrderConfirmation />}
                />


                {/* Services */}
                {/* redux - services list */}
                <Route
                    path="services"
                    element={<ServicesList />}
                />
                {/* redux - service id info */}
                <Route
                    path="service{id}"
                    element={<ServiceItemProfile />}
                />


                {/* Documents */}
                {/* redux - docs list  */}
                <Route
                    path="documents"
                    element={<DocumentsList />}
                />


                {/* Machines */}
                {/* reduc - machines */}
                <Route
                    path="my_machines"
                    element={<MyMachines />}
                />
                {/* redux - machine id info */}
                <Route
                    path=":machine{id}"
                    element={<MachineProfile />}
                />

                {/* Vendors */}
                {/* redux - oem and disti renders */}
                <Route
                    path="my_vendors"
                    element={<MyVendors />}
                />
                {/* redux - vendor id */}
                <Route
                    path=":oem{id}"
                    element={<VendorProfile />}
                />

            </Route>
        </Routes>
    )
};
