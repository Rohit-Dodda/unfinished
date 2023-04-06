import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";

const SignUp = () => {
  const formRef = useRef();
    const [form, setForm] = useState({
    name: localStorage.getItem('name') || "",
    teamName: localStorage.getItem('teamName') || "",
  })

  const [selected, setSelected] = useState(false);

  const navigate = useNavigate();

  function click() {
    setSelected(!selected);
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name] : value
    })

    localStorage.setItem(name, value)
  }

  const handleSubmitCasual = (e) => {
    e.preventDefault();

    navigate('/signup/exploring')
  }

  const handleSubmitProfession = (e) => {
    e.preventDefault();

    navigate('/signup/profession')
  }


  return (
    <>
      <motion.div
        variants={fadeIn("", "spring")}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${styles.sectionHeadText} ${styles.paddingY} mt-[100px]`}
          >
            Create a
            <Link to="/">
              <span className="neura-grad ml-4 mr-4">Neura</span>
            </Link>
            Account{" "}
          </div>
          <p className="text-slate-400 text-center text-[20px] -mt-10 leading-tight font-semibold">
            Neura is the first ever{""} <span className="ai-grad-two">AI</span>{" "}
            repository, with many informative{" "}
            <span className="resources-grad">resources</span> and{" "}
            <span className="tools-grad">tools</span>.
          </p>

          <button
            type="button"
            style={{
              border: "solid white 0.5px",
              backgroundColor: !selected ? "#383736" : "transparent",
            }}
            className={`
             hover:bg-[#383736] mt-10 w-[550px] h-[120px] rounded-md px-5 py-2.5 transition-colors duration-300 outline-slate-300`}
            onClick={click}
          >
            <div className="flex items-center justify-center bg-transparent">
              Just Exploring
            </div>
            <p className="text-gray-500 mt-2 text-[15px] bg-transparent">
              Im just exploring and finding new resources for myself, and for
              personal enjoyment.
            </p>
          </button>
          {!selected && (
            <form ref={formRef} onSubmit={handleSubmitCasual} className="flex items-center flex-col">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={handleChange}
                value={form.name}
                autoComplete="true"
                className="bg-zinc-900 rounded-md mt-5 text-[17px] placeholder:text-[15px] w-[555px] px-5 py-2.5 border-none outline-none"
                required
              />
              <button
                type="submit"
                className="px-5 bg-red-500 rounded-md outline-none w-[555px] py-2.5  mt-5"
              >
                Continue
              </button>
            </form>
          )}

          <button
            type="button"
            style={{
              border: "solid white 0.5px",
              backgroundColor: selected ? "#383736" : "transparent",
            }}
            className={`hover:bg-zinc-900 mt-10 w-[550px] h-[120px] rounded-md px-5 py-2.5 transition-colors duration-300 outline-slate-300`}
            onClick={click}
          >
            <div className="flex items-center justify-center bg-transparent">
              Professional
            </div>
            <p className="text-gray-500 mt-2 text-[15px] bg-transparent">
              I am trying to gather resources for my team, co-workers and for my
              job.
            </p>
          </button>
          {selected && (
            <form ref={formRef} onSubmit={handleSubmitProfession} className="flex items-center flex-col">
              <input
                type="text"
                name="teamName"
                placeholder="Team Name"
                onChange={handleChange}
                value={form.teamName}
                className="bg-zinc-900 rounded-md mt-5 text-[17px] placeholder:text-[15px] w-[555px] px-5 py-2.5 border-none outline-none"
                required
              />
              <button
                type="submit"
                className="px-5 bg-red-500 rounded-md outline-none w-[555px] py-2.5  mt-5"
              >
                Continue
              </button>
              <div className="mt-4 mr-10 text-center cursor-pointer duration-500 transition-all text-red-600 font-extrabold text-[16px] hover:underline">
                Continuing will require the 21 days free pro trial.{" "}
                <LaunchIcon className="text-[16px] cursor-pointer hover:scale-110 transition-all" />
              </div>
            </form>
          )}
          <div className="mt-[55px] text-gray-500">
            Already have a account? {""}
            <Link to="/login">
             <span className="text-red-500 hover:underline">Log In</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SignUp;