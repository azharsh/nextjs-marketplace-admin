"use client"
import React, { useState } from 'react';
import HomePage from '../home/page';
import TopNavigation from '../components/topnav';

const AdminDashboard: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <TopNavigation />
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className={`bg-blue-500 text-white w-64 p-4 ${isSidebarOpen ? '' : 'hidden'}`}>
                    <div className="text-2xl font-bold mb-4">Admin Dashboard</div>
                    {/* Add your sidebar links here */}
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="block py-2 px-4 hover:bg-blue-600">Dashboard</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="block py-2 px-4 hover:bg-blue-600">Users</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="block py-2 px-4 hover:bg-blue-600">Settings</a>
                        </li>
                        {/* Add more sidebar links as needed */}
                    </ul>
                </aside>

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <header className="bg-white border-b p-4">
                        <button
                            className="text-blue-500 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            {/* Add your sidebar toggle icon (e.g., hamburger menu icon) */}
                            ☰
                        </button>
                    </header>

                    {/* Content area */}
                    <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
                        {/* Your admin dashboard content goes here */}
                        <HomePage />

                        {/* Add more content as needed */}
                    </main>
                </div>
            </div>
        </div>

    );
};

export default AdminDashboard;
