"use client"

const TimelineData = [
    {
      _id: "1",
      title: "High School",
      startDate: "2015-09-01",
      endDate: "2018-06-01",
      forEducation: true,
      jobTitle: "",
      company_name: "",
      jobLocation: "",
      summary: "Graduated with honors in Science Stream",
      bulletPoints: [
        "Completed high school with a focus on Science.",
        "Participated in multiple extracurricular activities.",
        "Won awards in mathematics and science fairs."
      ],
      icon: "https://example.com/images/school-icon.png", // Optional
    },
    {
      _id: "2",
      title: "Software Engineer",
      startDate: "2022-06-01",
      endDate: "Present",
      forEducation: false,
      jobTitle: "Software Engineer",
      company_name: "Tech Solutions",
      jobLocation: "New York, USA",
      summary: "Developing modern web applications using MERN stack.",
      bulletPoints: [
        "Developed new features for the company’s product using React and Node.js.",
        "Collaborated with cross-functional teams to design scalable systems.",
        "Contributed to the transition from a monolithic architecture to microservices."
      ],
      icon: "https://example.com/images/company-icon.png", // Optional
    },
    {
      _id: "3",
      title: "Bachelor's in Computer Science",
      startDate: "2018-09-01",
      endDate: "2022-06-01",
      forEducation: true,
      jobTitle: "",
      company_name: "",
      jobLocation: "",
      summary: "Earned a degree in Computer Science.",
      bulletPoints: [
        "Specialized in full-stack web development.",
        "Completed projects involving React, Node.js, MongoDB, and Express.",
        "Graduated with distinction."
      ],
      icon: "https://example.com/images/degree-icon.png", // Optional
    },
    {
      _id: "4",
      title: "Junior Developer",
      startDate: "2021-01-01",
      endDate: "2022-05-01",
      forEducation: false,
      jobTitle: "Junior Developer",
      company_name: "WebTech Solutions",
      jobLocation: "Remote",
      summary: "Worked as a Junior Developer for a startup.",
      bulletPoints: [
        "Assisted in building frontend interfaces with React.",
        "Worked on bug fixes and feature enhancements.",
        "Collaborated with the team in Agile sprints."
      ],
      icon: "https://example.com/images/startup-icon.png", // Optional
    }
  ];
  

const useTimeline = () => {
    

    // Check if data.user exists and contains services

    // Filter services where enabled is true
    const EducationTimeline = TimelineData.filter(service => service.forEducation === true);
    const ExperienceTimeline = TimelineData.filter(service => service.forEducation === false);


    return [EducationTimeline, ExperienceTimeline,];
};

export default useTimeline;
