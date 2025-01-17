"use client";

import { useQuery } from "@tanstack/react-query";

const socialHandles = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/shah-alam1312",
    image: {
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp",
    },
    enabled: true,
    _id: "65b3e99beb20546ae6d463c2",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/shahalam131200",
    image: {
      url: "https://i.ibb.co/brP5Fpb/insta.png",
    },
    enabled: true,
    _id: "65b3ea4feb20546ae6d4641d",
  },
  {
    enabled: true,
    platform: "Facebook",
    url: "https://www.facebook.com/shahalam1312",
    image: {
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp",
    },
    _id: "65b3e43cb48589dfcae1856c",
  },
];

const useSocial = () => {
  // const { data } = useAxios();

  // // Check if data.user exists and contains services
  // const socialData = data?.user?.social_handles ?? [];

  // Filter services where enabled is true
  const socialHandle = socialHandles.filter(
    (service) => service.enabled === true
  );

  const { refetch, data: socials = socialHandle } = useQuery({
    queryKey: ["social_handles"],
    queryFn: async () => {
      return data;
    },
  });

  return [socials, refetch];
};

export default useSocial;
