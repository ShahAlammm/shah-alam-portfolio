"use client"
import React from "react";
import { TextRevealCard } from "../../ui/text-reveal-card";
import useAxios from "@/components/hooks/useAxios";


export function TextCard() {
    const { data } = useAxios()
    return (
        <div className="flex items-center justify-start h-[20rem] rounded-2xl w-full">
            <TextRevealCard
                //   @ts-ignore
                text={`Hi This Is Shah Alam`}
                //   @ts-ignore
                revealText={`A Full-Stack Developer`}
            >

            </TextRevealCard>
        </div>
    );
}
