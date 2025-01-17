"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

export function Card({ service }: any) {
  const { name, desc, charge, image } = service || {}

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[25rem] md:w-[30rem] lg:w-[25rem] h-[460px] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
  as="p"
  translateZ="60"
  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 overflow-hidden text-ellipsis"
  style={{
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
  }}
>
  {desc}
</CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 font-bold rounded-xl text-md dark:text-white"
          >
            Charge: {charge}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black  dark:text-black text-white  font-bold"
          >
            <MdVerified className="text-white text-2xl"/>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
