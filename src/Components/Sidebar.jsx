import React from "react";
import { MdDashboard } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { MdOutlineSchedule } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import classNames from "classnames";
import '../Assets/style.css'

const linkStyle = "flex flex-row items-center space-x-2 cursor-pointer text-gray-200";
const hoverme = "hover:text-white hover:font-semibold";
const activeli = "text-white font-semibold";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-60 p-10 bg-blue-500 rounded-xl text-white hideNav">
      <div>
        <h1 className="text-3xl font-bold pb-8">Board.</h1>
        <nav>
            <ul className="space-y-4">
                <li className={classNames(linkStyle,hoverme,activeli)}> <MdDashboard/> <span>Dashboard</span> </li>
                <li className={classNames(linkStyle,hoverme)}><MdSell/> <span>Transactions</span> </li>
                <li className={classNames(linkStyle,hoverme)}><MdOutlineSchedule/> <span>Schedules</span> </li>
                <li className={classNames(linkStyle,hoverme)}><FaRegUserCircle/> <span>Users</span> </li>
                <li className={classNames(linkStyle,hoverme)}><IoMdSettings/> <span>Settings</span> </li>
            </ul>
        </nav>
      </div>
      <div>
        <h4 className="cursor-pointer">Help</h4>
        <h4 className="cursor-pointer">Contact us</h4>
      </div>
    </div>
  );
};

export default Sidebar;
