import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const {user,logout}=useAuth()
  const handlelogout =()=>{
    logout()
    .then()
    .catch()
  }
    const navlink = <>
    <NavLink to={'/'}><li><a>Home</a></li></NavLink>
    <NavLink to={'/allclass'}><li><a>All Classes </a></li></NavLink>
    <NavLink to={'/teachon'} ><li><a>Teach on Edon </a></li></NavLink>
    </>
    return(
        <div>
    <div className="navbar bg-base-100 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        navlink
      }
      </ul>
    </div>
    <div>
    <img src="https://i.ibb.co/bB4K96q/logoA122.png" alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navlink
     }
    </ul>
  </div>
  <div className="dropdown ml-10">
  <label tabIndex={0} className="btn m-1"> 
  <div className="avatar">
  <div className="w-10 rounded-full">
  {
user ? <img className="w-1/2 mx-4 rounded-lg" src={user?.photoURL} alt="" />:<img className="w-1/3" src="https://i.ibb.co/YQ8Myww/770117-people-512x512.png" alt="" /> 
}
  </div>
</div>
   </label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box md:w-32">
    {
      user ? <div>
        
        <h1>{user?.displayName}</h1>
        <li> <button onClick={handlelogout}><a>Log Out</a></button> </li>
      </div>
      : <Link to={'/login'}><li><a>Log In</a></li></Link>
    }
  <li>
  <Link to={'/dashboard'}><button>Dashboard</button></Link>
  </li>
  
  </ul>
</div>
</div>
</div>
    )}
export default Navbar;