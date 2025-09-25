"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

function Services() {
  const cardData = [
    {
      icon: <Settings size={40}/>,
      title: "Account Management & Leadership",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam dolore sint nulla itaque rerum sit, dolor, possimus
              molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
              at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      icon: <Settings size={40}/>,
      title: "Content & Partnerships",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam dolore sint nulla itaque rerum sit, dolor, possimus
              molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
              at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      icon: <Settings size={40}/>,
      title: "Data & Analytics",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam dolore sint nulla itaque rerum sit, dolor, possimus
              molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
              at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
  ];
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl py-10 lg:py-20 px-10 lg:px-0">
        <div className="flex justify-center flex-col items-center">
          <div className="text-center">
            <h2 className="text-5xl">Our Services</h2>
            <p className="lg:w-2xl text-sm md:text-[1rem] pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              veniam dolores adipisci natus magni porro earum inventore vel
              soluta tempora vero ad corrupti molestias totam, rerum delectus
            </p>
          </div>
          <div>
            <div className="flex flex-wrap lg:flex-nowrap py-12 gap-4">
             {cardData.map((item,index)=>
              <div className="mx-2 border p-6" key={index}>
                    <span>{item.icon}</span> 
                    <h4 className="text-2xl py-2 font-semibold pb-2">{item.title}</h4> 
                    <p>{item.description}</p> 
              </div>  
                )}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
        <Button className="text-sm lg:text-lg py-6 -mt-16 capitalize bg-background text-black underline hover:bg-white">
          <Link href="/services">Learn More About our services</Link>
          <ArrowRight/>
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
