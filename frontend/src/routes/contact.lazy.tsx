import { createLazyFileRoute } from "@tanstack/react-router";
import { banner2 } from "@/assets";
import { useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import BannerLocation from "@/components/HomePage/BannerLocation";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [openIndexes, setOpenIndexes] = useState([false, false, false, false, false]);

  const toggleOpen = (index: any) => {
    setOpenIndexes(openIndexes.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  const sections = [
    {
      id: 1,
      question: "What should I expect from the professional service?",
      answer:
        "Our IT service company offers a comprehensive range of services, including website and app development, custom software development, branding solutions, and more, tailored to meet your business needs.",
    },
    {
      id: 2,
      question: "What if I don’t like the service?",
      answer:
        "In addition to website and app development, custom software development, and branding solutions, we provide IT consulting, digital marketing, cloud solutions, and cybersecurity services to support your business growth and success.",
    },
    {
      id: 3,
      question: "How big is your team of plumbers?",
      answer:
        "We build our websites and apps using the latest technologies and a robust toolstack, ensuring high-performance, user-friendly interfaces, and seamless user experiences that align with your business objectives and brand identity",
    },
    {
      id: 4,
      question: "Does Plumbing has a project minimum?",
      answer:
        "We leverage a variety of auxiliary tools such as React, Angular, Vue.js, Node.js, and Django, complementing our primary toolstack, to deliver exceptional results in website, app, and custom software development, and branding projects.",
    },
    {
      id: 5,
      question: "How can I get a consultation and quote for my project?",
      answer:
        "We implement stringent security protocols, conduct regular code reviews, and perform thorough testing to ensure custom software's security. Additionally, we design scalable architectures to meet clients' evolving needs and growth requirements.",
    },
  ];

  return (
    <>
      <div className="lg:pb-[550px] md:pb-[300px]  xs:pb-[500px] xxs:pb-[440px] pb-[400px] relative md:mt-28 mt-14">
        {/* <div className="bg-[#011751] lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 w-full "> */}
        {/* modal */}
        {/* sample */}
        <div className="lg:h-scree md:h-[600px md:pt-20 pt-10 bg-[#011751]  w-full flex-col flex justify-center items-center h-full">
          <div className="flex md:flex-row flex-col lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 w-full">
            <div className="xl:w-[60%]  pb-20">
              <h2 className=" font-primaryBold text-white xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px]  font-normal leading-tight">
                Get in touch today
              </h2>
              <p className="font-primaryRegular text-white xl:text-xl md:text-lg xxs:text-lg text-[15px]  pt-5">
                Get in touch with our reliable plumbing team for expert solutions to all your
                plumbing needs. Your satisfaction is guaranteed.
              </p>

              <form action="">
                <div className="flex items-center">
                  <div className="w-full xl:pt-8 pt-4">
                    <div className=" w-full xl:pt-8 md:pt-4 pt-2">
                      <div className=" relative z-0 mb-5 w-full">
                        <input
                          type="text"
                          name="floating_first_name"
                          id="floating_first_name"
                          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 font-primaryRegular  md:text-xl text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 "
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_first_name"
                          className="absolute font-primaryRegular  md:text-xl text-sm top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                        >
                          Your name
                        </label>
                      </div>
                    </div>

                    <div className=" flex sm:flex-row flex-col md:gap-6 gap-4 xl:pt-8 md:pt-4 pt-2">
                      <div className=" relative z-0 mb-5 w-full">
                        <input
                          type="number"
                          name="floating_first_name"
                          id="floating_first_name"
                          className="peer block w-full  appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 font-primaryRegular  md:text-xl text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 "
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_first_name"
                          className="absolute font-primaryRegular  md:text-xl text-sm top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                        >
                          Phone number
                        </label>
                      </div>

                      <div className=" relative z-0 mb-5 w-full ">
                        <input
                          type="email"
                          name="floating_first_name"
                          id="floating_first_name"
                          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 font-primaryRegular  md:text-xl text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 "
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_first_name"
                          className="absolute font-primaryRegular  md:text-xl text-sm top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                        >
                          Email Address
                        </label>
                      </div>
                    </div>

                    <div className=" w-full xl:pt-8 md:pt-4 pt-2">
                      <div className=" relative z-0 mb-5 w-full">
                        <input
                          type="text"
                          name="floating_first_name"
                          id="floating_first_name"
                          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 font-primaryRegular  md:text-xl text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 "
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_first_name"
                          className="absolute font-primaryRegular  md:text-xl text-sm top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                        >
                          Your Location
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="bg-[#1D47B8] mt-8 font-primaryBold md:px-10 px-5  md:rounded-[10px] rounded lg:py-6 sm:py-3 py-2  border text-white md:text-3xl sm:text-base text-sm font-bold">
                  Get a Call
                </button>
              </form>
            </div>

            <div className="md:w-[40%] xl:flex hidden items-end">
              <img className=" xl:w-full" src={banner2} alt="" />
            </div>
          </div>
        </div>

        {/* <div className=" ">
          <div className="xl:pt-[120px] md:pt[60px] pt-[46px] max-w-[1490px] md:px-10 px-5 ">
            <h1 className="xl:text-[45.77px] hmd:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] font-primaryBold md:mt-0 -mt-3 ">
              Frequently asked questions
            </h1>
          </div>
        </div> */}
          {/* <div className=" flex flex-wrap justify-betwee gap-5 items-start  lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 mx-auto">
            {sections.map((section, index) => (
              <div key={section.id} className="flex flex-col md:pt-10 pt-5 ">
                <div
                  className={`cursor-pointer  ${openIndexes[index] ? "open_down" : ""}`}
                  onClick={() => toggleOpen(index)}
                >
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center xl:gap-24 md:gap-12 gap-6 ">
                      <p className="font-poppins font-medium lg:text-[32px] md:text-[25px] xs:text-[16px] font-primaryMedium">
                        {section.question}
                      </p>
                    </div>
                    <div className="lg:text-4xl md:text-2xl text-xl ">
                      {openIndexes[index] ? <HiOutlineMinus /> : <HiOutlinePlus />}
                    </div>
                  </div>
                  <div
                    className={`transition-max-height  duration-300 ease-out overflow-hidden ${
                      openIndexes[index] ? "max-h-64" : "max-h-0"
                    }`}
                  >
                    <div className="md:p-4 p-2">
                      <p className="font-poppins font-medium md:text-xl sm:text-lg text-sm font-primaryBold">
                        {section.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

        <div className="absolute -bottom-48 left-0  px-4 right-0">
          <BannerLocation />
        </div>
      </div>
    </>
    // <div className="lg:pb-[550px] md:pb-[300px] pb-[200px] relative">
    //   <div className='lg:h-screen md:h-[600px] h-full pb-12 bg-[#011751] '>
    //   <div className=" max-w-[1490px] md:px-10 px-5 w-full h-full">
    //     <div className=" flex justify-center items-center h-full">
    //       <div className="">
    //         <h2 className=" font-primaryBold text-white xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] sm:w-6/12 font-normal leading-tight">
    //           Get in touch today</h2>
    //         <p className="font-primaryRegular text-white xl:text-xl md:text-lg xxs:text-lg text-[15px] xl:w-[690px] w-2/3 ">
    //           Get in touch with our reliable plumbing team for expert solutions to all your plumbing needs. Your satisfaction is guaranteed.
    //         </p>
    //         <div className="">
    //           <form action="">
    //             <div className="flex items-center">
    //               <div className="w-full">
    //                 <div className=" w-full">
    //                   <div className=" relative z-0 mb-5 w-full">
    //                     <input type="text" name="floating_first_name" id="floating_first_name"
    //                       className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 " placeholder=" " required />
    //                     <label htmlFor="floating_first_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500">Your name</label>
    //                   </div>
    //                 </div>

    //                 <div className=" flex gap-6">
    //                   <div className=" relative z-0 mb-5 w-full">
    //                     <input type="number" name="floating_first_name" id="floating_first_name"
    //                       className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 " placeholder=" " required />
    //                     <label htmlFor="floating_first_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500">Phone number</label>
    //                   </div>

    //                   <div className=" relative z-0 mb-5 w-full">
    //                     <input type="email" name="floating_first_name" id="floating_first_name"
    //                       className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 " placeholder=" " required />
    //                     <label htmlFor="floating_first_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500">Email Address</label>
    //                   </div>
    //                 </div>

    //                 <div className=" w-full">
    //                   <div className=" relative z-0 mb-5 w-full">
    //                     <input type="text" name="floating_first_name" id="floating_first_name"
    //                       className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 " placeholder=" " required />
    //                     <label htmlFor="floating_first_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500">Your Location</label>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </form>
    //           <button
    //             className="bg-[#1D47B8] font-primaryBold md:px-10 px-5 mt-5 md:rounded-[10px] rounded md:py-6 sm:py-3 py-2  border text-white md:text-3xl sm:text-base text-sm font-bold">
    //             Contact Us
    //           </button>
    //         </div>
    //       </div>

    //       <div className="">
    //         <img className="w-[400px]" src={banner2} alt="" />
    //       </div>

    //     </div>
    //     </div>
    //   </div>

    // </div >
  );
}
