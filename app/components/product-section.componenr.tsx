/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import styles from "@/styles/components/product-section.module.css";
import HomepageBackgroundComponent from "./homepage-background.component";
import ButtonComponent from "./button.component";
import Layout from "./layout.component";
import { PinContainer } from "./ui/3d-pin";
import { motion, useAnimation, useSpring } from "framer-motion";
import Image from "next/image";
function ProductSectionComponent() {
  const listRef = useRef<(HTMLDivElement | null)[]>([null, null]);
  const [isScrolledDown1, setIsScrolledDown1] = useState(false);
  const [isScrolledDown2, setIsScrolledDown2] = useState(false);
  const [isScrolledDown3, setIsScrolledDown3] = useState(false);
  const controls = useAnimation();
  // const handleViewMore = () => 3
  //   setIsScrolledDown(true);
  //   const currentRef = listRef.current;
  //   if (currentRef) {
  //     const containerHeight = currentRef.scrollHeight;
  //     const clientHeight = currentRef.clientHeight;
  //     if (containerHeight !== undefined && clientHeight !== undefined) {
  //       const newScrollHeight = containerHeight - clientHeight;
  //       controls.start({
  //         y: newScrollHeight,
  //         transition: { duration: 8000, ease: "easeInOut" },
  //       });
  //     }
  //   }
  // };
  useEffect(() => {
    if (isScrolledDown1 && listRef.current[1]) {
      listRef.current[1].scrollTo({
        top: listRef.current[1].scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isScrolledDown1]);

  const handleViewMore1 = () => {
    setIsScrolledDown1(true);
  };
  const handleViewLess1 = () => {
    setIsScrolledDown1(false);
    controls.start({
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };
  // second div
  useEffect(() => {
    if (isScrolledDown2 && listRef.current[2]) {
      listRef.current[2].scrollTo({
        top: listRef.current[2].scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isScrolledDown2]);

  const handleViewMore2 = () => {
    setIsScrolledDown2(true);
  };
  const handleViewLess2 = () => {
    setIsScrolledDown2(false);
    controls.start({
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };
  // third div
  useEffect(() => {
    if (isScrolledDown3 && listRef.current[3]) {
      listRef.current[3].scrollTo({
        top: listRef.current[3].scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isScrolledDown3]);

  const handleViewMore3 = () => {
    setIsScrolledDown3(true);
  };
  const handleViewLess3 = () => {
    setIsScrolledDown3(false);
    controls.start({
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };
  const handleRef1 = (ref: HTMLDivElement | null) => {
    listRef.current[1] = ref;
  };
  const handleRef2 = (ref: HTMLDivElement | null) => {
    listRef.current[2] = ref;
  };
  const handleRef3 = (ref: HTMLDivElement | null) => {
    listRef.current[3] = ref;
  };
  return (
    <>
      <div className="hidden lg:flex w-full flex-col items-center justify-center my-0 mx-auto py-10 rounded-[20px] relative gap-[80px]">
        <Layout>
          <div className="w-full flex flex-col justify-center items-center text-center mb-16 ">
            <p className="py-[16px]">Engage your customers</p>
            <h1 className="z-1">AI-Powered 3D Visualization</h1>
          </div>
          <div className="w-full h-full py-[80px] ">
            <div className="w-full h-screen top-0">
              <div className="w-[95%] mx-auto  rounded-xl z-10">
                <div className="">
                  <h2 className="text-4xl font-[700] text-left mb-5 text-textPrimary">
                    3D Viewer
                  </h2>
                  <p>
                    3D Viewer Redefining Retail with Ultra-Fast,
                    <span className="font-[500] text-textPrimary">
                      &nbsp;AI-Enhanced Interactive Product Visualization
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 w-[full] h-[70vh]  z-10 mt-6 gap-4" >
                  <div className="w-[45%] h-full rounded-[24px] bg-backgroundBrandColor2 flex flex-col items-center justify-between px-20 py-10 gap-6 border-2 border-borderPrimary relative"
                  style={{
                    backgroundColor:
                      "var(--color-background-quaternary)",
                  }}>
                    {/* {isScrolledDown1 && (
                      <>
                        <div className="w-full flex flex-col justify-center items-center absolute top-0 left-0">
                          <img
                            src="/productSection2.svg"
                            className="w-full flex flex-col justify-center items-center"
                          />
                        </div>

                        <button
                          className="-z-1 absolute flex items-center justify-center self-center mx-auto left-0 right-0 top-5 py-4"
                          onClick={handleViewLess1}
                        >
                          <img src="/lessicon2.svg" alt="less-icon" />
                        </button>
                      </>
                    )} */}
                    <div
                      className="h-full overflow-y-auto"
                      style={{ scrollbarWidth: "thin" }}
                      ref={handleRef1}
                    >
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div
                          className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start"
                          style={{
                            backgroundColor:
                              "var(--color-background-quaternary)",
                          }}
                        >
                          <img
                            className="w-8 h-8"
                            src="/lightingIcon.svg"
                            alt="ai-enhanced"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Lightning-Fast Load Times
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Our 3D models boast industry-leading load speeds,
                            ensuring instant access and a frictionless user
                            experience that keeps customers engaged.
                          </p>
                        </div>
                      </div>

                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img
                            className="w-8 h-8"
                            src="/easy-integration.svg"
                            alt="easy-integration"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Rich Interactive Detail
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Detailed annotations and comprehensive metadata
                            bring an unprecedented level of product
                            understanding, driving informed purchase decisions.
                          </p>
                        </div>
                      </div>
                      {/* {!isScrolledDown1 && (
                        <div className="w-full flex flex-col justify-center items-center mt-5 absolute bottom-0 left-0">
                          <img
                            src="/productSection.svg"
                            className="w-full flex flex-col justify-center items-center mt-5 "
                          />
                        </div>
                      )} */}

                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start z-1">
                          <img
                            className="w-8 h-8"
                            src="/cloud-based-platform.svg"
                            alt="cloud-based-platform"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Cloud-Managed Libraries{" "}
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Enjoy effortless model management with our cloud
                            storage solutions, ensuring your custom models are
                            accessible, organized, and secure.
                          </p>
                        </div>
                      </div>
                      {/* {!isScrolledDown1 && (
                        <button
                          className="z-100 absolute flex items-center justify-center self-center mx-auto left-0 right-0 py-4"
                          onClick={handleViewMore1}
                          // whileTap={{ scale: 0.9 }}
                        >
                          <img src="/moreicon2.svg" alt="more-icon" />
                        </button>
                      )} */}

                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img
                            className="w-8 h-8"
                            src="/verified.svg"
                            alt="verified"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Subscription Perks{" "}
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Our 3D Viewer comes with a subscription model that
                            includes complimentary access to a growing asset
                            library, adding value to your investment.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <div className="mb-md">
                      <ButtonComponent type="primary" icon="/view-plans.svg">
                        Explore more features
                      </ButtonComponent>
                    </div> */}
                  </div>
                  <div className="w-[55%] h-full rounded-[24px] flex items-center justify-center p-0 bg-transparent"
                  style={{
                    backgroundColor:
                      "var(--color-background-quaternary)",
                  }}>
                    <div className="h-full w-full rounded-[24px] bg-backgroundBrandColor2 border-2 border-borderPrimary">
                      <div className="flex flex-col rounded-[24px] justify-center items-center h-full">
                        <div
                          // style={{ backgroundImage: "url(/3d-viewer2.svg)" }}
                          className="flex justify-center items-center"
                        >
                          {/* <img src="/3d-viewer3.svg" alt="" /> */}
                          {/* <img src="/bag.svg" className="w-full h-full" /> */}
                          <Image
                            src="/3d-viewer.webp"
                            alt="3d viewer"
                            style={{ objectFit: "contain" }}
                            width={600}
                            height={600}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="/placeholder.webp"
                          />
                          {/* <button className="triorama-button">Request a Demo</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3d - editor */}
            {/* <div
              className="w-full h-[90vh] top-0 bg-backgroundBrandColor2 mt-6"
              id={styles.card2}
            >
              <div className="w-[95%] mx-auto h-[100vh] rounded-xl z-10">
                <div className="">
                  <h2 className="text-4xl font-[700] text-left mb-5 text-textPrimary">
                    3D Editor{" "}
                  </h2>
                  <p>
                    Revolutionizing Design with
                    <span className="font-[500] text-textPrimary">
                      {" "}
                      Intuitive Tools
                    </span>{" "}
                    and{" "}
                    <span className="font-[500] text-textPrimary">
                      Smart Capabilities
                    </span>
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 w-[full] h-[70vh] bg-backgroundBrandColor2 z-10 mt-6">
                  <div className="w-[55%] h-full rounded-[24px] flex items-center justify-center p-0 bg-transparent">
                    <PinContainer
                      title="/3d-editor"
                      href="https://twitter.com/mannupaaji"
                    >
                      <div className="h-full w-full rounded-[24px] bg-backgroundTertiary border-2 border-borderPrimary">
                        <div className="flex flex-col w-full h-full rounded-[24px]">
                          <div
                            style={{
                              backgroundImage: "url(/3d-editor-product.svg)",
                            }}
                            className="w-full h-full bg-center bg-no-repeat flex flex-col justify-around items-center gap-8"
                          >

                          </div>
                        </div>
                      </div>
                    </PinContainer>
                  </div>
                  <div className="w-[45%] h-full rounded-[24px] bg-backgroundTertiary flex flex-col items-center justify-between p-20 gap-6 border-2 border-borderPrimary">
                    <div
                      className="h-full overflow-y-auto"
                      style={{ scrollbarWidth: "thin" }}
                    >
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div
                          className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start"
                          style={{
                            backgroundColor:
                              "var(--color-background-quaternary)",
                          }}
                        >
                          <img src="/clock.svg" alt="real-time" />
                          <h3 className="text-textPrimary text-sm font-[500] w-full">
                            Real Time Preview
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            The intuitive interface provides an instant preview
                            of how your 3D models will look in different
                            settings’
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img
                            src="/material.svg"
                            alt="material-customization"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Material Customization
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Effortlessly apply textures, experiment with
                            materials, and achieve a lifelike representation of
                            your envisioned 3D models.
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img
                            src="/scene-selection.svg"
                            alt="scene-selection"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Scene Selection
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Elevate your B2B workflow efficiency with the
                            flexibility and scalability of our cutting-edge
                            cloud solution.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div> */}

            {/* asset library */}
            <div className="w-full h-[90vh] top-0 mt-6" /*id={styles.card4}*/>
              <div className="w-[95%] mx-auto h-[100vh] rounded-xl z-10">
                <div className="">
                  <h2 className="text-4xl font-[700] text-left mb-5 text-textPrimary">
                    Asset Library
                  </h2>
                  <p>
                    Asset Library Unlock a World of Visuals with Our Extensive
                    and Dynamic 3D Asset Collection
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 w-[full] h-[70vh] z-10 mt-6" >
                  <div className="w-[55%] h-full rounded-[24px] flex items-center justify-center p-0 bg-transparent"
                  style={{
                    backgroundColor:
                      "var(--color-background-quaternary)",
                  }}>
                    <div className="h-full w-full rounded-[24px] bg-backgroundBrandColor2 border-2 border-borderPrimary">
                      <div className="flex flex-col w-full h-full rounded-[24px]">
                        <div className="w-full h-full bg-center bg-no-repeat flex flex-col justify-around items-center gap-8">
                          {/* <img src="/asset-library2.svg" alt="" /> */}
                          <Image
                            src="/asset-lib.webp"
                            alt="asset-lib"
                            style={{ objectFit: 'contain' }}
                            width={600}
                            height={600}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="/placeholder.webp"
                          />
                          {/* <img src="/asset-library-product.svg" className="w-full h-full" /> */}

                          {/* <button className="triorama-button">Request a Demo</button> */}
                        </div>
                      </div>
                    </div>
                    {/* <PinContainer
                      title="/asset-library"
                      href="https://twitter.com/mannupaaji"
                    ></PinContainer> */}
                  </div>
                  <div className="w-[45%] h-full rounded-[24px] bg-backgroundBrandColor2 flex flex-col items-center justify-between px-20 py-10 gap-6 border-2 border-borderPrimary relative"
                  style={{
                    backgroundColor:
                      "var(--color-background-quaternary)",
                  }}>
                    {/* {isScrolledDown2 && (
                      <>
                        <div className="w-full flex flex-col justify-center items-center absolute top-0 left-0">
                          <img
                            src="/productSection2.svg"
                            className="w-full flex flex-col justify-center items-center"
                          />
                        </div>

                        <button
                          className="-z-1 absolute flex items-center justify-center self-center mx-auto left-0 right-0 top-5"
                          onClick={handleViewLess2}
                        >
                          <img src="/lessicon2.svg" alt="less-icon" />
                        </button>
                      </>
                    )} */}
                    <div
                      className="h-full overflow-y-auto"
                      style={{ scrollbarWidth: "thin" }}
                      ref={handleRef2}
                      // animate={controls}
                    >
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div
                          className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start"
                          style={{
                            backgroundColor:
                              "var(--color-background-quaternary)",
                          }}
                        >
                          <img src="/diverse-assets.svg" alt="diverse-assets" />
                          <h3 className="text-textPrimary text-sm font-[500] w-full">
                            Diverse Repository
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Access a curated selection of assets that range from
                            generic to niche, ensuring you always have the
                            perfect visual for your product storytelling.
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img
                            src="/material.svg"
                            alt="material-customization"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Tailored Customization
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Blend, modify, and customize our assets to
                            perfection, with the added assurance of cloud-based
                            management and scalability for any volume.
                          </p>
                        </div>
                      </div>

                      {/* {!isScrolledDown2 && (
                        <div className="w-full flex flex-col justify-center items-center mt-5 absolute bottom-0 left-0">
                          <img
                            src="/productSection.svg"
                            className="w-full flex flex-col justify-center items-center mt-5 "
                          />
                        </div>
                      )} */}
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img src="/lightingIcon.svg" alt="scene-selection" />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            AI-Enhanced Search{" "}
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Discover the ideal assets with ease, thanks to our
                            AI-driven search functionality, which curates
                            suggestions aligned with your creative direction.
                          </p>
                        </div>
                      </div>
                      {/* {!isScrolledDown2 && (
                        <button
                          className="z-100 absolute flex items-center justify-center self-center mx-auto left-0 right-0"
                          onClick={handleViewMore2}
                        >
                          <img src="/moreicon2.svg" alt="more-icon" />
                        </button>
                      )} */}

                      <>
                        <div className="w-full flex flex-col justify-center items-center mt-5">
                          <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                            <img
                              src="/login.svg"
                              alt="material-customization"
                            />
                            <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                              Complimentary Access
                            </h3>
                          </div>
                          <div className="flex items-start justify-center w-full">
                            <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                              Enhance your platform with an ever-expanding asset
                              library, complementary with your subscription, to
                              continually refresh and elevate your product
                              displays.
                            </p>
                          </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center mt-5">
                          <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                            <img
                              src="/article.svg"
                              alt="material-customization"
                            />
                            <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                              Free Custom Requests
                            </h3>
                          </div>
                          <div className="flex items-start justify-center w-full">
                            <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                              Leverage your subscription to its fullest by
                              requesting custom assets when you can't find the
                              perfect match in our store, with up to 200 free
                              models tailored to your needs.
                            </p>
                          </div>
                        </div>
                      </>
                    </div>
                    {/* <div className="mb-md">
                      <ButtonComponent type="primary" icon="/view-plans.svg">
                        Explore more features
                      </ButtonComponent>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* custom assets */}
            <div className="w-full h-[90vh] top-0 mt-6" /*id={styles.card3}*/>
              <div className="w-[95%] mx-auto h-[100vh] rounded-xl z-10">
                <div className="">
                  <h2 className="text-4xl font-[700] text-left mb-5 text-textPrimary">
                    Custom Assets
                  </h2>
                  <p>
                    Custom Assets Crafting Exquisite,
                    <span className="font-[500] text-textPrimary">
                      {" "}
                      Data-Rich 3D Experiences for E-commerce Excellence
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 w-[full] h-[70vh] z-10 mt-6">
                  <div className="w-[45%] h-full rounded-[24px] bg-backgroundBrandColor2 flex flex-col items-center justify-between px-20 py-10 gap-6 border-2 border-borderPrimary relative"
                  style={{
                    backgroundColor:
                      "var(--color-background-quaternary)",
                  }}>
                    {/* {isScrolledDown3 && (
                      <>
                        <div className="w-full flex flex-col justify-center items-center absolute top-0 left-0">
                          <img
                            src="/productSection2.svg"
                            className="w-full flex flex-col justify-center items-center"
                          />
                        </div>

                        <button
                          className="-z-1 absolute flex items-center justify-center self-center mx-auto left-0 right-0 top-5"
                          onClick={handleViewLess3}
                        >
                          <img src="/lessicon2.svg" alt="less-icon" />
                        </button>
                      </>
                    )} */}
                    <div
                      className="h-full overflow-y-auto"
                      style={{ scrollbarWidth: "thin" }}
                      ref={handleRef3}
                    >
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div
                          className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start"
                          style={{
                            backgroundColor:
                              "var(--color-background-quaternary)",
                          }}
                        >
                          <img src="/cube.svg" alt="ai-enhanced" />
                          <h3 className="text-textPrimary text-sm font-[500] w-full">
                            Bespoke 3D Creations
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Create unique customer experiences with custom 3D
                            designs that reflect your brand’s essence, supported
                            by our cloud-based management system.
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img src="/blur.svg" alt="easy-integration" />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Detailed Visual Data
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Each model is infused with accurate annotations and
                            rich metadata, offering a deeper level of
                            interaction and information to the customer.
                          </p>
                        </div>
                      </div>
                      {/* {!isScrolledDown3 && (
                        <div className="w-full flex flex-col justify-center items-center mt-5 absolute bottom-0 left-0">
                          <img
                            src="/productSection.svg"
                            className="w-full flex flex-col justify-center items-center mt-5 "
                          />
                        </div>
                      )} */}
                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img
                            src="/verified2.svg"
                            alt="cloud-based-platform"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Request On-Demand{" "}
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Can’t find what you need in our asset store?
                            Subscribers can request up to 200 custom models free
                            of charge, expanding your visual inventory.
                          </p>
                        </div>
                      </div>
                      {/* {!isScrolledDown3 && (
                        <button
                          className="z-100 absolute flex items-center justify-center self-center mx-auto left-0 right-0"
                          onClick={handleViewMore3}
                        >
                          <img src="/moreicon2.svg" alt="more-icon" />
                        </button>
                      )} */}

                      <div className="w-full flex flex-col justify-center items-center mt-5">
                        <div className="flex items-center justify-center w-[100%] h-10 py-0 px-2.5 rounded-md gap-4 self-start">
                          <img
                            src="/cloud-based-platform.svg"
                            alt="cloud-based-platform"
                          />
                          <h3 className="text-textPrimary text-[20px] font-[500] w-full">
                            Seamless Cloud Integration{" "}
                          </h3>
                        </div>
                        <div className="flex items-start justify-center w-full">
                          <p className="text-xxs text-textSecondary font-normal w-[95%] pt-2 self-start text-left leading-6 my-2">
                            Our intuitive cloud platform ensures your custom
                            assets are always up-to-date and readily available
                            across all customer touchpoints.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="mb-md">
                      <ButtonComponent type="primary" icon="/view-plans.svg">
                        Explore more features
                      </ButtonComponent>
                    </div> */}
                  </div>
                  <div className="w-[55%] h-full rounded-[24px] flex items-center justify-center p-0 bg-transparent">
                    <div className="h-full w-full rounded-[24px] bg-backgroundBrandColor2 border-2 border-borderPrimary">
                      <div className="flex flex-col w-full h-full rounded-[24px]">
                        <div className="w-full h-full bg-center bg-no-repeat flex flex-col justify-around items-center gap-8"
                        style={{
                          backgroundColor:
                            "var(--color-background-quaternary)",
                        }}>
                          <Image
                            src="/custom-assets.webp"
                            alt="custom-assets"
                            style={{ objectFit: 'contain' }}
                            width={550}
                            height={550}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="/placeholder.webp"
                          />
                          {/* <img src="/custom-assets2.svg" alt="" /> */}

                          {/* <img src="/suitcase.svg" className="w-full h-full" /> */}

                          {/* <button className="triorama-button">Request a Demo</button> */}
                        </div>
                      </div>
                    </div>
                    {/* <PinContainer
                      title="/custom-assets"
                      href="https://twitter.com/mannupaaji"
                    ></PinContainer> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>

      {/* mobile view */}
      <div className="lg:hidden flex flex-col items-center justify-center bg-backgroundBrandColor2 rounded-[20px] w-full mt-lg">
        <div className="w-full h-full gap-md flex flex-col justify-center items-center text-center p-12">
          <p>Engage Your Customers</p>
          <h1>AI-Powered 3D Visualization</h1>
        </div>
        <div className="w-full h-auto mt-lg px-8">
          <div className="w-full h-full">
            <h1>3D Viewer</h1>
            <p>
              Transforming E-commerce with{" "}
              <span className="text-textPrimary">
                Interactive Product Experiences
              </span>
            </p>
            <div className="mt-10">
              <div className="bg-backgroundTertiary h-full py-4 mx-auto rounded-[20px] flex flex-col justify-centermt-lg gap-8 ">
                <div className="flex items-center justify-start gap-4 py-0 px-lg">
                  <img src="/easy-integration.svg" alt="easy-integration" />
                  <p>Easy Integration</p>
                </div>
                <div className="flex items-center justify-start gap-4 py-0 px-lg">
                  <img src="/material.svg" alt="material customization" />
                  <p>Material Customization</p>
                </div>
                <div className="flex items-center justify-start gap-4 py-0 px-lg">
                  <img src="/scene-selection.svg" alt="scene selection" />
                  <p>Scene Selection</p>
                </div>
                {/* <div className="w-full flex justify-center self-center px-4 sm:hidden">
                  <ButtonComponent type="primary" icon="/view-plans.svg">
                    Explore
                  </ButtonComponent>
                </div> */}
                <div className="hidden sm:flex w-full  justify-center items-center self-center">
                  <ButtonComponent type="primary" icon="/view-plans.svg">
                    Explore More Features
                  </ButtonComponent>
                </div>
              </div>
              <div className="w-full h-full p-10 flex flex-col justify-center items-center bg-backgroundTertiary rounded-[20px] mt-sm mb-xl">
                <Image
                  src="/3d-viewer.webp"
                  alt="3d viewer"
                  style={{ objectFit: 'contain' }}
                  width={400}
                  height={400}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/placeholder.webp"
                />
              </div>
            </div>
          </div>
          {/* 3d editor */}
          {/* <div className="w-full h-full">
            <h1>3D Editor</h1>
            <p>
              Revolutionizing Design with{" "}
              <span className="text-textPrimar">Intuitive Tools</span> and{" "}
              <span>Smart Capabilities</span>
            </p>
            <div className="bg-backgroundTertiary py-4 my-0 mx-auto rounded-[20px] flex flex-col justify-evenly gap-8 mt-lg">
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/clock.svg" alt="real-time" />
                <p>Real-Time Preview</p>
              </div>
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/material.svg" alt="material customization" />
                <p>Material Customization</p>
              </div>
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/scene-selection.svg" alt="scene selection" />
                <p>Scene Selection</p>
              </div>
              <div className="w-full flex justify-center self-center px-4 sm:hidden">
                <ButtonComponent type="primary" icon="/view-plans.svg">
                  Explore
                </ButtonComponent>
              </div>
              <div className="hidden sm:flex w-full  justify-center items-center self-center">
                <ButtonComponent type="primary" icon="/view-plans.svg">
                  Explore More Features
                </ButtonComponent>
              </div>
            </div>
            <div className="w-full h-full p-10 flex flex-col justify-center items-center bg-backgroundTertiary rounded-[20px] mt-sm mb-xl ">
              <img src="/3d-editor-product.svg" alt="3d-editor-product" />
              
            </div>
          </div> */}
          <div className="w-full h-full">
            <h1>Custom Assets</h1>
            <p>
              Redefining B2B Engagement with{" "}
              <span className="text-textPrimary">
                Immersive Visual Experiences
              </span>
            </p>
            <div className="bg-backgroundTertiary py-4 my-0 mx-auto rounded-[20px] flex flex-col justify-evenly gap-8 mt-lg">
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/clock.svg" alt="real-time" />
                <p>Real-Time Preview</p>
              </div>
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/material.svg" alt="material customization" />
                <p>Material Customization</p>
              </div>
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/scene-selection.svg" alt="scene selection" />
                <p>Scene Selection</p>
              </div>
              {/* <div className="w-full flex justify-center self-center px-4 sm:hidden">
                <ButtonComponent type="primary" icon="/view-plans.svg">
                  Explore
                </ButtonComponent>
              </div> */}
              <div className="hidden sm:flex w-full  justify-center items-center self-center">
                <ButtonComponent type="primary" icon="/view-plans.svg">
                  Explore More Features
                </ButtonComponent>
              </div>
            </div>
            <div className="w-full h-full p-10 flex flex-col justify-center items-center bg-backgroundTertiary rounded-[20px] mt-sm mb-xl">
              <Image
                src="/custom-assets.webp"
                alt="3d viewer"
                style={{ objectFit: 'contain' }}
                width={400}
                height={400}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/placeholder.webp"
              />
              {/* <button className="triorama-button">Request a Demo</button> */}
            </div>
          </div>
          {/* asset library */}
          <div className="w-full h-full">
            <h1>Asset Library</h1>
            <p>
              For businesses seeking{" "}
              <span className="text-textPrimary">dynamic</span> and{" "}
              <span className="text-textPrimary">efficient solutions </span>
            </p>
            <div className="bg-backgroundTertiary py-4 my-0 mx-auto rounded-[20px] flex flex-col justify-evenly gap-8 mt-lg">
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/clock.svg" alt="real-time" />
                <p>Real-Time Preview</p>
              </div>
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/material.svg" alt="material customization" />
                <p>Material Customization</p>
              </div>
              <div className="flex items-center justify-start gap-4 py-0 px-lg">
                <img src="/scene-selection.svg" alt="scene selection" />
                <p>Scene Selection</p>
              </div>
              {/* <div className="w-full flex justify-center self-center px-4 sm:hidden">
                <ButtonComponent type="primary" icon="/view-plans.svg">
                  Explore
                </ButtonComponent>
              </div> */}
              <div className="hidden sm:flex w-full  justify-center items-center self-center">
                <ButtonComponent type="primary" icon="/view-plans.svg">
                  Explore More Features
                </ButtonComponent>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-10 flex flex-col justify-center items-center bg-backgroundTertiary rounded-[20px] mt-sm mb-xl">
            <Image
              src="/asset-lib.webp"
              alt="asset-lib"
              style={{ objectFit: 'contain' }}
              width={400}
              height={400}
              loading="lazy"
              placeholder="blur"
              blurDataURL="/placeholder.webp"
            />
            {/* <button className="triorama-button">Request a Demo</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSectionComponent;
