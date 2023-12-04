import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div>
            <Link to={'/'}> <button className="btn bg-green-400">Home</button> </Link>
            <img src="https://i.ibb.co/RS16Yb5/404-error-template-3.webp" alt="" />
        </div>
    )}
export default Error;