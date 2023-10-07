import { Link } from 'react-router-dom';
import loginIn from '../../assets/images/login.png';

const login = () => {
  return (
    <div className="mx-auto">
      <div className="hero absolute w-[720px] lg:bottom-48 ml-60 ">
        <div className="hero-content w-full flex-row-reverse justify-between  shadow-2xl bg-base-100 rounded-md">
          <div className="card flex-shrink-0  max-w-sm">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
              <div className="form-control mt-6">
                <button className="btn btn-primary w-24 capitalize">
                  Login
                </button>
              </div>
            </form>
            <div className='pb-5 ml-8'>
              <p>Or login with</p>
            </div>
          </div>
          <div className="card flex-shrink-0  max-w-sm">
            <div>
              <img src={loginIn} alt="" className="w-full" />
            </div>
            <Link to="/signUp" className="underline text-center pb-10">
              Create on account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
