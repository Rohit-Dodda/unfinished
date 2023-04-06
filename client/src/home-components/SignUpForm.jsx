import { motion } from "framer-motion";
import { styles } from "../styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fadeIn } from "../utils/motion";
import { useNavigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const SignUpForm = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const [form, setForm] = useState({
    publicName: localStorage.getItem('publicName') || "",
    email: localStorage.getItem('email') || "",
    password: "",
    confirmPassword: "",
  });
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    localStorage.setItem(name, value)
  };

  const checkPasswordCriteria = (password) => {
    // Check if password meets the criteria and set the state for each requirement
    setHasMinLength(password.length >= 8);
    setHasUppercase(/[A-Z]/.test(password));
    setHasLowercase(/[a-z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSpecialCharacter(/[\W_]/.test(password));
  };

  useEffect(() => {
    checkPasswordCriteria(form.password);
  }, [form.password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.publicName == "" &&
      form.email == "" &&
      form.password === "" &&
      form.confirmPassword == ""
    ) {
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

    if (form.publicName == "") {
      toast.error("Please fill out your username.", {
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

    if (form.email == "") {
      toast.error("Please fill out your email.", {
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

    if (form.password == "") {
      toast.error("Please fill in your password", {
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

    if (hasMinLength === false) {
      toast.error("Your password needs atleast 6 characters.", {
        style: {
          backgroundColor: "transparent",
          color: "lightblue",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "info",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (hasLowercase === false) {
      toast.error("Your password needs a lowercase character", {
        style: {
          backgroundColor: "transparent",
          color: "lightblue",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "info",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (hasUppercase === false) {
      toast.error("Your password needs a uppercase character", {
        style: {
          backgroundColor: "transparent",
          color: "lightblue",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "info",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (hasNumber === false) {
      toast.error("Your password needs a number", {
        style: {
          backgroundColor: "transparent",
          color: "lightblue",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "info",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (hasSpecialCharacter === false) {
      toast.error("Your password needs a special character", {
        style: {
          backgroundColor: "transparent",
          color: "lightblue",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "info",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (form.confirmPassword == "") {
      toast.error("Please confirm your password.", {
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

    if (form.password !== form.confirmPassword) {
      toast.error("Password and confirm password do not match!", {
        style: {
          backgroundColor: "transparent",
          color: "yellow",
          fontWeight: "bold",
        },
        position: "top-center",
        type: "warning",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    toast.success("Signed in successfully.", {
      style: { background: "transparent", color: "green" },
      autoClose: 5000,
      hideProgressBar: false,
      position: "top-center",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  };

  return (
    <motion.div
      variants={fadeIn("", "spring")}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      className="flex items-center justify-center"
    >
      <ToastContainer
        newestOnTop
        limit={6}
        pauseOnFocusLoss
        autoClose={2000}
        style={{ background: "transparent" }}
      />
      <div
        className={`font-black details-grad text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ${styles.paddingY}  mt-[120px] flex flex-col items-center justify-center`}
      >
        Your Details
        <div className={`${styles.heroSubText} text-gray-500 mt-5`}>
          Fill out some simple information to get started with {""}
          <span className="font-extrabold">
            <Link to="/" className="nira-grad">
              Neura.
            </Link>
          </span>
        </div>
        <form
          ref={formRef}
          className="grid grid-rows-3 gap-10 gris-cols-3 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div style={{ gridRow: 1, gridColumn: 1 }}>
            <div className="flex flex-col">
              <label htmlFor="publicName" className="text-[30px] mt-2 ml-2">
                Public Name
              </label>
              <input
                type="text"
                value={form.publicName}
                onChange={handleChange}
                name="publicName"
                className="bg-red-500 from-indigo-200 via-slate-600 to-indigo-2000 text-[30px] rounded-3xl px-5 h-[70px] outline-none border-none w-[420px]"
              />
            </div>
          </div>
          <div style={{ gridRow: 1, gridColumn: 2 }}>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[30px] mt-2 ml-2">
                Email
              </label>
              <input
                onChange={handleChange}
                value={form.email}
                type="email"
                name="email"
                className="bg-red-500 from-indigo-200 via-slate-600 to-indigo-2000 text-[30px] rounded-3xl px-5 h-[70px] outline-none border-none w-[420px] "
              />
            </div>
          </div>
          <div style={{ gridRow: 2, gridColumn: 1 }}>
            <div className="flex flex-col mb-[100px]">
              <label htmlFor="password" className="text-[30px] ml-2">
                Password
              </label>
              <input
                onChange={handleChange}
                value={form.password}
                id="password"
                type="password"
                name="password"
                className="bg-red-500 from-indigo-200 via-slate-600 to-indigo-2000 text-[30px] rounded-3xl px-5 h-[70px] outline-none border-none w-[420px] "
              />
            </div>
          </div>
          <div style={{ gridRow: 2, gridColumn: 2 }}>
            <div className="flex flex-col mb-[100px]">
              <label htmlFor="confirmPassword" className="text-[30px] ml-2">
                Confirm Password
              </label>
              <input
                onChange={handleChange}
                value={form.confirmPassword}
                type="password"
                name="confirmPassword"
                className="bg-red-500 from-indigo-200 via-slate-600 to-indigo-2000 text-[30px] rounded-3xl px-5 h-[70px] outline-none border-none w-[420px] "
              />
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-[30px] bg-orange-500 active:scale-125 hover:scale-110 hover:bg-red-500 transition-all duration-300 -mt-28 rounded-xl px-5 py-2.5 flex items-center justify-center h-[60px]"
            >
              Submit
            </button>
            <div className="flex flex-col items-center mt-2">
              <p
                className={`${
                  hasMinLength ? "text-green-500" : "text-red-500"
                } text-[20px] bg-transparent h-[90px] -mt-4`}
              >
                {" "}
                {hasMinLength ? <CheckIcon /> : <CloseIcon />} Your password has atleast
                8 characters
              </p>
              <p
                className={`${
                  hasSpecialCharacter ? "text-green-500" : "text-red-500"
                } text-[20px] bg-transparent -mt-[40px] `}
              >
                {hasSpecialCharacter ? <CheckIcon /> : <CloseIcon />} One
                special character
              </p>
              <p
                className={`${
                  hasNumber ? "text-green-500" : "text-red-500"
                } text-[20px] bg-transparent -mt-[50px] `}
              >
                {hasNumber ? <CheckIcon /> : <CloseIcon />} A numerical number
              </p>
              <p
                className={`${
                  hasUppercase && hasLowercase
                    ? "text-green-500"
                    : "text-red-500"
                } text-[20px] bg-transparent -mt-[50px] `}
              >
                {hasUppercase && hasLowercase ? <CheckIcon /> : <CloseIcon />} A
                uppercase and lowercase letter
              </p>
            </div>
            <div className="text-[20px] -mt-10 cursor-pointer">
                <Link to="/signup/exploring">
                  <KeyboardBackspaceIcon /> Last Page
                </Link>
            </div>
          </div>
        </form>
        <div
          style={{
            border: "solid white 0.1px",
            width: "500px",
            borderRadius: "50px",
          }}
        />
        <div className="text-[20px] text-gray-500">
          Already have a account? {""}
          <Link to="/login">
            <span className="font-extrabold text-red-500 cursor-pointer hover:underline">
              Log In
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpForm;
