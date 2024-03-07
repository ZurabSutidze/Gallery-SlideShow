import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Information.css'
import Modal from './modal';
const Info = () => {
    const [bool , Setbool] = useState(false)
    const { state } = useLocation();
    const handleClick = () => {
        Setbool((prevBool) => !prevBool);
      };

    return (
        <>
            <section className='flex w-[90%] max-w-[1920px] flex-col justify-center items-center mt-[100px]  mr-5 ml-5 xl:flex-row xl:justify-between md:mb-[100px] xl:m-auto xl:mt-[100px]'>
                <div className='xl:ml-[95px]'>

                   <div className='md:relative md:right-[90px] md:flex md:self-center'>
                        <img onClick={()=>{Setbool(true)}} className='w-[327px] md:w-[475px] md:h-[560px]' src={state.images.hero.small} alt=" " />
                   </div>
                    
                    <div className='w-[280px] bg-white min-h-[104px] h-auto ml-[32px] relative right-9 bottom-16 md:w-[445px] md:min-h-[238px] md:h-auto md:flex md:flex-col md:items-center md:bottom-[560px] md:left-[120px] md:pb-5'>
                            <h1 className='text-2xl font-bold pt-6 pb-2 leading-[27px] md:text-[56px] md:leading-[64px] md:w-[300px]'>{state.name}</h1>
                            <h1 className='text-1rem text-[#7D7D7D] md:w-[295px] md:pt-6'>{state.artist.name}</h1>
                    </div>
                    
                        <div className='flex justify-center items-center relative bottom-14 right-[130px] md:bottom-[560px] md:left-[160px] md:mb-[-250px] image2 xl:bottom-[330px] xl:mb-[-300px]'>
                            <img className='w-[64px] h-[64px]  md:w-[128px] md:h-[128px]' src={state.artist.image} alt="" />
                        </div>
                </div>

                <div className='xl:mr-[-110px]'>
                    <div>
                        <h1 className='text-8xl text-[#F3F3F3] font-bold leading-[100px] relative bottom-[75px] left-[20px] md:text-[200px] md:leading-[150px] md:left-[-90px] xl:bottom-[140px]'>{state.year}</h1>
                    </div>
                    
                    <div className='relative bottom-[100px] mb-[-40px] md:bottom-[150px] md:mb-[-100px] xl:right-[150px] xl:bottom-[180px]'>
                        <p className='w-[327px] m-auto  text-[#7D7D7D] text-[14px] leading-6 md:w-[457px] xl:w-[350px] xl:leading-[28px]'>{state.description}</p>
                    </div>
                    
                    <div className='relative left-3 xl:left-[-95px]'>
                        <Link className='text-[#7D7D7D] text-[9px] hover:text-black tracking-[2px] underline xl:tracking-[3px] xl:text-[11px]' to='/'>GO TO SOURCE</Link>
                    </div>
                </div>

                {bool ? <Modal img={state.images.hero.small} fuct={() => handleClick()} /> : null}
                {bool ? <p className='text-black text-2xl absolute z-1000 bottom-[10%] left-[90%]' onClick={()=>Setbool(false)}> Close</p> : null}
           
                
            </section>
            
        </>
    );
}

export default Info;
