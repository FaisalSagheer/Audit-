"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Culture() {
  return (
    <div className="bg-accent">
      <div className="mx-auto max-w-7xl py-10 lg:py-20 px-10">
        <div className="flex justify-between lg:flex-row flex-col">
          <div>
            <h2 className="text-5xl">Our Culture</h2>
            <p className="lg:w-2xl text-sm md:text-[1rem] pt-4 py-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              veniam dolores adipisci natus magni porro earum inventore vel
              soluta tempora vero ad corrupti molestias totam, rerum delectus
              repudiandae! Iure sed vel placeat optio adipisci expedita quaerat
              culpa consectetur sequi quis porro sunt minima debitis, maiores
              nam quam est recusandae libero accusamus. Quis consectetur nobis
              cumque ea culpa, dolorem totam, commodi deserunt pariatur quaerat
              labore, deleniti quam molestiae sed iusto. Accusamus voluptas at
              eos sit corporis adipisci rerum. Voluptate tempora dolorum nihil
              molestiae soluta. Labore autem placeat minima, quae exercitationem
              suscipit?
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/id/287/500/300" alt="/" />
          </div>
        </div>
        <Button className="text-sm lg:text-lg py-6 mt-4 lg:-mt-16 capitalize bg-background text-black underline hover:bg-white">
          <Link href="/culture">Learn More About our culture</Link>
          <ArrowRight/>
        </Button>
      </div>
    </div>
  );
}

export default Culture;
