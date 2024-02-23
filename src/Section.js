import React from "react";
import styles from "./Section.css";
import image1 from "./img1.svg";
import logo1 from "./logo1.svg";
import logo2 from "./logo2.svg";
import Marquee from "react-fast-marquee";

const Section = () => {
  return (
    <div className="main m-10">
      <h1 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent  bg-clip-text text-7xl letter-spacing: -0.05em; font-bold">
        Our IITian Team
      </h1>
      <div className="">
        <p className="text-white m-20 font-medium text-lg">
          A Team Of IITians to Boost your Tech Career to New Heights. The
          Curriculum Team is an experienced group of data analyst instructors
        </p>
        <Marquee>
        <div className="main-boxes  ">
           
          <div className="box-1 w-auto inline-block  relative overflow-hidden md:mx-[20px] mx-[10px] flex flex-col justify-between items-center dark:bg-[#191C1E] bg-[#D1FFD0] w-[220px] md:w-[280px] h-[350px] md:h-[409px] rounded-[20px]">
            <div className="">
              <img src={image1} alt="" className="" />
            </div>
            <div className="text-div  flex flex-col justify-between h-full dark:bg-[#1C202A] bg-[#E1FFE8] grow w-full px-[40px] pt-[20px] rounded-[20px]">
              <div>
                <p className="  font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]">
                  Manish D Pepal
                </p>
                <p className=" md:mb-[20px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]">
                  Lead instructor
                </p>
              </div>
              <div className="pb-[22px]">
                <p className=" font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]">
                  Mtech - IIT Roorkee
                  <br />
                  Mtech - IIT Roorkee
                </p>
                <div className=" pt-[8px] flex flex-row justify-between">
                  <div>
                    <img src={logo1} />
                  </div>
                  <div>
                    <img src={logo2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="box-1 w-auto inline-block  relative overflow-hidden md:mx-[20px] mx-[10px] flex flex-col justify-between items-center dark:bg-[#191C1E] bg-[#D1FFD0] w-[220px] md:w-[280px] h-[350px] md:h-[409px] rounded-[20px]">
            <div className="">
              <img src={image1} alt="" className="" />
            </div>
            <div className="text-div  flex flex-col justify-between h-full dark:bg-[#1C202A] bg-[#E1FFE8] grow w-full px-[40px] pt-[20px] rounded-[20px]">
              <div>
                <p className="  font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]">
                  Manish D Pepal
                </p>
                <p className=" md:mb-[20px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]">
                  Lead instructor
                </p>
              </div>
              <div className="pb-[22px]">
                <p className=" font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]">
                  Mtech - IIT Roorkee
                  <br />
                  Mtech - IIT Roorkee
                </p>
                <div className=" pt-[8px] flex flex-row justify-between">
                  <div>
                    <img src={logo1} />
                  </div>
                  <div>
                    <img src={logo2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-1 w-auto inline-block  relative overflow-hidden md:mx-[20px] mx-[10px] flex flex-col justify-between items-center dark:bg-[#191C1E] bg-[#D1FFD0] w-[220px] md:w-[280px] h-[350px] md:h-[409px] rounded-[20px]">
            <div className="">
              <img src={image1} alt="" className="" />
            </div>
            <div className="text-div  flex flex-col justify-between h-full dark:bg-[#1C202A] bg-[#E1FFE8] grow w-full px-[40px] pt-[20px] rounded-[20px]">
              <div>
                <p className="  font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]">
                  Manish D Pepal
                </p>
                <p className=" md:mb-[20px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]">
                  Lead instructor
                </p>
              </div>
              <div className="pb-[22px]">
                <p className=" font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]">
                  Mtech - IIT Roorkee
                  <br />
                  Mtech - IIT Roorkee
                </p>
                <div className=" pt-[8px] flex flex-row justify-between">
                  <div>
                    <img src={logo1} />
                  </div>
                  <div>
                    <img src={logo2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-1 w-auto inline-block  relative overflow-hidden md:mx-[20px] mx-[10px] flex flex-col justify-between items-center dark:bg-[#191C1E] bg-[#D1FFD0] w-[220px] md:w-[280px] h-[350px] md:h-[409px] rounded-[20px]">
            <div className="">
              <img src={image1} alt="" className="" />
            </div>
            <div className="text-div  flex flex-col justify-between h-full dark:bg-[#1C202A] bg-[#E1FFE8] grow w-full px-[40px] pt-[20px] rounded-[20px]">
              <div>
                <p className="  font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]">
                  Manish D Pepal
                </p>
                <p className=" md:mb-[20px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]">
                  Lead instructor
                </p>
              </div>
              <div className="pb-[22px]">
                <p className=" font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]">
                  Mtech - IIT Roorkee
                  <br />
                  Mtech - IIT Roorkee
                </p>
                <div className=" pt-[8px] flex flex-row justify-between">
                  <div>
                    <img src={logo1} />
                  </div>
                  <div>
                    <img src={logo2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-1 w-auto inline-block  relative overflow-hidden md:mx-[20px] mx-[10px] flex flex-col justify-between items-center dark:bg-[#191C1E] bg-[#D1FFD0] w-[220px] md:w-[280px] h-[350px] md:h-[409px] rounded-[20px]">
            <div className="">
              <img src={image1} alt="" className="" />
            </div>
            <div className="text-div  flex flex-col justify-between h-full dark:bg-[#1C202A] bg-[#E1FFE8] grow w-full px-[40px] pt-[20px] rounded-[20px]">
              <div>
                <p className="  font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]">
                  Manish D Pepal
                </p>
                <p className=" md:mb-[20px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]">
                  Lead instructor
                </p>
              </div>
              <div className="pb-[22px]">
                <p className=" font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]">
                  Mtech - IIT Roorkee
                  <br />
                  Mtech - IIT Roorkee
                </p>
                <div className=" pt-[8px] flex flex-row justify-between">
                  <div>
                    <img src={logo1} />
                  </div>
                  <div>
                    <img src={logo2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-1 w-auto inline-block  relative overflow-hidden md:mx-[20px] mx-[10px] flex flex-col justify-between items-center dark:bg-[#191C1E] bg-[#D1FFD0] w-[220px] md:w-[280px] h-[350px] md:h-[409px] rounded-[20px]">
            <div className="">
              <img src={image1} alt="" className="" />
            </div>
            <div className="text-div  flex flex-col justify-between h-full dark:bg-[#1C202A] bg-[#E1FFE8] grow w-full px-[40px] pt-[20px] rounded-[20px]">
              <div>
                <p className="  font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]">
                  Manish D Pepal
                </p>
                <p className=" md:mb-[20px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]">
                  Lead instructor
                </p>
              </div>
              <div className="pb-[22px]">
                <p className=" font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]">
                  Mtech - IIT Roorkee
                  <br />
                  Mtech - IIT Roorkee
                </p>
                <div className=" pt-[8px] flex flex-row justify-between">
                  <div>
                    <img src={logo1} />
                  </div>
                  <div>
                    <img src={logo2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Section;
