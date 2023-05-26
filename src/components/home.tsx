import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface HomeProps {
    className?: string;
}

export const Home = ({ className }: HomeProps) => {
    return (
        <div className='flex flex-col p-7 border content-center align-center m-auto items-center justify-center hover:p-12 transition-all duration-500'>
            <div className='flex flex-col m-auto pl-48 pr-48 pb-28 pt-28 hover:pl-56 hover:pr-56 hover:pb-32 hover:pt-32 border items-center justify-center transition-all duration-500'>
                <div className='flex flex-col m-auto p-20 items-center bg-black justify-center transition-all duration-300 bg-opacity-60 hover:p-32 hover:bg-opacity-80 text-white'>
                    <h1 className=' text-2xl p-3 font-bold'>Aseem Ratha</h1>
                    <p className=' p-3'>Washington D.C. / Toronto</p>
                    <Link to="/projects">
                        <button className='border border-white p-1 hover:p-3 transition-all '>Explore Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
