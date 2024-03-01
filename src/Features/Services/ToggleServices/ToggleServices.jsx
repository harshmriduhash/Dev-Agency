import React from "react";
import SubTitle from "../../../UI/SubTitle";
import services from "../../../Constants/services";
import SrvBox from "./components/SrvBox";

const ToggleServices = () => {
  return (
    <section className="w-full bg-dark-grey pt-10 mt-32">
      <div className="container">
        <div className="w-full flex flex-col items-center">
          <SubTitle text={"Services"} />

          <h6 className="text-6xl font-bold text-left my-4">
            From validating the idea to final delivery & post
            delivery support
          </h6>
        </div>

        <div className="flex mt-10 border-t border-zinc-700 flex-col w-full">
          {services.map((srv, idx) => (
            <SrvBox service={srv} idx={idx} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToggleServices;
