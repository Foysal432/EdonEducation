
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const Instructor = () => {
    return(
  <div>
      <h1 className="text-center font-bold text-4xl my-10 text-green-500">Lets Introduce Our Instructor</h1>
          <div className="lg:flex">
             <div className="w-1/2">
              
            <h1 className="text-4xl font-bold text-green-500">These Are Our Instructor</h1>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, egettincidunt nibh pulvinar ultricies ligula sed magna dictum porta.</p>
            <button className="btn bg-green-500 mx-5 mt-5">Instructor</button>
             </div>
             <div className="w-1/2">
             <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
       <div className=''>
  <img className='w-4/5' src="https://i.ibb.co/L9jRYHK/instructors-1.jpg" alt="" />
   <h1 className='text-green-400'>Lance Atman</h1>
  <p>Full Stack Developer</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=''>
  <img className='w-4/5' src="https://i.ibb.co/RSYvt5z/instructors-2.jpg" alt="" />
   <h1 className='text-green-400'>Sally Welch</h1>
  <p>Digital Marketer</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=''>
  <img className='w-4/5' src="https://i.ibb.co/Qf7sFnQ/instructors-3.jpg" alt="" />
   <h1 className='text-green-400'>Jessese Jeslin</h1>
  <p>App Developer</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=''>
  <img className='w-4/5' src="https://i.ibb.co/SBZGqQj/instructors-4.jpg" alt="" />
   <h1 className='text-green-400'>Willie Mcdonange</h1>
  <p>Graphic Desinger</p>
       </div>
        </SwiperSlide>
      </Swiper>
             </div>
        </div>
  </div>
    )}
export default Instructor;