"use client";
import React, { ReactNode, useEffect } from "react";

type ButtonProps = {
  type: "primary" | "default" | "link";
  icon?: string;
  onClick?: () => void;
  children?: ReactNode | string;
};

let buttonClasses =
  "w-fit h-[50px] text-ellipsis text-nowrap text-xxs rounded-full shadow-md px-4 py-2 cursor-pointer transition-colors duration-300 lg:w-fit lg:h-[59px] md:w-[300px] flex items-center lg:text-xs font-[500] px-[40px]";

const buttonTypeStyleMap = {
  primary: `${buttonClasses} justify-center bg-buttonBackgroundPrimary text-buttonTextPrimary transition transition-all duration-300 ease-in-out hover:bg-buttonBackgroundPrimaryHover`,
  default: `${buttonClasses} justify-center bg-buttonBackgroundSecondary text-textPrimary transition transition-all duration-300 ease-in-out hover:bg-buttonBackgroundDefaultHover`,
  link: `${buttonClasses} justify-center text-textPrimary border-none bg-transparent shadow-none`,
};
let iconContainerClasses = `bg-backgroundPrimary p-2 lg:p-4 rounded-full`;

function ButtonComponent({ type, icon, children, onClick }: ButtonProps) {
  const conditionalStyles = icon ? "justify-centre" : "justify-center";
  const paddinStyles = icon ? "gap-2" : "";
  return (
    <button
      className={`${buttonTypeStyleMap[type]} ${conditionalStyles} ${paddinStyles}`}
      onClick={onClick}
    >
      {children}
      {icon && (
        <div className={iconContainerClasses}>
          <img src={icon} alt={icon} />
        </div>
      )}
    </button>
  );
}

export default ButtonComponent;
