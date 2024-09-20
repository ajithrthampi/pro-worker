import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
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

const FooterSection = () => {
  const location = useLocation();
  const languageData = useLanguageData();
  
  // Filter data based on "name:hero"
  const getSectionData = (data: SectionData[], sectionName: string) => {
    const section = data.find((item) => item.section === sectionName);
    return section ? section.data : null;
  };
  const heroSectionData = getSectionData(languageData, 'footer_information');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <footer className=" bg-[#0A142F] w-full h-full  xl:pt-[120px] md:pt[60px] pt-[106px] md:pb-[81px] pb-[19px] px-6 ">
      <div className=" flex w-full flex-col items-center justify-center h-full ">
        <div className="text-white text-center ">
          <p className="font-primaryRegular text-sm uppercase tracking-[0.2rem] text-[#ced0d5]">
            {heroSectionData?.footer_section_sub?.multiple_translation_content?.content?.line_1}
          </p>
          <p className="font-primaryBold lg:text-[52px] md:text-[42px] sm:text-[32px] text-[28px] pt-3">
          {heroSectionData?.footer_section_sub?.multiple_translation_content?.content?.line_2}
          </p>
          <p className="font-primaryRegular text-[#ced0d5] sm:text-xl text-base pt-2">
          {heroSectionData?.footer_section_sub?.multiple_translation_content?.content?.line_3}
          </p>
          <p className="font-primaryRegular text-[14.7px] text-[#ced0d5] md:pt-[118px] pt-[50px]">
          {heroSectionData?.footer_section_sub?.multiple_translation_content?.content?.line_4}

            {/* <span className="underline">plumbing360</span> */}
          </p>
        </div>
        <div className="text-white w-full max-w-[1200px] pt-[74px] xl:px-0 lg:px-20 px-10">
          <div className=" ">
            <hr className="bg-[#3b4359] w-full border-none h-0.5 sm:block hidden " />
            <div className="pt-4 flex items-center justify-between">
              <img className="sm:w-16 w-10" src={logo} alt="" />
              <ul className="gap-[53px] font-primaryRegular md:flex hidden">
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/services">
                  <li>Services</li>
                </Link>
                <Link to="/contact">
                  <li>Contacts</li>
                </Link>
              </ul>
              <div className="flex md:gap-[26px] gap-[10px] ">
                <button className="lg:w-[47px] lg:h-[47px] sm:w-[37px] sm:h-[37px] w-[30px] h-[30px] flex justify-center items-center  rounded-full border-[3px] border-[#474f63]">
                  <FaLinkedinIn />
                </button>

                <button className="lg:w-[47px] lg:h-[47px] sm:w-[37px] sm:h-[37px] w-[30px] h-[30px] flex justify-center items-center rounded-full border-[3px] border-[#474f63]">
                  <GrFacebookOption />
                </button>

                <button className="lg:w-[47px] lg:h-[47px] sm:w-[37px] sm:h-[37px] w-[30px] h-[30px] flex justify-center items-center rounded-full border-[3px] border-[#474f63]">
                  <FaInstagram />
                </button>

                <button className="lg:w-[47px] lg:h-[47px] sm:w-[37px] sm:h-[37px] w-[30px] h-[30px] flex justify-center items-center rounded-full border-[3px] border-[#474f63]">
                  <IoLogoYoutube />
                </button>
              </div>
            </div>
            <hr className="bg-[#3b4359] w-full border-none h-0.5 sm:hidden mt-4" />
            <ul className="flex gap- justify-center gap-10 font-primaryRegular md:hidden pt-3">
              <li>About</li>
              <li>Services</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
