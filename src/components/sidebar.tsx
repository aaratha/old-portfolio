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
        <div className="flex flex-col top-0 z-[2] bg-secondary md:left-0 h-[12vh] md:h-screen md:w-[15%] shad">
            <div className="flex flex-row md:flex-col justify-center  border-primary md:h-screen">
                <div className="border p-2 h-[9.3vh] flex flex-col w-full md:w-auto justify-between md:justify-center inshad2 border-primary md:h-full m-3">
                    <h1 className="flex text-lg lg:text-2xl md:m-5 text-center justify-center">
                        Aseem Ratha
                    </h1>
                    <nav className="flex justify-between md:flex-col m-auto md:mt-[36vh] w-full md:w-auto text-lg">
                        <Link
                            className="flex justify-left ml-5 md:m-0 w-20"
                            onMouseEnter={toggleDrawHome}
                            onMouseLeave={toggleDrawHome}
                            to="/"
                        >
                            <div
                                className={`flex border border-primary ${
                                    drawHome ? 'h-5' : 'h-0'
                                } mt-auto mr-1 mb-auto transition-all`}
                            ></div>
                            <button className="hover:pl-2 transition-all">Home</button>
                        </Link>
                        <Link
                            className="flex w-20 justify-left"
                            onMouseEnter={toggleDrawProjects}
                            onMouseLeave={toggleDrawProjects}
                            to="/projects"
                        >
                            <div
                                className={`flex border border-primary ${
                                    drawProjects ? 'h-5' : 'h-0'
                                } mt-auto mr-1 mb-auto transition-all`}
                            ></div>
                            <button className="hover:pl-2 transition-all">Projects</button>
                        </Link>
                        <Link
                            className="flex w-20 justify-left mr-5 md:m-0"
                            onMouseEnter={toggleDrawContact}
                            onMouseLeave={toggleDrawContact}
                            to="/contact"
                        >
                            <div
                                className={`flex border border-primary ${
                                    drawContact ? 'h-5' : 'h-0'
                                } mt-auto mr-1 mb-auto transition-all`}
                            ></div>
                            <button className="hover:pl-2 transition-all">Contact</button>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};
