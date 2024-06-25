"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/components/header-component.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Products from "./SubHeaderComponents/Products";
import { useRouter } from "next/navigation";
// import Solutions from "./SubHeaderComponents/Solutions";
// import Resources from "./SubHeaderComponents/Resources";
import ButtonComponent from "./button.component";
import Image from "next/image";
function HeaderComponent() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array
  console.log(
    "%cDebug height of current screen :: ",
    "background: #222; color: #bada55",
    height
  );
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const router = useRouter();
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

  const toggleMenuItemsProductsClicked = () => {
    setMenuItemsProductsClicked(!menuItemsProductsClicked);
    setRotateIcon(!rotateIcon);
  };
  // when hovered on menu items the sub menu items should be visible and should not close when hovered in sub menu items and should close when hovered out of sub menu items
  const menuItemsHovered = (index: number) => {
    switch (index) {
      case 1:
        setMenuItemsProductsHovered(true);
        break;
      case 2:
        setMenuItemsSolutionsHovered(true);
        break;
      case 3:
        setMenuItemsResourcesHovered(true);
        break;
    }
  };
  const menuItemsUnHovered = (index: number) => {
    switch (index) {
      case 1:
        setMenuItemsProductsHovered(false);
        break;
      case 2:
        setMenuItemsSolutionsHovered(false);
        break;
      case 3:
        setMenuItemsResourcesHovered(false);
        break;
    }
  };

  const [rotateIcon, setRotateIcon] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsHeaderVisible(false); // Scrolling down
      } else {
        setIsHeaderVisible(true); // Scrolling up
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <div
        className={`${styles.header} ${
          isHeaderVisible ? styles.visible : styles.headerHidden
        }`}
      >
        <div className={styles.headerLeft}>
          <Image
            src="/logo.webp"
            alt="triorama logo"
            onClick={() => router.push("/")}
            className="hover:cursor-pointer"
            layout="fill"
          />
          <p
            style={{ color: "var(--color-text-primary)" }}
            onClick={() => router.push("/")}
            className="hover:cursor-pointer"
          >
            triorama.ai
          </p>
        </div>
        <div className={styles.headerCentre}>
          <div
            className={styles.headerItem}
            onMouseEnter={() => setMenuItemsProductsHovered(true)}
            onMouseLeave={() => setMenuItemsProductsHovered(false)}
          >
            <p>Products</p>
            {
              <motion.img
                src={
                  menuItemsProductsHovered ? "/show-less.svg" : "/moreicon.svg"
                }
                alt=""
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  rotate: menuItemsProductsHovered ? 0 : 0,
                }}
                transition={{ duration: 0.5 }}
              />
            }
            {menuItemsProductsHovered ? (
              <motion.div
                className={styles.subMenuDesktop}
                layoutId="products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Products />
              </motion.div>
            ) : null}
          </div>
          {/* <div
            className={styles.headerItem}
            onMouseEnter={() => menuItemsHovered(2)}
            onMouseLeave={() => menuItemsUnHovered(2)}
          >
            <p>Solutions</p>
            {
              <motion.img
                src={
                  menuItemsSolutionsHovered ? "/show-less.svg" : "/moreicon.svg"
                }
                alt=""
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  rotate: menuItemsSolutionsHovered ? 0 : 0,
                }}
                transition={{ duration: 0.5 }}
              />
            }
            {menuItemsSolutionsHovered ? (
              <motion.div
                className={styles.subMenuDesktop}
                layoutId="products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Solutions />
              </motion.div>
            ) : null}
          </div> */}
          {/* <div
            className={styles.headerItem}
            onMouseEnter={() => setMenuItemsResourcesHovered(true)}
            onMouseLeave={() => setMenuItemsResourcesHovered(false)}
          >
            <p>Resources</p>
            {
              <motion.img
                src={
                  menuItemsResourcesHovered ? "/show-less.svg" : "/moreicon.svg"
                }
                alt=""
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  rotate: menuItemsResourcesHovered ? 0 : 0,
                }}
                transition={{ duration: 0.5 }}
              />
            }
            {menuItemsResourcesHovered ? (
              <motion.div
                className={styles.subMenuDesktop}
                layoutId="products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Resources />
              </motion.div>
            ) : null}
          </div> */}
          <p>Pricing</p>
          <p onClick={() => router.push("/company")} className="cursor-pointer">
            Company
          </p>
        </div>
        <div className={styles.headerRight}>
          {/* <p>Login</p> */}
          <ButtonComponent
            type="primary"
            onClick={() => router.push("/contact-sales")}
          >
            Contact Sales
          </ButtonComponent>
        </div>
      </div>

      {/* mobile view */}
      <div className={styles.header_mobile}>
        <div className={styles.headerLeft}>
          <img src="/logo.svg" alt="triorama logo" />

          <p>triorama.ai</p>
        </div>

        <div
          className={styles.hamburgerIcons}
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
          className={styles.hamburgerMenu}
          style={{
            display: "block",
            background: "transparent",
          }}
        >
          <div
            className={
              burgerMenuOpen ? styles.activeHeader : styles.inactiveHeader
            }
          >
            <div className={styles.hamburgerActiveMenuItemsContainer}>
              <div
                className={styles.hamburgerMenuItemsContainer}
                onClick={toggleMenuItemsProductsClicked}
              >
                <div className={styles.hamburgerMenuItems}>
                  <p>Products</p>
                  <motion.img
                    src={rotateIcon ? "/show-less.svg" : "/moreicon.svg"}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: rotateIcon ? 0 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <AnimatePresence>
                  {menuItemsProductsClicked ? (
                    <motion.div
                      className={styles.subMenu}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                    >
                      <p>
                        <img src="/3d-editor.svg" alt="3d-editor" />
                        3D Editor
                      </p>
                      <p>
                        <img src="/3d-viewer.svg" alt="3d-viewer" />
                        3D Viewer
                      </p>
                      <p>
                        <img src="/custom-assets.svg" alt="custom-assets" />
                        Custom Assets
                      </p>
                      <p>
                        <img src="/asset-library.svg" alt="asset-library" />
                        Asset Library
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
              <motion.div className={styles.hamburgerMenuItemsContainer}>
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
              </motion.div>
              <motion.div className={styles.hamburgerMenuItemsContainer}>
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
              </motion.div>
              <p>Pricing</p>
              <p>Company</p>
              <div className={styles.buttonGroup_mobile}>
                <ButtonComponent type="default" icon="/login.svg">
                  Login
                </ButtonComponent>
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
    </>
  );
}

export default HeaderComponent;
