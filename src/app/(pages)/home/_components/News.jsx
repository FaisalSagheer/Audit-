"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

function News() {
  const cardData = [
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "The Future of A.I In Advertising",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
      ipsam dolore sint nulla itaque rerum sit, dolor, possimus molestias dignissimos 
      aspernatur quis nobis omnis fugit ab quidem,
      at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "Building An Authentic Brand Voice",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        ipsam dolore sint nulla itaque rerum sit, dolor, possimus
        molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
        at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "How to Double E-commerce Sale?",
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
            <h2 className="text-5xl">Latest News</h2>
            <p className="lg:w-2xl text-sm md:text-[1rem] pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              veniam dolores adipisci natus magni porro earum inventore vel
              soluta tempora vero ad corrupti molestias totam, rerum delectus
            </p>
          </div>
          <div>
            <div className="flex flex-wrap lg:flex-nowrap py-12 gap-4">
              {cardData.map((item, index) => (
                <div className="mx-2 border" key={index}>
                  {/* <div className="flex justify-center bg-cover">
                    <img src={item.src} alt="/" className="" />
                  </div> */}
                  <div className="py-4 px-6">
                  <div className="flex capitalize justify-between text-[0.55rem] lg:text-[0.6rem] font-semibold py-1">
                    <span className="rounded-full border px-3 py-1">
                    Web Development
                    </span>
                    <span className="rounded-full border px-3 py-1">
                    Web Designing
                    </span>
                    <span className="rounded-full border px-3 py-1">
                    Software Development
                    </span>
                  </div>
                    <h4 className="text-2xl py-2 font-semibold pb-2">
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                    <div className="flex justify-end -mb-2 -mr-5">
                      <Button className="text-sm lg:text-lg py-6 capitalize bg-background text-black underline hover:bg-white">
                        <Link href="/services">Learn More</Link>
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <Button className="text-lg py-6 capitalize bg-background text-black underline hover:bg-white">
            <Link href="/services">Get Latest News</Link>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default News;
