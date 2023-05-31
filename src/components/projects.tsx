import { Link, Outlet } from 'react-router-dom';

export interface ProjectsProps {
    className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className='flex w-full h-full bg-black bg-opacity-50'>
            <div className="flex flex-col m-auto w-[90%] md:w-[80%] xl:w-[70%] transition-all hover:bg-opacity-80">
                <Outlet />
                <div className="shadow-1 shadow-tertiary bg-secondary ml-12 mr-12 mt-3 bg-opacity-[60%] hover:bg-opacity-80 transition-all rounded-2xl flex flex-row pl-2 pr-2 md:pl-6 md:pr-6 justify-between text-lg p-3">
                    <Link className="" to="/projects/videos">
                        <button className="border border-primary w-[19vw] md:w-[12vw] p-1 transition-all hover:scale-90 hover:shadow hover:shadow-primary rounded-3xl hover:rounded-none">
                            Videos
                        </button>
                    </Link>
                    <Link to="/projects/visuals">
                        <button className=" border border-primary w-[19vw] md:w-[12vw] p-1 hover:scale-90 hover:shadow hover:shadow-primary transition-all rounded-3xl hover:rounded-none">
                            Visuals
                        </button>
                    </Link>
                    <Link to="/projects/websites">
                        <button className=" border border-primary w-[19vw] md:w-[12vw] p-1 hover:scale-90 hover:shadow hover:shadow-primary transition-all rounded-3xl hover:rounded-none">
                            Websites
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
