import { Button } from "@/components/ui/button.tsx";
import { service1, service2, service3 } from "@/assets";
import { GoArrowRight } from "react-icons/go";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "@tanstack/react-router";
import useLanguageData from "@/hooks/useLanguageData";

type DataItem = {
  created_at: string;
  updated_at: string;
  is_active: boolean;
  is_deleted: boolean;
  deleted_at: string | null;
  key_name: string;
  content_type: string;
  id: number;
  section_id: number;
  image_url: string | null;
  key_id: number;
  translation_content: string | null;
  multiple_translation_content: any;
  language_id: number;
  page_id: number;
};

type SectionData = {
  section: string;
  data: Record<string, DataItem>;
};

const ServiceSections = () => {
  const languageData = useLanguageData();

  // Filter data based on "name:hero"
  const getSectionData = (data: SectionData[], sectionName: string) => {
    const section = data.find((item) => item.section === sectionName);
    return section ? section.data : null;
  };
  const heroSectionData = getSectionData(languageData, "body_content");


  const serviceData = [
    {
      contact: "Contact us",
      image_url: service1,
      heading: "Residential Plumbing",
      description:
        "24/7 emergency plumbing, ready to swiftly address issues, minimize damage, and restore functionality.",
    },
    {
      contact: "Contact us",
      image_url: service2,
      heading: "Commercial Plumbing",
      description:
        "Businesses rely on our expertise for efficient and reliable plumbing solutions tailored to their requirements.",
    },
    {
      contact: "Contact us",
      image_url: service3,
      heading: "Emergency repairs",
      description:
        "Plumbing emergencies require rapid action. Plomberie 360 ​​is your partner for repairs 24/7.",
    },
  ];

  return (
    <div className="xl:pt-[120px] md:pt[60px] pt-[46px] relative">
      <div className="flex sm:flex-row flex-col items-cente justify-between md:gap-0 gap-7">
        <h2 className="xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold">
          Wide variety of services
        </h2>
        <Link to="/services">
          <button className="lg:py-3 py-3 rounded-lg lg:px-4 px-3 bg-[#8BE3FF] font-primaryBold lg:text-base text-sm">
            View all services
          </button>
        </Link>
      </div>

      {/* <div className=" md:flex hidden justify-between items-start xl:gap-5 gap-3 pt-[60px]">
        <div className="w-full">
          <img className="w-full" src={service1} alt="" />
          <div className="w-full xl:h-[85px] md:h-[55px] h-[32.56px] bg-[#FFC701] hover:bg-[#2e4a98] text flex items-center justify-between md:px-6 px-3">
            <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
              Contact us
            </p>
            <GoArrowRight className="md:text-3xl text-xl" />
          </div>
          <div className="bg-[#011752] px-6 min-h-[240px] pt-10 xl:pb-[88px] md:pb-[40px] pb-[33.31px] rounded-b-xl">
            <p className="font-primaryBold xl:text-[32px] sm:text-[22px] text-[12.26px] text-white">
              Residential Plumbing
            </p>
            <p className="font-primaryRegular text-white xl:text-xl text-base pt-8">
              From routine maintenance to intricate installations, trust us to
              handle all your home plumbing needs.
            </p>
          </div>
        </div>
    
        <div className="w-full">
          <img className="w-full" src={service2} alt="" />
          <div className="w-full xl:h-[85px] md:h-[55px] h-[32.56px] bg-[#FFC701] flex items-center justify-between md:px-6 px-3">
            <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
              Contact us
            </p>
            <GoArrowRight className="md:text-3xl text-xl" />
          </div>

          <div className="bg-[#011752] px-6 min-h-[240px] pt-10 xl:pb-[88px] md:pb-[40px] pb-[33.31px] rounded-b-xl">
            <p className="font-primaryBold xl:text-[32px] sm:text-[22px] text-[12.26px] text-white">
              Commercial Plumbing
            </p>
            <p className="font-primaryRegular text-white xl:text-xl text-base pt-8">
              Businesses rely on our expertise for efficient and reliable
              plumbing solutions tailored to their requirements.
            </p>
          </div>
        </div>
      
        <div className="w-full">
          <img className="w-full" src={service3} alt="" />
          <div className="w-full xl:h-[85px] md:h-[55px] h-[32.56px] bg-[#FFC701] flex items-center justify-between md:px-6 px-3">
            <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
              Contact us
            </p>
            <GoArrowRight className="md:text-3xl text-xl" />
          </div>
          <div className="bg-[#011752] px-6 min-h-[240px] pt-10 xl:pb-[88px] md:pb-[40px] pb-[33.31px] rounded-b-xl">
            <p className="font-primaryBold xl:text-[32px] sm:text-[22px] text-[12.26px] text-white">
              Emergency repairs
            </p>
            <p className="font-primaryRegular text-white xl:text-xl text-base pt-8">
              Plumbing emergencies demand swift action. Plomberie 360 is your
              dependable partner for urgent repairs 24/7.
            </p>
          </div>
        </div>
      </div> */}

      <div className="md:grid hidden gap-5 md:pt-[60px] pt-[30px] lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {serviceData &&
          serviceData.map((item, index) => (
            <>
              <div key={index} className="flex flex-col">
                <img
                  className="w-full rounded-t-lg"
                  src={item.image_url}
                  alt=""
                />
                <div className="w-full xl:h-[85px] md:h-[55px] h-[32.56px] bg-[#FFC701] flex items-center justify-between md:px-6 px-3">
                  <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
                    {item.contact}
                  </p>
                  <GoArrowRight className="md:text-3xl text-xl" />
                </div>
                <div className="bg-[#011752] px-6 pt-10 xl:pb-[88px] md:pb-[40px] pb-[33.31px] flex-grow rounded-b-xl flex flex-col">
                  <p className="font-primaryBold xl:text-[32px] sm:text-[25px] text-[20px] text-white">
                    {item.heading}
                  </p>
                  <p className="font-primaryRegular text-white xl:text-xl md:text-base text-[15px] pt-8 flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>

      {/* small device car */}
      <div className="md:hidden  pt-[27px] ">
        <div className="slider-container ">
          <div className="hide-scroll-bar flex overflow-x-scroll ">
            <div className="flex gap-[7.66px] flex-nowrap">
              <div className=" max-w-xl w-64">
                <img className="w-full" src={service1} alt="" />
                <div className="w-full  h-[32.56px] bg-[#FFC701] flex items-center justify-between px-3">
                  <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
                    Contact us
                  </p>
                  <GoArrowRight className="md:text-3xl text-xl" />
                </div>
                <div className="bg-[#011752] px-3 pb-5 pt-[15px] rounded-b-sm">
                  <p className="font-primaryBold xl:text-[32px] sm:text-[22px] text-[12.26px] text-white">
                    Residential Plumbing
                  </p>
                  <p className="font-primaryRegular text-white  sm:text-sm text-[10px]  pt-3">
                    From routine maintenance to intricate installations, trust
                    us to handle all your home plumbing needs.
                  </p>
                </div>
              </div>

              <div className="  max-w-xl w-64">
                <img className="w-full" src={service2} alt="" />
                <div className="w-full  h-[32.56px] bg-[#FFC701] flex items-center justify-between px-3">
                  <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
                    Contact us
                  </p>
                  <GoArrowRight className="md:text-3xl text-xl" />
                </div>
                <div className="bg-[#011752] px-3 pb-5 pt-[15px] rounded-b-sm">
                  <p className="font-primaryBold xl:text-[32px] sm:text-[22px] text-[12.26px] text-white">
                    Residential Plumbing
                  </p>
                  <p className="font-primaryRegular text-white  sm:text-sm text-[10px]  pt-3">
                    From routine maintenance to intricate installations, trust
                    us to handle all your home plumbing needs.
                  </p>
                </div>
              </div>

              <div className=" max-w-xl w-64">
                <img className="w-full" src={service3} alt="" />
                <div className="w-full  h-[32.56px] bg-[#FFC701] flex items-center justify-between px-3">
                  <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
                    Contact us
                  </p>
                  <GoArrowRight className="md:text-3xl text-xl" />
                </div>
                <div className="bg-[#011752] px-3 pb-5 pt-[15px] rounded-b-sm">
                  <p className="font-primaryBold xl:text-[32px] sm:text-[22px] text-[12.26px] text-white">
                    Residential Plumbing
                  </p>
                  <p className="font-primaryRegular text-white  sm:text-sm text-[10px]  pt-3">
                    From routine maintenance to intricate installations, trust
                    us to handle all your home plumbing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button className="sm:hidden mt-[27px]">View all services</Button>
    </div>
  );
};
export default ServiceSections;
