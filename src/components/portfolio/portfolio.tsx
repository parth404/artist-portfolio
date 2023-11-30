"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import {
  ChevronDoubleLeftIcon,
  XMarkIcon,
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";

type Props = {
  data: Gallery[];
};

export default function Portfolio({ data }: Props) {
  const [image, setImage] = useState("/");
  const [popUp, setPopUp] = useState(false);
  const [imageKey, setImageKey] = useState(0);
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  useEffect(() => {
    if (imageKey > 0) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }

    if (imageKey < data.length - 1) {
      setShowRight(true);
    } else {
      setShowRight(false);
    }
  }, [imageKey, setShowLeft, setShowRight, data.length]);

  const clickHandler = (key: number, image: string) => {
    setImage(image);
    setImageKey(key);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setImage("/");
  };

  const slideHandler = (name: string) => {
    let key = imageKey;
    if (
      (name === "right" && key === data.length - 1) ||
      (name === "left" && key === 0)
    ) {
      setPopUp(false);
      return;
    } else if (name === "right") {
      setImage(urlFor(data[key + 1].image).url());
      setImageKey(key + 1);
    } else if (name === "left") {
      setImage(urlFor(data[key - 1].image).url());
      setImageKey(key - 1);
    }
  };

  return !data ? (
    <h1>Fetching Data</h1>
  ) : (
    <>
      <div className="w-auto h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="min-w-screen min-h-screen w-screen h-screen object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* // centered text */}
        <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-right flex flex-row justify-end gap-2 min-w-[230px] md:min-w-[270px] tracking-widest">
          <h1 className="text-sm md:text-[16px] text-white uppercase">
            artist
          </h1>
          <h1 className="text-sm md:text-[16px] text-white uppercase">.</h1>
          <h1 className="text-sm md:text-[16px] text-white uppercase">
            designer
          </h1>
        </div>
      </div>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-around w-full">
          {data.map((gallery: Gallery, key: number) => (
            <div key={gallery._id} className="w-full md:w-1/2 h-100 p-0">
              <div
                className="relative w-full h-[40vw] md:h-[50vh] overflow-hidden"
                onClick={() => clickHandler(key, urlFor(gallery.image).url())}
              >
                <Image
                  draggable={false}
                  className="object-cover object-left lg:object-center hover:scale-105 ease-in-out duration-500 transform cursor-pointer"
                  src={urlFor(gallery.image).url()}
                  alt={gallery.alt}
                  sizes="(max-width: 768px) 100vw, 768px"
                  fill
                />
              </div>
            </div>
          ))}
        </div>

        <div
          id="popover"
          className={
            popUp
              ? `fixed opacity-1 transition-opacity ease-in-out duration-500 h-[100vh] w-screen top-0 left-0 z-50 backdrop-blur-3xl backdrop-brightness-[20%] overflow-hidden`
              : `hidden opacity-0`
          }
          draggable={false}
        >
          <div
            className={`absolute top-[0%]left-[0%] w-[100%] h-[100%] select-none overflow-hidden`}
          >
            <Image
              src={image}
              alt="pop"
              className={`object-contain object-center`}
              fill
              draggable={false}
            />
            <XMarkIcon
              className="absolute right-[2%] top-[2%] cursor-pointer text-white hover:text-gray-100 hover:scale-125 transition-transform duration-500 mix-blend-difference w-6 md:w-10"
              onClick={closePopUp}
            />
            {showRight && (
              <ArrowLongRightIcon
                className="absolute top-[50%] right-[1%] cursor-pointer text-gray-400 hover:text-white hover:scale-125 transition-transform duration-500 mix-blend-difference w-6 md:w-10"
                onClick={() => slideHandler("right")}
              />
            )}
            {showLeft && (
              <ArrowLongLeftIcon
                className="absolute top-[50%] left-[0%] cursor-pointer text-gray-400 hover:text-white hover:scale-125 transition-transform duration-500 mix-blend-difference w-6 md:w-10"
                onClick={() => slideHandler("left")}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
