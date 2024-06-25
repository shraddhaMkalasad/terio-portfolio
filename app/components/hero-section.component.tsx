"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/components/hero-section.module.css";
// import "./HeroSection.css";
import ButtonComponent from "./button.component";
import Link from "next/link";
import useWindowDimensions from "@/hooks/styles/useWindowDimensions";
import Image from "next/image";
function HeroSectionComponent() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <>
      <div
        className="hidden lg:flex justify-between items-center bg-backgroundPrimary w-screen m-auto h-[100vh] mt-sm px-32"
        style={{
          background: "url(/heroSectionCombinedImages.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right",
        }}
      >
        <div className="flex justify-between items-center w-full h-full p-5 pb-0">
          <div className="w-full h-full py-5 px-0">
            <div className="flex flex-col justify-start items-start pt-lg gap-lg">
              <h1>Enhancing Customer Experiences through AI and 3D</h1>
              <p className="w-[75%]">
                Enhance your online retail with our AI-powered immersive AR and
                online shopping experiences.
                {/* <span
                  className="bg-gradient-to-br from-icon-primary via-transparent to-transparent text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(161.3deg, var(--color-icon-primary) 12.64%, rgba(0, 0, 0, 0.25) 117%)",
                  }}
                >
                  {" "}
                  AI-driven technology
                </span> */}
              </p>
              <div className="w-full h-14 flex justify-start items-start gap-4">
                <Link href="/contact-sales">
                  <ButtonComponent type="primary">
                    Contact Sales
                  </ButtonComponent>
                </Link>
                {/* <Image
                  src="https://terabyt.azureedge.net/websiteassets/aicomingsoon.webp?sp=r&st=2023-10-21T12:06:24Z&se=5023-10-21T20:06:24Z&spr=https&sv=2022-11-02&sr=b&sig=NEeC72EW%2BPZlpowwsz9B1aEanJRHpFVvlgizSMqs6ac%3D"
                  width={700}
                  height={700}
                  alt="Picture of the force"
                  className="absoulute"
                /> */}
                {/* <ButtonComponent type="primary">Get Started</ButtonComponent> */}
                {/* <ButtonComponent type="default">Request a demo</ButtonComponent> */}
              </div>
              {/* <img
                src="heroSectionNoodle2.svg"
                className="w-full h-full relative z-10 top-12 -left-100"
              /> */}
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center h-full -mt-36">
            {/* <img
              src="/heroSectionNoodle1.svg"
              className="w-full h-full relative -z-10 absolute top-0"
            /> */}

            <div className="h-full w-full absolute flex flex-col">
              {/* <Image
                src="https://terabyt.azureedge.net/websiteassets/heroSection2.svg?sp=r&st=2024-04-30T13:41:35Z&se=5024-04-30T21:41:35Z&spr=https&sv=2022-11-02&sr=b&sig=gkmDl42HyZSj7%2BrAaPUas%2FMb8QyElx9b%2FJZrlBoAY%2Fg%3D"
                alt="background"
                // className="h-full w-full"
                layout="fill"
                style={{ objectFit: 'contain' }}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              /> */}
              {/* <Image
                src="/heroSectionCombinedImages.svg"
                alt="hero image"
                layout="fill"
                style={{ objectFit: 'contain' }}
                placeholder="blur"
                blurDataURL="/placeholder.png"
                style={{ width: "100%", height: "100%" }}
              /> */}
            </div>

            {/* <Image
              src="/heroSection-glow.svg"
              alt=""
              className="absolute top-0 h-full w-full"
              width={100}
              height={100}
            />
            <div className="absolute -bottom-56 2xl:-bottom-36 right-0 left-64 2xl:left-80 z-0 h-3/4 w-3/4">
              <Image
                src="/heroSection3.svg"
                alt="background-2"
                // className="w-full h-full"
                layout="fill"
                style={{ objectFit: 'contain' }}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            </div> */}

            {/* <iframe
              className="h-full w-full"
              src="https://purple-glacier-0401ced10.3.azurestaticapps.net/?id=delivery_electric_scooter_C5CAE8.glb&sv=171334382263072000000&pk=public_854155e95216df2956d8ace9b31096904c1ab9f8a4a8b107&sig=cf14ce92198c73d6ed7d70e769a6d935b270baabeafe3a77a00852f7290d4fef&isExperimental=true&ui=false&background=fffdfa"
              loading="lazy"
            ></iframe> */}
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div
        className="lg:hidden flex flex-col items-center w-full gap-2 h-screen"
        style={{
          marginTop: windowHeight >= 1024 ? "40px" : 0,
          background: "url(/heroSectionCombinedMobile.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
        }}
      >
        <div className="flex flex-col items-center w-full gap-2">
          <div className="self-start p-4">
            <h1>Enhancing Customer Experiences through AI and 3D</h1>
            <p className="mt-4 w-full">
              Enhance your online retail with our AI-powered immersive AR and
              online shopping experiences.
              {/* <span
                className="bg-gradient-to-br from-icon-primary via-transparent to-transparent text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(161.3deg, var(--color-icon-primary) 12.64%, rgba(0, 0, 0, 0.25) 117%)",
                }}
              >
                {" "}
                AI-driven technology
              </span> */}
            </p>
          </div>
          <div className="w-full">
            {/* <img
              src="/heroSectionCombinedMobile.svg"
              alt="background"
              className="w-full h-3/4 rounded-[24px]"
            /> */}

            <div className="flex justify-center mt-lg mx-0 mb-0 gap-2 p-1 lg:gap-0">
              <Link href="/contact-sales">
                <ButtonComponent type="primary">Contact Sales</ButtonComponent>
              </Link>
              {/* <ButtonComponent type="default">Request a demo</ButtonComponent> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionComponent;
