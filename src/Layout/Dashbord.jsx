import { NavLink, Outlet,} from "react-router-dom";
import { FaChalkboardTeacher,FaUsers } from "react-icons/fa";

import useSelectedRole from "../Hooks/useSelectedRole";
import { MdClass } from "react-icons/md";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const Dashbord = () => {
    //  TODO: get isAdmin value from the database

  const [Role]= useSelectedRole()
    
   console.log(Role);
      
    return(
        <div className="flex">
            {/* dashboard side bar */}
             <div className="w-60 h-screen bg-orange-400">
          <ul className="menu p-4">
   {
    Role === 'admin'?
   <>
             <h1 className="p-5 text-2xl font-bold">Admin</h1>
          <li> <NavLink to={'/dashboard/teacherrequest'}><FaChalkboardTeacher /> Teacher Request</NavLink> </li>
          <li> <NavLink to={'/dashboard/users'}> <FaUsers /> Users</NavLink></li>
          <li> <NavLink to={'/dashboard/allclasses'}> <MdClass /> All classes</NavLink></li>
          <li> <NavLink to={'/dashboard/profile'}> <GiPlagueDoctorProfile /> Profile</NavLink></li>
          <div className="divider">OR</div>
          <li> <NavLink to={'/'}> <FaHome /> Home</NavLink></li>
    </>
: Role === 'teacher'?
    // teacher dashbord
    <>
             <h1 className="p-5 text-2xl font-bold">Teachers Dashboard</h1>
          <li> <NavLink to={'/dashboard/addclass'}> <IoMdAddCircle />Add class</NavLink> </li>
          <li> <NavLink to={'/dashboard/myclass'}><FaChalkboardTeacher />My class</NavLink> </li>
          <li> <NavLink to={'/dashboard/profile'}> <GiPlagueDoctorProfile /> Profile</NavLink></li>
          <div className="divider">OR</div>
          <li> <NavLink to={'/'}> <FaHome /> Home</NavLink></li>
    </>
    :
    <>
    <h1 className="p-5 text-2xl font-bold">Student Dashboard</h1>
 <li> <NavLink to={'/dashboard/enrollClass'}> <BiPurchaseTag /> My enroll class</NavLink> </li>
 <li> <NavLink to={'/dashboard/profile'}> <GiPlagueDoctorProfile /> Profile</NavLink></li>
 <div className="divider">OR</div>
<li> <NavLink to={'/'}> <FaHome /> Home</NavLink></li>

</>
   }
          </ul>
             </div>
             {/* dashboard content */}
             <div className="flex-1">
                <Outlet></Outlet>
             </div>
        </div>
    )}
export default Dashbord;