import { motion } from "framer-motion";
import Robotcanvas from "../canvas/Robotcanvas";
import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", 0.5)}
        whileInView="show"
        initial="hidden"
        className="flex flex-col items-center hero-shadow justify-center mx-auto"
      >
        <Tilt
          className="bg-transparent"
          options={{
            max: 45,
            scale: 1,
            speed: 900,
          }}
        >
          <div className="flex flex-row gap-[40px] mt-[30px] items-center justify-center">
            <h1
              className="text-white hover:scale-110 transition-transform duration-500 uppercase text-[200px] leading-tight font-bold ai-grad"
              style={{ textShadow: "4px 4px 36px rgba(202,38,38,0.6)" }}
            >
              AI.
            </h1>
            <h1
              className="text-white hover:scale-110 transition-transform duration-700 uppercase text-[200px] leading-tight font-bold has-grad"
              style={{ textShadow: "4px 4px 36px rgba(228,127,25,0.6)" }}
            >
              Has.
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1
              className="arrived-grad hover:scale-125 transition-transform duration-700 font-extrabold text-red-500 leading-tight text-[300px] -mt-[38px]"
              style={{ textShadow: "4px 3px 80px rgba(205,104,28,1)" }}
            >
              Arrived.
            </h1>
          </div>
          <div className="text-[17px] text-red-500 flex flex-row gap-1 hero-text-grad">
            The ultimate AI hub, this place of the internet holds a plethora of
            AI assistants, provides instant access to information, and all while
            helping you find what you need with ease.
          </div>
        </Tilt>
        <Link to="/get-started">
        <button
          type="button"
          className="text-[28px]  mt-20 bg-[#e823239a] active:scale-150 hover:scale-110 transition-all duration-1000 hover:bg-[#ff800abf] px-5 py-2.5 font-extrabold get-started-shadow text-[#d6270fea] get-start-btn leading-snug hover:text-[#ff8000] rounded-lg"
        >

          Get Started
        </button>
          </Link>
      <a href="#steps" className="bg-transparent">
        <div className="w-[35px] mb-10 cursor:pointer get-started-shadow mt-[60px] h-[64px] rounded-3xl border-4 border-orange-500  p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-[#a5392a] mb-1"
          />
        </div>
      </a>
      </motion.div>
    </>
  );
};

export default Hero;
