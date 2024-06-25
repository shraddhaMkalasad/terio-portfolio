"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function CompanySectionComponent() {
  return (
    <div className="h-[20rem] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/Mokobara.webp",
  },
  {
    image: "/str8bat.webp",
  },
  {
    image: "/designcafe-logo.webp",
  },
];
