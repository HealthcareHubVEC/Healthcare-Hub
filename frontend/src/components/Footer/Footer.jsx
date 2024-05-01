import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "#",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/HealthcareHubVEC/Healthcare-Hub",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "#",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "#",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLink01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const quickLink02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/procedure",
    display: "View Procedure",
  },
  {
    path: "/learn-more1",
    display: "Learn More",
  },
];
const quickLink03 = [
  {
    path: "/contact",
    display: "Contact Us",
  },
];


const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo1} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor">
              Copyright © {year} developed by VEC team 2 all rights reserved
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[#181A1E]
                rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-30px font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-30px font-[700] mb-6 text-headingColor">
              I want to:
            </h2>

            <ul>
              {quickLink02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-30px font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {quickLink03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
