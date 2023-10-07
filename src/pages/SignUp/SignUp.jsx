import { Link } from 'react-router-dom';
import signUp from '../../assets/images/Screenshot_2.png';

const SignUp = () => {
  return (
    <div className="mx-auto">
      <div className="hero absolute w-[720px] lg:bottom-48 ml-60 ">
        <div className="hero-content w-full justify-between  shadow-2xl bg-base-100 rounded-md">
          <div className="card flex-shrink-0  max-w-sm">
            <form className="card-body">
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
                <button className="btn btn-primary w-24 capitalize">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="card flex-shrink-0  max-w-sm">
           <div>
            <img src={signUp} alt="" className='w-full'/>
           </div>
             <Link to='/login' className='underline text-center pb-5'>I am already member</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
