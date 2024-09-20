import { createRootRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import logo from "../assets/logo.png";
import FooterSection from "@/components/HomePage/FooterSection";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "./route.css";
import Get_inTouch_modal from "@/components/modal/Get_inTouch_modal";
import { ModalContext } from "@/components/context/ModalContext";
import { LanguageContext } from "@/components/context/LanguageContext";
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

const getFirstPathSegment = (pathname: string) => {
  return pathname.split("/")[1] || "";
};

export const Route = createRootRoute({
  component: () => {
    const [show, setShow] = useState(false);
    const [language, setLanguage] = useState("ENG");
    const languageData = useLanguageData();
    const { value } = ModalContext();
    const { languageValue, setLanguageValue } = LanguageContext();

    // Filter data based on "name:hero"
    const getSectionData = (data: SectionData[], sectionName: string) => {
      const section = data.find((item) => item.section === sectionName);
      return section ? section.data : null;
    };
    const heroSectionData = getSectionData(languageData, "header");

    const handleToggle = () => {
      // setLanguage((prevLanguage) => (prevLanguage === "ENG" ? "FRN" : "ENG"));
      setLanguageValue((prevLanguage: string) =>
        prevLanguage === "ENG" ? "FRN" : "ENG"
      );
    };

    let initVal = "en";
    const handleLanguage = () => {};

    //show navbar
    const handleShowNav = () => {
      setShow(!show);
    };

    const location = useLocation();
    const firstPathSegment = getFirstPathSegment(location.pathname);

    return (
      <>
       {firstPathSegment !== "admin" && 
        <div className="lg:px-[60px] md:px-[40px] px-[19px] lg:h-[118px] md:h-[90px] h-[60px] z-50 bg-white flex items-center justify-between fixed top-0 right-0 left-0">
          <img className="md:h-auto h-[42px]" src={logo} alt="" />
          <div className="hmd:block hidden">
            <div className="flex lg:gap-[83px] hmd:gap-[40px] gap-[30px] font-primaryRegular hmd:text-base text-sm">
              <Link to="/" className="[&.active]:font-bold">
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.Home
                }
              </Link>
              <Link to="/about" className="[&.active]:font-bold">
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.About
                }
              </Link>
              <Link to="/services" className="[&.active]:font-bold">
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.Services
                }
              </Link>
              <Link to="/contact" className="[&.active]:font-bold">
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.Contacts
                }
              </Link>
            

              {/* <Link to="/accounts" className="[&.active]:font-bold">
                Accounts
              </Link> */}
              <Link to="/blog" className="[&.active]:font-bold">
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.Blogs
                }
              </Link>
            </div>
          </div>
          <div className="hmd:flex hidden  items-center hmd:gap-10 gap-6">
            {/* <Button>Get an estimate</Button> */}
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  className="sr-only peer"
                  type="checkbox"
                  checked={languageValue === "FRN"}
                  onChange={handleToggle}
                />
                <div className="switch group peer ring-0 overflow-hidden bg-[#BDBDBD] border rounded-full outline-none duration-700 after:duration-200 w-16 h-8 shadow-md peer-checked:bg-gradient-to-r peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-gray900/50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 peer-checked:after:translate-x-8 peer-hover:after:scale-95">
                  <div
                    className={`absolute top-2 left-9 fill-green-600 w-10 h-10 text-xs font-primaryBold ${languageValue === "FRN" ? "opacity-100" : "opacity-100"}`}
                  >
                    ENG
                  </div>
                  <div
                    className={`absolute top-2 left-[5px] fill-red-600 w-10 h-10 text-xs font-primaryBold ${languageValue === "ENG" ? "opacity-100" : "opacity-100"}`}
                  >
                    FRN
                  </div>
                </div>
              </label>
            </div>
            <Link to="/contact">
              <button className="lg:py-3 py-3 rounded-lg lg:px-4 px-3 bg-[#8BE3FF] font-primaryBold lg:text-base text-sm">
                {heroSectionData?.get_estimate_button?.translation_content}
              </button>
            </Link>
          </div>

          <div className="hmd:hidden flex gap-6 items-center">
            <div>
              <label className="relative inline-flex items-center cursor-pointer ">
                <input
                  className="sr-only peer"
                  checked={languageValue === "FRN"}
                  onChange={handleToggle}
                  value=""
                  type="checkbox"
                />
                <div className="switch group peer ring-0 overflow-hidden bg-[#BDBDBD] border rounded-full outline-none duration-700 after:duration-200 w-16 h-8  shadow-md peer-checked:bg-gradient-to-r  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray900/50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1  peer-checked:after:translate-x-8 peer-hover:after:scale-95">
                  <div
                    className={`absolute  top-2 left-9 fill-green-600 w-6 h-6 text-xs font-primaryBold  ${languageValue === "FRN" ? "opacity-100" : "opacity-100"}`}
                  >
                    ENG
                  </div>
                  <div
                    className={`absolute top-2 left-[4.5px] fill-red-600  w-6 h-6 text-xs font-primaryBold  ${languageValue === "ENG" ? "opacity-100" : "opacity-100"}`}
                  >
                    FRN
                  </div>
                </div>
              </label>
            </div>

            <div className="hmd:hidden" onClick={handleShowNav}>
              <RxHamburgerMenu size={25} />
            </div>
          </div>

          {/* {show && ( */}
          <div
            className={`w-full  h-72 fixed  right-0 left-0 z-40 hmd:hidden transition-all ease-out duration-500 ${show ? " top-[60px]" : "-top-[800px]"} `}
          >
            <div className="flex flex-col p-6 gap-[16px] font-primaryRegular bg-white md:text-base text-xl pb-10">
              <Link
                to="/"
                className="[&.active]:font-bold"
                onClick={handleShowNav}
              >
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.Home
                }{" "}
              </Link>
              <hr className="border" />
              <Link
                to="/about"
                className="[&.active]:font-bold"
                onClick={handleShowNav}
              >
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.About
                }
              </Link>
              <hr className="border" />

              <Link
                to="/services"
                className="[&.active]:font-bold"
                onClick={handleShowNav}
              >
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.Services
                }
              </Link>
              <hr className="border" />

              <Link
                to="/contact"
                className="[&.active]:font-bold"
                onClick={handleShowNav}
              >
                {
                  heroSectionData?.navigation_menu?.multiple_translation_content
                    ?.Contacts
                }
              </Link>
              <hr className="border" />
              <Link
                to="/blog"
                className="[&.active]:font-bold"
                onClick={handleShowNav}
              >
                Blogs
              </Link>
              <hr className="border" />

              <div className=" flex md:flex-row flex-col gap-5 pt-3">
                {/* <Button>Get an estimate</Button> */}
                <Link to="/contact">
                  <button className="py-3 rounded-lg lg:px-4 px-3 bg-[#8BE3FF] font-primaryBold lg:text-base text-sm max-w-xs">
                    {heroSectionData?.get_estimate_button?.translation_content}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {value && (
            <div className="relative z-10">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" />
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  {/* <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"> */}
                  <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <Get_inTouch_modal />
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
        }
        <Outlet />
        {firstPathSegment !== "admin" && (
          <FooterSection />
        )}
      </>
    );
  },
});
