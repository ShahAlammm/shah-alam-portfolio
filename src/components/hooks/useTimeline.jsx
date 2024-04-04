"use client"
import useAxios from './useAxios';

const useTimeline = () => {
    const { data } = useAxios();

    // Check if data.user exists and contains services
    const TimelineData = data?.user?.timeline ?? [];

    // Filter services where enabled is true
    const EducationTimeline = TimelineData.filter(service => service.forEducation === true);
    const ExperienceTimeline = TimelineData.filter(service => service.forEducation === false);


    return [EducationTimeline, ExperienceTimeline,];
};

export default useTimeline;
