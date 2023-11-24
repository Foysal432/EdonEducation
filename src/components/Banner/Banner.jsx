const Banner = () => {
    return(
        <div>
            <div className="lg:flex bg-[#F9F9F9]">
                <div className="w-1/2 lg:ml-10 lg:mt-16">
                  <h1 className="text-green-400 ">FOR A BETTER FUTURE</h1>
                  <h1 className="text-5xl font-bold my-5">A Course Is Essential For <br /> Building A <span className="text-green-400">Career</span> </h1>
                  <p>The experience of our instructors benefits your career</p>
                  <button className="btn  mx-5 my-4 bg-green-400 ">Find Courses</button>
                </div>
                <div className="w-1/2">
                 <img className="lg:w-3/4" src="https://i.ibb.co/fxCbJfq/banner-img-2-A-12.png" alt="" />
                </div>
            </div>
        </div>
    )}
export default Banner;