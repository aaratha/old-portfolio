import { Link, Outlet } from 'react-router-dom';
import { previousImage, nextImage } from './projects/videos';

export interface ProjectsProps {
    className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className="flex rounded-b-2xl flex-col m-auto w-[90%] md:w-[80%] xl:w-[60%] border bg-black bg-opacity-[60%] transition-all hover:bg-opacity-80">
            <Outlet />
            <div className="flex flex-row text-white pl-6 pr-6 justify-between text-lg p-3 border-t-2">
                <button className="hover:bg-black text-white rounded-full p-2 border hover:scale-110 hover:shadow hover:shadow-white transition-all">
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
                    <button className="border hover:bg-black pl-[3vw] pr-[3vw] p-1 transition-all hover:scale-90 hover:shadow hover:shadow-white rounded-3xl hover:rounded-none">
                        Videos
                    </button>
                </Link>
                <Link to="/projects/visuals">
                    <button className="hover:bg-black border pl-[3vw] pr-[3vw] p-1 hover:scale-90 hover:shadow hover:shadow-white transition-all rounded-3xl hover:rounded-none">
                        Visuals
                    </button>
                </Link>
                <Link to="/projects/websites">
                    <button className="hover:bg-black border pl-[3vw] pr-[3vw] p-1 hover:scale-90 hover:shadow hover:shadow-white transition-all rounded-3xl hover:rounded-none">
                        Websites
                    </button>
                </Link>
                <button className="hover:bg-black text-white rounded-full p-2 border hover:scale-110 hover:shadow hover:shadow-white transition-all">
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
