"use client"
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useTimeline = () => {
    const { data } = useAxios();

    // Check if data.user exists and contains services
    const TimelineData = data?.user?.timeline ?? [];

    // Filter services where enabled is true
    const AllTimeline = TimelineData.filter(service => service.enabled === true);



    const { refetch, data: Timelines = AllTimeline } = useQuery({
      queryKey: ["timeline"],
      queryFn: async () => {
        const res = await data.get(`/timeline`);
        return res.data;
      },
    });


  return [Timelines, refetch];
};
export default useTimeline;