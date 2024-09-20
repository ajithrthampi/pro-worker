import { certification1, certification2, certification3 } from "@/assets";
import BannerSection_2 from "./BannerSection_2";
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

const CertificationSection = () => {

  const languageData = useLanguageData();
  
  // Filter data based on "name:hero"
  const getSectionData = (data: SectionData[], sectionName: string) => {
    const section = data.find((item) => item.section === sectionName);
    return section ? section.data : null;
  };
  const heroSectionData = getSectionData(languageData, 'certifications');

  return (
    <div className="xl:pt-[120px] md:pt[60px] pt-[46px] lg:pb-[550px] md:pb-[300px] pb-[200px] relative">
      <div>
        <h1 className="xl:text-[45.77px] text-center hmd:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold md:mt-0 -mt-3 ">
          {heroSectionData?.title?.translation_content}
        </h1>
        <div className="xl:pt-[55px] md:pt-[44px] pt-[20px] flex justify-center">
          <img
            className="xl:w-auto lg:max-w-xs md:max-w-[250px] sm:max-w-[170px] xs:max-w-[130px] max-w-[90px]"
            src={certification1}
            alt=""
          />
          <img
            className="xl:w-auto lg:max-w-xs md:max-w-[250px] sm:max-w-[170px] xs:max-w-[130px] max-w-[90px]"
            src={certification2}
            alt=""
          />
          <img
            className="xl:w-auto lg:max-w-xs md:max-w-[250px] sm:max-w-[170px] xs:max-w-[130px] max-w-[90px]"
            src={certification3}
            alt=""
          />
        </div>
      </div>
      <div className="absolute -bottom-48 left-0 right-0">
        <BannerSection_2 />
      </div>
    </div>
  );
};

export default CertificationSection;
