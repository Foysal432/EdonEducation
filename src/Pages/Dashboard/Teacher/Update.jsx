import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const datas =useLoaderData()
    console.log(datas);
    const{_id,photo,price,email,description,title}=datas
    const handleupdate = (event) =>{
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
      //  axiosPublic.put(`/update/${users._id}`)
       fetch(`https://assingment-12-server-gamma.vercel.app/addedclass/update/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(allItem)
      })
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

    return(
        <div>
           <form onSubmit={handleupdate}  className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold">Add Your Class</h1>
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" defaultValue={title} placeholder="Add A Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Name" defaultValue={name} className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={email} placeholder="Your email" className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text">Add Some description</span>
                                </label>
                            <textarea name="description" defaultValue={description} className="textarea textarea-bordered w-full" placeholder="description"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="URL" defaultValue={photo} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit"  className="btn bg-green-400">Update</button>
                            </div>
                        </form>
        </div>
    )}
export default Update;