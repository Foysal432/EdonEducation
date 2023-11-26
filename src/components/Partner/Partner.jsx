

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const Partner = () => {
    return(
        <div>
          <h1 className='text-center my-4 font-bold text-xl'>Join Businesses Around The World Who Believe In <span className='text-orange-400'>Edon</span>
          </h1>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
        <img src="https://i.ibb.co/2ZbjxTK/partner-1.png" alt="" />
        <p className='text-xl font-bold hidden md:block'>It Company Has Been Working with Us For 2 Years</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src="https://i.ibb.co/gTBNWnc/partner-2.png" alt="" />
        <p className='text-xl font-bold hidden md:block'>It Company Has Been Working with Us For 4 Years</p>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src="https://i.ibb.co/KLVKVyL/partner-3-1.png" alt="" />
        <p className='text-xl font-bold hidden md:block'>It Company Has Been Working with Us For 5 Years</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src="https://i.ibb.co/VwgXYtb/partner-4-1.png" alt="" />
        <p> <p className='text-xl font-bold hidden md:block'>It Company Has Been Working with Us For 3 Years</p></p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
         <div>
         <img src="https://i.ibb.co/ScJ59Jw/partner-5.png" alt="" />
         <p className='text-xl font-bold hidden md:block'>It Company Has Been Working with Us For 6 Years</p>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src="https://i.ibb.co/BCntKHP/partner-6.png" alt="" />
        <p className='text-xl font-bold hidden md:block'>It Company Has Been Working with Us For 5 Month</p>
        </div>
        </SwiperSlide>
           
      </Swiper>
        </div>
    )}
export default Partner;