"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import RollingGallery from "./RollingGallery";

function Work() {
  
  return (
    <div className="bg-accent">
      <div className="mx-auto max-w-7xl py-10 lg:py-20 px-10 lg:px-0">
        <div className="flex justify-center flex-col items-center">
          <div className="text-center">
            <h2 className="text-5xl">Our Work</h2>
            <p className="lg:w-2xl text-sm md:text-[1rem] pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              veniam dolores adipisci natus magni porro earum inventore vel
              soluta tempora vero ad corrupti molestias totam, rerum delectus
            </p>
          </div>
          <div>
  
            <RollingGallery />
          </div>
        </div>
        <div className="flex justify-center -mt-10 lg:mt-2">
          <Button className="text-lg py-6 capitalize bg-background text-black underline hover:bg-white">
            <Link href="/services">Learn More About our work</Link>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Work;
