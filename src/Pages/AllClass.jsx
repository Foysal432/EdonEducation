import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../Hooks/useAxiosPublic"

const AllClass = () => {
    const axiosPublic =useAxiosPublic()
    const {data : users = [],refresh} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
          const res =await axiosPublic.get('/addedclass/approved/approved')
          return res.data
        }
      })
      console.log(users);
    return(
        <div className="grid md:grid-cols-3 gap-5">
           {
            users.map(user=>
                <div key={user._id} className="card card-compact  bg-base-100 shadow-xl">
       <figure><img src={user.photo} alt="Shoes" /></figure>
       <div className="card-body">
      <h2 className="card-title">{user.title} </h2>
      <h2 className="card-title">{user.price} </h2>
    < p>{user.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Enroll </button>
    </div>
  </div>
</div>
            )
           }
        </div>
    )}
export default AllClass;