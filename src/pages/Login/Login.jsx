import { useContext } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import loginIn from "../../assets/images/login.png";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      const googleUser = result.user;
      console.log(googleUser);
      navigate('/')
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div className="mx-auto">
      <div className="hero absolute w-[720px] lg:bottom-48 ml-60 ">
        <div className="hero-content w-full justify-between  shadow-2xl bg-base-100 rounded-md">
          <div className="card flex-shrink-0  max-w-sm">
            <form onSubmit={handleLogin} className="card-body">
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
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
                    <HiArrowSmallRight/>
                    <Link className="mr-3 ml-4">
                      <FaXTwitter className="text-2xl"/>
                    </Link>
                    <Link onClick={handleGoogleSignIn}>
                      <FcGoogle className="text-2xl"/>
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
  );
};

export default Login;
