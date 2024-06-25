import React from "react";
import styles from "@/styles/components/testinomial-component.module.css";
import HomepageBackgroundComponent from "./homepage-background.component";
function TestinomialComponent() {
  return (
    <div
      className="hidden lg:flex h-[100vh] w-full lg:h-[50vh] justify-center items-center mt-xxl "
      style={{
        background: "url(/glow-1.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img
        src="/noodle1.svg"
        alt="noodle1"
        className="absolute top-0 left-0 right-0 z-1 w-[60%] lg:w-[40%] h-[25%]"
      /> */}
      {/* <img
        src="/glow-1.svg"
        alt="glow-1"
        className="top-0 left-0 right-0 absoulte w-full h-full"
      /> */}
      {/* <div className="justify-center lg:flex lg:justify-evenly items-center p-5 absolute">
        <div className="w-full h-full">
          <h1>Lorem</h1>
          <p className="w-[100%] lg:w-[80%] leading-10">
            “I highly recommend this transformative tool for any business
            looking to enhance their online shopping experience!”
          </p>
        </div>
        <div className="flex flex-col items-center w-full h-[30%] lg:w-[80%] lg:h-[300px] bg-[#fff] border border-[#252525] relative rounded-[20px] mt-10 lg:mt-0">
          <img
            className="w-full h-[40%] lg:h-[584px] mt-[-55px] lg:mt-[-142px]"
            src="/person.svg"
            alt="person"
          />
          <div className="absolute bg-[#fff] bottom-0 w-[60%] lg:w-[40%] h-[50px] flex justify-center items-center rounded-[40px] mb-[-25px]">
            <p className="w-full flex justify-center items-center gap-2.5 text-[18px] text-center absolute">
              Marcos
              <img src="/dot-seperator.svg" alt="dot-seperator" />
              CEO
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex w-full flex-col justify-center items-center gap-2">
        <div className="relative flex">
          {/* <img
            src="/glow-1.svg"
            alt="glow-1"
            className="top-0 left-0 right-0 relative w-full h-full"
          /> */}
          {/* <img
            src="/glow-our-blog-blue.svg"
            alt="glow-1"
            className="top-20 -left-28 right-0 relative w-[80%] h-full"
          /> */}
        </div>
        <div className="absolute flex flex-col justify-center items-center lg:px-64 xl:px-72">
          <p className="text-md xl:text-lg w-full leading-[41px] xl:leading-[55px] text-textPrimary font-light">
            Brands that adopt AR experiences are perceived as innovative by 70%
            of consumers, leading to increased brand loyalty.
          </p>
          <div className="flex items-center self-start mt-8 gap-4">
            <img src="/hifen.svg" alt="hifen" />
            <p className="text-sm text-textPrimary">PwC</p>
          </div>
        </div>
      </div>
      {/* <img
        src="/noodle2.svg"
        alt="noodle2"
        className="absolute top-[50%] right-0 z-[-1] w-[80%] h-[50%] lg:w-[40%] lg:h-[35%]"
      /> */}
    </div>
  );
}

export default TestinomialComponent;
