"use client";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useServices = () => {
    const { data } = useAxios();

    // Check if data.user exists and contains services
    const servicesData = data?.user?.services ?? [];

    // Filter services where enabled is true
    const filteredServices = servicesData.filter(service => service.enabled === true);

    console.log(filteredServices);

    const { refetch, data: services = filteredServices } = useQuery({
      queryKey: ["service"],
      queryFn: async () => {
        const res = await data.get(`/services`);
        return res.data;
      },
    });

    console.log(services);

    return [services, refetch];
  };

  export default useServices;
