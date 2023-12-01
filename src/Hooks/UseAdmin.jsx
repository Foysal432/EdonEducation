import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const UseAdmin = () => {
const {user,loading} = useAuth();
const axiosPublic = useAxiosPublic()


const {data: isadmin, isLoading} = useQuery({
    queryKey:['isadmin',user?.email],
    enabled:!loading,
    queryFn: async () =>{
    const res = await axiosPublic.get(`/users/admin/${user.email}`)
    return res.data
    }
})
return [isadmin,isLoading]

}
export default UseAdmin;