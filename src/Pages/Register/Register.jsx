import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
    const axioxPublic =useAxiosPublic()
    const [selectedRole,setSelectedRole]=useState('')
    const {createUser} =useAuth()
    const handlechange = event => {
        setSelectedRole(event.target.value)
      console.log( selectedRole);
    }
    const handleRegister = async(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        const photo=e.target.photo.value;

const userRole = {
    email,
    password,
    name,
    photo,
    selectedRole
}
axioxPublic.post('/users',userRole)
.then(res=>{
 if (res.data.insertedId) {
    console.log(res.data);
 }
})



        console.log(email,password,name,photo,selectedRole);
        // create a new user
         createUser(email,password)
    // const toastid= toast.loading('Loading ...')
    .then(result=>{
        console.log(result.user)
        toast.success('register success')
    
        //   update profile
        updateProfile(result.user,{
          displayName:name,
          photoURL:photo
      })
      .then()
      .catch()
    

      })
      .catch(error=>{
        toast.error(error.message)
        console.error(error)})

    }

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
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold">Register</h1>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="Email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <select onChange={handlechange} className="select select-bordered w-full">
             <option disabled selected>Who shot first?</option>
          <option value='teacher'>Teacher</option>
           <option value='student'>Student</option>
            </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-400">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
export default Register;