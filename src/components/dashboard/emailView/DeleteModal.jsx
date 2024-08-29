import React from "react";

function DeleteModal({ setShowModal, deleteEmailThread }) {
  return (
    <div className="absolute h-svh w-full inset-0 flex justify-center items-center bg-[rgba(60,58,58,0.49)] dark:bg-[rgba(132,132,132,0.49)]">
      <div className="w-[443px] h-[249px] rounded-[8px] px-[32px] py-[4px] flex flex-col justify-evenly items-center gap-[16px] bg-gradient-to-r from-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-[#141517] dark:to-[#232528] border border-gray-400 dark:border-[#484E53]">
        <p className="font-sans font-[700] text-[24px] leading-[32.68px] text-center dark:text-white">
          Are you sure ?
        </p>
        <p className="font-sans font-[400] text-[13px] leading-[20.15px] text-center dark:text-[#E8E8E8]">
          Your selected email will be deleted.
        </p>
        <div className="flex justify-center items-center gap-[10px]">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="bg-gray-200 dark:bg-[#25262B] px-[37px] py-[17px] rounded-[4px] w-max h-[48px] flex justify-center items-center hover:scale-105"
          >
            <p className="font-sans font-[600] text-[14px] leading-[21.7px] text-center dark:text-white">
              cancel
            </p>
          </button>
          <button
            onClick={deleteEmailThread}
            className="bg-gradient-to-r from-[#FA5252] to-[#A91919] px-[37px] py-[17px] rounded-[4px] w-max h-[48px] flex justify-center items-center hover:scale-105"
          >
            <p className="font-sans font-[600] text-[14px] leading-[21.7px] text-center text-white">
              Delete
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
