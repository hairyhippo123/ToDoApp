import React from 'react';

const SideBar = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-lg font-bold border-b border-gray-700">
                TodoApp
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                            My Day
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                            Important
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                            Task
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;