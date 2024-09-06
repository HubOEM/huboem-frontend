import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shell from './AdminShell.js';

import Dashboard from './Dashboard.js';
import Settings from './Settings.js';

import OrdersList from './orders/OrdersList.js';
import OrderProfile from './orders/OrderProfile.js';
import OrderInvoice from './orders/OrderInvoice.js';

import PartProfile from './parts/PartProfile.js';

import ServicesList from './services/ServicesList.js';
import ServiceProfile from './services/ServiceProfile.js';
import ServiceItemProfile from './services/ServiceItemProfile.js';
import ServiceInvoice from './services/ServiceInvoice.js';

import OEMsList from './oem/OEMsList.js';
import OEMProfile from './oem/OEMProfile.js';
import MachineProfile from './machines/MachineProfile.js';

import CPGsList from './cpg/CPGsList.js';
import CPGProfile from './cpg/CPGProfile.js';

import DistributorsList from './distributor/DistributorsList.js';
import DistributorProfile from './distributor/DistributorProfile.js';

import UserGroupsList from './users/UserGroupsList.js';
import UsersList from './users/UsersList.js';
import UserProfile from './users/UserProfile.js';

export default function AdminRoutes() {
    return (
        <Routes>
            <Route element={<Shell />}>

                {/* Dashboard redux: Sales metrics, orders and invoices, client list (based on recent sales interaction) */}
                <Route
                    path="/"
                    element={<Dashboard />}
                    />
                <Route
                    path="dashboard"
                    element={<Dashboard />}
                    />

                {/* Settings redux: 
                    General - User info, language/date/app settings
                    Notification - controls for alerts and popups
                    Plan - licensing terms and pricing
                    Billing - group payment info
                    Team members - group users mapped
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
                {/* redux: Order id parts and order info mapped */}
                <Route
                    path="order{id}"
                    element={<OrderProfile />}
                />
                {/* redux: order invoice info */}
                <Route
                    path="invoice{id}"
                    element={<OrderInvoice />}
                />

                {/* Parts */}
                {/* redux: part id info */}
                <Route
                    path="part{id}"
                    element={<PartProfile />}
                />


                {/* Services */}
                {/* redux: service orders mapped */}
                <Route
                    path="services"
                    element={<ServicesList />}
                    />
                {/* redux: service order id info mapped */}
                <Route
                    path="service{id}"
                    element={<ServiceProfile />}
                    />
                {/* redux: service order invoice id info mapped */}
                <Route
                    path="invoice{id}"
                    element={<ServiceInvoice />}
                    />
                {/* redux: service order id item info mapped */}
                <Route
                    path="service{id}/item{id}" // I know there is an issue with this, I just need to update when we have redux ready
                    element={<ServiceItemProfile />}
                />





                {/* OEMs */}
                {/* redux: oem groups rendered */}
                <Route
                    path="oems"
                    element={<OEMsList />}
                />
                {/* redux: oem group id rendered */}
                <Route
                    path="oem{id}"
                    element={<OEMProfile />}
                />


                {/* Machines */}
                <Route
                    path="machine_model{id}"
                    element={<MachineProfile />}
                />




                {/* CPGs */}
                {/* redux: cpg groups */}
                <Route
                    path="cpgs"
                    element={<CPGsList />}
                    />
                {/* redux: cpg group id info */}
                <Route
                    path="cpg{id}"
                    element={<CPGProfile />}
                />


                {/* Distributors */}
                {/* redux: distributor groups */}
                <Route
                    path="distributors"
                    element={<DistributorsList />}
                    />
                {/* redux: distributor group id info */}
                <Route
                    path="distributor{id}"
                    element={<DistributorProfile />}
                />


                {/* Users */}
                <Route
                    path="user_groups"
                    element={<UserGroupsList />}
                />
                <Route
                    path="users"
                    element={<UsersList />}
                />
                <Route
                    path="users/{id}"
                    element={<UserProfile />}
                />

            </Route>
        </Routes>
    );
}

