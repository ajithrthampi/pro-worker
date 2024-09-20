import { pservices1, email, phone } from "@/assets";

import { Button } from "../ui/button";
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

const ProvidedServices = () => {

  const languageData = useLanguageData();
  
  // Filter data based on "name:hero"
  const getSectionData = (data: SectionData[], sectionName: string) => {
    const section = data.find((item) => item.section === sectionName);
    return section ? section.data : null;
  };
  const heroSectionData = getSectionData(languageData, 'services_24/7');

  return (
    <div className="xl:pt-[120px] md:pt[60px] pt-[46px] ">
      <div className=" flex md:flex-row flex-col gap-10 items-start">
        <div className="md:w-[50%] flex flex-col h-full ">
          <div className="">
            <h1 className="xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold md:mt-0  ">
               {heroSectionData?.services_sub?.translation_content}
            </h1>
            <img
              className="w-full md:w-[676px] rounded-2xl sm:hidden sm:mt-0 mt-6"
              src={pservices1}
              alt=""
            />
            <p className="xl:text-xl hmd:text-lg xxs:text-base text-[15px] pt-[23px] font-primaryRegular">
              Providing peace of mind for your drainage and sewer system is our
              priority at Plomborie360, which is why we are always ready for
              service. Easy “Ring for Service” and we'll be there in no time. We
              ensure your comfort and resolve your worries, especially when an
              emergency or pipe breakdown occurs.
            </p>

            {/* <p className="xl:text-xl hmd:text-lg xxs:text-base text-[15px] pt-[23px] font-primaryRegular">
              Founded by a seasoned Forn Any Enquiry or call for service ,
              please don’t hesitate to contact us. Remember we are a call away
              from you!!
            </p> */}
          </div>
          <div className="flex flex-col md:gap-[39px] gap-[29px]">
            <div className="lg:pt-14 hmd:pt-10 pt-7">
              <Button>View all services</Button>
            </div>
            <p className="xl:text-xl hmd:text-lg xxs:text-base text-[15px] font-primaryRegular text-[#0971D2] ">
              Inquiries or emergency services, contact us 24/7
            </p>
            <div className="lg:flex hidden justify-between items-center">
              <div className="w-[70%">
                <img src={email} alt="" />
                <div className="font-primaryBold text-xl pt-4">
                  <label htmlFor="">
               {heroSectionData?.services_sub?.multiple_translation_content?.email?.content}
                  </label>
                  <div>
                    <a href="mailto:info@plomberie360.com" className="pt-1">info@plomberie360.com</a>
                  </div>
                </div>
              </div>

              <div className="w-[30%">
                <img src={phone} alt="" />
                <div className="font-primaryBold text-xl pt-4">
                  <label htmlFor="">
               {heroSectionData?.services_sub?.multiple_translation_content?.phone?.content}
                  </label>
                  <p className="pt-1">
                    <a href="tel:+15146019664">(514) 601 9664</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]  w-full ">
          <img
            className="sm:block hidden w-full md:w-[676px] rounded-2xl"
            src={pservices1}
            alt=""
          />
          <div className="lg:hidden flex justify-between w-full items-center lg:pt-20 sm:pt-10 -mt-5">
            <div className="">
              <img className="w-14" src={email} alt="" />
              <div className="font-primaryBold text-xl pt-4">
                <label
                  className="xl:text-xl hmd:text-lg xxs:text-base text-[15px]"
                  htmlFor=""
                >
                  Email Address
                </label>
                <p className="pt-1 xl:text-xl hmd:text-lg xxs:text-[14px] text-[10px]">
                  info@plomberie360.com
                </p>
              </div>
            </div>

            <div className="">
              <img className="w-14" src={phone} alt="" />
              <div className="font-primaryBold text-xl pt-4">
                <label
                  className="xl:text-xl hmd:text-lg xxs:text-base text-[15px]"
                  htmlFor=""
                >
                  Cell Number
                </label>
                <p className="pt-1 xl:text-xl hmd:text-lg xxs:text-[14px] text-[10px]">
                  (514) 601 9664
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidedServices;
