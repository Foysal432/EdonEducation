import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div>
        <div className="text-center bg-[#F5F1EE] py-5">
            <p className="text-4xl font-bold "> Create Your Account </p>
            <Link to={'/'}>
                <div className="flex justify-center items-center text-green-400">
                    <GrFormPreviousLink />
                    <button> Home</button>
                </div>
            </Link>
        </div>
        {/* login */}
        <div>
            <div className=" w-4/5 mx-auto">
                <div className="">
                    <div className="shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold">Register</h1>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="Email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="URL" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-400">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
export default Register;