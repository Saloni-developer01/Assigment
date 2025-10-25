// src/components/ProfileWidget.js

import React, { useState } from "react";

// --- Function to format content with paragraph breaks ---
// Hum content mein <br/> ke bajaye <p> tags use karenge jisse margin apply ho sake.
const formatContent = (content) => {
  // Content ko double line break (\n\n) par split karke har tukde ko ek <p> tag mein wrap karte hain.
  // Single line break (\n) ko <br/> se replace karte hain agar zaroori ho.
  return content.split("\n\n").map((paragraph, index) => (
    <p key={index} className={index > 0 ? "mt-5" : ""}>
      {paragraph}
    </p>
  ));
};

// const tabs = [
//     { id: 'about', label: 'About Me', content: "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... " },
//     { id: 'experiences', label: 'Experiences', content: "My experience includes leading successful sales teams and consistently exceeding quarterly targets. I specialize in cloud solutions and enterprise resource planning. I have previously worked at Microsoft and Oracle." },
//     { id: 'recommended', label: 'Recommended', content: "Dave comes highly recommended for his exceptional communication skills and client relationship management. His dedication to finding the best solutions for customers is unmatched." },
// ];

const tabs = [
  {
    id: "about",
    label: "About Me",
    // Content ko \n\n se separate kiya hai jisse woh do alag <p> tags mein render ho.
    content:
      "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.\n\n" +
      "I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM. This is a...",
    // Note: 'This is a...' ke baad ka content visible nahi hai, isliye humne usko short rakha hai.
  },
  {
    id: "experiences",
    label: "Experiences",
    content:
      "My experience includes leading successful sales teams and consistently exceeding quarterly targets.\n\n" +
      "I specialize in cloud solutions and enterprise resource planning. I have previously worked at Microsoft and Oracle.",
  },
  {
    id: "recommended",
    label: "Recommended",
    content:
      "Dave comes highly recommended for his exceptional communication skills and client relationship management. His dedication to finding the best solutions for customers is unmatched.",
  },
];

