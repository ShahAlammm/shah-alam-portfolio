"use client"
import './progress.css';
import useSkills from '../../hooks/useSkills';
import Image from 'next/image';

const Progress = () => {
  const [skillsObject] = useSkills();

  const calculateProgress = (percentage:any) => {
    return Math.round(percentage);
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {Object.keys(skillsObject).map((skillKey) => (
        <div className="container" key={skillsObject[skillKey]._id}>
          <div className='flex justify-start items-start'>
            <div className='flex justify-center items-center p-2 gap-2'>
              {/* Use 'Image' component for image rendering */}
              <Image src={skillsObject[skillKey]?.image?.url} height={1000} width={1000} alt='images' className='h-12 w-12' />
              <p className='text-white text-xl'>{skillsObject[skillKey].name}</p>
            </div>
          </div>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{ width: `${calculateProgress(skillsObject[skillKey].percentage)}%` }}>
              <div className="progressbar-liquid"></div>
            </div>
            {/* Display the percentage inside the progress bar */}
            <span className="progress">{calculateProgress(skillsObject[skillKey].percentage)}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;