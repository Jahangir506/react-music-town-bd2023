import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import loginIn from "../../assets/images/login.png";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      Swal.fire({
        title: "you have to enter at least 6 digit!",
        icon: "error",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Password should contain at least one uppercase character.!",
        icon: "error",
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        title: "Password should contain at least one special character.!",
        icon: "error",
      });
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        Swal.fire({
          title: "User Create Successfully",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Email is incorrect for this password!");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        Swal.fire({
          title: "User Create Successfully",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Email is already Use!")
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="hero w-[720px] mb-44">
          <div className="hero-content w-full justify-between  shadow-2xl bg-base-100 rounded-md">
            <div className="card flex-shrink-0  max-w-sm">
              <form onSubmit={handleLogin} className="card-body">
                {loginError && (
                  <div className="py-3 bg-red-50 px-2 rounded">
                    <p className="text-red-500">{loginError}</p>
                  </div>
                )}
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
                <div className="form-control mt-2">
                  <button className="btn btn-primary w-24 capitalize">
                    Login
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
                <img src={loginIn} alt="" className="w-full" />
              </div>
              <Link
                to="/register"
                className="underline text-center pb-10 text-blue-700"
              >
                Please create a account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
