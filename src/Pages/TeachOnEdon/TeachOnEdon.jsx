import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const TeachOnEdon = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
      const request = {
        name:data.name,
        image:data.image,
        category:data.category,
        experience:data.experience
      }
          // send data to the server
    fetch('http://localhost:5000/trequest',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(request)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
     if (data.insertedId) {
      toast.success('Success Your Submission')
     }
  })
    }
    return(
        <div>
          <h1 className="text-3xl font-bold text-center text-green-500 mt-5">Apply for a teaching position by providing the
           required form.</h1>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <label className="form-control w-full my-5">
  <div className="label">
    <span className="label-text">Name</span>
  </div>
  <input {...register('name')} type="text" placeholder="Name" className="input input-bordered w-full" />
</label>
<label className="form-control w-full my-5">
  <div className="label">
    <span className="label-text">Image Who Login</span>
  </div>
  <input {...register('image')} type="text" placeholder="User Image" className="input input-bordered w-full" />
</label>
      <select {...register("experience")} className="select select-bordered w-full ">
     <option  selected>Experience</option>
     <option>Advanced</option>
     <option>experienced</option>
     <option>beginner</option>
     </select>

     <label className="form-control w-full my-5">
  <div className="label">
    <span className="label-text">Name</span>
  </div>
  <input {...register('title')} type="text" placeholder="Title" className="input input-bordered w-full" />
</label>
<select {...register("category")} className="select select-bordered w-full ">
     <option  selected>Chose a Category</option>
     <option>app development</option>
     <option>data entry</option>
     <option>graphic design</option>
     <option>digital marketing</option>
     <option>web development</option>
     </select>

     <button className="btn w-full bg-green-500 mt-5">
     submit for review
     </button>
    </form>
    </div>
        </div>
    )}
export default TeachOnEdon;