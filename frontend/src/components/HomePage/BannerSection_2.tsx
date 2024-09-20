import { BsFillTelephoneFill } from "react-icons/bs";
// import banner2 from "../../assets/images/banner2.svg";
import { banner2 } from "@/assets";
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


const BannerSection_2 = () => {

  const languageData = useLanguageData();
  
  // Filter data based on "name:hero"
  const getSectionData = (data: SectionData[], sectionName: string) => {
    const section = data.find((item) => item.section === sectionName);
    return section ? section.data : null;
  };
  const heroSectionData = getSectionData(languageData, 'contact_us_estimate_banner');

  return (
    <div className=" w-full flex-col flex justify-center items-center h-full ">
      <div className=" lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px]  w-full h-fu">
        <div className="xl:pt-[120px] md:pt[60px] pt-[46px] pb-32   ">
          <div className="lg:h-[498px] md:h-[300px] h-[200px] md:rounded-3xl rounded-[6.7px] w-full relative bg-[#011751] overflow-hidden">
            <div className="flex pl-20 flex-col items-center h-full ">
              <div className="flex justify-center flex-col h-full sm:w-auto w-[60%] md:ml-32">
                <h2 className="font-primaryBold   xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[20px] text-[16px]  text-white">
                 {heroSectionData?.contact_us_estimate_sub?.multiple_translation_content?.content}
                </h2>
                <div className="flex xl:gap-5 gap-3 lg:pt-7 pt-3">
                  <BsFillTelephoneFill className="text-[#8BE3FF] xl:text-4xl lg:text-3xl text-xl" />
                  <h2 className="font-primaryBold  xl:text-[34.24px] hmd:text-[25px] sm:text-[18px] xxs:text-[15px] text-[11px] text-white">
                    (514) 601 9664
                  </h2>
                </div>
              </div>

              <img
                className=" h-full lg:w-auto  absolute sm:right-0 xl:left-0 -left-10 bottom-0 top-0 "
                src={banner2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection_2;
