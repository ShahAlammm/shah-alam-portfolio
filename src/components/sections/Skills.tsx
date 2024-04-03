import SkillText from "../elements/SkillText";
import Progress from "../elements/progress/Progress";


const Skills = () => {

    return (
        <div className="py-12">
            <SkillText IconText={"Potential Skills On Tech"} Heading={"Expertise with different languages"} SubHeading={"Never miss to learn new technology"}/>
            <Progress />
        </div>
    );
};

export default Skills;