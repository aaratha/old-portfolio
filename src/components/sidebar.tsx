import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from 'react';

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [drawHome, setDrawHome] = useState(false);
    const [drawProjects, setDrawProjects] = useState(false);
    const [drawContact, setDrawContact] = useState(false);

    const toggleDrawHome = () => {
        setDrawHome(!drawHome);
    };

    const toggleDrawProjects = () => {
        setDrawProjects(!drawProjects);
    };

    const toggleDrawContact = () => {
        setDrawContact(!drawContact);
    };

    return (
        <div className='flex shad flex-col text-white bg-black left-0 h-screen w-[15%]'>
            <div className='flex flex-col justify-center border border-white h-screen m-3'>
                <div className='flex flex-col justify-center border border-white h-full m-2'>
                    <h1 className='flex text-white text-2xl m-5 text-center justify-center'>Aseem Ratha</h1>
                    <nav className='flex flex-col m-auto mt-[36vh] w-20 text-lg'>
                        <Link className='flex justify-left' onMouseEnter={toggleDrawHome} onMouseLeave={toggleDrawHome} to="/">
                            <div className={`flex border ${drawHome ? 'h-5' : 'h-0'} mt-auto mr-1 mb-auto transition-all`}></div>
                            <button className='hover:pl-2 transition-all'>Home</button>
                        </Link>
                        <Link className='flex justify-left' onMouseEnter={toggleDrawProjects} onMouseLeave={toggleDrawProjects} to="/projects">
                            <div className={`flex border ${drawProjects ? 'h-5' : 'h-0'} mt-auto mr-1 mb-auto transition-all`}></div>
                            <button className='hover:pl-2 transition-all'>Projects</button>
                        </Link>
                        <Link className='flex justify-left' onMouseEnter={toggleDrawContact} onMouseLeave={toggleDrawContact} to="/contact">
                            <div className={`flex border ${drawContact ? 'h-5' : 'h-0'} mt-auto mr-1 mb-auto transition-all`}></div>
                            <button className='hover:pl-2 transition-all'>Contact</button>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};
