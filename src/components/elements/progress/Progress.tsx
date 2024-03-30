import React from 'react';
import './progress.css'; // Assuming you have a progress.css file

interface ProgressItem {
  text: string; // Text displayed for the skill
  value: number; // Percentage value (0-100)
}

const Progress: React.FC = () => {

  const skills: ProgressItem[] = [
    { text: 'HTML', value: 85 },
    { text: 'CSS', value: 57 },
    { text: 'JS', value: 30 },
    { text: 'HTML', value: 85 },
    { text: 'CSS', value: 57 },
    { text: 'JS', value: 30 },
  ];

  return (
    <div className="container">
      {skills.map((skill) => (
        <div className="box" key={skill.text}>
          <div className="shadow"></div>
          <div className="content">
            <div
              className="percent"
              data-text={skill.text}
              // @ts-ignore
              style={{ '--num': skill.value }} // Corrected style prop
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
            <div className="number">
              <h2>
                {skill.value}%<span>%</span>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;