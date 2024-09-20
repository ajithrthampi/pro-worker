import { choose1, choose2, choose3 } from "@/assets";
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

const WhyChooseSection = () => {
  const languageData = useLanguageData();

  // Filter data based on "name:hero"
  const getSectionData = (data: SectionData[], sectionName: string) => {
    const section = data.find((item) => item.section === sectionName);
    return section ? section.data : null;
  };
  const heroSectionData = getSectionData(languageData, "why_choose_us");

  return (
    //Needed page//
    <div className="xl:pt-[120px] md:pt[60px] pt-[46px]">
      <h2 className="xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold">
        {heroSectionData?.title?.translation_content}
      </h2>
      <div className="xl:pt-[85px] md:pt-[60px] pt-[47px] flex flex-wrap  gap-7 justify-between items-end">
        <div className=" flex justify-start items-start flex-col md:gap-5 gap-3 lg:max-w-md md:max-w-xs">
          <img className="md:w-auto w-20" src={choose1} alt="" />
          <p className="font-primaryBold xl:text-[32px] sm:text-[24px] text-[24px]">
            {
              heroSectionData?.web_cards?.multiple_translation_content
                ?.services[0].title
            }
          </p>
          <p className="font-primaryRegular xl:text-xl hmd:text-lg xxs:text-base text-[15px] pt-[10px]  ">
            {
              heroSectionData?.web_cards?.multiple_translation_content
                ?.services[0].description
            }
          </p>
          <div className="h-[7px] w-full bg-[#8BE3FF] rounded-full"></div>
        </div>

        <div className=" flex justify-start items-start flex-col md:gap-5 gap-3 lg:max-w-md md:max-w-xs">
          <img className="md:w-auto w-20" src={choose2} alt="" />
          <p className="font-primaryBold xl:text-[32px] sm:text-[24px] text-[24px]">
            {
              heroSectionData?.web_cards?.multiple_translation_content
                ?.services[1].title
            }
          </p>
          <p className="font-primaryRegular xl:text-xl hmd:text-lg xxs:text-base text-[15px] pt-[10px]  ">
            {
              heroSectionData?.web_cards?.multiple_translation_content
                ?.services[1].description
            }
          </p>
          <div className="h-[7px] w-full bg-[#8BE3FF] rounded-full"></div>
        </div>

        <div className=" flex justify-start items-start flex-col md:gap-5 gap-3 lg:max-w-md md:max-w-xs">
          <img className="md:w-auto w-20" src={choose3} alt="" />
          <p className="font-primaryBold xl:text-[32px] sm:text-[24px] text-[24px]">
            {
              heroSectionData?.web_cards?.multiple_translation_content
                ?.services[2].title
            }
          </p>
          <p className="font-primaryRegular xl:text-xl hmd:text-lg xxs:text-base text-[15px] pt-[10px] ">
            {
              heroSectionData?.web_cards?.multiple_translation_content
                ?.services[2].description
            }
          </p>
          <div className="h-[7px] w-full bg-[#8BE3FF] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
