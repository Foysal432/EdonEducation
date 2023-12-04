import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../Hooks/useAxiosPublic"

const Populerclass = () => {
    const axiosPublic =useAxiosPublic()
    const {data : users = [],refresh} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
          const res =await axiosPublic.get('/addedclass')
          return res.data
        }
      })
      console.log(users);
    return(
     <div>
        <h1 className="text-2xl font-bold text-green-500 text-center my-4">Our Popular class </h1>
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
 <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
 </div>
</div>
</div>
         )
        }
     </div>
     </div>
    )}
export default Populerclass;