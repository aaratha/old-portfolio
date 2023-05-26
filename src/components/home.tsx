import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface HomeProps {
    className?: string;
}

export const Home = ({ className }: HomeProps) => {
    return (
        <div className='flex flex-col m-auto w-1/2 border border-white text-white p-20'>
                <h1 className=''>Aseem Ratha</h1>
                <p className=''>Washington D.C. / Toronto</p>
                <Link to="/projects">
                    <button className=''>Explore Projects</button>
                </Link>
        </div>
    );
};
