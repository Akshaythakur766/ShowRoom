"use client";

import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-primaryDark "  >
      <div className="flex border rounded-lg bg-background shadow ">
        <div className="flex ">
          <Image
            src={"/Images/401 Error.svg"}
            alt="404 image"
            height={500}
            width={500}
          />
        </div>
        <div className="w-96 m-16 p-16  dark:text-black  ">
          <h1 className="font-bold  text-8xl my-2 " >401</h1>
          <h5 className="text-2xl font-semibold my-2 ">UnAuthorized</h5>
          <p className="text-lg m-1"> We are sorry You are not authorized to visit this page Please go back to HomePage</p>
          <button className="btn btn-primary my-2" >Go to HomePage</button>
        </div>
      </div>
    </div>
  );
};

export default index;
