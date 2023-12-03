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
const handleupdate = event =>{
  event.preventDefault()
  const form = event.target;
  const photo = form.photo.value;
  const name = form.name.value;
  const description = form.description.value;
  const email= form.email.value;
  const price = form.price.value;
  const title = form.title.value;
  
  console.log(photo,name,description,email,price,title)
  const allItem ={photo,name,description,email,price,title}
  console.log(allItem);
 // send data to the server
 axiosPublic.put(`/update/${users._id}`)
//  fetch(`https://assingment-10-server-xi.vercel.app/update/${users._id}`,{
//   method:'PUT',
//   headers:{
//       'content-type':'application/json'
//   },
//   body:JSON.stringify(allItem)
// })
.then(res=>res.json())
.then(data=>{
  console.log(data);
 if (data.modifiedCount > 0) {
  Swal.fire(
      'Good job!',
      'You item Updated!',
      'success'
    )
 }
})
}





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
                  <button className="btn bg-green-400" onClick={() => document.getElementById('my_modal_3').showModal()}>Update <MdUpdate></MdUpdate> </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                      {/* update s */}
                     
                     <form onSubmit={handleupdate}  className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold">Add Your Class</h1>
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" defaultValue={brand?.title} placeholder="Add A Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Name" defaultValue={brand?.name} className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={brand?.email} placeholder="Your email" className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={brand.price} placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text">Add Some description</span>
                                </label>
                            <textarea name="description" defaultValue={brand?.description} className="textarea textarea-bordered w-full" placeholder="description"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="URL" defaultValue={brand.photo} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-400">Update</button>
                            </div>
                        </form>
                   
                     {/* update s */}
                    </div>
                  </dialog>
                  <button onClick={() => handleDelete(brand._id)} className="flex items-center btn bg-green-400"> <MdDelete></MdDelete> Delete</button>
                </div>
              </div>
              <button className="btn bg-green-400">See details</button>
            </div>)
          }
        </div>
      }
    </div>
  )
}
export default MyClass;