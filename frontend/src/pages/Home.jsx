import React from "react";
import heroImg01 from "../assets/images/hero-img011.jpg";
import heroImg02 from "../assets/images/hero-img022.jpg";
import heroImg03 from "../assets/images/hero-img033.jpg";
import icon01 from "../assets/images/icon01.png";
import icon021 from "../assets/images/icon021.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/doctor-img03.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight, } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import FaqList from "../components/Faq/FaqList";


const Home = () => {
  return <>
    {/*===== hero section =====*/}
    <>
      <section className="hero__section py-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

            {/*===== hero content =====*/}
            <div>
              <div className="lg:w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                md:leading-[70px]">Guiding <span className="text-primaryColor">patients</span> towards healthier, <span className="text-primaryColor">happier </span>lives</h1>
                <p className="text__para">
                  At Healthcare Hub, patients can effortlessly discover doctors and schedule appointments tailored to their specific needs. Our platform streamlines the process,
                  allowing individuals to browse through a diverse range of healthcare professionals, view their specialities, and book appointments with ease,
                  ensuring a seamless healthcare experience.
                </p>
                <Link to={"/procedure"}>
                  <button className="btn hover:bg-blue-900">View Procedure</button>
                </Link>
              </div>

              {/*==== hero counter====*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
              lg:gap-[30px]">

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor">15+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Specialists</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor">10+</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/*===== hero content =====*/}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full rounded-2xl" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px] rounded-2xl" />
                <img src={heroImg03} alt="" className="w-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===== hero section end =====*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              Delivering top-tier care to all, our health system provides unmatched expertise and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
        lg:mt-[55px]">

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Doctor by Name</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Discovering the right doctor is just a click away with our streamlined platform.
                </p>
              </div>

            </div>
            <div className="py-[30px] px-10 ">
              <div className="flex items-center justify-center">
                <img src={icon021} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Specialist</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Quickly locate the specialist you require using our tailored search tool.
                </p>
              </div>

            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Book appointments effortlessly with our user-friendly system, designed to suit your schedule.
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="px-8 py-8">
          <Link to="/doctors" className="w-[80px] h-[40px] rounded-lg border border-solid boder-[#181A1E]
                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </section>
      <About />

      {/*========services section=======*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              Our medical services encompass a wide range of specialized care, tailored to meet the unique needs of each patient.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/*========services section end=======*/}

      {/*======== feature section=======*/}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">

            {/*=======feature content======*/}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. Veiw our physician who are accepting new patients, use the
                  online scheduling tool to select appointment time
                </li>
                <li className="text__para">
                  4. Utilize our online scheduling tool and
                  provide feedback for continuous improvement.
                </li>
              </ul>
            </div>

            {/*====feature img======*/}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-
              [100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
                  font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
                  font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
                bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px]
                lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                  text-headingColor">
                    Mahesh Choudary
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======== feature section end=======*/}

      {/*======== faq section ========*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>


            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*======== faq section end ========*/}
    </>
  </>
};

export default Home;