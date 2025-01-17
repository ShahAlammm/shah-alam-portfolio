"use client"
import { useQuery } from '@tanstack/react-query';


const project= [
  {
    "liveurl": "https://quick-ship-client-lemon.vercel.app/",
    "githuburl": "https://github.com/liton61/quickShip-client?tab=readme-ov-file",
    "title": "Quick Ship",
    "sequence": 14,
    "image": {
      "public_id": "1706285511679-xe7r9t",
      "url": "https://i.ibb.co/5jG0fvz/QC.png"
    },
    "description": "Quick Ship is not just an app; it's a complete ecosystem for efficient, secure, and user-friendly parcel delivery. Join us in revolutionizing the delivery experience!",
    "techStack": [
      " Nextjs ",
      "Reactjs ",
      " MERM ",
      "Tailwind CSS",
      "MongoDB"
    ],
    "_id": "65b3d9c8d017f6b49c778ca7",
    "enabled": true
  },
  {
    "liveurl": "https://parcel-management-app-c9005.web.app/",
    "githuburl": "https://github.com/ShahAlammm/parcel-management-app",
    "title": "Express Delivery",
    "sequence": 15,
    "image": {
      "public_id": "1706285468702-igx05q",
      "url": "https://i.ibb.co/Qrd52wK/aaaaaaaaaaaa.png"
    },
    "description": "Express Delivery is not just an app; it's a complete ecosystem for efficient, secure, and user-friendly parcel delivery. Join us in revolutionizing the delivery experience!",
    "techStack": ["Reactjs ", " Nextjs ", " Mern ", "Tailwind CSS"],
    "_id": "65b3d99dd017f6b49c778c86",
    "enabled": true
  },
  {
    "liveurl": "https://the-portfolyo-six.vercel.app/",
    "githuburl": "https://github.com/ShahAlammm/the-portfolyo",
    "title": "The Portfolio",
    "sequence": 13,
    "image": {
      "public_id": "1706285431821-3lfg2r",
      "url": "https://i.ibb.co/FzyKLqw/bbb.png"
    },
    "description": "Make Your Own Portfolio",
    "techStack": ["Reactjs ", "Nextjs ", "Mern ", " CSS"],
    "_id": "65b3d978d017f6b49c778c67",
    "enabled": true
  },
  {
    "liveurl": "https://exciting-answer.surge.sh/",
    "githuburl": "https://github.com/ShahAlammm/task-management",
    "title": "Task Management",
    "sequence": 12,
    "image": {
      "public_id": "1706285416017-wra7swm",
      "url": "https://i.ibb.co/YThgRJF/Task.png"
    },
    "description": "With this app, a person can manage his daily task.He or she can add task for select todo list, doing and done",
    "techStack": ["Reactjs ", " AOS ", " Mern ", "Tailwind CSS"],
    "_id": "65b3d969d017f6b49c778c4a",
    "enabled": true
  },
  {
    "liveurl": "https://panoramic-throne.surge.sh/",
    "githuburl": "https://github.com/ShahAlammm/restaurant-management-client",
    "title": "Restaurant Management",
    "sequence": 11,
    "image": {
      "public_id": "1706285405228-98liol",
      "url": "https://i.ibb.co/TtrM6fc/restau.png"
    },
    "description": "Restaurant Management app",
    "techStack": ["Reactjs ", " MongoDB ", " Mern ", " CSS"],
    "_id": "65b3d95dd017f6b49c778c2f",
    "enabled": true
  },
  {
    "liveurl": "http://teeny-tiny-desire.surge.sh/",
    "githuburl": "https://github.com/ShahAlammm/event-management?tab=readme-ov-file",
    "title": "Event Management",
    "sequence": 10,
    "image": {
      "public_id": "1706285393568-zl9mcc",
      "url": "https://i.ibb.co/xzR6vh4/Event.png"
    },
    "description": "This web application is designed to help users manage and plan various social events such as weddings, birthday parties, anniversaries, engagement parties, retirement parties, and baby showers. Users can explore different event categories, view details, and book events.",
    "techStack": ["Reactjs","Vite", "Tailwind", "MongoDB"],
    "_id": "65b3d952d017f6b49c778c16",
    "enabled": true
  }
]

const useProject = () => {

    // const { data } = useAxios();

    // // Check if data.user exists and contains services
    // const projectData = data?.user?.projects ?? [];

    // Filter services where enabled is true
    const filteredProject = project.filter(project => project.enabled === true);



    const { refetch, data: projects = filteredProject } = useQuery({
      queryKey: ["projects"],
      queryFn: async () => {
        return data;
      },
    });



    return [projects, refetch];
};

export default useProject;