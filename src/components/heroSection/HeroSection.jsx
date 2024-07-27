import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';

import banner from '../images/banner.jpg';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/banner4.jpg';
import banner5 from '../images/banner5.jpg';

const HeroSection = () => {
  return (
 //   <div className=' container mx-auto px-4 mt-5 '>
   // <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" />
    //</div>
<div className=' container mx-auto px-4 mt-5 '>
    <Swiper
       modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      //modules={[Navigation]}
      >
      <SwiperSlide>
        <div className='image'>
          <staticImage/>
          <img src={banner3} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='image'>
          <staticImage/>
          <img src={banner1} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='image'>
          <staticImage/>
          <img src={banner2} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='image'>
          <staticImage/>
          <img src={banner} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='image'>
          <staticImage/>
          <img src={banner4} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='image'>
          <staticImage/>
          <img src={banner5} alt=""/>
        </div>
      </SwiperSlide>
    </Swiper>
</div>
  )
}

export default HeroSection
