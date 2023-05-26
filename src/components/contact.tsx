import icon1 from './icons8-instagram.svg';
import icon2 from './mail-2-svgrepo-com.svg';
export interface ContactProps {
    className?: string;
}

export const Contact = ({ className }: ContactProps) => {
    return (
        <div className='flex flex-col m-auto w-1/2 border items-center h-[60%] justify-center hover:w-3/5 hover:h-[70%] transition-all duration-500'>
            <div className='flex flex-col m-auto w-1/2 items-center h-1/2 bg-black justify-center hover:w-3/5 hover:h-3/5 transition-all duration-300 bg-opacity-60 hover:bg-opacity-90 text-white'>
                <div className='m-auto justify-center items-center'>
                    <a href="https://www.instagram.com/aa.ratha/" style={{ textDecoration: 'none' , color: 'white'}}>
                        <div className='text-xl flex items-center justify-center mb-1'>
                            <img src={icon1} className='w-8 mr-2' />
                            @aa.ratha
                        </div>
                    </a>
                    <a href= "mailto:aseemratha@gmail.com" style={{ textDecoration: 'none',  color: 'white'}}>
                        <div className='flex text-xl items-center justify-center'>
                            <img src={icon2} className='w-10 mr-2' />
                            aseemratha@gmail.com
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
