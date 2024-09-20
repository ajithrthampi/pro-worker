import { about1, tool, setting, maintain } from "@/assets";
import useLanguageData from "@/hooks/useLanguageData";
import { Link } from "@tanstack/react-router";

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

const AboutSection = () => {

  const languageData = useLanguageData();
  
    // Filter data based on "name:hero"
    const getSectionData = (data: SectionData[], sectionName: string) => {
      const section = data.find((item) => item.section === sectionName);
      return section ? section.data : null;
    };
    const heroSectionData = getSectionData(languageData, 'about');

  return (
    // Page Needed//
    <div className="xl:pt-[120px] md:pt[60px] pt-[46px] ">
      <div className=" flex md:flex-row flex-col gap-10 items-center">
        <div className="md:w-[50%]">
          <img className="w-full md:w-[676px]" src={about1} alt="" />
        </div>
        <div className="md:w-[50%] flex flex-col h-full xl:gap-28 gap-10 -mt5">
          <div className="">
            <h1 className="xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold md:mt-0 -mt-3 ">
              About Plomberie 360
            </h1>
            <p className="xl:text-xl hmd:text-lg xxs:text-base text-[15px] pt-[23px] font-primaryRegular">
              Founded by a seasoned plumber with more than a decade of
              experience, Plomberie 360 ​​positions itself as a trusted
              reference in the plumbing industry in Quebec. Our commitment to
              excellence, coupled with a passion for quality service, sets us
              apart as your preferred plumbing solution.
            </p>
            <div className="lg:pt-14 hmd:pt-10 pt-7">
              {/* <Button>About us</Button> */}
              <Link to="/about">
                <button className="lg:py-3 py-3 rounded-lg lg:px-6 px-3 bg-[#8BE3FF] font-primaryBold lg:text-base text-sm">
                {heroSectionData?.about_us_button?.translation_content}
                {/* About us */}
                </button>
              </Link>
            </div>
          </div>
          <div className=" md:flex hidden flex-wrap  items-center gap-[23px]">
            <div className="flex items-center xl:gap-[23px] gap-[10px]">
              <hr className="bg-[#8BE3FF] border-none xl:h-[54px] h-[40px] xl:w- w-1 rounded-[10px]" />
              <img className="md:w-14 w-10" src={tool} alt="" />
              <p className="font-bold xl:text-base text-sm font-primaryBold">
              {heroSectionData?.about_section_sub?.multiple_translation_content?.REPAIR?.content}
                
              </p>
            </div>

            <div className="flex items-center xl:gap-[23px] gap-[10px]">
              <hr className="bg-[#8BE3FF] border-none xl:h-[54px] h-[40px] xl:w- w-1 rounded-[10px]" />
              <img className="md:w-14 w-10" src={setting} alt="" />
              <p className="font-bold xl:text-base text-sm font-primaryBold">
              {heroSectionData?.about_section_sub?.multiple_translation_content?.IMPROVE?.content}
                
              </p>
            </div>

            <div className="flex items-center xl:gap-[23px] gap-[10px]">
              <hr className="bg-[#8BE3FF] border-none xl:h-[54px] h-[40px] xl:w- w-1 rounded-[10px]" />
              <img className="md:w-14 w-10" src={maintain} alt="" />
              <p className="font-bold xl:text-base text-sm font-primaryBold">
              {heroSectionData?.about_section_sub?.multiple_translation_content?.MAINTAIN?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
