import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface HomeProps {
    className?: string;
}

export const Home = ({ className }: HomeProps) => {
    return (
        <div className='flex flex-col m-auto w-1/2 border items-center border-black h-[60%] justify-center hover:w-3/5 hover:h-[70%] transition-all duration-500'>
            <div className='flex flex-col m-auto w-1/2 items-center h-1/2 bg-black justify-center hover:w-3/5 hover:h-3/5 transition-all duration-300 bg-opacity-60 hover:bg-opacity-90 text-white'>
                <h1 className=' text-2xl p-3 font-bold'>Aseem Ratha</h1>
                <p className=' p-3'>Washington D.C. / Toronto</p>
                <Link to="/projects">
                    <button className='border border-white p-1 hover:p-3 transition-all '>Explore Projects</button>
                </Link>
            </div>
        </div>
    );
};
