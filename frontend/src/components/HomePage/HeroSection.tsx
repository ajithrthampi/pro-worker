import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { slider1, slider2, slider3 } from "@/assets";

import { sslider1, sslider2, sslider3 } from "@/assets";

// import data_set from "../../utils/data";
// import french_data_set from "../../utils/french";
// import { useEffect, useState } from "react";
// import { ModalContext } from "../context/ModalContext";
// import { LanguageContext } from "../context/LanguageContext";
import useLanguageData from "@/hooks/useLanguageData";
import { ModalContext } from "../context/ModalContext";

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

const HeroSection = () => {
  const { value, setValue } = ModalContext();
  const languageData = useLanguageData();
  
    // Filter data based on "name:hero"
    const getSectionData = (data: SectionData[], sectionName: string) => {
      const section = data.find((item) => item.section === sectionName);
      return section ? section.data : null;
    };
    const heroSectionData = getSectionData(languageData, 'hero');



    



  // const { languageValue } = LanguageContext();
  // const [languageData, setLanguageData] = useState(data_set);

  // useEffect(() => {
  //   // Switch data based on language value
  //   if (languageValue === "FRN") {
  //     setLanguageData(french_data_set);
  //   } else {
  //     setLanguageData(data_set);
  //   }
  // }, [languageValue]);

  
  
  // // Filter data based on "name:hero"
  // const getSectionData = (data: SectionData[], sectionName: string): Record<string, DataItem> | null => {
  //   const section = data.find((item) => item.section === sectionName);
  //   return section ? section.data : null;
  // };
  
  // const heroSectionData = getSectionData(languageData, "hero");
  
  // console.log("languageValue22222", languageValue);
  // console.log("languageData", languageData);

  return (
    <>
      <div className="bg-[#052977]   h-full md:mt-28 mt-14 relative ">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                className="lg:h-screen h-[600px] w-screen object-cover md:block hidden"
                src={slider1}
                alt=""
              />
              <img
                className="min-h-screen w-screen object-cover md:hidden "
                src={sslider1}
                alt=""
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="lg:h-screen h-[600px]  w-screen object-cover md:block hidden"
                src={slider2}
                alt=""
              />
              <img
                className="min-h-screen w-screen object-cover md:hidden "
                src={sslider2}
                alt=""
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="lg:h-screen h-[600px]  w-screen object-cover md:block hidden"
                src={slider3}
                alt=""
              />
              <img
                className="min-h-screen w-screen object-cover md:hidden "
                src={sslider3}
                alt=""
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="absolute w-full top-0 flex justify-center items-center h-full">
          <div className=" max-w-[1490px] md:px-10 px-5 w-full h-full">
            <div className="flex flex-col sm:justify-center sm:pt-0 pt-10 h-full gap-[31px]  ">
              <h2 className=" font-primaryBold text-white xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] sm:w-6/12 w8/12 font-normal leading-tight">
                Welcome To Plomberie 360 Your Trusted Plumbing Partner.
                {/* {heroSectionData?.title?.translation_content} */}
              </h2>
              <p className="font-primaryRegular text-white xl:text-xl md:text-lg xxs:text-base text-[15px] xl:w-[690px] sm:w-2/3 ">
                At Plomberie 360, we redefine excellence in plumbing services.
                From leaky faucets to complex installations, our expert team is
                dedicated to delivering top-notch solutions tailored to your
                needs. Experience the difference with Plomberie 360 - where
                quality meets reliability.
                {/* {heroSectionData?.Description?.translation_content} */}
                {/* Experience the
              difference with Plomberie 360 - where quality meets reliability. */}
              </p>
              <div className="">
                <button
                  onClick={() => setValue(!value)}
                  className="bg-[#1D47B8] cursor-pointer font-primaryBold md:px-10 px-5 mt-5 md:rounded-[10px] rounded md:py-6 sm:py-3 py-2  border text-white md:text-3xl sm:text-base text-sm font-bold"
                >
                  {heroSectionData?.contact_us_button?.translation_content}
                  {/* Contact Us */}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Get_inTouch_modal />
        </div> */}
      </div>
    </>
  );
};

export default HeroSection;
