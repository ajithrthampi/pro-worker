import { banner3 } from "@/assets";

const BannerLocation = () => {
  return (
    <div className=" w-full flex-col flex justify-center items-center h-full">
      <div className=" lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px10 px5 w-full h-fu">
        <div className="xl:pt-[120px] md:pt[60px] pt-[46px] pb-32   ">
          <div className="lg:h-[498px] md:h-[300px] h-[200px md:rounded-3xl rounded-[6.7px] w-full relative bg-[#011751] overflow-hidden md:p-10 p-6">
            <div className="flex justify-center items-center h-full">
              <div className="flex md:flex-row flex-col justify-between gap-10">
                <div className="flex flex-col justify-center">
                  <h1 className="xl:text-[45.77px] hmd:text-[35px] text-white sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold md:mt-0 -mt-3 ">
                    Our Location
                  </h1>
                  <p className="text-lg text-white  font-primaryRegular pt-5">
                    64 Rue des Saules, Sainte-Anne-des-Plaines, Quebec J5N 3X7,
                    Canada
                  </p>
                </div>

                <div className="">
                  <img src={banner3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLocation;
