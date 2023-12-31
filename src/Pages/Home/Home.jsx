import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import HappyStudent from "../../components/HappyStudent/HappyStudent";
import Instructor from "../../components/Instructor/Instructor";
import Partner from "../../components/Partner/Partner";
import Populerclass from "../../components/Populer/Populerclass";

const Home = () => {
    return(
        <div className="">
          <Banner></Banner>
         <div className="mt-10">
         <Partner></Partner>
         </div>
         <div>
            <Populerclass></Populerclass>
         </div>
         <div className=" my-16">
            <Instructor></Instructor>
         </div>
         <div className="my-10">
            <HappyStudent></HappyStudent>
         </div>
         <div>
            <Footer></Footer>
         </div>
        </div>
    )}
export default Home;