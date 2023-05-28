import { Link, Outlet } from 'react-router-dom';

export interface ProjectsProps {
    className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className="flex flex-col m-auto w-[90%] md:w-[80%] xl:w-[75%] transition-all hover:bg-opacity-80">
            <Outlet />
            <div className="bg-black ml-12 mr-12 mt-3 bg-opacity-[60%] hover:bg-opacity-80 transition-all border rounded-2xl flex flex-row text-white pl-6 pr-6 justify-between text-lg p-3 border-t-2">
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
            </div>
        </div>
    );
};
