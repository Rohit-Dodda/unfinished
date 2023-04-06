import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { useState, useRef, useEffect } from "react";
import {
  faTiktok,
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
  faSnapchat,
  faReddit,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Exploring = () => {
  const mainName = localStorage.getItem("name");

  return (
    <motion.div
      variants={fadeIn("", "spring")}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      className="flex items-center justify-center"
    >
      <div
        className={`${styles.heroHeadText} ${styles.paddingY} flex flex-col items-center mt-[120px]`}
      >
        <div className="flex flex-row">
          <Link to="/">
            <img
              src={logo}
              alt="Neura Logo"
              className="w-24 h-24 hover:rotate-360 duration-500 object-contain"
            />
          </Link>
          <h1>Hey {mainName}!</h1>
        </div>
        <p className={`${styles.heroSubText} text-gray-500 mt-8`}>
          How did you hear about us?
        </p>
        <Card />
      </div>
    </motion.div>
  );
};

const Card = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    other: localStorage.getItem("other") || "",
  });
  const [activeButtons, setActiveButtons] = useState([]);
  const [buttonStates, setButtonStates] = useState({});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    localStorage.setItem(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const btnArr = [
    "Tiktok",
    "Youtube",
    "Twitter",
    "Instagram",
    "Facebook",
    "Snapchat",
    "Google",
    "Reddit",
  ];


  useEffect(() => {
    const storedButtonNames = JSON.parse(localStorage.getItem("buttonNames"));
    if (storedButtonNames) {
      setActiveButtons(storedButtonNames);
    }
  }, []);

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    const newActiveButtons = [...activeButtons];
  
    const index = newActiveButtons.indexOf(buttonName);
    if (index !== -1) {
      newActiveButtons.splice(index, 1);
    } else {
      newActiveButtons.push(buttonName);
    }
  
    setActiveButtons(newActiveButtons);
    localStorage.setItem("buttonNames", JSON.stringify(newActiveButtons));
   
  };


  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center mt-9">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-rows-4 gap-[15px]"
        >
          <div className="flex items-center gap-[30px]">
            <button
              type="button"
              className={` text-[30px] mt-10 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 rounded-tl-xl outline-none border-none rounded-br-xl flex items-center bg-red-500 h-[80px] px-5`}
              onClick={handleClick}
            >
              {btnArr[0]}{" "}
              <FontAwesomeIcon
                icon={faTiktok}
                className="ml-2 bg-transparent"
              />
            </button>
            <button
              type="button"
              className={`text-[30px] mt-10 bg-gradient-to-r from-red-500 to-red-800 rounded-tl-xl outline-none border-none rounded-br-xl flex items-center bg-red-500 h-[80px] px-5`}
              onClick={handleClick}
            >
              {btnArr[1]}{" "}
              <FontAwesomeIcon
                icon={faYoutube}
                className="ml-2 bg-transparent"
              />
            </button>
            <button
              type="button"
              className={`text-[30px] mt-10 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  rounded-tl-xl outline-none border-none rounded-br-xl flex items-center bg-red-500 h-[80px] px-5`}
              onClick={handleClick}
            >
              {btnArr[2]}{" "}
              <FontAwesomeIcon
                icon={faTwitter}
                className="ml-2 bg-transparent"
              />
            </button>
            <button
              type="button"
              className="text-[30px] mt-10 rounded-tl-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 outline-none border-none rounded-br-xl flex items-center bg-red-500 h-[80px] px-5"
              onClick={handleClick}
            >
              {btnArr[3]}{" "}
              <FontAwesomeIcon
                icon={faInstagram}
                className="ml-2 bg-transparent"
              />
            </button>
          </div>
          <div className="flex items-center gap-[30px]">
            <button
              type="button"
              className="text-[30px] mt-10 rounded-tl-xl outline-none bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 border-none rounded-br-xl flex items-center bg-red-500 h-[80px] px-5"
              onClick={handleClick}
            >
              {btnArr[4]}{" "}
              <FontAwesomeIcon
                icon={faFacebook}
                className="ml-2 bg-transparent"
              />
            </button>
            <button
              type="button"
              className="text-[30px] mt-10 rounded-tl-xl outline-none bg-gradient-to-b from-orange-500 to-yellow-300 border-none rounded-br-xl flex items-center bg-red-500 h-[80px] px-5"
              onClick={handleClick}
            >
              {btnArr[5]}{" "}
              <FontAwesomeIcon
                icon={faSnapchat}
                className="ml-2 bg-transparent"
              />
            </button>
            <button
              type="button"
              className="text-[30px] mt-10 rounded-tl-xl outline-none border-none rounded-br-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black flex items-center bg-red-500 h-[80px] px-5"
              onClick={handleClick}
            >
              {btnArr[6]}{" "}
              <FontAwesomeIcon
                icon={faGoogle}
                className="ml-2 bg-transparent"
              />
            </button>
            <button
              type="button"
              className="text-[30px] mt-10 rounded-tl-xl outline-none border-none rounded-br-xl bg-gradient-to-r from-red-200 to-red-600 flex items-center bg-red-500 h-[80px] px-5"
              onClick={handleClick}
            >
              {btnArr[7]}{" "}
              <FontAwesomeIcon
                icon={faReddit}
                className="ml-2 bg-transparent"
              />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Other...(Optional)"
              name="other"
              value={form.other}
              className="rounded-3xl placeholder:text-white bg-gradient-to-r from-rose-500 via-red-400 to-red-500 px-5 py-2.5 text-[30px] w-[390px] h-[80px] outline-none mt-2"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <Link to="/signup">
              <button className="text-[30px]  rounded-2xl flex items-center justify-center h-[70px] outline-none w-[160px] mt-3">
                <div className="mr-2">
                  <KeyboardBackspaceIcon />
                </div>{" "}
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="text-[30px]  rounded-2xl flex items-center justify-center h-[70px] outline-none w-[160px] mt-3"
              onSubmit={handleSubmit}
            >
              <Link to="/signup/exploring/form">

              Next
              </Link>
              <div className="ml-2">
                <ArrowRightAltIcon />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Exploring;
