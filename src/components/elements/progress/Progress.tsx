"use client"
import React, { useState } from 'react';
import './progress.css';
import useSkills from '../../hooks/useSkills';
import Image from 'next/image';



const Progress = () => {
  const [activePage, setActivePage] = useState(1);
  const [skillsObject] = useSkills()
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6;

  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = Object.keys(skillsObject).slice(indexOfFirstSkill, indexOfLastSkill);

  const calculateProgress = (percentage: any) => {
    return Math.round(percentage);
  };

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
  };

  return (
    <div className="body">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {currentSkills.map((skillKey) => (
          <div className="container" key={skillsObject[skillKey]._id}>
            <div className='flex justify-start items-start'>
              <div className='flex justify-center items-center p-2 gap-2'>
                <Image src={skillsObject[skillKey]?.image?.url} height={1000} width={1000} alt='images' className='h-12 w-12' />
                <p className='text-white text-xl'>{skillsObject[skillKey].name}</p>
              </div>
            </div>
            <div className="progressbar-container">
              <div className="progressbar-complete" style={{ width: `${calculateProgress(skillsObject[skillKey].percentage)}%` }}>
                <div className="progressbar-liquid"></div>
              </div>
              <span className="progress">{calculateProgress(skillsObject[skillKey].percentage)}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-center items-center gap-1">
        <button className={`btn rounded-full hover:bg-blue-600 ${activePage === 1 ? 'bg-blue-600' : ''}`} onClick={() => paginate(1)}>1</button>
        <button className={`btn rounded-full hover:bg-blue-600 ${activePage === 2 ? 'bg-blue-600' : ''}`} onClick={() => paginate(2)}>2</button>
        <button className={`btn rounded-full hover:bg-blue-600 ${activePage === 3 ? 'bg-blue-600' : ''}`} onClick={() => paginate(3)}>3</button>
        <button className={`btn rounded-full hover:bg-blue-600 ${activePage === 4 ? 'bg-blue-600' : ''}`} onClick={() => paginate(4)}>4</button>
      </div>
    </div>
  );
};

export default Progress;