const ProfileWidget = () => {
  const [activeTabId, setActiveTabId] = useState("about");

  // const activeTabContent = tabs.find(t => t.id === activeTabId)?.content || tabs[0].content;

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const activeTabContent = formatContent(activeTab.content); // Content ko format kiya

  // --- Figma color and styling matches ---
  const WIDGET_BG_COLOR = "bg-[#363c43]";
  const BORDER_COLOR = "border-[#3C3C43]";
  const TAB_CONTAINER_BG = "bg-[#1D1D21]"; // Tabs ka container background bhi widget jaisa hi dikh raha hai
  const ACTIVE_TAB_BG = "bg-[#28292f]";
  const ACTIVE_TAB_TEXT = "text-white";
  const INACTIVE_TAB_TEXT = "text-[#969696]"; // Figma ka inactive tab text color
  const CONTENT_TEXT_COLOR = "text-[#969696]"; // Content text color


  const buttonWidth = 195;
    const containerPadding = 8; // p-1 in Tailwind is 0.25rem = 4px (default)
    const tabGap = 10;
    const INDICATOR_OFFSET = 6;


    // const getIndicatorStyles = () => {
    //     // Tab index dhoondho (e.g., tab1 = 0, tab2 = 1)
    //     const activeIndex = tabs.findIndex(tab => tab.id === activeTabId);

    //     // Calculate left position: (Container Padding) + (Index * Button Width) + (Index * Gap between buttons if any)
    //     // Since buttons are side-by-side without an explicit gap in the loop, we use:
    //     const leftPosition = containerPadding + (activeIndex * buttonWidth);
        
    //     return {
    //         width: `${buttonWidth}px`, // Indicator ki width button ke barabar
    //         left: `${leftPosition}px`, // Indicator ki position
    //     };
    // };

  // return (
  //     // Dark, rounded container with correct padding and shadow
  //     <div className="bg-[#363c43] p-6 rounded-xl shadow-2xl border border-[#363C43] w-[720px] h-[316px] ">

  //         {/* TABS Navigation Area */}
  //         <div className="flex p-1 bg-[#121215] rounded-full w-fit mb-6">
  //             {tabs.map((tab) => (
  //                 <button
  //                     key={tab.id}
  //                     onClick={() => setActiveTabId(tab.id)}
  //                     // Styling match
  //                     className={`py-2 px-4 rounded-full text-sm font-semibold transition-all duration-200
  //                       ${activeTabId === tab.id
  //                         ? 'bg-white text-gray-900 shadow-md'
  //                         : 'text-gray-400 hover:text-white'
  //                       }`}
  //                 >
  //                     {tab.label}
  //                 </button>
  //             ))}
  //         </div>

  //         {/* Content Area */}
  //         {/* Custom scrollbar styling ke liye alag se CSS file mein classes banani pad sakti hain */}
  //         <div className="text-sm text-gray-300 max-h-[175px] min-h-[175px] overflow-y-auto pr-2 custom-scrollbar w-[611px] text-[#7E8081] text-[20px] leading-[1.4]">
  //             {activeTabContent}
  //         </div>

  //         {/* Note: Scrollbar styling ko aapko apni main CSS file (e.g., index.css) mein add karna padega */}
  //     </div>
  // );


  // --- Simple Click Handler ---
const handleTabClick = (newTabId) => {
    // Sirf indicator aur active tab ID ko update karein
    setActiveTabId(newTabId); 
    // Content change bhi automatic ho jayega
};

  const getIndicatorStyles = () => {
    const activeIndex = tabs.findIndex(tab => tab.id === activeTabId);

    // 🌟 FIX: Movement distance mein button width aur gap dono ko add karo
    const moveDistance = activeIndex * (buttonWidth + tabGap);

    // Nayi, choti width
    const indicatorWidth = buttonWidth - INDICATOR_OFFSET;

    return {
        // 🌟 FIX: Indicator ki width kam kar di gayi
        width: `${indicatorWidth}px`, 
        transform: `translateX(${moveDistance}px)`,
    };
};


  return (
    // *WIDGET CONTAINER STYLING*
    <div
      // Design ke hisaab se 720px width aur 316px height (paddings ke baad) ko adjust karna hoga.
      // Hum padding ko 24px (p-6) aur width ko responsive rakhte hain.
      className={`${WIDGET_BG_COLOR} p-6 rounded-[18.89px] shadow-2xl border ${BORDER_COLOR} `}
      style={{ width: "740px", maxHeight: "336px", boxShadow: '5px 6px 6px 0 rgba(0, 0, 0, 0.5), -1px -1px 2px 0 rgba(255, 255, 255, 0.05)', }} // Approx width for nice layout (Figma width 611px content + padding)
    >
      <div className="flex justify-center">
        <div className="text-xl font-bold text-gray-200 flex  ml-[35px] mr-[23px] w-[24px] h-[159.69px]  relative mt-[1px]">
          {/* NEW: Question Mark Icon */}

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z"
              fill="url(#paint0_linear_1_107)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_107"
                x1="19.5"
                y1="27.5"
                x2="3.5"
                y2="2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A4E54" />
                <stop offset="1" stop-color="#A3ADBA" />
              </linearGradient>
            </defs>
          </svg>

          <div
            className="absolute ml-[4px] mt-[117px] w-[24px] h-[30.69px]
                            grid grid-cols-2 gap-[2px]"
          >
            {" "}
            {/* <-- NEW: grid grid-cols-2 aur gap */}
            {/* Use a map or repeat the span elements for 6 boxes */}
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="w-[9.31px] h-[9.17px] bg-gray-400 block rounded-[1.16px] bg-[#4A4E54]"
              ></span>
            ))}
          </div>



        </div>



        <div>
          {/* TABS Navigation Area */}
          {/* <div
            // Tabs container ka background black nahi, widget jaisa hi dark grey hai
            className={`flex p-1 ${TAB_CONTAINER_BG} rounded-full w-[614px] h-[62px] rounded-[23px] mb-6 shadow-inner text-[#28292f] bg-[#171717]`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                // *TAB BUTTON STYLING*
                className={`slide-right-effect py-2 px-4 text-[20px] font-semibold transition-all duration-200 w-[195px] h-[49px] rounded-[16px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-[10px] 
                            ${
                              activeTabId === tab.id
                                ? `${ACTIVE_TAB_BG} ${ACTIVE_TAB_TEXT} shadow-[#485B71]` // Active Tab: White BG
                                : `${INACTIVE_TAB_TEXT} hover:text-white` // Inactive Tab: Gray text
                            }`} style={{ fontFamily: '"Poppins", sans-serif',fontWeight: '500',fontStyle: 'normal'}}
              >
                {tab.label}
              </button>
            ))}
          </div> */}


        
        <div
            className={`relative flex p-1 ${TAB_CONTAINER_BG} w-[614px] h-[62px] rounded-[23px] mb-6 shadow-inner text-[#28292f] bg-[#171717]`}
            style={{ position: 'relative', gap: '10px', alignItems:"center", paddingInline:"8px", marginBottom:"30px"}} // Make sure container is relative for absolute children
        >

          {/* 🌟 NEW: Shadow Element for 'About Me' Region */}
    <div 
        className="absolute w-[195px]" // Button ki width 195px
        style={{
            // Position: Container ki bottom edge par, 0px upar
            bottom: '0px', 
            // Left position: Container ki padding (8px) se shuru hoga
            left: '28px', 
            width:'170px',
            // Height: Shadow ka visibility area
            height: '0px', 
            // Z-index: Buttons aur indicator ke neeche (z-0)
            zIndex: 0, 
            // backgroundColor:"black",
            // 💡 Shadow jo neeche ki taraf offset ho (y-axis: 8px)
            boxShadow: '0px 10px 45px 11px rgba(0, 0, 0, 0.7)' 
        }}
    />



            {/* 🌟 NEW: Sliding Indicator Element */}
            <div
                className={`absolute ${ACTIVE_TAB_BG} rounded-[16px] h-[49px] transition-all duration-700 ease-in-out z-10 bg-[#171717]`}
                style={{
                    ...getIndicatorStyles(),
                    
                    boxShadow: ' 5px 10px 29px 15px rgba(0, 0, 0, 0.55)',
                    // Top: Container's padding-top (p-1 = 4px)
                    // top: `${containerPadding}px`, 
                    left: `${containerPadding}px`, // Yahan sirf container padding de dein
                 top: `${containerPadding}px`, // top-p-1 (4px)
                }}
            />

            {/* Existing Tab Buttons */}
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    // onClick={() => setActiveTabId(tab.id)}
                    onClick={() => handleTabClick(tab.id)}
                    // *TAB BUTTON STYLING*
                    // Button ko z-index 1 dedo taaki woh indicator ke upar rahe
                    // slide-right-effect is removed from here to prevent conflict, but you can keep it on inactive tabs only.
                    className={`${activeTabId !== tab.id ? 'slide-right-effect' : ''} py-2 px-4 text-[18px] font-semibold transition-colors duration-100 w-[195px] h-[49px] rounded-[16px] pt-[10px] pr-[24px] pb-[10px] pl-[24px]  z-10
                    

                     ${
                              activeTabId === tab.id
                                ? `${ACTIVE_TAB_BG} text-white delay-500 shadow-[#485B71]` // Active Tab: White BG
                                : `${INACTIVE_TAB_TEXT}` // Inactive Tab: Gray text
                            }`} 

                            
                            style={{ fontFamily: '"Poppins", sans-serif',fontWeight: '500',fontStyle: 'normal', lineHeight: '16.12px', textAlign: 'center', outline:"none", border:"none"}}
                >
                    {tab.label}
                </button>
            ))}
            
        </div>
   

          {/* Content Area */}
          {/* Height: 175px, Width: 611px (approx. in Figma), Line Height: 1.4 */}
          <div
            className={`max-h-[175px] min-h-[175px] overflow-y-auto pr-2 custom-scrollbar 
                           ${CONTENT_TEXT_COLOR} text-[20px]`}
            style={{ width: "611px", lineHeight:'100%'}} // Figma content width
          >
            {activeTabContent}
          </div>
        </div>

        <div>
          <svg
            width="18"
            height="74"
            viewBox="0 0 18 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[82px] ml-[48px] mr-[25px]"
          >
            <g filter="url(#filter0_d_1_115)">
              <rect
                x="0.900024"
                y="0.899994"
                width="8"
                height="64"
                rx="4"
                fill="url(#paint0_linear_1_115)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_115"
                x="2.43187e-05"
                y="-6.19888e-06"
                width="17.8"
                height="73.8"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="2.45" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_115"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_115"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_115"
                x1="-9.09998"
                y1="8.39999"
                x2="10.2151"
                y2="59.9068"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#888989" />
                <stop offset="1" stop-color="#4A4E54" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

    </div>
  );
};

export default ProfileWidget;












































