"use client";
import React from "react";
import { Card } from "../elements/Card";
import SkillText from "../elements/SkillText";

const services = [
  {
    "name": "Portfolio Website Development",
    "desc": "Create a stunning portfolio website to showcase your work and skills using modern web technologies like React and Tailwind CSS, ensuring a responsive and professional online presence.",
    "charge": '$100 - $500',
    "image": "https://i.ibb.co/rGL5wZK/Portfolio-Website-Development.jpg"
  },
  {
    "name": "E-commerce Application",
    "desc": "Develop a dynamic, full-featured e-commerce application with a focus on user experience, leveraging the MERN stack for seamless product management, user authentication, and smooth checkout processes.",
    "charge": '$1000 - $6000',
    "image": "https://i.ibb.co/TgGQ8tD/E-commerce-Application.jpg"
  },
  {
    "name": "Custom API Development",
    "desc": "Build custom APIs tailored to your business operations, whether it's RESTful or GraphQL, to enable seamless communication between your frontend and backend systems, with a focus on scalability and security.",
    "charge": 'According to Project',
    "image": "https://i.ibb.co/hW0zWpf/Custom-API-Development.jpg"
  },
  {
    "name": "Bug Fixes and Optimization",
    "desc": "Fix existing bugs and enhance your web applications by optimizing performance, ensuring better speed, responsiveness, and a smoother user experience across different devices and screen sizes.",
    "charge": 'According to Project',
    "image": "https://i.ibb.co/k88SbXd/Bug-Fixes-and-Optimization.jpg"
  },
  {
    "name": "Database Integration",
    "desc": "Seamlessly integrate databases like MongoDB, MySQL, or PostgreSQL into your web application, or set up a CMS like WordPress or Strapi, offering easy-to-manage and scalable solutions for your business.",
    "charge": 'According to Project',
    "image": "https://i.ibb.co/DRQbm08/Database-Integration.jpg"
  },
  {
    "name": "Next.Js Platform Development",
    "desc": "Create a robust SaaS platform using Next.js, combining server-side rendering, API routes, and a subscription-based model with multi-user support to provide a scalable solution for your business needs.",
    "charge": 'Start from $500',
    "image": "https://i.ibb.co/dpSCHVr/nextjs.jpg"
  }
];


;

const Services = () => {

  return (
    <div className="py-12">
      <SkillText IconText={"Services Which I Provide"} Heading={'Making apps with modern technologies'} SubHeading={"Never miss a task, deadline or idea"}/>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {services?.map((service: any,index: any) => (
        <Card key={index} service={service} />
      ))}
    </div>
    </div>
  );
};

export default Services;
