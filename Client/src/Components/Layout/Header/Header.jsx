import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import { MdContactPhone } from "react-icons/md";

import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo3.png";
function Header() {
  const [open, setQpen] = useState(false);

  const items = [
    {
      to: "/",
      label: "Trang Chủ",
      icon: <HiHome size={"iconSize"} />,
      active: true,
    },

    {
      to: "/dich-vu",
      label: "Dịch Vụ",
      icon: <MdContactPhone size={"iconSize"} />,
    },
    {
      to: "/admin",
      label: "Admin",
      icon: <MdContactPhone size={"iconSize"} />,
    },

    {
      to: "/lien-he",
      label: "Liên hệ",
      icon: <MdContactPhone size={"iconSize"} />,
    },
  ];
  return (
    <header className="headers  fixed top-0 left-0  col-span-6 bg-green-200  w-full z-10  opacity-90">
      <marquee
        behavior=""
        direction=""
        className="bg-green-600 text-white font-bold uppercase"
      >
        Gọi ngay Vĩnh Phan để được tư vấn giải pháp Hotline : 0348216852
      </marquee>
      <nav className="flex justify-around  md:mx-10  items-center md:justify-around  text-center">
        <div className="  flex mx-[-30px] md:mx-[-40px] lg:mx-0 ">
          <img
            src={logo}
            alt="logo"
            className=" object-fit w-full h-[65px] uppercase   "
          />
        </div>

        <div className=" flex justify-evenly hidden lg:block">
          {items.map((itemM, index) => (
            <Link
              to={itemM.to}
              key={index}
              className="text-blue-950 font-bold mx-[20px]  uppercase hover:underline"
            >
              {itemM.label}
            </Link>
          ))}
        </div>
        <div className="drawer w-0 lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              <AiOutlineBars />
            </label>
          </div>
          <div className="drawer-side z-20 top-[95px] h-[100%] ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {items.map((itemM, index) => (
                <Link
                  to={itemM.to}
                  key={index}
                  className="text-blue-950 font-bold mx-[50px]  uppercase hover:underline"
                >
                  {itemM.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
