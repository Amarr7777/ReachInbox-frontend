import React from 'react'

function Tag() {
  return (
    <div className="flex  justify-center items-center gap-[8px]">
        <div className="flex  justify-center items-center gap-[4px] bg-[#F0F0F0] dark:bg-[#222426] rounded-[17px] px-[8px] py-[3px]">
          <div className="w-[12px] h-[12px] flex justify-center items-center rounded-[50px] bg-[#C4ECDA] dark:bg-[#2D3833]">
            <div className="w-[8px] h-[8px] rounded-[50px] bg-[#57E0A6]"></div>
          </div>
          <p className="font-sans font-[600] text-[10px] leading-[13.62px] text-[#57E0A6]">
            Interested
          </p>
        </div>
      </div>
  )
}

export default Tag