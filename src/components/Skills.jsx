import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node  from "../assets/node.png";
import scss from "../assets/sass logo.png";
import c from "../assets/c++ logo.png";
import bootstrap from "../assets/bootstrap-logo-shadow.png";
import expre from "../assets/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png";
import mong from "../assets/mongo db logo.png";
import mys from "../assets/mysql logo.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML/HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS/CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: scss,
      title: "SASS",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "BootStrap5",
      style: "shadow-purple-400",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: mong,
      title: "MonGo Db",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: expre,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: mys,
      title: "MySql",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: c,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full py-12"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
          </p>
          <p className="py-6">These are the technologies and Langauge I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
