"use client"

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useSkills = () => {
    const { data } = useAxios();

    // Check if data.user exists and contains services
    const skillsData = data?.user?.skills ?? [];

    // Filter services where enabled is true
    const filteredSkills = skillsData.filter(service => service.enabled === true);

    console.log(filteredSkills);

    const { refetch, data: skillsObject = filteredSkills } = useQuery({
      queryKey: ["skills"],
      queryFn: async () => {
        const res = await data.get(`/skills`);
        return res.data;
      },
    });

    console.log(skillsObject);
  return [skillsObject, refetch];
};

export default useSkills;
