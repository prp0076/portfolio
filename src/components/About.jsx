import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-2/3 bg-gradient-to-b from-gray-800 to-black text-white md:pt-0 pt-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl md:mt-10 text-justify">
        Hi, my name is Pushpraj Paroha, and I am currently pursuing a Bachelor of Engineering degree with a specialization in Electronics and Communication Engineering from University Institute of Technology, Barkatullah University.My passion lies in problem-solving and full-stack web development, which has led me to become proficient in various web technologies such as HTML, CSS, JavaScript, jQuery, ReactJS, NodeJS, ExpressJS, and MongoDB. I have demonstrated my skills by solving over 300 problems on the GeeksforGeeks platform.
        </p>

        <br />

        <p className="text-xl text-justify">
        In addition to my technical skills, I have completed several projects, including Dstore, a fully functional e-commerce store, and MovieX, a platform for watching and searching movies. These projects have given me practical experience in web development and have helped me to hone my problem-solving skills.
        </p>
      </div>
    </div>
  );
};

export default About;
