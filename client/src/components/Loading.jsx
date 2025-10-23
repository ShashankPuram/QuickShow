import React from 'react'

const Loading = () => {
  return (
    <>
      <style>
        {`
          .bounceball {
            position: relative;
            display: inline-block;
            height: 37px;
            width: 15px;
          }
          .bounceball:before {
            position: absolute;
            content: '';
            display: block;
            top: 0;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: currentColor; /* Inherits text-primary */
            transform-origin: 50%;
            animation: bounce 500ms alternate infinite ease;
          }
          @keyframes bounce {
            0% {
              top: 30px; /* $bounce_height */
              height: 5px;
              border-radius: 60px 60px 20px 20px;
              transform: scaleX(2);
            }
            35% {
              height: 15px; /* $height */
              border-radius: 50%;
              transform: scaleX(1);
            }
            100% {
              top: 0;
            }
          }
        `}
      </style>
      <div className='flex justify-center items-center h-[80vh] text-primary'>
        <div className='flex items-center'>
          <div className="bounceball"></div>
          <div className="text-lg font-medium ml-3">LOADING</div>
        </div>
      </div>
    </>
  )
}

export default Loading
