"use client";
import React from "react";
import styles from "@/styles/components/footer-component.module.css";
import HomepageBackgroundComponent from "./homepage-background.component";
import Layout from "./layout.component";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
function FooterComponent() {
  const router = useRouter();
  return (
    <div className="h-full pb-16 lg:h-[75%] w-full bottom-0 mt-0 py-lg px-0 bg-[#101720]">
      <Layout>
        <div className="w-full flex flex-col items-center justify-center relative mx-auto">
          <div className="block justify-center lg:flex lg:justify-between items-center w-full h-[100px] gap-4">
            <div className="justify-center lg:justify-start w-full flex items-center gap-2.5 lg:w-72 h-20">
              <Image
                src="/triorama-logo2-dark.webp"
                alt="triorama logo"
                width={180}
                height={180}
              />
            </div>
            <div className="hidden lg:flex items-center justify-evenly w-[40%]">
              {/* <p className="font-normal text-[16px] text-textActionPrimary cursor-pointer">
                Products
              </p>
              <p
                className="font-normal text-[16px] text-textActionPrimary cursor-pointer"
                onClick={() => router.push("/pricing")}
              >
                Pricing
              </p>
              <p
                className="font-normal text-[16px] text-textActionPrimary cursor-pointer"
                onClick={() => router.push("/company")}
              >
                Company
              </p> */}

              {/* <p className="font-normal text-[16px] text-textActionPrimary">
                About Us
              </p>
              <p className="font-normal text-[16px] text-textActionPrimary">
                Contact Us
              </p> */}
            </div>
            <div className="flex items-center justify-center p-sm gap-6 lg:gap-6">
              {/* <img
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-4 cursor-pointer"
                src="/facebook-2.svg"
                alt="fb-icon"
              />
              <img
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-4 cursor-pointer"
                src="/twitter-2.svg"
                alt="twitter-icon"
              /> */}
              <Link href="https://www.instagram.com/triorama">
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-4 cursor-pointer"
                  src="/instagram-2.svg"
                  alt="insta-icon"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/triorama-ai/">
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-4 cursor-pointer"
                  src="/linkedin-2.svg"
                  alt="linkedin-icon"
                />
              </Link>
              <Link href="https://www.youtube.com/@TrioramaAI">
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-4 cursor-pointer"
                  src="/youtube-2.svg"
                  alt="yt-icon"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full mt-12 lg:mt-6">
            <hr className="w-full border-t-2 border-[#656FB0] " />
            <div className="w-full flex flex-col justify-center md:flex md:flex-row lg:justify-between items-center mt-4 gap-4 lg:gap-0 p-4 lg:p-0">
              <p className="font-normal text-xxs text-textDisable">
                Copyright © 2024 Triorama
              </p>
              <div>
                <p className="font-normal text-xxs text-textDisable flex">
                  All Rights Reserved |{" "}
                  <span className="font-normal text-xxs text-textDisable underline cursor-pointer gap-4">
                    {/* <Link href="https://taangastudios-my.sharepoint.com/:t:/p/praful/Efj2JAYyIJtIjbbTgOMxswQBcoCovnjtBMb4qeF_nr4rnw?e=jqcxDO"> */}
                    <Link href="/privacy">
                      Privacy Policy
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
{
  /* <div className={styles.socialMediaSection_mobile}>
            <img src="/facebook-2.svg" alt="fb-icon" />
            <img src="/twitter-2.svg" alt="twitter-icon" />
            <img src="/linkedin-2.svg" alt="linkedin-icon" />
          </div> */
}
export default FooterComponent;
