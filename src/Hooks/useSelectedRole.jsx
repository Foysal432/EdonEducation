import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSelectedRole = () => {
const {user,loading} = useAuth();
const axiosPublic = useAxiosPublic()


const {data: Role, isLoading} = useQuery({
    queryKey:['Role',user?.email],
    enabled:!loading,
    queryFn: async () =>{
    const res = await axiosPublic.get(`/users/admin/${user.email}`)
    return res.data
    }
})
return [Role,isLoading]

}
export default useSelectedRole;