import HeroVideo from "../assets/Hero.mp4";
import { MdArrowRightAlt } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section className="pt-6 min-h-screen bg-[#e3e3e4] text-white flex items-center justify-center px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full lg:p-15">
          <div className="flex-1 text-center lg:text-left mt-10 lg:mt-20 ">
            <button className="bg-slate-400 flex items-center justify-center mx-auto lg:mx-0 rounded-3xl text-white py-3 px-8 text-lg hover:bg-gray-500">
              Become an Instructor
              <MdArrowRightAlt className="text-3xl ml-5" />
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-10">
              <span className="text-slate-800">Master</span>{" "}
              <span className="text-green-400">Your Skills</span>
            </h1>

            <p className="max-w-xl text-slate-600 text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-10 mx-auto lg:mx-0">
              Join the best learning platform and take your skills to the next
              level. Learn from industry experts with hands-on projects and
              real-world applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 sm:mt-10 justify-center lg:justify-start">
              <button className="bg-blue-500  text-white hover:bg-blue-600 py-3 px-8 text-lg rounded-md">
                Learn More
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 text-lg rounded-md">
                Live Demo
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center mt-10 lg:mt-0">
            <video
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-lg"
              src={HeroVideo}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
