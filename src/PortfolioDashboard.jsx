// src/pages/PortfolioDashboard.js (Agar aapka file structure aisa hai)
// Ya fir App.js mein isko render karein

import React from "react";
// import ProfileWidget from '../components/ProfileWidget';
// import GalleryWidget from '../components/GalleryWidget';
// import './index.css'; // Ensure your Tailwind CSS is imported/linked
import "./styles/index.css";
import ProfileWidget from "components/ProfileWidget";
import GalleryWidget from "components/GalleryWidget";

const PortfolioDashboard = () => {
  return (
    // Main Container: Screen BG, Dark Theme
    // Pura screen cover karne ke liye h-screen use karein
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8 bg-[#28292F] ">
      {/* Main Layout: Left Empty, Right Content */}
      {/* md:flex: for larger screens, enable flex layout */}
      <main className="md:flex justify-end ">
        {/* 1. LEFT SIDE: Empty Space */}
        {/* hidden md:block: Mobile par hidden, large screens par visible */}
        <div className="md:block md:w-1/2 lg:w-4/5">
          {/* This div remains empty */}
        </div>

        {/* 2. RIGHT SIDE: Widgets Container */}
        <div className="w-full md:w-1/2 lg:w-4/5 space-y-8 lg:mt-[60px] lg:mb-[40px] ">
          {/* Widget 1: Profile/Tab Info */}
          <ProfileWidget />


          <div
            className="w-[612px] h-[4px] rounded-[2.46px] ml-[70px]"
            style={{
              // Figma se approximate gradient values
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(40, 40, 40, 0.9) 100%)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Optional shadow for depth
              border: "1px solid rgba(255, 255, 255, 0.04)", // Light border for glass effect
            }}
          ></div>


          {/* Widget 2: Gallery */}
          <GalleryWidget />


          <div
            className="w-[612px] h-[4px] rounded-[2.46px] ml-[70px]"
            style={{
              // Figma se approximate gradient values
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(40, 40, 40, 0.9) 100%)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Optional shadow for depth
              border: "1px solid rgba(255, 255, 255, 0.04)", // Light border for glass effect
            }}
          ></div>

        </div>
      </main>
    </div>
  );
};

export default PortfolioDashboard;




















































