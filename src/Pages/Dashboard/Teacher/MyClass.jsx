import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { MdDelete, MdUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { user } = useAuth()
  const email = user.email;
  const axiosPublic = useAxiosPublic()
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/addedclass/${email}`)
      return res.data
    }
  })

// for update






  // do work of delete
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
        axiosPublic.delete(`/addedclass/${id}`)
          .then(res => {
            refetch()
            if (res.data.deletedCount > 0) {
              toast.success(' deleted Successfully done !')
            }
          })
      }
    });
  }
  console.log(users);
  return (
    <div>
      {
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            users?.map(brand => <div key={brand._id} className="card bg-base-100 shadow-xl">
              <figure><img src={brand.photo} alt="Shoes" /></figure>
              <h1 className="text-center text-2xl font-bold">{brand.title}</h1>

              <div className="card-body">
                <h1><span className="font-bold">Price$</span>: {brand.price}</h1>
                <h1><span className="font-bold">Name: </span>{name}</h1>
                <h1><span className="font-bold">Email: </span>{email}</h1>
                <p>{brand.description}</p>
                <div className="card-actions ">
               
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <Link to={`update/${brand._id}`}><button className="btn bg-green-400" >Update <MdUpdate></MdUpdate> </button></Link>
                  
                  <button onClick={() => handleDelete(brand._id)} className="flex items-center btn bg-green-400"> <MdDelete></MdDelete> Delete</button>
                </div>
              </div>
              <Link to={`details/${brand._id}`}><button className="btn bg-green-400">See details</button></Link>
            </div>)
          }
        </div>
      }
    </div>
  )
}
export default MyClass;