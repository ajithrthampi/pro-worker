import { createLazyFileRoute } from "@tanstack/react-router";
import { GoArrowRight } from "react-icons/go";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  service_hero,
} from "@/assets";
import BannerSection_2 from "@/components/HomePage/BannerSection_2";
import { ModalContext } from "@/components/context/ModalContext";

export const Route = createLazyFileRoute("/services")({
  component: Services,
});

function Services() {
  const { value, setValue } = ModalContext();


  const serviceData = [
    {
      contact: "Contact us",
      image_url: service1,
      heading: "Residential Plumbing",
      description:
        "24/7 emergency plumbing, ready to swiftly address issues, minimize damage, and restore functionality.",
    },
    {
      contact: "Contact us",
      image_url: service2,
      heading: "Emergency Plumbing Services",
      description:
        "From installations to repairs, Plomberie 360 offers comprehensive residential plumbing services. Trust our skilled team to enhance the plumbing in your home, ensuring efficiency and peace of mind.",
    },
    {
      contact: "Contact us",
      image_url: service3,
      heading: "Leak Detection and Repair",
      description:
        "Water leaks can be stressful. Plomberie 360 utilizes state-of-the-art equipment to detect and repair leaks promptly, minimizing damage and ensuring the integrity of your property.",
    },
    {
      contact: "Contact us",
      image_url: service4,
      heading: "Installation Services",
      description:
        "Whether it's faucets, dishwashers, or complex sewer pump systems, Plomberie 360 ensures precise installations tailored to your unique requirements. Experience seamless functionality from day one.",
    },
    {
      contact: "Contact us",
      image_url: service5,
      heading: "Commercial Plumbing",
      description:
        "Businesses trust Plomberie 360 for reliable, customized plumbing solutions. Our commercial services ensure smooth operations with minimal disruptions..",
    },
  ];

  return (
    <div className="lg:pb-[550px] md:pb-[300px] pb-[200px] relative md:mt-28 mt-14">
      <div className="lg:h-scree md:h-[600px md:pt-20 pt10 bg-[#011751]  w-full flex-col flex justify-center items-center h-full  sm:pt-10">
        <div className="flex md:flex-row flex-col justify-between lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 w-full">
          <div className="flex flex-col md:pb-20 pb-10 sm:justify-center sm:pt-0 pt-10 h-full gap-[31px]  ">
            <h2 className=" font-primaryBold text-white xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] sm:w6/12 font-normal leading-tight">
              A wide range of services
            </h2>
            <p className="font-primaryRegular text-white xl:text-xl md:text-lg xxs:text-lg text-[15px] xl:w-[690px] w-23 ">
              Quality is our guarantee. We offer a wide range of plumbing
              services to both residential and commercial clients.
            </p>
            <div className=""
                 onClick={() => setValue(!value)}
            >
              <button className="bg-[#1D47B8] font-primaryBold md:px-10 px-5 mt-5 md:rounded-[10px] rounded md:py-6 sm:py-3 py-2  border text-white md:text-3xl sm:text-base text-sm font-bold">
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:w-[40% xl:flex hidden items-end">
            <img
              className=" xl:w-full h-[calc(100vh-6rem)]"
              src={service_hero}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" w-full flex-col flex justify-center items-center h-full">
        <div className=" lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 w-full h-fu">
          <div className="xl:pt-[120px] md:pt[60px] pt-[46px] max-w-[1490px]">
            <h1 className="xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold md:mt-0 -mt-3 ">
              Wide variety of services
            </h1>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:pt-[60px] pt-[30px] lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {serviceData &&
          serviceData.map((item, index) => (
            <>
              <div key={index} className="flex flex-col">
                <img
                  className="w-full rounded-t-lg"
                  src={item.image_url}
                  alt=""
                />
                <div className="w-full xl:h-[85px] md:h-[55px] h-[32.56px] bg-[#FFC701] flex items-center justify-between md:px-6 px-3">
                  <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
                    {item.contact}
                  </p>
                  <GoArrowRight className="md:text-3xl text-xl" />
                </div>
                <div className="bg-[#011752] px-6 pt-10 xl:pb-[88px] md:pb-[40px] pb-[33.31px] flex-grow rounded-b-xl flex flex-col">
                  <p className="font-primaryBold xl:text-[32px] sm:text-[25px] text-[20px] text-white">
                    {item.heading}
                  </p>
                  <p className="font-primaryRegular text-white xl:text-xl md:text-base text-[15px] pt-8 flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        <div className="md:w-ful md:h-full h-[400px] border bg-[#011752] rounded-xl relative  px-5">
          <p className="font-primaryBold xl:text-[32px] sm:text-[25px] text-[20px] text-white pt-10">
            Great work quality, and delivered on time
          </p>
          <img
            className="absolute bottom-0 right-0 md:w-[320px] w-[240px] "
            src={service6}
            alt=""
          />
        </div>
      </div>

      {/* {serviceData &&
          serviceData.map((item, index) => (
            <div>
              <div className="w-full max-w-md  " key={index}>
                <img className="w-full" src={item.image_url} alt="" />
                <div className="w-full xl:h-[85px] md:h-[55px] h-[32.56px] bg-[#FFC701] flex items-center justify-between md:px-6 px-3">
                  <p className="font-primaryRegular xl:text-xl md:text-lg text-[9.19px]">
                    {item.contact}
                  </p>
                  <GoArrowRight className="md:text-3xl text-xl" />
                </div>
                <div className="bg-[#011752] px-6 min-h-[240px] pt-10 xl:pb-[88px] md:pb-[40px] pb-[33.31px] rounded-b-xl">
                  <p className="font-primaryBold xl:text-[32px] sm:text-[22px] text-[12.26px] text-white">
                    {item.heading}
                  </p>
                  <p className="font-primaryRegular text-white xl:text-xl text-base pt-8">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))} */}

      {/* <div className='w-full max-w-md bg-[#011752] rounded-xl h-full relative'>
          <p className='font-primaryBold xl:text-[32px] sm:text-[22px] text-[12.26px] text-white px-5'>
            Great work quality, and delivered on time
          </p>
          <div className="absolute right-0">
          <img src={service111} alt="" />
          </div>
        </div> */}
      {/* </div> */}

      <div className="absolute -bottom-48 left-0 md:px-14 px-5 right-0">
        <BannerSection_2 />
      </div>

      {/* <div className="lg:h-screen md:h-[600px] h-full sm:py-12 md:pb-0 pb-12 bg-[#011751] ">
        <div className=" flex justify-center items-center h-full">
          <div className=" max-w-[1490px] md:px-10 px-5 w-full h-full">
            <div className="flex flex-col sm:justify-center sm:pt-0 pt-10 h-full gap-[31px]  ">
              <h2 className=" font-primaryBold text-white xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] sm:w-6/12 font-normal leading-tight">
                A wide range of services
              </h2>
              <p className="font-primaryRegular text-white xl:text-xl md:text-lg xxs:text-lg text-[15px] xl:w-[690px] w-2/3 ">
                Quality is our guarantee. We offer a wide range of plumbing services to both
                residential and commercial clients.
              </p>
              <div className="">
                <button className="bg-[#1D47B8] font-primaryBold md:px-10 px-5 mt-5 md:rounded-[10px] rounded md:py-6 sm:py-3 py-2  border text-white md:text-3xl sm:text-base text-sm font-bold">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
