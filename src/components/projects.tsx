import { Link, Outlet } from 'react-router-dom';
import { previousImage, nextImage } from './projects/videos';

export interface ProjectsProps {
    className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className="flex flex-col m-auto w-[90%] md:w-[80%] xl:w-[60%] border bg-black bg-opacity-[60%] transition-all hover:bg-opacity-80">
            <Outlet />
            <div className="flex flex-row text-white ml-6 mr-6 justify-between text-lg m-2">
                <button className="bg-black text-white rounded-full p-2 border hover:scale-125 transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <Link className="" to="/projects/videos">
                    <button className="border pl-[3vw] pr-[3vw] p-1 hover:pl-[4vw] hover:pr-[4vw] transition-all rounded-3xl hover:rounded-none">
                        Videos
                    </button>
                </Link>
                <Link to="/projects/visuals">
                    <button className="border pl-[3vw] pr-[3vw] p-1 hover:pl-[4vw] hover:pr-[4vw] transition-all rounded-3xl hover:rounded-none">
                        Visuals
                    </button>
                </Link>
                <Link to="/projects/websites">
                    <button className="border pl-[3vw] pr-[3vw] p-1 hover:pl-[4vw] hover:pr-[4vw] transition-all rounded-3xl hover:rounded-none">
                        Websites
                    </button>
                </Link>
                <button className="bg-black text-white rounded-full p-2 border hover:scale-125 transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
