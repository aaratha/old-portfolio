import{ Videos } from './videos/videos';

export interface ProjectsProps {
    className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className='flex flex-row m-auto'>
            <Videos />
        </div>
    );
}