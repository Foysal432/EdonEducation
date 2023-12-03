
import useAuth from "../../../Hooks/useAuth";
import useSelectedRole from "../../../Hooks/useSelectedRole";

const Profile = () => {
  const [Role]= useSelectedRole()
  const {user}=useAuth()
    return(
        <div>
             <div className="flex items-center justify-center">
  <div className="bg-white w-1/3 mt-10 rounded-lg">
    <div className="flex items-center justify-center pt-10 flex-col">
      
        <img className="rounded-2xl" src={user?.photoURL} alt="" />
      <h1 className="text-gray-800 font-semibold text-xl mt-5">{user?.displayName}</h1>
      <p className="text-gray-500 text-sm">Role : {Role}</p>
        <h1 className="text-gray-500 text-sm p-4 text-center">
          Email: {user?.email}
        </h1>
        <h1 className="text-gray-500 text-sm p-4 text-center">
          Phone: 0183456732
        </h1>
    </div>
    <div className="flex justify-between p-4">
      <div>
        <h1 className="text-xs uppercase text-gray-500">Membership</h1>
        <p className="text-xs text-yellow-500">Gold Member</p>
      </div>
      <div>
        <button className="text-xs text-green-300 border-2 py-1 px-2 border-green-300">Renew</button>
      </div>
    </div>
    <div className="flex items-center justify-center mt-3 mb-6 flex-col">
      <h1 className="text-xs text-gray-500">Get Connected</h1>
      <div className="flex mt-2">
      <img className="w-6 border-2 p-1 rounded-full mr-3" src="https://www.iconsdb.com/icons/preview/gray/facebook-xxl.png" alt="" />  
           <img src="https://www.iconsdb.com/icons/preview/gray/twitter-xxl.png" alt="" className="w-6 border-2 p-1 rounded-full mr-3" />
       <img src="https://www.iconsdb.com/icons/preview/gray/google-plus-xxl.png" alt="" className="w-6 border-2 p-1 rounded-full mr-3"/>
        <img src="https://www.iconsdb.com/icons/preview/gray/instagram-6-xxl.png" alt="" className="w-6 border-2 p-1 rounded-full"/>  
      </div>
      
    </div>
  </div>

</div>

        </div>
    )}
export default Profile;