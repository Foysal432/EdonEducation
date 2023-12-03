import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import { FcApprove } from "react-icons/fc"
import { reload } from "firebase/auth"
import Swal from "sweetalert2"


const AllClasses = () => {
    const axiosPublic =useAxiosPublic()
const {data : users = [],refresh} = useQuery({
  queryKey:['users'],
  queryFn: async () => {
    const res =await axiosPublic.get('/addedclass')
    return res.data
  }
  
}) 


const handlemakeApproved = user =>{
  axiosPublic.patch(`/addedclass/approved/${user._id}`)
  .then(res =>{
    reload()
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class approved successful",
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
    <th>Title</th>
    <th>Image</th>
    <th>email</th>
    <th>description</th>
   
    <th></th>
    <th></th>
    <th></th>
  </tr>
</thead>
<tbody>
  {users?.map(user=> <tr key={user._id}>
    <th>1</th>
    <td>{user?.title}</td>
    <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
 <td>{user?.email}</td>
 <td>{user?.description}</td>

 <td><button onClick={()=>handlemakeApproved(user)} className="flex items-center btn">Approved <FcApprove /></button></td>
 <td><button className="btn">reject</button></td>
 <td><button className="btn">progress</button></td>
  </tr>
  )}
 
</tbody>
</table>
</div>
    </div>
    )}
export default AllClasses;