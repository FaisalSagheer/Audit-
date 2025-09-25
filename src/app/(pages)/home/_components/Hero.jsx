"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageTrail from "./ImageTrail";
function Hero() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          position: "relative",
          // top: -44,
          overflow: "hidden",
        }}
      >
        <ImageTrail
        key={""}
        items={[
          "https://picsum.photos/id/287/300/300",
          "https://picsum.photos/id/1001/300/300",
          "https://picsum.photos/id/1025/300/300",
          "https://picsum.photos/id/1026/300/300",
          "https://picsum.photos/id/1027/300/300",
          "https://picsum.photos/id/1028/300/300",
          "https://picsum.photos/id/1029/300/300",
          "https://picsum.photos/id/1030/300/300",
          // ...
        ]}
        variant={1}
      />
        {/* <video
          poster="/"
          src="./assets/homeVideo.mp4"
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
        ></video> */}
      </div>
      <div className="absolute text-center mx-auto max-w-7xl left-0 right-0 lg:w-4xl">
        <div className="relative -top-145 text-black">
          <h1 className="text-2xl lg:text-5xl pb-4 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-sm lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            nobis accusamus, porro dicta facere alias, sit aliquam laboriosam
            quos cumque fugiat. Recusandae, nesciunt nemo.
          </p>
          <div className="z-10">
            <Button className="text-sm lg:text-lg py-6 mt-5">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
