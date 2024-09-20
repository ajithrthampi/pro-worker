import { createFileRoute } from "@tanstack/react-router";
import { blog1 } from "@/assets";
import { BsArrowRight } from "react-icons/bs";
import BannerSection_2 from "@/components/HomePage/BannerSection_2";

export const Route = createFileRoute('/blog/blogpost')({
  component: BlogComponent
})

function BlogComponent() {

  const blog_data = [
    {
      date: "May 12th",
      blogImage_url:
        "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "What’s Involved in a Plumbing inspection?",
      profile_url:
        "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",
      avatar_name: "Anwadi Jain",
    },
    {
      date: "May 12th",
      blogImage_url:
        "https://images.pexels.com/photos/4239115/pexels-photo-4239115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "How to clean grease out of sink drains?",
      profile_url:
        "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      avatar_name: "Steven Ralph",
    },
    {
      date: "May 12th",
      blogImage_url:
        "https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "How to change washer of a pipe?",
      profile_url:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
      avatar_name: "Anwadi Jain",
    },
    {
      date: "May 12th",
      blogImage_url:
        "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Renovation success stories",
      profile_url:
        "https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      avatar_name: "Anwadi Jain",
    },
  ];

  const category_data = [
    {
      name: "Plumbing work",
    },
    {
      name: "Cooling",
    },
    {
      name: "Stories",
    },
    {
      name: "Learn about",
    },
    {
      name: "Maintenance",
    },
    {
      name: "Cleaning",
    },
  ];
 
  return (
    <div
    className="lg:pb-[550px] md:pb-[300px] pb-[200px] relative md:mt-28 mt-14"
    id="about"
  >
    <div className="sm:hidden block bg-[#011751]  sm:pt-10">
      {/* <div className=" md:px-10 px-5 w-full">
        <div className="flex flex-col md:pb-20 pb-10 sm:justify-center sm:pt-0 pt-10 h-full gap-[31px]  ">
          <h2 className=" font-primaryBold text-white xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] ">
            News and Articles
          </h2>
          <p className="font-primaryRegular text-white xl:text-xl md:text-lg xxs:text-lg text-[15px] xl:w-[690px] w-23 ">
            All you wanted to know about plumbing fixing pipes, leaks and DIY
            home improvements, everything under one click of subscribe button
            to stay updated.
          </p>
          <div className="">
            <div className=" flex flex-col gap-6">
              <input
                className="border-b  border-[#8BE3FF] bg-transparent placeholder:font-primaryRegular font-primaryRegular text-sm pb-1 w-full outline-none "
                placeholder="Enter Keyboard"
              />
              <button className="lg:h-10 py-2 rounded-lg w-32 text-white lg:px-6 px-2 bg-[#1D47B8] font-primaryBold lg:text-base text-sm hover:bg-[#2c56c9]">
              Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <div className=" w-full flex-col flex justify-center items-center h-full  pt-6">
      <div className=" lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 w-full h-fu">
        <h2 className=" font-primaryBold text-black xl:text-[45.77px] md:text-[35px] sm:text-[28px] xxs:text-[33px] text-[25px] sm:w6/12 font-normal leading-tight">
          How to unclog a drain
        </h2>
        <div className="pt-11 flex items-center gap-10">
          <button className="lg:py-3 py-3 rounded-lg text-white lg:px-6 px-3 bg-[#1D47B8] font-primaryBold lg:text-base text-sm">
            Learn about
          </button>
          <p className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px] ">
            21st June, 2024
          </p>
        </div>

        <div className="flex xlg:flex-row flex-col  items-start gap-10 pt-[40px]">
          <section className="xlg:w-[65%] border rounded-lg pb-10  ">
            <div>
              <img
                className="w-full h-[600px] object-cover rounded-lg"
                src="https://images.pexels.com/photos/4916272/pexels-photo-4916272.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div className="xlg:pt-10 pt-5 md:px-7 px-4">
                <p className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-base text-[15px] ">
                  A clogged drain has an obstacle of some sort in the pipe.
                  Needs something to dislodge or force the blockage out. You
                  could use a plumber and remain within your parameters. A
                  source of air might do it but who all keeps a air compressor
                  in the closet. Also hard to close the input point and will
                  do little with hair. A bathroom sink or tub drain is often
                  blocked by hair. Unhook the stopper and there is the hair.
                  In the sink there is a P-trap. This is often a source of
                  blockage. Just many possibilities. I have never needed a
                  plumber for a blockage. Have cleared out many blockages.
                  using my basic tools. Two possibilities that come to mind
                  are to dissemble the drain line in order to find the
                  obstruction and remove the blockage following the
                  restrictions in the question. The second option is to stop
                  the clog before it happens with placing a strainer over the
                  drain and being careful not to dump liquids into the drain
                  that are likely to harden inside the pipe.
                </p>
                <p className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-base text-[15px]">
                  Neither possibility is of much value when contemplating a
                  clogged drain, the second is a preventative measure. I
                  mentioned the first because someone ( most likely QPG )
                  asked to do something without following best practices.
                </p>

                <div>
                  <p className="font-primaryMedium text-black xl:text-xl md:text-lg xxs:text-lg text-[15px] mt-6">
                    4 Steps to Unclog Your Drain with Baking Soda & Vinegar
                  </p>
                  <ul className="p-2 flex flex-col gap-2">
                    <li className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px] mt-3">
                      <span className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px]">
                        1.{" "}
                      </span>
                      Start by pouring a pot of boiling water down the drain.
                    </li>
                    <li className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px] mt-3">
                      <span className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px]">
                        2.{" "}
                      </span>
                      Next, pour a cup of baking soda and 1 cup water/1 cup
                      vinegar solution.
                    </li>
                    <li className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px] mt-3">
                      <span className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px]">
                        3.{" "}
                      </span>
                      Cover with the drain plug and wait 5 to 10 minutes.
                    </li>
                    <li className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px] mt-3">
                      <span className="font-primaryRegular text-black xl:text-xl md:text-lg xxs:text-lg text-[15px]">
                        4.{" "}
                      </span>
                      Pour boiling water down the drain again.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="xlg:w-[35%] w-full border rounded-lg md:px-7 px-4 py-10">
            <div className=" flex items-end gap-5">
              <input
                className="border-b  border-black placeholder:font-primaryRegular font-primaryRegular text-sm pb-1 w-full outline-none "
                placeholder="Enter Keyboard"
              />
              <button className="lg:h-10 py-2 rounded-lg text-white lg:px-6 px-2 bg-[#1D47B8] font-primaryBold lg:text-base text-sm hover:bg-[#2c56c9]">
                Search
              </button>
            </div>

            <div className="sm:pt-14 pt-10 grid xlg:grid-cols-1 hmd:grid-cols-2 grid-cols-1 gap-5 ">
              {blog_data.map((item, index) => (
                <div className="flex gap-3  max-wfull w-full" key={index}>
                  <img
                    className="xl:w-36 md:w-32 xxs:w-28 w-24 xl:h-36 md:h-32 xxs:h-28 h-24 rounded-xl object-cover"
                    src={item?.blogImage_url}
                    alt=""
                  />
                  <div className=" flex flex-col justify-between py-1">
                    <div className="">
                      <p className="xl:text-[15px] md:text-[14px] sm:text-[13px] text-[11px] font-primaryRegular">
                        {item.date}
                      </p>
                      <p className="font-primaryBold xl:text-[17px] xxs:text-[14px] text-[13px] xxs:leading-none leading-4 text-base">
                        {item.heading}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        className="rounded-full sm:w-9 w-7 sm:h-9 h-7 border object-cover"
                        src={item.profile_url}
                        alt=""
                      />
                      <p className="xl:text-[15px] sm:text-sm text-[11px] font-primaryRegular">
                        {item.avatar_name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className=" pt-16">
              <p className="text-[26px] font-primaryBold">Categories</p>
              <div className="pt-4 flex flex-wrap gap-2 ">
                {category_data.map((item, index) => (
                  <button
                    className="text-white text-[17px] bg-[#1D47B8] px-3 py-1.5 rounded-md font-primaryRegular"
                    key={index}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="pt-10 flex justify-center items-center">
          <div className="flex items-center text-[#1D47B8] gap-3">
            <p className=" font-primaryRegular text-xl ">Next post</p>
            <BsArrowRight size={28} />
          </div>
        </div>
        <p className="text-center font-primaryMedium text-black xl:text-xl md:text-lg xxs:text-lg text-[15px] mt-3">
          Residential boiler
        </p>
      </div>
    </div>

    <div className="absolute -bottom-48 left-0 md:px-14 px-5 right-0">
      <BannerSection_2 />
    </div>
  </div>

  )
}