
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const HappyStudent = () => {
    return(
        <div>
            <h1 className='text-center text-4xl font-bold text-green-500 my-10'>What Our Happy Student Say</h1>
             <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='lg:flex h-96'>
                <div className='w-1/2'>
                  <img className='w-4/5' src="https://i.ibb.co/v3xxvJM/happy-student-1.png" alt="" />
                </div>
                <div className='w-1/2 mt-36 text-green-500 text-2xl'>
               <p>"Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. accumsan tincidunt. Curabitur aliquet"</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='lg:flex h-96'>
                <div className='w-1/2'>
                  <img className='w-4/5' src="https://i.ibb.co/wNPfD9h/happy-student-4.png" alt="" />
                </div>
                <div className='w-1/2 mt-36 text-green-500 text-2xl'>
               <p>"great industry links and studio visits - location and area -diverse studio atmosphere - student collaboration improvements -course organisation in class -tutors hold regular tutorials -class numbers are too high.. barely any room to sit and do proper work -the content is sometimes irrelevant and the importance of it is not clearly explained"</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper> 
        </div>
    )}
export default HappyStudent;