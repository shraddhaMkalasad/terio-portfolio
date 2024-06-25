"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/components/layout.module.css";

type LayoutPropsType = {
  customStyle?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Layout({ customStyle, children }: LayoutPropsType) {
  useEffect(() => {
    // do something when component mounts
  }, []);

  return (
    <>
      <div
        style={customStyle}
        className="max-w-[1200px] flex flex-col items-center justify-center m-auto "
      >
        {children}
      </div>
    </>
  );
}
