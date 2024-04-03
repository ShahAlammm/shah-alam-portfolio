"use client";
import useAxios from "@/components/hooks/useAxios";
import { TextGenerateEffect } from "../../ui/text-generate-effect";



export function TextGenerate() {
    const { data } = useAxios()
    // @ts-ignore
    const words = `${data?.user?.about?.description}`;

    return <TextGenerateEffect words={words} />;
}
