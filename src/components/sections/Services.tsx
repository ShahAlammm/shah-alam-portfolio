"use client";
import React from "react";
import useServices from "../hooks/useServices";
import { Card } from "../elements/Card";
import SkillText from "../elements/SkillText";

const Services = () => {
  const [services] = useServices();
  console.log(services);
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
