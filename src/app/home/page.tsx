"use client"

import { ResponsiveChart } from "../components/chart";

export default function HomePage() {

    return (
        <div>

            <div className="flex justify-center items-center h-screen">
              <ResponsiveChart/>
            </div>

            <br />

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">1</td>
                            <td className="py-2 px-4 border-b">John Doe</td>
                            <td className="py-2 px-4 border-b">john@example.com</td>
                            <td className="py-2 px-4 border-b">Admin</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">2</td>
                            <td className="py-2 px-4 border-b">Jane Doe</td>
                            <td className="py-2 px-4 border-b">jane@example.com</td>
                            <td className="py-2 px-4 border-b">User</td>
                        </tr>
                        {/* Add more data rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}