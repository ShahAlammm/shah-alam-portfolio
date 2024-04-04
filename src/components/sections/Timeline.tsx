"use client"
import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useTimeline from '../hooks/useTimeline'; // Assuming useTimeline fetches timeline data

import Image from 'next/image';
import SkillText from '../elements/SkillText';

const Timeline = () => {
  const [useClient, setUseClient] = useState(false);
  const [educationTimeline, experienceTimeline,] = useTimeline();

  const handleUseClient = () => {
    setUseClient(!useClient);
  };

  const timelines = useClient ? experienceTimeline : educationTimeline;

  return (
    <div className='py-16 space-y-7'>

      <SkillText IconText={"Education & Experience"} Heading={"Educational qualification & Experiences"} />
      <VerticalTimeline>
        {timelines && timelines.map((timeline: any) => (
          <VerticalTimelineElement
            className='text-white '
            visible
            key={timeline._id}
            date={`${new Date(timeline.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}-
          ${new Date(timeline.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
            icon={timeline.icon ? (
              <Image
                className='h-10 w-10  rounded-full'
                src={"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706289470834-siro83"}
                alt="Company Icon"
                layout="fill" // Adjust layout as needed (e.g., "fill", "intrinsic")
                onError={(error) => {
                  console.error('Image loading error:', error);
                  // Optionally set a fallback image source here
                }}
              />
            ) : null}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Position: {timeline.jobTitle}</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-semibold">Company: {timeline.company_name}</h4>
            <h4 className="vertical-timeline-element-subtitle text-black">Job Location: {timeline.jobLocation}</h4>
            <p className='text-black italic'>{timeline.summary}</p>
            <ul>
              {timeline.bulletPoints.map((point: any, index: any) => (
                <li className='text-black pt-2' key={index}>{index + 1}.{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div className="flex justify-center items-center pt-10">
        <button onClick={handleUseClient} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {timelines === educationTimeline ? "Experience" : "Education"}
        </button>
      </div>
    </div>
  );
};

export default Timeline;
