"use client"

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useSocial = () => {
    const { data } = useAxios();

    // Check if data.user exists and contains services
    const socialData = data?.user?.social_handles ?? [];

    // Filter services where enabled is true
    const socialHandle = socialData.filter(service => service.enabled === true);



    const { refetch, data: socials = socialHandle } = useQuery({
      queryKey: ["social_handles"],
      queryFn: async () => {
        const res = await data.get(`/social_handles`);
        return res.data;
      },
    });

  
  return [socials, refetch];
};

export default useSocial;