import { BrowserRouter as Router, Link } from 'react-router-dom';

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className='flex flex-col text-white bg-black left-0 h-screen w-[15%]'>
            <h1 className='flex text-white text-xl font-mono m-5 text-center justify-center'>Aseem Ratha</h1>
            <nav className='flex flex-col m-auto mt-[36vh] ml-16 text-lg'>
                <Link className='hover:scale-125 transition-all' to="/">
                    <button className=''>Home</button>
                </Link>
                <Link className='hover:scale-125 transition-all' to="/projects">
                    <button className=''>Projects</button>
                </Link>
                <Link className='hover:scale-125 transition-all' to="/contact">
                    <button className=''>Contact</button>
                </Link>
            </nav>
        </div>
    )
}
