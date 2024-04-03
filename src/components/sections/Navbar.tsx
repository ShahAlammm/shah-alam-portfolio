"use client"
import Link from 'next/link';
import useSocial from '../hooks/useSocial';
import Image from 'next/image';
import useAxios from '../hooks/useAxios';
import { FaHome, FaUserGraduate } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';

const Navbar = () => {
    const [socials] = useSocial()
    const { data } = useAxios()

    return (
        <div className="navbar fixed z-[900] px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href={'#'}><FaHome className="text-xl" /></Link></li>
                    <li><Link href={'#'}><FaUserGraduate className="text-xl" /></Link></li>
                    <li><Link href={'#'}><MdCall className="text-xl" /></Link></li>
                    </ul>
                </div>
                {/* @ts-ignore */}
                <p className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold">{data?.user?.about?.name}</p>
            </div>
            <div className="navbar-center hidden md:flex justify-center items-center glass rounded-full lg:w-1/4 button-primary">
                <ul className="menu menu-horizontal px-1 space-x-4 font-bold text-white">
                    <li><Link href={'#'}><FaHome className="text-xl" /></Link></li>
                    <li><Link href={'#'}><FaUserGraduate className="text-xl" /></Link></li>
                    <li><Link href={'#'}><MdCall className="text-xl" /></Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {socials?.map((social: any) => (<Link key={social._id} href={social.url} ><Image src={social.image.url} alt={social.platform} height={200} width={200} className='h-7 w-7 md:h-12 md:w-12 p-[2px] md:p-2 transform hover:scale-125 transition-transform duration-300' /></Link>))}
            </div>
        </div>
    );
};

export default Navbar;