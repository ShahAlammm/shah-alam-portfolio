"use client"

import { useQuery } from "@tanstack/react-query";



const skills = [
  {
    enabled: true,
    name: "Next.js",
    sequence: 6,
    percentage: 70,
    image: {
      public_id: "1706286682511-rgp96r",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286682511-rgp96r",
      _id: "65b3de5bb48589dfcae17fe9",
    },
    _id: "65b3de5bb48589dfcae17fe8",
  },
  {
    enabled: true,
    name: "React",
    sequence: 5,
    percentage: 90,
    image: {
      public_id: "1706291833080-0loo09",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706291833080-0loo09",
      _id: "65b3f27aeb20546ae6d49e76",
    },
    _id: "65b3de41b48589dfcae17fbd",
  },
  {
    enabled: true,
    name: "Tailwind",
    sequence: 4,
    percentage: 80,
    image: {
      public_id: "1706286616701-2jka3q",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286616701-2jka3q",
      _id: "65b3de19b48589dfcae17f95",
    },
    _id: "65b3de19b48589dfcae17f94",
  },
  {
    enabled: true,
    name: "CSS",
    sequence: 2,
    percentage: 80,
    image: {
      public_id: "1706286273084-romle",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286273084-romle",
    },
    _id: "65b3dcc1b48589dfcae17e4d",
  },
  {
    name: "HTML",
    sequence: 1,
    percentage: 90,
    image: {
      public_id: "1706286058630-v3ax0a",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286058630-v3ax0a",
    },
    _id: "65b3dbeba5c8d2db7b6164bc",
    enabled: true,
  },
  {
    enabled: true,
    name: "Javascript",
    sequence: 3,
    percentage: 70,
    image: {
      public_id: "1706288679775-y4qwn3",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288679775-y4qwn3",
      _id: "65b3e628b48589dfcae18750",
    },
    _id: "65b3df24b48589dfcae18114",
  },
  {
    enabled: true,
    name: "Figma",
    sequence: 15,
    percentage: 70,
    image: {
      public_id: "1706287138776-slfc3e",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287138776-slfc3e",
      _id: "65b3e023b48589dfcae18289",
    },
    _id: "65b3e023b48589dfcae18288",
  },
  {
    enabled: true,
    name: "TypeScript",
    sequence: 6,
    percentage: 50,
    image: {
      public_id: "1706287104739-pm8en",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287104739-pm8en",
      _id: "65b3e001b48589dfcae18246",
    },
    _id: "65b3e001b48589dfcae18245",
  },
  {
    enabled: true,
    name: "Node.js",
    sequence: 7,
    percentage: 80,
    image: {
      public_id: "1706286990341-tznh4",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286990341-tznh4",
      _id: "65b3df8fb48589dfcae18205",
    },
    _id: "65b3df8fb48589dfcae18204",
  },
  {
    enabled: true,
    name: "MongoDB",
    sequence: 9,
    percentage: 70,
    image: {
      public_id: "1706286966065-p2yrx9",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286966065-p2yrx9",
      _id: "65b3df76b48589dfcae181c6",
    },
    _id: "65b3df76b48589dfcae181c5",
  },
  {
    enabled: true,
    name: "Three.js",
    sequence: 19,
    percentage: 40,
    image: {
      public_id: "1706286941212-chpzl",
      // url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286966065-p2yrx9",
      _id: "65b3df5db48589dfcae18189",
      // url: "https://i.ibb.co/ZRdyR3Hs/1706286941212-chpzl.png",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286941212-chpzl",
    },
    _id: "65b3df5db48589dfcae18188",
  },
  {
    enabled: true,
    name: "Redux",
    sequence: 7,
    percentage: 70,
    image: {
      public_id: "1706286913147-nwiky8",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286913147-nwiky8",
      _id: "65b3df41b48589dfcae1814e",
    },
    _id: "65b3df41b48589dfcae1814d",
  },
  {
    enabled: true,
    name: "Git",
    sequence: 12,
    percentage: 70,
    image: {
      public_id: "1706286842731-r0eyn",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286842731-r0eyn",
      _id: "65b3defbb48589dfcae180de",
    },
    _id: "65b3defbb48589dfcae180dd",
  },
  {
    enabled: true,
    name: "Github",
    sequence: 11,
    percentage: 80,
    image: {
      public_id: "1706286821409-21cuqs",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286821409-21cuqs",
      _id: "65b3dee5b48589dfcae180a9",
    },
    _id: "65b3dee5b48589dfcae180a8",
  },
  {
    enabled: true,
    name: "Vercel",
    sequence: 7,
    percentage: 70,
    image: {
      public_id: "1706286729467-rbblgb",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286729467-rbblgb",
      _id: "65b3de89b48589dfcae18016",
    },
    _id: "65b3de89b48589dfcae18015",
  },
]

const useSkills = () => {
  // const { data } = useAxios();

  // // Check if data.user exists and contains services
  // const skillsData = data?.user?.skills ?? [];

  // Filter services where enabled is true
  const filteredSkills = skills.filter(
    (service) => service.enabled === true
  );

  const { refetch, data: skillsObject = filteredSkills } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      return data;
    },
  });

  return [skillsObject, refetch];
};

export default useSkills;



    
