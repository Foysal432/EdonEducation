import { useContext } from "react";
import { AuthContext } from "../Config/Provider";


const useAuth = () => {
        const authUtils = useContext(AuthContext)
        return authUtils
}
export default useAuth;