import styles from "@/styles/pages/mokobara.module.css";
import ButtonComponent from "../components/button.component";
import { color } from "framer-motion";
import DropDownComponent from "../components/DropDownComponent";

export default function MokobaraTestimonialComponent() {
  return (
    <div className=" flex flex-col-reverse lg:flex-row gap-[20px] w-full p-md ">
      <div className="flex flex-1 flex-col justify-center items-start md:pt-[50px] md:px-[10px] pt-[40px] lg:pt-0">
        {/* <img src="/mokobara.svg" alt="" />  border border-solid border-gray-300">
        {/* <div className="w-319 lg:w-full flex justify-center items-start    bg-[#f2edf8]  border border-solid border-gray-300"> */}
        {/* <img src="/mokobara.svg" alt="" />
          <p className="font-normal text-base leading-6 text-gray-600">
            &ldquo;Since incorporating Triorama&rsquo;s 3D Viewer, our customer
            engagement has soared. The interactive and realistic product views
            have not only enhanced our online presence but also boosted our
            sales significantly.&rdquo;
          </p> */}

        <p className="flex text-[#252525]">
          <img
            className="-mt-[110px] md:-mt-[100px] lg:-mt-40 md:ml-[20px] mr-[22px] lg:mr-[50px]  "
            src="/left-quote-icon.svg"
            alt=""
          />
          &ldquo;Shoppers are 5 times more likely to complete a purchase when they
          interact with products through AR.&rdquo;{" "}
          <img
            className="lg:pt-[100px] pt-[60px] md:pt-[20px] lg:pr-[10px] "
            src="/right-quote-icon.svg"
            alt=""
          />
        </p>

        <p className="flex text-[#252525] pt-[10px]  lg:pt-[20px] lg:text-sm font-bold pl-[70px] lg:pl-[110px]">
          Shopify
        </p>
        {/* </div> */}
        {/* <div className="relative flex flex-col items-center mt-[12px] lg:mt-[0]  w-full h-[225.18px] lg:h-[484px] border border-gray-300 shadow-lg rounded-lg">
          <div className="absolute self-start">
            <p className=" h-[12px] lg:h-[24px]  pl-[20px] pt-[24px] font-normal text-[8px] lg:text-base text-center text-gray-600">
              &ldquo;The most powerful 3D viewer&rdquo;
            </p>
          </div>
          <img
            src="/the-most-powerful-3d-viewer.svg"
            alt=""
            className="w-full h-full object-cover rounded-bl-lg rounded-br-lg"
          />
          <div className="hidden lg:flex mt-[400px] absolute">
            <ButtonComponent type="default">View Case Study</ButtonComponent>
          </div>
        </div> */}
      </div>
      <div className="box-border flex flex-1 flex-col w-full py-[46px] bg-opacity-50 bg-white border border-gray-300 shadow-md rounded-lg">
        <p
          style={{ padding: "40px 46px" }}
          className="font-normal text-base leading-6 text-gray-700"
        >
          Have a project in mind that you think we&rsquo;d be a great fit for
          it? We&rsquo;d love to know what you&rsquo;re thinking!
        </p>
        <div className="flex justify-center w-full">
          <DropDownComponent />
        </div>
      </div>
    </div>
  );
}
