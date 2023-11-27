import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const TeachOn = () => {
    return(
        <div>
        <div className="text-center bg-[#F5F1EE] py-5">
            <p className="text-4xl font-bold "> Teach On Edon </p>
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
                        <form  className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold">Teach on Edon</h1>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Your image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <span className="label-text">Experience</span>
                           <select className="select select-bordered w-ful">
                           <option disabled selected>Your Experience</option>
                             <option>beginner</option>
                              <option>experienced</option>
                              <option>Advanced</option>
                             </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                            </div> 
                            {/* category */}
                            <div className="form-control">
                                <span className="label-text">Category</span>
                           <select className="select select-bordered w-ful">
                           <option disabled selected>select A Category</option>
                             <option>web development</option>
                              <option>digital marketing</option>
                              <option>graphic design</option>
                              <option>data entry</option>
                              <option>app development</option>
                             </select>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-400">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
export default TeachOn;