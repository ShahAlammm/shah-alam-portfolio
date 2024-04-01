"use client"

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useTestimonial = () => {
    const { data } = useAxios();

    // Check if data.user exists and contains services
    const testimonialsData = data?.user?.testimonials ?? [];

    // Filter services where enabled is true
    const AllTestimonials = testimonialsData.filter(service => service.enabled === true);

    console.log(AllTestimonials);

    const { refetch, data: testimonials = AllTestimonials } = useQuery({
      queryKey: ["testimonials"],
      queryFn: async () => {
        const res = await data.get(`/testimonials`);
        return res.data;
      },
    });

    console.log(testimonials);
  return [testimonials, refetch];
};

export default useTestimonial;