
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ModalContext } from "../context/ModalContext";

const Get_inTouch_modal = () => {
  const { value, setValue } = ModalContext();


  return (
    <div className="max-w-4xl bg-[#011752] h-full  rounded-xl relative ">
      <div className=" text-white absolute right-5 top-5 cursor-pointer" onClick={() => setValue(!value)}>
        <IoMdClose size={26} />
      </div>

      <div className="lg:p-16 md:p-8 p-7">
        <h2 className="pt-16 font-primaryBold text-center text-white 2xl:text-[45.77px] lg:text-[35px] md:text-[30px] sm:text-[28px] xxs:text-[33px] text-[25px] font-normal leading-tight">
          Get in touch today
        </h2>

        <p className="font-primaryRegular text-white lg:text-lg text-base text-center pt-4">
          Get in touch with our reliable plumbing team for expert solutions to
          all your plumbing needs. Your satisfaction is guaranteed.
        </p>

        <div className=" flex sm:flex-row flex-col justify-between pt-6">
          <div className="flex xl:gap-5 gap-3 lg:pt-7 pt-3">
            <BsFillTelephoneFill className="text-[#8BE3FF] text-xl" />
            <h2 className="font-primaryBold  lg:text-lg text-base text-white">
              <a href="tel:+15146019664">(514) 601 9664</a>
            </h2>
          </div>

          <div className="flex xl:gap-5 gap-3 lg:pt-7 pt-3">
            <MdEmail className="text-[#8BE3FF] text-xl" />
            <h2 className="font-primaryBold  lg:text-lg text-base text-white">
              <a href="mailto:info@plomberie360.com" className="pt-1">
                info@plomberie360.com
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get_inTouch_modal;
