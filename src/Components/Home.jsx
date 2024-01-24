import React from "react";
import { IoMdAdd } from "react-icons/io";
import ChartBar from "./ChartBar";
import ChartDonat from "./ChartDonat";
import { TfiWallet } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { MdSell } from "react-icons/md";
import '../Assets/style.css'


const Home = () => {
  return (
    <div className="pt-6 space-y-6">

      {/* header cards  */}
      <div className="headerCardList">
        <div className="rounded-xl bg-white shadow p-4">
          <div className="rounded-full bg-green-400 h-8 w-8 flex items-center justify-center">
          <TfiWallet className="text-white"/>
          </div>
          <p className="font-medium">Total Revenues</p>
          <div className="flex justify-between">
            <p className="font-bold">$2,129,430</p>
            <p className="text-green-400">+2.5%</p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow p-4">
        <div className="rounded-full bg-orange-500 h-8 w-8 flex items-center justify-center">
          <MdSell className="text-white"/>
          </div>          <p className="font-medium">Total Transaction</p>
          <div className="flex justify-between">
            <p className="font-bold">$1,520</p>
            <p className="text-green-400">+1.7%</p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow p-4">
        <div className="rounded-full bg-red-500 h-8 w-8 flex items-center justify-center">
          <AiOutlineLike className="text-white"/>
          </div>          <p className="font-medium">Total Likes</p>
          <div className="flex justify-between">
            <p className="font-bold">$9,721</p>
            <p className="text-green-400">+1.4%</p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow p-4">
        <div className="rounded-full bg-purple-500 h-8 w-8 flex items-center justify-center">
          <HiOutlineUsers className="text-white"/>
          </div>          <p className="font-medium">Total Users</p>
          <div className="flex justify-between">
            <p className="font-bold">$9,721</p>
            <p className="text-green-400">+4.2%</p>
          </div>
        </div>
      </div>

      {/* chart  */}
      <div className="bg-white rounded-xl shadow p-8 h-[28rem] flex justify-center items-center">
        <ChartBar/>
      </div>

      {/* bottom section  */}
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 shadow rounded-xl p-4 bg-white h-[22rem] flex justify-center items-center">
          <ChartDonat/>
        </div>

        {/* add profile  */}
        <div className="flex-1 flex flex-col items-center justify-center shadow rounded-xl bg-white space-y-2 p-8">
          <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
            <IoMdAdd />
          </div>
          <p>Add Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
