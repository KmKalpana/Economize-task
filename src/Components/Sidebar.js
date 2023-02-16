import React from "react";
import { FaBeer, FaBuffer } from 'react-icons/fa';
import { DiCode } from "react-icons/di";
import {BiAtom} from "react-icons/bi"
import {BsFillCalendarMinusFill, BsSegmentedNav} from "react-icons/bs"
import {AiOutlineWechat} from "react-icons/ai"
import {GrIntegration} from "react-icons/gr"
import Dashboard from "./Dashboard";

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60 pt-4">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl pl-3 font-bold font-italic text-blue-900">BlueReciept</h2>
                    </div>
                    <div className="flex items-center">
                    <div className="relative max-w-sm px-1">
                       <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    className="w-full pl-8 py-2 bg-blue-50 border rounded-full"
                    
                    placeholder="Search..."
                />
                </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full pl-3 py-1 bg-blue-100 border rounded-full flex" >
                      <span className="color-blue-400"><DiCode size={30} style={{color:"#0e7490"}}/></span>
                      <span className="pt-0.5 text-sky-500 font-bold">Dashboard</span>
                   </div>
                  </div>
                       
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm p-1.2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <FaBeer />
                                    <span>Conversation</span>
                                </a>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                  <BiAtom />
                                    <span>Automations</span>
                                </a>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <FaBuffer />
                                    <span>Compaigns</span>
                                </a>
                            </li>
                             <li className="rounded-sm p-1.2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <BsFillCalendarMinusFill />
                                    <span>Popup</span>
                                </a>
                            </li>
                             <li className="rounded-sm p-1.2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <AiOutlineWechat />
                                    <span>Live Chat</span>
                                </a>
                            </li>
                             <li className="rounded-sm p-1.2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <BsSegmentedNav />
                                    <span>Segments</span>
                                </a>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <GrIntegration />
                                    <span>Integrations</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Dashboard />
        </div>
    );
}