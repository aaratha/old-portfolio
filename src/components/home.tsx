import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface HomeProps {
    className?: string;
}

export const Home = ({ className }: HomeProps) => {
    return (
        <div className='flex flex-col p-[2vw] border content-center align-center m-auto items-center justify-center hover:p-[3vw] transition-all duration-500'>
            <div className='flex flex-col m-auto pl-[10vw] pr-[10vw] pb-[7vw] pt-[7vw] hover:pl-[12vw] hover:pr-[12vw] hover:pb-[8vw] hover:pt-[8vw] border items-center justify-center transition-all duration-500'>
                <div className='flex flex-col m-auto p-[5vw] items-center bg-black justify-center transition-all duration-300 bg-opacity-60 hover:p-[6vw] hover:bg-opacity-80 text-white'>
                    <h1 className=' text-2xl p-3 font-bold'>Aseem Ratha</h1>
                    <p className=' p-1 pb-5'>Washington D.C. / Toronto</p>
                    <Link to="/projects">
                        <button className='border border-white p-1 hover:p-3 transition-all '>Explore Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
