'use client'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Culture() {
  const cardData = [
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "Sam Morrison",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
      ipsam dolore sint nulla itaque rerum sit, dolor, possimus molestias dignissimos
      aspernatur quis nobis omnis fugit ab quidem,
      at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "Jermaya Junior",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        ipsam dolore sint nulla itaque rerum sit, dolor, possimus
        molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
        at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "Adam Willson",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam dolore sint nulla itaque rerum sit, dolor, possimus
              molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
              at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "Adam Willson",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam dolore sint nulla itaque rerum sit, dolor, possimus
              molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
              at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "Adam Willson",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam dolore sint nulla itaque rerum sit, dolor, possimus
              molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
              at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
    {
      src: "https://picsum.photos/id/1001/500/500",
      title: "Adam Willson",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam dolore sint nulla itaque rerum sit, dolor, possimus
              molestias dignissimos aspernatur quis nobis omnis fugit ab quidem,
              at magni aperiam saepe? Impedit, distinctio facilis.`,
    },
  ];
  return (
    <div>
      <div className="bg-accent -mt-20">
        <div className="mx-auto max-w-7xl pt-40 pb-10">
          <div className="flex justify-center flex-col items-center">
            <div className="text-center">
              <h2 className="text-5xl">Our Culture</h2>
              <p className="w-2xl text-sm md:text-[1rem] pt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                veniam dolores adipisci natus magni porro earum inventore vel
                soluta tempora vero ad corrupti molestias totam, rerum delectus
              </p>
            </div>
              <div className='flex justify-center pt-6 w-full h-full'>
                <img className='rounded-2xl' src='https://picsum.photos/id/289/900/300' alt='/' />
              </div>
            <div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-12">
                  {cardData.map((item, index) => (
                    <div className="mx-2 border" key={index}>
                      <div className="flex justify-center bg-cover">
                        <img src={item.src} alt="/" className="" />
                      </div>
                      <div className="py-4 px-6">
                        <h4 className="text-2xl py-2 font-semibold pb-2">
                          {item.title}
                        </h4>
                        <p>{item.description}</p>
                        <div className="flex justify-end -mb-2 -mr-5">
                          <Button className="text-lg py-6 capitalize bg-background text-black underline hover:bg-white">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Culture
