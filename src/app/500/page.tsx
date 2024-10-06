"use client";

import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-background dark:bg-transparent "  >
      <div className="flex    ">
        <div className="flex ">
          <Image
            src={"/Images/500 Error.svg"}
            alt="404 image"
            height={500}
            width={500}
          />
        </div>
        <div className="w-96 m-10 p-16    ">
          <h1 className="font-bold  text-8xl my-2 " >500</h1>
          <h5 className="text-2xl font-semibold my-2 ">Internal Server Error</h5>
          <p className="text-lg m-1"> We are sorry We are unable to find this page Please go back to HomePage</p>
          <button className="btn btn-primary my-2" >Go to HomePage</button>
        </div>
      </div>
    </div>
  );
};

export default index;
