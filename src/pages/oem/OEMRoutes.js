import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shell from './OEMShell';

import Dashboard from "./Dashboard"
import Settings from "./Settings"

import OrdersList from "./orders/OrdersList"
import OrderProfile from "./orders/OrderProfile"
import OrderInvoice from "./orders/OrderInvoice"

import PartProfile from './parts/PartProfile'

import ServicesList from "./services/ServicesList"

import CPGsList from "./cpgs/CPGsList"

import CPGProfile from "./cpgs/CPGProfile"

import DistributorsList from "./distributors/DistributorsList"
import DistributorProfile from "./distributors/DistributorProfile"

import Redux from "./Redux"

export default function OEMRoutes() {
    return (
        <Routes>
            <Route element={<Shell />}>

                <Route
                    path="redux"
                    element={<Redux />}
                // element={<Redux userId={userId} authToken={authToken} />}
                />

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


                {/* Orders */}
                {/* redux: Orders mapped */}
                <Route
                    path="orders"
                    element={<OrdersList />}
                />
                <Route
                    path="order{id}"
                    element={<OrderProfile />}
                />
                <Route
                    path="invoice{id}"
                    element={<OrderInvoice />}
                />

                {/* Parts */}
                <Route
                    path="part{id}"
                    element={<PartProfile />}
                />

                {/* Services */}
                <Route
                    path="services"
                    element={<ServicesList />}
                />

                {/* CPGs */}
                <Route
                    path="cpgs"
                    element={<CPGsList />}
                />
                <Route
                    path="cpgs/cpgID"
                    element={<CPGProfile />}
                />

                {/* Distributors */}
                <Route
                    path="distributors"
                    element={<DistributorsList />}
                />
                <Route
                    path="distributor{id}"
                    element={<DistributorProfile />}
                />


            </Route>

        </Routes>
    )
};

