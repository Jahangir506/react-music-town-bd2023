import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";
import registerImg from "../../assets/images/register.png";

const Register = () => {
  const { user, createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);


  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.email.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 Characters or longer");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+$/.test(password)
    ) {
      setRegisterError(
        "Your password should have at least one upper case and special character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        navigate("/");
        setSuccess("User Create Successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError("Email already in Use, Please type a new email.");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        navigate("/");
      })
      .catch(() => {
        setRegisterError("Email already in Use, Please type a new email.");
      });
  };

  return (
    <div className="flex  justify-center items-center mt-32">
      <div className="hero w-[720px]">
        <div className="hero-content w-full justify-between flex-row-reverse  shadow-2xl bg-base-100 rounded-md">
          <div className="card flex-shrink-0  max-w-sm">
            <form onSubmit={handleRegister} className="card-body">
              <div className="w-52 mx-auto">
                {registerError && (
                  <p className="text-red-500 text-center">{registerError}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute bottom-1/3 right-3 text-lg"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye></FaEye>}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="flex justify-center text-center">
                <input type="checkbox" name="terms" id="terms" />
                <label
                  className="ml-2 text-xs opacity-90 text-center"
                  htmlFor="terms"
                >
                  Accept our <a href="">Terms and Conditions</a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button
                 
                  className="btn btn-primary w-24 capitalize"
                >
                  Register
                </button>
                <div className="mt-4 ml-1">
                  <span className="text-md flex items-center">
                    <span className="mr-1">Or login with</span>
                    <HiArrowSmallRight />
                    <Link className="mr-3 ml-4">
                      <FaXTwitter className="text-2xl" />
                    </Link>
                    <Link onClick={handleGoogleSignIn}>
                      <FcGoogle className="text-2xl" />
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="card flex-shrink-0  max-w-sm">
            <div>
              <img src={registerImg} alt="" className="w-full" />
            </div>
            <Link
              to="/login"
              className="underline text-center pb-5 text-blue-700"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
