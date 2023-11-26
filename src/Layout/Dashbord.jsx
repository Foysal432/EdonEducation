import { NavLink, Outlet } from "react-router-dom";
import { FaChalkboardTeacher,FaUsers } from "react-icons/fa";

const Dashbord = () => {
    return(
        <div className="flex">
            {/* dashboard side bar */}
             <div className="w-60 min-h-full bg-orange-400">
          <ul className="menu p-4">
            <h1 className="p-5 text-2xl font-bold">Admin</h1>
          <li> <NavLink to={'/dashboard/cart'}>My Cart</NavLink> </li>
          <li> <NavLink to={'/dashboard/teacherrequest'}> <FaChalkboardTeacher /> Teacher Request</NavLink> </li>
          <li> <NavLink to={'/dashboard/users'}> <FaUsers /> Users</NavLink></li>
          <li> <NavLink to={'/dashboard/allclasses'}>  All classes</NavLink></li>
          <li> <NavLink to={'/dashboard/profile'}> Profile</NavLink></li>
          </ul>
             </div>
             {/* dashboard content */}
             <div className="flex-1">
                <Outlet></Outlet>
             </div>
        </div>
    )}
export default Dashbord;