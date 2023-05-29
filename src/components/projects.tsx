import { Link, Outlet } from 'react-router-dom';

export interface ProjectsProps {
    className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className="flex flex-col m-auto w-[90%] md:w-[80%] xl:w-[70%] transition-all hover:bg-opacity-80">
            <Outlet />
            <div className="bg-black ml-12 mr-12 mt-3 bg-opacity-[60%] hover:bg-opacity-80 transition-all border rounded-2xl flex flex-row text-white pl-2 pr-2 md:pl-6 md:pr-6 justify-between text-lg p-3 border-t-2">
                <Link className="" to="/projects/videos">
                    <button className="border w-[19vw] md:w-[12vw] p-1 transition-all hover:scale-90 hover:shadow hover:shadow-white rounded-3xl hover:rounded-none">
                        Videos
                    </button>
                </Link>
                <Link to="/projects/visuals">
                    <button className=" border w-[19vw] md:w-[12vw] p-1 hover:scale-90 hover:shadow hover:shadow-white transition-all rounded-3xl hover:rounded-none">
                        Visuals
                    </button>
                </Link>
                <Link to="/projects/websites">
                    <button className=" border w-[19vw] md:w-[12vw] p-1 hover:scale-90 hover:shadow hover:shadow-white transition-all rounded-3xl hover:rounded-none">
                        Websites
                    </button>
                </Link>
            </div>
        </div>
    );
};
