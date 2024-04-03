"use client"

import ProfileImage from '../elements/ProfileImage/ProfileImage';
import SkillText from "../elements/SkillText";
import { TextGenerate } from '../elements/Text/TextGenerate';
import useAxios from '../hooks/useAxios';




const About = () => {
    const { data } = useAxios()


    return (
        <div className="py-24">
            <SkillText IconText={"Services Which I Provide"} Heading={'Making apps with modern technologies'} SubHeading={"Never miss a task, deadline or idea"} />
            <div className="hero-content flex-col-reverse xl:flex-row">
                <div className="flex-1 space-y-10">
                    <ProfileImage />
                </div>


                <div className="flex-1 z-50">


                </div>
            </div>
                <TextGenerate />
        </div>
    );
};

export default About;