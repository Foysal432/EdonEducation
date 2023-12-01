import { Link, useNavigate } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
    const navigate =useNavigate()
    const {login,Googlesingin} = useAuth()
const axiosPublic =useAxiosPublic()
    
// use email and password
const handlelogin =(e)=>{
    e.preventDefault()
    const email =e.target.email.value;
     const password =e.target.password.value;
     console.log(email,password)
     login(email,password)
     .then(result=>{
      console.log(result.user);
      const userinfo ={
        email:result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users',userinfo)
      .then(res =>{
        console.log(res.data);
      })
      toast.success('login success')
      navigate('/')
     })
     .catch(error=>{
      toast.error(error.message)
     })
  }



    // sining with google
  const  handleGooglelogin = ()=>{
    Googlesingin ()
    .then(result=>{
        console.log(result.user);
        const userinfo ={
            email:result.user?.email,
            name: result.user?.displayName,
            selectedRole:'student'
          }
        //   axiosPublic.post('/users',userinfo)
        //   .then(res =>{
        //     console.log(res.data);
        //   })

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userinfo)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
           if (data.insertedId) {
            toast.success('Success Your Submission')
           }
        })

        toast.success('Google login success')
        navigate('/')
    })
    .catch (error =>{
      toast.error(error.message)
    })
    }

    return (
        <div>
            <div className="text-center bg-[#F5F1EE] py-5">
                <p className="text-4xl font-bold "> Log In Your Account</p>
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
                            <form  onSubmit={handlelogin} className="card-body">
                                <div className="form-control">
                                    <p className="text-2xl font-bold">Login</p>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-green-400">Login</button>
                                </div>
                            </form>
                        <div className="text-center py-5 pt-0">
                        <p className="text-center my-4">Or Log in with</p>
                            <div>
                                <button onClick={handleGooglelogin} className="btn w-full bg-green-400">Google</button>
                            </div>
                        </div>
                        <p className="p-4">Don't have an account yet? <Link className="text-green-500" to={'/register'}>Register</Link> for free</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;