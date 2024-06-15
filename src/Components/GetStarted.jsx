import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
function GetStarted() {
    return (
       <>
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexCenter} flex-row`}>
                    <p className="text-white text-[18px] leading-[23px] font-poppins">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} className='w-[23px] h-[23px] object-contain'/>
                </div>
                <p className="text-white text-[18px] leading-[23.4px] font-poppins mr-2">
                        <span className="text-gradient">Started</span>
                    </p>
            </div>
            

        </div>
       </> 
    )
}

export default GetStarted
