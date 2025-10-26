// // src/components/GalleryWidget.js

import React, { useRef, useState } from "react";

// Initial images list (Dummy data for initial display)
const initialGalleryImages = [
  "/images/img5.avif",
  "/images/img5.avif",
  "/images/img5.avif",
  "/images/img5.avif",
  "/images/img5.avif",
  "/images/img5.avif",
  "/images/img5.avif",
  "/images/img5.avif",
  "/images/img5.avif",
];

const GalleryWidget = () => {
  const [galleryImages, setGalleryImages] = useState(initialGalleryImages);
  const scrollContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);

  //     // NEW STATES: Glow effect ke liye dono arrows ke liye
  const [isLeftArrowGlowing, setIsLeftArrowGlowing] = useState(false);
  const [isRightArrowGlowing, setIsRightArrowGlowing] = useState(false);

  //     // Constants for SS-like disabled style (dark background, gray text)
  const DISABLED_TEXT_COLOR = "text-[#3C3C43]";
  const DISABLED_BG_COLOR = "bg-[blue]";
  const ENABLED_STYLES =
    "text-grey bg-[red] hover:bg-gray-600 hover:shadow-md";
  const GLOW_STYLES =
    "shadow-[0_0_10px_2px_rgba(255,255,255,0.7)] bg-[red]"; // White glow and bright background

  //     // ------------------------------------
  //     // 1. ADD IMAGE Functionality
  //     // ------------------------------------
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageUrl = e.target.result;
        setGalleryImages((prevImages) => [...prevImages, newImageUrl]);

        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft =
              scrollContainerRef.current.scrollWidth;
          }
        }, 100);
      };
      reader.readAsDataURL(file);
    }
  };

  //     // ------------------------------------
  //     // 2. SCROLL Functionality (Carousel)
  //     // ------------------------------------

  //     // Function to handle horizontal scrolling
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // LOGIC: Check if scroll limit is reached on click
      if (direction === "left" && isLeftDisabled) {
        // Left limit par click kiya -> Right Arrow glow karo
        setIsRightArrowGlowing(true);
        setTimeout(() => {
          setIsRightArrowGlowing(false);
        }, 1000);
        return;
      }

      if (direction === "right" && isRightDisabled) {
        // Right limit par click kiya -> Left Arrow glow karo
        setIsLeftArrowGlowing(true);
        setTimeout(() => {
          setIsLeftArrowGlowing(false);
        }, 1000);
        return;
      }

      //             // Normal smooth scrolling
      //   const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      //   const currentScroll = scrollContainerRef.current.scrollLeft;

      // Normal smooth scrolling (Adjusted scroll amount for better 3-image view)
      const containerWidth = scrollContainerRef.current.clientWidth;
      // Scroll 1/3 container width (approx one image width + gap)
      const scrollAmount = containerWidth / 3;
      const currentScroll = scrollContainerRef.current.scrollLeft;

      scrollContainerRef.current.scrollTo({
        left:
          currentScroll + (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });
    }
  };

  //     // Function to check scroll position and update state
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setScrollPosition(scrollLeft);

      //             // Check if scroll is at the very end (right side)
      const maxScroll = scrollWidth - clientWidth;
      setIsAtEnd(scrollLeft >= maxScroll - 5);
    }
  };

  //     // Check if the scroll is at the start
  const isLeftDisabled = scrollPosition === 0;

  // phla change
  // const isLeftDisabled = scrollPosition <= 5; // Using a small tolerance (5)
  // Check if the scroll is at the end
  const isRightDisabled = isAtEnd;

  // --- Figma color and styling matches ---
  const WIDGET_BG_COLOR = "bg-[#363c43]";
  const BORDER_COLOR = "border-[#3C3C43]";
  const TAB_CONTAINER_BG = "bg-[#1D1D21]"; // Tabs ka container background bhi widget jaisa hi dikh raha hai
  const ACTIVE_TAB_BG = "bg-[#28292f]";
  const ACTIVE_TAB_TEXT = "text-white";
  const INACTIVE_TAB_TEXT = "text-[#969696]"; // Figma ka inactive tab text color
  const CONTENT_TEXT_COLOR = "text-[#969696]"; // Content text color

  return (
    <div>
      {/* // Dark, rounded container with border and shadow */}

      <div
        className={`${WIDGET_BG_COLOR} p-6 rounded-[18.89px] shadow-2xl border ${BORDER_COLOR} overflow-visible flex`}
        style={{
          width: "740px",
          maxHeight: "336px",
          boxShadow:
            "5px 6px 6px 0 rgba(0, 0, 0, 0.5), -1px -1px 2px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />
        {/* Header: Gallery Title and Controls */}

        {/* NEW: Question Mark Icon */}
        <div className="text-xl font-bold text-gray-200 flex  ml-[-10px] mr-[22px] w-[24px] h-[159.69px]   mt-[1px]">
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
            className="absolute ml-[4px] mt-[119px] w-[24px] h-[30.69px]
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

        <div style={{ width: "620px" }}>
          <div className="flex justify-between items-center mb-6">
            {/* Left Side: Question Mark and Gallery Title */}
            {/* Left Side: Gallery Title */}

            <h2 className="text-gray-200 flex items-center space-x-2">
              <span
                className="bg-[#171717] px-[37px] py-[18px] text-gray-200 w-[149px] h-[62px] rounded-[20px] text-[20px]"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: "500",
                  fontStyle: "normal",
                }}
              >
                Gallery
              </span>
            </h2>
            {/* Right Side: + ADD IMAGE and Navigation Arrows */}

            <div className="flex space-x-3 items-center">
              {/* + ADD IMAGE Button */}

              <button
                onClick={handleAddImageClick}
                className="bg-[#3F454C] text-white px-4 py-2 text-[12px] transition-colors w-[131.32px] h-[46px] rounded-[104px] mr-[20px]"
                style={{
                  // 🌟 FIX: Neomorphism Shadow (Light top-left, Dark bottom-right)
                  boxShadow: "10px 10px 8px #262629ff, 1px -2px 8px #828285ff",
                }}
              >
                <div
                  className="flex justify-center"
                  style={{ alignItems: "center", gap: "2px" }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.03226 8.82056C4.03226 9.02108 4.11191 9.21338 4.2537 9.35517C4.39549 9.49696 4.58779 9.57661 4.78831 9.57661C4.98882 9.57661 5.18113 9.49696 5.32291 9.35517C5.4647 9.21338 5.54435 9.02108 5.54435 8.82056V5.54435H8.82056C9.02108 5.54435 9.21338 5.4647 9.35517 5.32291C9.49696 5.18113 9.57661 4.98882 9.57661 4.78831C9.57661 4.58779 9.49696 4.39549 9.35517 4.2537C9.21338 4.11191 9.02108 4.03226 8.82056 4.03226H5.54435V0.756048C5.54435 0.555532 5.4647 0.363228 5.32291 0.221441C5.18113 0.0796549 4.98882 0 4.78831 0C4.58779 0 4.39549 0.0796549 4.2537 0.221441C4.11191 0.363228 4.03226 0.555532 4.03226 0.756048V4.03226H0.756048C0.555532 4.03226 0.363228 4.11191 0.221441 4.2537C0.0796549 4.39549 0 4.58779 0 4.78831C0 4.98882 0.0796549 5.18113 0.221441 5.32291C0.363228 5.4647 0.555532 5.54435 0.756048 5.54435H4.03226V8.82056Z"
                      fill="white"
                    />
                  </svg>

                  <span
                    style={{
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: "800",
                      style: "ExtraBold",
                      lineHeight: "6.29px",
                      letterSpacing: "0px",
                      textAlign: "center",
                    }}
                  >
                    ADD IMAGE
                  </span>
                </div>
              </button>
              {/* LEFT Arrow Button (Styling based on scroll position OR glow state) */}
              <button
                onClick={() => scroll("left")}

                // className={`p-2 rounded-full transition-all duration-300 w-[45px] h-[45px] hover:bg-[black]${
                //   isLeftDisabled
                //     ? `text-grey bg-[red] cursor-default`
                //     : ENABLED_STYLES
                // } ${
                //   // Right Arrow ki glow ki request par iski styling (agar right arrow glow kar raha hai, toh yeh normal rahega)
                //   isRightArrowGlowing
                //     ? ""
                //     : isLeftArrowGlowing
                //     ? GLOW_STYLES
                //     : ""
                // }`}




                className={`p-2 rounded-full transition-all duration-300 w-[45px] h-[45px] hover:bg-[black] ${
    isLeftArrowGlowing // 💡 CHANGE 1: Glow state ka check pehle rakhein!
        ? GLOW_STYLES // Glow active hone par glow styling do.
        : isLeftDisabled // Agar glow active nahi, tab check karo ki disabled hai kya?
        ? `text-grey bg-red cursor-default` // Disabled styling
        : ENABLED_STYLES // Agar disabled aur glowing dono nahi hain, toh normal enabled styling
}`}


                style={{
                  background:
                    "linear-gradient(180deg, #303439 0%, #161718 100%)",
                  // 🌟 FIX: Concave/Pressed Shadow (Inset)
                  boxShadow: " 4px 4px 8px #1A1A1E, -4px -4px 8px #484850",
                }}
              >
                <div className="flex justify-center">
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15L1 8L8 1"
                      stroke="#6F787C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    width="17"
                    height="2"
                    viewBox="0 0 17 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-[6.8px] ml-[-6px]"
                  >
                    <path
                      d="M1 0.999988H15.1944"
                      stroke="#6F787C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* RIGHT Arrow Button (Styling based on scroll position OR glow state) */}
              <button
                onClick={() => scroll("right")}
                // SS-like disabled style jab end par ho
                // className={`p-2 rounded-full transition-all duration-300 w-[45px] h-[45px] cursor-pointer ${
                //   isRightDisabled
                //     ? `${DISABLED_TEXT_COLOR} ${DISABLED_BG_COLOR} cursor-default`
                //     : ENABLED_STYLES
                // } ${
                //   // Left Arrow ki glow ki request par iski styling (agar left arrow glow kar raha hai, toh yeh normal rahega)
                //   isLeftArrowGlowing
                //     ? ""
                //     : isRightArrowGlowing
                //     ? GLOW_STYLES
                //     : ""
                // }`}




                className={`p-2 rounded-full transition-all duration-300 w-[45px] h-[45px] cursor-pointer ${
    isRightArrowGlowing // 💡 CHANGE 2: Glow state ka check pehle rakhein!
        ? GLOW_STYLES // Glow active hone par glow styling do.
        : isRightDisabled // Agar glow active nahi, tab check karo ki disabled hai kya?
        ? `${DISABLED_TEXT_COLOR} ${DISABLED_BG_COLOR} cursor-default` // Disabled styling
        : ENABLED_STYLES // Agar disabled aur glowing dono nahi hain, toh normal enabled styling
}`}



                style={{
                  background:
                    "linear-gradient(180deg, #303439 0%, #161718 100%)",
                  boxShadow: "4px 4px 8px #1A1A1E,  -4px -4px 8px #484850",
                }}
              >
                <div className="flex justify-center">
                  <svg
                    width="17"
                    height="2"
                    viewBox="0 0 17 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-[6.8px] mr-[-7px]"
                  >
                    <path
                      d="M1 0.999988H15.1944"
                      stroke="#6F787C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L8 8L1 15"
                      stroke="#6F787C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

                {/* dusra change */}
          <div className="relative flex items-center mb-[20px] ">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="grid grid-flow-col gap-3 overflow-x-scroll overflow-y-visible scrollbar-hide snap-x snap-mandatory w-full py-5"
            >
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] w-[200px] h-[179px] overflow-hidden rounded-[24px] shadow-sm border border-transparent 
                                    transform transition-all duration-300 ease-out snap-start z-10
                                    hover:scale-[1.1] hover:-translate-y-2 hover:-rotate-[2deg] hover:z-20 hover:shadow-[0_4px_15px_rgba(255,255,255,0.15)cursor-pointer"
                >

                  {/* <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-500 z-30 group-hover:opacity-0" /> */}



                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-full 
                                        filter grayscale transition-all duration-500 ease-in-out
                                        hover:grayscale-0 hover:brightness-110"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Custom Tailwind CSS to hide the scrollbar */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;












































