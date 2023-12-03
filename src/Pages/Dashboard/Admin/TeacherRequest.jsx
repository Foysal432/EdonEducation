import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import { FcApprove } from "react-icons/fc";
import Swal from "sweetalert2";
import { reload } from "firebase/auth";
const TeacherRequest = () => {
    const axiosPublic =useAxiosPublic()
    const {data : users = [],refresh} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
          const res =await axiosPublic.get('/trequest')
          return res.data
        }
      })
      console.log(users);


      const handlemakeApproved = user =>{
        axiosPublic.patch(`/trequest/approved/${user._id}`)
        .then(res =>{
          reload()
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "teacher approved successful",
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
      <th>Image</th>
      <th>Name</th>
      <th>experience</th>
      <th>Title</th>
      <th>Category</th>
      <th>status</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {users?.map((user,index)=> <tr key={user.id}>
      <th>{index + 1}</th>
      <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
      <td>{user.name}</td>
   <td>{user.experience}</td>
   <td>{user.title}</td>
   <td>{user.category}</td>
   <td>pending</td>
   <td><button 
    onClick={()=>handlemakeApproved(user)}
   className="flex items-center btn">Approve <FcApprove /></button></td>
   <td><button className="btn">reject</button></td>
    </tr>
    )}
   
 
  </tbody>
</table>
</div>
      </div>
    )}
export default TeacherRequest;