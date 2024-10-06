"use client";

import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div
      className="w-full flex justify-start items-center bg-background dark:bg-transparent min-h-screen"
      style={{
        backgroundImage: "url('/Images/404 Error Full.png')",
        backgroundSize: "contain", 
        backgroundRepeat:"no-repeat",
        backgroundPositionX: "right", // Center the image
        backgroundPositionY: "bottom", // Center the image
      }}
    >
      <div className="w-[470px]  px-28 py-36   "> {/* Optional styling for readability */}
        <h1 className="font-bold text-8xl my-3">404</h1>
        <h5 className="text-2xl font-semibold my-3">Page not Found</h5>
        <p className="text-md m-1">
          We are sorry, we are unable to find this page. Please go back to HomePage.
        </p>
        <button className="btn btn-primary my-3">Go to HomePage</button>
      </div>
    </div>
  );
};

export default Index;
