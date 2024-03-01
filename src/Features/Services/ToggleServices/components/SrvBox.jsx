import React, { useRef } from "react";

const SrvBox = ({ service, idx }) => {
  const toggleText = () => {
    const clickedSrvBox = document.querySelector(`#srv-box-${idx}`);

    clickedSrvBox.classList.toggle("active");
  };

  return (
    <div
      id={`srv-box-${idx}`}
      className=" ease-06 overflow-hidden srv-box w-full gap-5 h-[100px] border-b border-zinc-700 justify-between items-center flex "
    >
      <div className="flex h-fit flex-[.8] items-center">
        <span
          className={`block mr-3 ${service.color} h-5 aspect-square`}
        ></span>
        <h5 onClick={toggleText} className="text-3xl clickable h-fit">
          {service.name}
        </h5>
      </div>


    </div>
  );
};

export default SrvBox;
