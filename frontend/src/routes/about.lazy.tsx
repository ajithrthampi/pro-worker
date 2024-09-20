import { createLazyFileRoute } from "@tanstack/react-router";
import { about11, about12, about13, about14, banner2 } from "@/assets";
import BannerSection_2 from "@/components/HomePage/BannerSection_2";
import { about_hero } from "@/assets";
import { ModalContext } from "@/components/context/ModalContext";
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

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const { value, setValue } = ModalContext();
  const languageData = useLanguageData("about_section");

  const getSectionData = (
    data: SectionData[],
    sectionName: string
  ): Record<string, DataItem> | null => {
    const section = data.find((item) => item.section === sectionName);
    return section ? section.data : null;
  };

  const aboutSectionData = getSectionData(languageData, "hero");
  const aboutSectionData2 = getSectionData(languageData, "why_choose_us");

  console.log("heroSectionData111111", aboutSectionData2);

  return (
    <div
      className="lg:pb-[550px] md:pb-[300px] pb-[200px] relative md:mt-28 mt-14"
      id="about"
    >
      {/* <div className="bg-[#011751] lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 w-full "> */}
      <div className="lg:h-scree md:h-[600px md:pt-20 pt10 bg-[#011751]  w-full flex-col flex justify-center items-center h-full  sm:pt-10">
        <div className="flex md:flex-row flex-col lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 w-full">
          <div className="flex flex-col md:pb-20 pb-10 sm:justify-center sm:pt-0 pt-10 h-full gap-[31px]  ">
            <h2 className=" font-primaryBold text-white xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] sm:w6/12 font-normal leading-tight">
              About Our Company Plomberie 360 - More Than Just Pipes
            </h2>
            <p className="font-primaryRegular text-white xl:text-xl md:text-lg xxs:text-lg text-[15px] xl:w-[690px] w-23 ">
              Founded by a seasoned plumber with over a decade of experience,
              Plomberie 360 stands as a beacon of trust in the Quebec plumbing
              industry. Our commitment to excellence, paired with a passion for
              quality service, sets us apart as your go-to plumbing solution.
            </p>
            <div className="" onClick={() => setValue(!value)}>
              <button className="bg-[#1D47B8] font-primaryBold md:px-10 px-5 mt-5 md:rounded-[10px] rounded md:py-6 sm:py-3 py-2  border text-white md:text-3xl sm:text-base text-sm font-bold">
                {aboutSectionData?.contact_us_button?.translation_content}
              </button>
            </div>
          </div>

          <div className="md:w-[40% xl:flex hidden items-end">
            <img className=" xl:w-full" src={about_hero} alt="" />
          </div>
        </div>
      </div>

      {/* </div> */}
      <div className=" w-full flex-col flex justify-center items-center h-full">
        <div className=" lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px]  w-full h-fu">
          <div className="xl:pt-[120px] md:pt[60px] pt-[46px] max-w-[1490px] md:px-10 px-5">
            <h1 className="xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold md:mt-0 -mt-3 ">
              About Plomberie 360
            </h1>

            <div className="pt-[57px] flex gap-8 flex-wrap sm:justify-between justify-center items-end w-full">
              {aboutSectionData2?.web_cards?.multiple_translation_content?.values?.map(
                (value:any, index:number) => (
                  <div
                    key={index}
                    className="flex md:gap-5 gap-3 flex-col items-center max-w-[332px]"
                  >
                    <img
                      className="md:w-20 w-10"
                      src={
                        index === 0
                          ? about11
                          : index === 1
                          ? about12
                          : index === 2
                          ? about13
                          : about14
                      }
                      alt=""
                    />
                    <h3 className="font-primaryBold text-2xl">
                      {value?.title || "Title"}
                    </h3>
                    <p className="font-primaryRegular text-xl">
                      {value?.description || "Description"}
                    </p>
                    <div className="h-[7px] md:mt-14 mt-5 w-full bg-[#8BE3FF] rounded-full"></div>
                  </div>
                )
              )}
            </div>
            <div className="absolute -bottom-48 left-0 md:px-14 px-5 right-0">
              <BannerSection_2 />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="lg:h-screen md:h-[600px] h-full sm:py-12 md:pb-0 pb-12 bg-[#011751] ">
        <div className=" flex justify-center items-center h-full">
          <div className=" max-w-[1490px] md:px-10 px-5 w-full h-full flex">
            <div className="flex flex-col sm:justify-center sm:pt-0 pt-10 h-full gap-[31px]  ">
              <h2 className=" font-primaryBold text-white xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] sm:w-6/12 font-normal leading-tight">
                About Our Company Plomberie 360 - More Than Just Pipes
              </h2>
              <p className="font-primaryRegular text-white xl:text-xl md:text-lg xxs:text-lg text-[15px] xl:w-[690px] w-2/3 ">
                Founded by a seasoned plumber with over a decade of experience, Plomberie 360 stands
                as a beacon of trust in the Quebec plumbing industry. Our commitment to excellence,
                paired with a passion for quality service, sets us apart as your go-to plumbing
                solution.

              </p>
              <div className="">
                <button className="bg-[#1D47B8] font-primaryBold md:px-10 px-5 mt-5 md:rounded-[10px] rounded md:py-6 sm:py-3 py-2  border text-white md:text-3xl sm:text-base text-sm font-bold">
               
                  Contact Us
                </button>
              </div>
            </div>

            <div>
              <img src={banner1} alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
