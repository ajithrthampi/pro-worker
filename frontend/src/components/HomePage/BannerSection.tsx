import { banner1 } from "@/assets";
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

const BannerSection = () => {

  const languageData = useLanguageData();
  
  // Filter data based on "name:hero"
  const getSectionData = (data: SectionData[], sectionName: string) => {
    const section = data.find((item) => item.section === sectionName);
    return section ? section.data : null;
  };
  const heroSectionData = getSectionData(languageData, 'focus_banner');

  return (
    <div className="xl:pt-[120px] md:pt[60px] pt-[46px] ">
      <div className="lg:h-[498px] md:h-[300px] h-[200px] md:rounded-3xl rounded-[6.7px] w-full relative bg-[#011751] overflow-hidden">
        <div className="flex items-center h-full skills-container">
          <h2 className="font-primaryBold w-[70%] xl:pl-28 lg:pl-20 sm:pl-10 pl-[18px] xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[20px] text-[16px]  text-white">
          {heroSectionData?.focus_banner_sub?.multiple_translation_content?.content}
          </h2>
          <img
            className=" h-full lg:w-auto  absolute sm:right-0 -right-14 bottom-0 top-0 "
            src={banner1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
