import React from "react";
import SubTitle from "../../../../UI/SubTitle";

const skills = [
  {
    name: "MERN Stack",
    percent: "99",
  },
  {
    name: "Deployment",
    percent: "99",
  },
  {
    name: "React Native, Flutter",
    percent: "99",
  },
  {
    name: "Bubble, FlutterFlow, Airtable",
    percent: "99",
  },
];

const SkillsHolder = () => {
  return (
    <div className="w-full md:w-1/2 md:min-h-screen flex flex-col">
      <SubTitle text={"welcome"} />

      <h3 className="text-3xl mt-8 sm:text-5xl mb-12 font-extrabold ">
        we are a product development house
      </h3>

      <p className=" text-md ">
        We Use The Power Of AI And No-Code To Develop Unmatched User
        Experiences. We Can Build An Entire Product For You In 40% Reduced Time.
        We Are Hyper-Focused On Creating Best Class Scaleable Applications,
        Optimized For The Best Possible User Experience And Product. We're The
        All-In-One Solution For Startups which are Looking To Rapidly Develop,
        And Then Launch With Our Support
      </p>

      <div className=" mt-16 flex flex-col gap-5 w-full">
        {skills.map((skill, idx) => (
          <div key={idx} className="w-full flex flex-col">
            <p className="text-2xl mb-3">{skill.name}</p>

            <div className="w-full bg-zinc-700 h-3 ">
              <span
                className={`  w-[${skill.percent}%] block bg-slate-100 h-full`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsHolder;
