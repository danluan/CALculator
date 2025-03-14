"use client";

import React from "react";
import { useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { FaFireFlameCurved, FaArrowLeftLong } from "react-icons/fa6";
import { IoPersonSharp, IoExitOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: <AiFillHome />, label: "Home", path: "/app" },
    { icon: <IoPersonSharp />, label: "Profile", path: "/app/profile" },
    { icon: <FaFireFlameCurved />, label: "Calories Intake", path: "/app/calories" },
  ];
  return (
    <div
      className={`
          bg-dark-green text-white h-screen rounded-r-2xl
          ${isExpanded ? "w-64" : "w-16"} 
          transition-all duration-150 
          flex flex-col
        `}
    >
      <div className="flex justify-end p-2">
        <span className={`flex w-full justify-center items-center ${isExpanded ? "block" : "hidden"}`}>
          Minimize menu
        </span>
        <a
          className={`text-gray-200 px-2 py-1 rounded-md text-2xl 
              ${isExpanded ? "mr-0" : "mx-auto"}
            `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <FaArrowLeftLong /> : <FiMenu />}
        </a>
      </div>

      <nav className="mt-4 flex-1">
        {menuItems.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className={`
                flex items-center  py-2 cursor-pointer transition-colors
                ${isExpanded ? "justify-start p-4" : "justify-center"}
                `}
          >
            <div className="text-2xl">{item.icon}</div>

            <span
              className={`
                  whitespace-nowrap flex justify-start ml-4
                  ${isExpanded ? "block" : "hidden"}
                `}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>
      <div className="flex p-2">
        <a onClick={() => signOut()} className={`text-gray-200 px-2 py-1 rounded-md text-3xl 
            ${isExpanded ? "justify-start p-4" : "justify-center"}`}>
            <IoExitOutline />
        </a>
        <span className={`${isExpanded ? "block" : "hidden"} flex justify-center items-center w-full`}>
            Sign out
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
