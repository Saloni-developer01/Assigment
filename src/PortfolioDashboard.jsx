import React from "react";
import "./styles/index.css";
import ProfileWidget from "components/ProfileWidget";
import GalleryWidget from "components/GalleryWidget";

const PortfolioDashboard = () => {
  return (
    <div className="min-h-screen text-white p-4 sm:p-8 bg-[#28292F]">
      <main className="md:flex justify-end ">
        <div className="md:block md:w-1/2 lg:w-4/5">
          {/* This div remains empty */}
        </div>

        <div className="w-full md:w-1/2 lg:w-4/5 space-y-8 lg:mt-[60px] lg:mb-[40px] ">
          <ProfileWidget />

          <div
            className="w-[612px] h-[4px] rounded-[2.46px] ml-[70px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(40, 40, 40, 0.9) 100%)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.04)",
            }}
          ></div>

          <GalleryWidget />

          <div
            className="w-[612px] h-[4px] rounded-[2.46px] ml-[70px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(40, 40, 40, 0.9) 100%)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.04)",
            }}
          ></div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioDashboard;
