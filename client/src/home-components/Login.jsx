import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { faMicrosoft, faTwitter, faApple, faYahoo} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Login = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    if (form.username === "" && form.password === "") {
      toast.error("Please fill in all fields.", {
        style: {
          backgroundColor: "transparent",
          color: "red",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "error",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (form.username === "") {
      toast.error("Please fill in your username.", {
        style: {
          backgroundColor: "transparent",
          color: "red",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "error",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (form.password === "") {
      toast.error("Please fill in your password.", {
        style: {
          backgroundColor: "transparent",
          color: "red",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "error",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setLoading(false);
    toast.success("Logged in successfully.", {
      style: { background: "transparent", color: "green" },
      autoClose: 5000,
      hideProgressBar: false,
      position: "top-center",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <motion.div
      variants={fadeIn("", "spring")}
      viewport={{ once: "true" }}
      whileInView="show"
      initial="hidden"
      className="flex items-center justify-center"
    >
      <ToastContainer
        limit={3}
        closeOnClick
        pauseOnFocusLoss
        newestOnTop
        autoClose={2000}
        style = {{ background: 'transparent',  }}
      />
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`${styles.sectionHeadText} ${styles.paddingY} flex items-center flex-col leading-tight mt-[00px]`}
        >
          <div className="flex flex-row ml-5">

          Login to Neura
          <Link to="/">
          <img src={logo} className='leading-tight text-white hover:rotate-360 duration-500 w-20 h-20 ml-1 object-contain' />
          </Link>
          </div>
        <p className={`${styles.sectionSubText} normal-case mt-5`}>Log in to your account using any of these options.</p>
        </h1>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label className="flex flex-col">
            <span className="text-white text-[30px] mr-2 text-center font-medium mb-4">
              Your Name
            </span>
            <input
              type="text"
              autoComplete="true"
              name="username"
              onChange={handleChange}
              value={form.username}
              className="px-5 w-[280px] py-3 flex items-center bg-red-500 rounded-xl outline-none border-none"
            />
          </label>
          <label className="flex flex-col mt-10">
            <span className="text-white text-[30px] mr-2 text-center font-medium mb-4">
              Your Password
            </span>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={form.password}
              className="px-5 w-[280px] py-3 flex items-center bg-red-500 rounded-xl outline-none border-none"
            />
            {showPassword ? <VisibilityOffIcon onClick={togglePasswordVisible} className="cursor-pointer absolute active:scale-110 bottom-[20px] top-[538px] bg-transparent left-[740px] right-0" /> : <RemoveRedEyeIcon onClick={togglePasswordVisible} className="absolute bottom-[20px] active:scale-110 top-[538px] cursor-pointer bg-transparent left-[740px] right-0" />}
          </label>
          <div />
          <div className="flex flex-col mt-16 items-center justify-center">
            <button
              type="submit"
              className="bg-orange-500  hover:bg-red-500 hover:scale-110 active:scale-125 transition-all duration-500 border-none outline-none rounded-md px-5 text-[20px] w-[150px] py-2.5"
            >
              <div className="font-extrabold bg-transparent flex items-center justify-center">Login</div>
            </button>
              <p className="mt-7 text-gray-500">
               Do not have a account? {""}
               <Link to="/signup">

               <span className="text-red-500" >Sign Up</span>
               </Link>
              </p>
          </div>
        </form>
        <div
          style={{
            border: "solid white 0.2px",
            width: "400px",
            marginTop: "50px",
            borderRadius: "50px",
          }}
        />

        <button
          type="button"
          className="mt-10 hover:scale-110 active:scale-125 transition-all duration-300 cursor-pointer bg-google-btn px-5 py-2.5 rounded-md h-[50px] w-[250px]"
        >
          <span className="bg-transparent mr-[5px]" style={{ color:'white'}}>G</span> 
          <span className="bg-transparent ml-1 whitespace-nowrap">
           Continue with Google{" "}
         </span>
        </button>
        <button
          type="button"
          className="mt-6 hover:scale-110 active:scale-125 transition-all duration-300 cursor-pointer bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 px-5 py-2.5 rounded-md h-[50px] w-[250px]"
        >
          <span className='bg-transparent'>
            
            <FontAwesomeIcon icon={faMicrosoft} className='bg-transparent'  />
            </span>
          <span className="bg-transparent ml-1 whitespace-nowrap">
           Continue with Microsoft{" "}
         </span>
        </button>
        <button
          type="button"
          className="mt-6 hover:scale-110 active:scale-125 transition-all duration-300 cursor-pointer bg-twitter-btn px-5 py-2.5 rounded-md h-[50px] w-[250px]"
        >
          <span className="bg-transparent ml-1 whitespace-nowrap">
          <FontAwesomeIcon icon={faTwitter} className='bg-transparent mr-[5px]' />
           Continue with Twitter{" "}
         </span>
        </button>
        <div className="mt-5 text-slate-500 cursor-pointer hover:scale-110 duration-300 transition-all" onClick={() => setShowButtons(!showButtons)}>{showButtons ? 'Hide Options' : 'Show More Options'} {showButtons ? <KeyboardDoubleArrowUpIcon />  : <KeyboardDoubleArrowDownIcon />}</div>
        {showButtons && (
            <>
            <button
          type="button"
          className="mt-6 hover:scale-110 active:scale-125 transition-all duration-300 cursor-pointer bg-yahoo-btn px-5 py-2.5 rounded-md h-[50px] w-[250px]"
        >
         
          <span className="bg-transparent ml-1 whitespace-nowrap">
          <FontAwesomeIcon icon={faYahoo} className='bg-transparent mr-[5px]' />
           Continue with Yahoo{" "}
         </span>
        </button>
        <button
          type="button"
          className="mt-6 hover:scale-110 active:scale-125 transition-all duration-300 cursor-pointer bg-apple-btn px-5 py-2.5 rounded-md h-[50px] w-[250px]"
        >
          <span className="bg-transparent ml-1 whitespace-nowrap">
          <FontAwesomeIcon icon={faApple} className='bg-transparent mr-[5px]' />
           Continue with Apple{" "}
         </span>
        </button>
            </>
          )}
        
        <p className="text-gray-500 mt-9 text-[13px] font-bold">
          By logging in, you agree to our{" "}
          <span className="text-red-500">Privacy Policy</span>
        </p>
      </div>
    </motion.div>
    </>
  );
};

export default SectionWrapper(Login, "");
