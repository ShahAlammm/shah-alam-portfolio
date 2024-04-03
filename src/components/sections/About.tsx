"use client"

import ProfileImage from '../elements/ProfileImage/ProfileImage';
import SkillText from "../elements/SkillText";
import { TextCard } from '../elements/Text/TextCard';
import { TextGenerate } from '../elements/Text/TextGenerate';




const About = () => {


    return (
        <div className="py-24">
            <SkillText IconText={"Something About Me"} Heading={'Describe A Little About My Self'} SubHeading={"Never miss a task, deadline or idea"} />
            <div className="hero-content flex-col-reverse xl:flex-row">
                <div className="flex-1 space-y-10">
                    <ProfileImage />
                </div>

                <div className="flex-1 z-50">
                    <TextCard />
                </div>
            </div>
            <TextGenerate />
        </div>
    );
};

export default About;