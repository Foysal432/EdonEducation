

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
        <p>It Is Our Proud Customer</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
         <img src="https://i.ibb.co/2ZbjxTK/partner-1.png" alt="" />

        </SwiperSlide>
        <SwiperSlide>
         <img src="https://i.ibb.co/2ZbjxTK/partner-1.png" alt="" />

        </SwiperSlide>
        <SwiperSlide>
         <img src="https://i.ibb.co/2ZbjxTK/partner-1.png" alt="" />

        </SwiperSlide>
        <SwiperSlide>
         <img src="https://i.ibb.co/2ZbjxTK/partner-1.png" alt="" />

        </SwiperSlide>
       
      </Swiper>
        </div>
    )}
export default Partner;