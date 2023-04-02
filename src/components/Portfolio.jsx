import React from "react";
import dstore from "../assets/portfolio/dstore.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
import Menswear from "../assets/portfolio/menswear.jpg";
import Movix from "../assets/portfolio/movix.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dstore,
      href:"https://dstore-ecommerce-fox-825b79.netlify.app/",
      code:"https://github.com/prp0076/Dstore-Ecommerce"
    },
    {
      id: 2,
      src: Movix,
      href:"https://moviex-hamster-61d783.netlify.app/",
      code:"https://github.com/prp0076/MovieX"

    },
    {
      id: 3,
      src: Menswear,
      href:"https://prp0076.github.io/Menswear/",
      code:"https://github.com/prp0076/Menswear"

    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-15">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href,code }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <a href={href} className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</a>
                {/* <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
                <a href={code} className=" px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">Code</a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
