/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './scrollPostionBtn.css'
export const changeScroll = (direction, currentPage, setCurrentPage, I, scroll) => {
    if (scroll.current) {
        let newPage = direction;
        

        const newScrollPosition = newPage * I;
        scroll.current.scrollLeft = newScrollPosition;
        setCurrentPage(Math.round(newScrollPosition/I))
    }
};

function ScrollPostionBtn({scroll, A, W, I}) {
    const [N, setN] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        console.log(scroll);
            let n = calcScrolls(A, W, I)
            setN(n)
            console.log(n);
    }, [scroll, A, W, I])
    function calcScrolls(A, W, I){
        const elePerScroll = Math.floor(I / W)
        if(elePerScroll <= 0){
            return 0;
        }

        const S = Math.ceil(A / elePerScroll)
        return S

    }

    
    

  return (
    <div className='scrollOthers'>
        {/* <i className="dot" data-pres="true"></i>
        <i className="dot"></i> */}
        {
            Array.from({length:N}).map((_, index)=>{
                return <i key={index} onClick={()=>changeScroll(index, currentPage, setCurrentPage, I, scroll)} className="dot" data-pres={currentPage==index? "true": "false"}></i>
            })
        }
    </div>
  )
}

export default ScrollPostionBtn