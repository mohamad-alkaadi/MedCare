import React, { useEffect, useState } from 'react'
import './css/backtotop.css'
import {FaArrowUp} from 'react-icons/fa'
const BackToTop = () =>{
    const [backToTopButton, setBackToTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY >446){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        },[])
    })
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return <div>
        {backToTopButton &&(
            <button onClick={scrollUp} className='backToTop-button'><FaArrowUp className="backToTop-arrow"/></button>
        )}
    </div>
}

export default BackToTop