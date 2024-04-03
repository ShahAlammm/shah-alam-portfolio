"use client"
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';

const useProject = () => {

    const { data } = useAxios();

    // Check if data.user exists and contains services
    const projectData = data?.user?.projects ?? [];

    // Filter services where enabled is true
    const filteredProject = projectData.filter(project => project.enabled === true);

    console.log(filteredProject);

    const { refetch, data: projects = filteredProject } = useQuery({
      queryKey: ["projects"],
      queryFn: async () => {
        const res = await data.get(`/projects`);
        return res.data;
      },
    });

    console.log(projects);

    return [projects, refetch];
};

export default useProject;