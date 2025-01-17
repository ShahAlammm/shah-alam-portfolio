"use client";
import useAxios from "@/components/hooks/useAxios";
import { TextGenerateEffect } from "../../ui/text-generate-effect";



export function TextGenerate() {
    const { data } = useAxios()
    // @ts-ignore
    const words = `As a Full-stack developer, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.`;

    return <TextGenerateEffect words={words} />;
}
