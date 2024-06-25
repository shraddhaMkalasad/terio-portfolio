"use client"
import { useState, useLayoutEffect, useEffect } from "react";
 
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
 
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    {
        width: 0,
        height: 0,
    }
  );
 
  useEffect(() => {
    if(window)setWindowDimensions(getWindowDimensions());
  }, []);
 
  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  return windowDimensions;
};
 
export default useWindowDimensions;