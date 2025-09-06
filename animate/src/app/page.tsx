"use client";
import { gsap } from "gsap";
import { NextPage } from "next";
import { useEffect, useRef } from "react";

const Page: NextPage = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to([first.current, second.current, third.current], {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    })
    .to([first.current, second.current, third.current], {
      opacity: 1,
      duration: 1,
      stagger: 0.5,
    });
  }, []);


  return (
    <div className="bg-black w-full h-screen flex justify-center items-center gap-4 text-white">
      <p className="absolute top-4">hekko wind</p>
      <div className="bg-white w-40 h-40 flex items-center justify-center text-black" ref={first}>1</div>
      <div className="bg-white w-40 h-40 flex items-center justify-center text-black" ref={second}>2</div>
      <div className="bg-white w-40 h-40 flex items-center justify-center text-black" ref={third}>3</div>
    </div>
  );
};

export default Page;
