
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { reload } from "firebase/auth";
const AllUsers = () => {
// const data=useLoaderData()
// const _id = data[1]._id

// const selectedRole =data[1].selectedRole
// console.log(selectedRole);

const axiosPublic =useAxiosPublic()
const {data : users = [],refresh} = useQuery({
  queryKey:['users'],
  queryFn: async () => {
    const res =await axiosPublic.get('/users')
    return res.data
  }
  
}) 
console.log(users);
const handlemakeAdmin = user =>{
axiosPublic.patch(`/users/admin/${user._id}`)
.then(res =>{
  reload()
  console.log(res.data);
  if (res.data.modifiedCount > 0) {
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "admin added successful",
      showConfirmButton: false,
      timer: 1500
    });
  }
})
}


    
    return(
        <div>
          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {users?.map(user=> <tr key={user.id}>
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
           {user.selectedRole === 'admin' ? (
           "admin" 
           )  : (<button
            onClick={()=>handlemakeAdmin(user)}
            className="btn btn-ghost">
               <FaUser></FaUser>
            </button>) }
        </td>
      </tr>)}
     
   
    </tbody>
  </table>
</div>
        </div>
    )}
export default AllUsers;