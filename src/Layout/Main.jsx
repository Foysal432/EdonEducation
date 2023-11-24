import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

const Main = () => {
    return(
        <div className="mx-5">
            <div className="">
            <Navbar></Navbar>
            </div>
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    )}
export default Main;