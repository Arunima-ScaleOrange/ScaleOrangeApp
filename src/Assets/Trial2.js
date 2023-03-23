import React from 'react';
import data from "./plotInfo.json";

const Trial2 = () => {
  return (
    <>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="210mm"
        height="297mm"
        version="1.1"
        viewBox="0 0 210 297"
    >
    <g>
        {
            data.map((value) => {
                return(
                    <>
                            <path
                                fill={value.fill} 
                                strokeWidth={value.strokeWidth}
                                d={value.d}
                                clipPath={value.clipPath}
                                transform={value.transform}
                                // onClick={() => {handleClick(value.id)}}
                            />
                    </>
                )
            })
        }
        </g>
        </svg>
    </>
  )
}

export default Trial2