import React from "react";
import styles from "@/styles/components/contact-us-section.module.css";
import ButtonComponent from "./button.component";
import SubscribeToOurNewsletterComponent from "../components/SubscribeToOurNewsletterComponent";
import Link from "next/link";

function ContactUsSectionComponent() {
  return (
    <div className=" w-full lg:h-[636px] h-full flex-col lg:flex items-center justify-center lg:gap-10 gap-5 py-10 px-0 lg:py-[100px] lg:px-0 rounded-[24px] mt-xl">
      <div className=" w-[80%] h-[95%] lg:w-[90%] lg:h-full block lg:flex items-center justify-center gap-5 lg:gap-md p-0 lg:py-0 lg:px-0 rounded-[24px] mx-auto">
        <div className="w-full h-full bg-backgroundTertiary shadow-md rounded-[24px] flex flex-col justify-evenly  mb-10 lg:mb-0  p-md lg:py-0 px-4 gap-md items-start lg:items-center">
          <h3 className=" w-full lg:w-[90%] text-[24px] lg:text-[32px] font-[500] text-left m-0 p-0 text-textPrimary ">
            Revolutionize Your Business Presence with Triorama
          </h3>
          <p className="w-[90%] lg:w-[90%] leading-6 lg:leading-8">
            Join the ranks of forward-thinking businesses that are already
            reaping the benefits of immersive, engaging visuals..
          </p>
          <div className="flex items-center justify-center self-center">
            <Link href={"/contact-sales"}>
              <ButtonComponent type="primary">Connect With Us</ButtonComponent>
            </Link>
          </div>
        </div>
        <div className=" w-full lg:w-[80%] h-full bg-backgroundTertiary shadow-md rounded-[24px] flex flex-col items-start gap-md lg:items-center justify-evenly  p-md lg:py-0 px-4">
          <h3 className="w-full lg:w-[90%] text-[24px] lg:text-[32px] font-[500] text-left m-0 p-0 text-textPrimary ">
            Subscribe to our Newsletter
          </h3>
          <p className="w-[90%] lg:w-[90%] leading-6 lg:leading-8">
            Receive curated content that will inspire, inform, and elevate your
            approach to visual storytelling.
          </p>
          {/* <div className="contact-us-right-button"></div> */}
          <div className="flex  ">
            <SubscribeToOurNewsletterComponent/>
          </div>
          {/* <div className="flex justify-center items-center gap-[10px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-[51px] border-b border-[##7A86C9
              ] text-[16px] bg-transparent outline-none"
            /> <ButtonComponent type="default">
              <img
                src="https://terabyt.azureedge.net/websiteassets/arrow-outward-black.svg?sp=r&st=2024-05-06T07:18:42Z&se=5024-05-06T15:18:42Z&spr=https&sv=2022-11-02&sr=b&sig=4Ic19M2r%2F9jhyoCEkWYoW1SrVZoKtoU3IIvK6qQnSpk%3D"
                alt="go"
                className="w-[15px] h-[15px] lg:w-[17px] lg:h-[17px]"
              />
            </ButtonComponent>
            <div className="bg-buttonBackgroundPrimary p-[5px] lg:p-[10px] rounded-full flex items-center justify-center">
              <img
                src="/arrow-outward.svg"
                alt="go"
                className="w-[15px] h-[15px] lg:w-[17px] lg:h-[17px]"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactUsSectionComponent;
