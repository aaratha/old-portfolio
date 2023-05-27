import icon1 from './icons8-instagram.svg';
import icon2 from './mail-2-svgrepo-com.svg';
export interface ContactProps {
    className?: string;
}

export const Contact = ({ className }: ContactProps) => {
    return (
        <div className='flex flex-col p-[2vw] border content-center align-center m-auto items-center justify-center hover:p-[3vw] transition-all duration-500'>
            <div className='flex flex-col m-auto pl-[10vw] pr-[10vw] pb-[7vw] pt-[7vw] hover:pl-[12vw] hover:pr-[12vw] hover:pb-[8vw] hover:pt-[8vw] border items-center justify-center transition-all duration-500'>
                <div className='flex flex-col m-auto p-[5vw] items-center bg-black justify-center transition-all duration-300 bg-opacity-60 hover:p-[6vw] hover:bg-opacity-80 text-white'>
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
