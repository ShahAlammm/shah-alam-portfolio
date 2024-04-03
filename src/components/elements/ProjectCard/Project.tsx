"use client"
import Image from 'next/image';
import './Project.css';
import useProject from '../../hooks/useProject';
import { useState } from 'react';
import { Key } from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { IoMdWifi } from 'react-icons/io';
import SkillText from '../SkillText';

const Project = () => {

    const [projects] = useProject();
    const [activePage, setActivePage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectsPerPage = 6;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects?.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        setActivePage(pageNumber);
    };

    const handleProjectClick = (project: any) => {
        setSelectedProject(project);
    };

    return (
        <div className='py-24'>
            <SkillText IconText={"Some Of My Projects"} Heading={"Created apps with modern technologies"} SubHeading={"Never miss a task, deadline or idea"}/>
            <div className='flex justify-center items-center w-full'>
                <div className='m-auto grid grid-cols-1 lg:grid-cols-2 w-full gap-8'>
                    {currentProjects?.map((project: {
                        image: any; title: string; _id: Key | null | undefined; description: string;
                    }) => (
                        <div key={project?._id} className='wrapper'>
                            <div className='card w-full border'>
                                <Image src={project?.image?.url} alt='p-image' height={500} width={500} />
                                <div className="info mt-52">
                                    <h1 className='text-2xl font-semibold mb-2'>{project?.title}</h1>
                                    <button className="btn" onClick={() => handleProjectClick(project)}>Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination flex justify-center items-center gap-2 py-12">
                {[1, 2, 3].map((page) => (
                    <button key={page} className={`btn rounded-full hover:bg-blue-600 ${activePage === page ? 'bg-blue-600' : ''}`} onClick={() => paginate(page)}>{page}</button>
                ))}
            </div>

            {selectedProject && (
                <dialog id="my_modal_3" className="modal bg-opacity-50 bg-black" open>
                    <div className="modal-box text-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setSelectedProject(null)}>✕</button>
                        </form>
                        {/* @ts-ignore */}
                        <h3 className="font-bold text-xl">{selectedProject?.title}</h3>
                        {/* @ts-ignore */}
                        <p className="py-4">{selectedProject?.description}</p>
                        <h3 className="font-bold text-lg">Technology :</h3>
                        {/* @ts-ignore */}
                        <ul>{selectedProject.techStack.map((tec, i) => <li key={i}>{i + 1}.{tec}</li>)}</ul>
                        <div className='flex gap-16  justify-center items-center'>
                            {/* @ts-ignore */}
                            <Link href={`${selectedProject?.githuburl}`}>
                                <FaGithub className='text-3xl text-white' /><span>Code</span>
                            </Link>
                            <p>
                                {/* @ts-ignore */}
                                <Link href={`${selectedProject?.liveurl}`}>
                                    <IoMdWifi className='text-3xl text-white' /><span>Live</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Project;
