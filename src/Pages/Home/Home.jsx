import Banner from "../../components/Banner/Banner";
import HappyStudent from "../../components/HappyStudent/HappyStudent";
import Instructor from "../../components/Instructor/Instructor";
import Partner from "../../components/Partner/Partner";

const Home = () => {
    return(
        <div className="">
          <Banner></Banner>
         <div className="mt-10">
         <Partner></Partner>
         </div>
         <div className=" my-16">
            <Instructor></Instructor>
         </div>
         <div className="my-10">
            <HappyStudent></HappyStudent>
         </div>
        </div>
    )}
export default Home;