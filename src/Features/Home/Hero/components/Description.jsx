import React from "react";

const Description = () => {
  return (
    <div className="flex-1 flex flex-col gap-20 w-full sm:w-2/3">
      <p className="text-xl opacity-70">
        Discover the new generation within Software Development.
        <br></br>
        Simply better - you'll never want to go back.
      </p>

      <div className="flex gap-5">
        <div className="flex-1">
          <p className="text-xl mb-3">More than 15 clients</p>
          <p className="text-sm mb-5 opacity-70">
            Our goal is to become Go-To Partner for young startups. We help
            Young Startups and Entreprenuer create a digital product that
            attracts more customers and increases the company's business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
