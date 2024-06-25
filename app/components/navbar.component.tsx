"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils/cn";
import { useRouter } from "next/navigation";
import styles from "@/styles/components/header-component.module.css";
import { motion, AnimatePresence } from "framer-motion";
import ButtonComponent from "./button.component";
import Products from "./SubHeaderComponents/Products";
import Image from "next/image";
export function NavbarComponent() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [menuItemsProductsClicked, setMenuItemsProductsClicked] =
    useState(false);
  const [menuItemsProductsHovered, setMenuItemsProductsHovered] =
    useState(false);
  const [menuItemsSolutionsClicked, setMenuItemsSolutionsClicked] =
    useState(false);
  const [menuItemsSolutionsHovered, setMenuItemsSolutionsHovered] =
    useState(false);
  const [menuItemsResourcesClicked, setMenuItemsResourcesClicked] =
    useState(false);
  const [menuItemsResourcesHovered, setMenuItemsResourcesHovered] =
    useState(false);
  const [rotateIcon, setRotateIcon] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenuItemsProductsClicked = () => {
    setMenuItemsProductsClicked(!menuItemsProductsClicked);
    setRotateIcon(!rotateIcon);
  };
  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 w-full mx-auto z-50 flex items-center justify-center",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="hidden lg:flex items-center justify-around w-full px-4">
          <div
            className="flex items-center justify-center gap-2 "
            onClick={() => router.push("/")}
          >
            <Image
              src="/triorama-logo2.webp"
              alt="triorama logo"
              className="hover:cursor-pointer"
              width={200}
              height={200}
            />
          </div>
          {/* <div className="hidden lg:flex items-center justify-center gap-8">
            <MenuItem setActive={setActive} active={active} item="Products">
              <Products />
              
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active="none"
              item="Pricing"
              link="pricing"
            ></MenuItem>
            <MenuItem
              setActive={setActive}
              active="none"
              item="Company"
              link="company"
            ></MenuItem>
          </div> */}
          {/* <div className="hidden lg:flex items-center justify-center">
            <ButtonComponent
              type="primary"
              onClick={() => router.push("/contact-sales")}
            >
              Contact Sales
            </ButtonComponent>
          </div> */}
        </div>
        {/* mobile view */}
        <div className=" lg:hidden w-full flex justify-between items-center">
          <div
            className="flex flex-1 w-full items-center hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/triorama-logo2.webp"
              alt="logo"
              width={150}
              height={150}
            />
          </div>

          <div
            className="flex justify-center items-end cursor-pointer"
            onClick={() => {
              setBurgerMenuOpen(!burgerMenuOpen);
            }}
          >
            {!burgerMenuOpen ? (
              <img src="/menu-icon.svg" alt="menu-icon" />
            ) : (
              <img src="/menu-close.svg" alt="menu-icon" />
            )}
          </div>

          <div
            className=""
            style={{
              display: "block",
              background: "transparent",
            }}
          >
            <div
              className={
                burgerMenuOpen
                  ? "fixed w-full right-0 h-[90vh] bg-backgroundPrimary transform translate-x-0 mt-8 duration-500 pt-0 flex flex-col z-100 overflow-y-auto"
                  : "fixed w-full right-0 h-[90vh] bg-white transform translate-x-full transition-transform duration-500 ease-in mt-8 "
              }
            >
              <div className="flex flex-col w-full h-full justify-between">
                <div className="flex flex-col py-0 px-lg mt-md w-[80%] h-full gap-8">
                  {/* <div className="" onClick={toggleMenuItemsProductsClicked}>
                    <div className="flex items-center gap-4">
                      <p className="text-sm cursor-pointer">Products</p>
                      <motion.img
                        src={rotateIcon ? "/show-less.svg" : "/moreicon.svg"}
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, rotate: rotateIcon ? 0 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-[12px] h-[7px] cursor-pointer"
                      />
                    </div>
                    <AnimatePresence>
                      {menuItemsProductsClicked ? (
                        <motion.div
                          className="mt-[10px] flex flex-col justify-center items-start gap-4"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{
                            duration: 0.35,
                            ease: "easeOut",
                            delay: 0.1,
                          }}
                        >
                          <p className="flex items-center gap-[10px] text-xs cursor-pointer">
                            <img
                              src="/3d-editor.svg"
                              alt="3d-editor"
                              className="w-[17px] h-[17px]"
                            />
                            3D Editor
                          </p>
                          <p className="flex items-center gap-[10px] text-xs cursor-pointer">
                            <img
                              src="/3d-viewer.svg"
                              alt="3d-viewer"
                              className="w-[17px] h-[17px]"
                            />
                            3D Viewer
                          </p>
                          <p className="flex items-center gap-[10px] text-xs cursor-pointer">
                            <img
                              src="/custom-assets.svg"
                              alt="custom-assets"
                              className="w-[17px] h-[17px]"
                            />
                            Custom Assets
                          </p>
                          <p className="flex items-center gap-[10px] text-xs cursor-pointer">
                            <img
                              src="/asset-library.svg"
                              alt="asset-library"
                              className="w-[17px] h-[17px]"
                            />
                            Asset Library
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div> */}
                  {/* <motion.div className={styles.hamburgerMenuItemsContainer}>
                  <div className={styles.hamburgerMenuItems}>
                    <p>Solutions</p>
                    <img src="/moreicon.svg" />
                  </div>
                  {menuItemsSolutionsClicked ? (
                    <div className={styles.subMenu}>
                      <p>Submenu 1</p>
                      <p>Submenu 2</p>
                      <p>Submenu 3</p>
                    </div>
                  ) : null}
                </motion.div> */}
                  {/* <motion.div className={styles.hamburgerMenuItemsContainer}>
                  <div className={styles.hamburgerMenuItems}>
                    <p>Resources</p>
                    <img src="/moreicon.svg" />
                  </div>
                  {menuItemsResourcesClicked ? (
                    <div className={styles.subMenu}>
                      <p>Submenu 1</p>
                      <p>Submenu 2</p>
                      <p>Submenu 3</p>
                    </div>
                  ) : null}
                </motion.div> */}
                  {/* <p
                    className="text-sm cursor-pointer"
                    onClick={() => router.push("/pricing")}
                  >
                    Pricing
                  </p>
                  <p
                    className="text-sm cursor-pointer"
                    onClick={() => router.push("/company")}
                  >
                    Company
                  </p> */}
                </div>
                <div className="flex justify-center items-center mb-10">
                  {/* <ButtonComponent type="default" icon="/login.svg">
                    Login
                  </ButtonComponent> */}
                  <ButtonComponent
                    type="primary"
                    onClick={() => router.push("/contact-sales")}
                  >
                    Contact Sales
                  </ButtonComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
