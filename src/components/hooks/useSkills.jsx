"use client"

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useSkills = () => {
  const { data: axiosData } = useAxios();

  const { refetch, data: skillsArray = [] } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      // Simulate fetching data using axios.get or similar method
      // Replace this with your actual API call
      const res = await axiosData.get("/skills");
      return res.data;
    },
  });

  // Convert skills array into an object
  const skillsObject = {};
  skillsArray.forEach(skill => {
    if (skill.enabled) {
      skillsObject[skill.name] = skill;
    }
  });
console.log(skillsObject)
  return [skillsObject, refetch];
};

export default useSkills;
