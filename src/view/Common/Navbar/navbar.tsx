"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

//Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';

import Link from "next/link";
const NavBar = () => {
  const [iconHover, setIconHover] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const Links = [
    {
      name: "Home",
      link: "#",
      icon: HomeOutlinedIcon,
      HoverIcon: HomeRoundedIcon,
    },
    {
      name: "About",
      link: "#",
      icon: AdminPanelSettingsOutlinedIcon,
      HoverIcon: AdminPanelSettingsRoundedIcon,
    },
    {
      name: "Model",
      link: "#",
      icon: EmailOutlinedIcon,
      HoverIcon: EmailRoundedIcon,
    },
    {
      name: "Contact",
      link: "#",
      icon: DirectionsCarOutlinedIcon,
      HoverIcon: DirectionsCarRoundedIcon,
    },
  ];

  return (
    <nav className="w-full h-14 bg-background dark:bg-primaryDark">
      <div className="flex justify-between">
        <div>
          <div className="font-extrabold text-4xl text-primaryDark dark:text-pink-300 px-3 py-1">
            ShowRoom
          </div>
        </div>
        <div className="flex items-center gap-4 px-3">
          <div>
            <button
              className=" bg-primary btn  rounded-full "
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
            {theme === "light" ? <NightsStayRoundedIcon/> : <WbSunnyRoundedIcon/>}
            </button>
          </div>
          <ul className="flex gap-3  ">
            {Links.map((item, i) => (
              <Link href={item.link} key={i}>
                <li className="flex items-center  p-1.5 rounded-lg  hover:bg-primary   "  >
                  <span className="">{<item.icon />}</span>
                  <span className="font-medium ">{item.name}</span> 
                </li> 
              </Link>
            ))}
          </ul>
          <div>
            <button className="btn bg-primary   ">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
