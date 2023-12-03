import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const AddClass = () => {
    const axiosPublic =useAxiosPublic()
    const {user} =useAuth()
    const HandleAddClass = async(e)=>{
        e.preventDefault()
        const title = e.target.title.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const photo = e.target.photo.value;
        const status = 'reject'
       

const addClass = {
    email,
    name,
    photo,
    title,
    price,
    description,
    status
}
axiosPublic.post('/addedclass',addClass)
.then(res=>{
 if (res.data.insertedId) {
    console.log(res.data);
    toast.success('added class successful success')
 }
})
console.log(addClass);
console.log(email,description,name,photo,title,price);
    // const toastid= toast.loading('Loading ...' 
    }
    return(
        <div>
             <div>
            <div className=" w-4/5 mx-auto">
                <div className="">
                    <div className="shadow-2xl ">
                        <form onSubmit={HandleAddClass} className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold">Add Your Class</h1>
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title"  placeholder="Add A Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Name" defaultValue={user.displayName} className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user.email} placeholder="Your email" className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text">Add Some description</span>
                                </label>
                            <textarea name="description" className="textarea textarea-bordered w-full" placeholder="description"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-400">Add class</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )}
export default AddClass;