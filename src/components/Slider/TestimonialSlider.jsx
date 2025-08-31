import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 👈 Lucide icons
import "swiper/css";
import "swiper/css/navigation";
import testimony1 from '../../assets/images/testimony-1.jpg'
import testimony2 from '../../assets/images/testimony-2.jpg'
import testimony3 from '../../assets/images/testimony-3.jpg'
import testimony4 from '../../assets/images/testimony-4.jpg'
import testimony5 from '../../assets/images/testimony-5.jpg'

const testimonials = [
  {
    image: testimony1,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    name: "Roger Scott",
    role: "INTERFACE DESIGNER",
  },
  {
    image: testimony2,
    text: "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
    name: "Anna Lee",
    role: "UI DESIGNER",
  },
  {
    image: testimony3,
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    name: "Sophia Brown",
    role: "WEB DEVELOPER",
  },
  {
    image: testimony4,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    name: "Roger Scott",
    role: "INTERFACE DESIGNER",
  },
  {
    image: testimony5,
    text: "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
    name: "Anna Lee",
    role: "UI DESIGNER",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="w-full px-6 py-20 relative">
        <div className="relative">
            <Swiper
                modules={[Navigation, Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)} // 👈 reference save
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                  0: { slidesPerView: 1 },   // ✅ Mobile - ek hi slide
                  
                  1024: { slidesPerView: 3 } // ✅ 1024px pr bhi ek hi slide
                  // Agar xl se upar multiple dikhana hai to yahan slidesPerView:2/3 set kr sakte ho
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative overflow-hidden shadow-lg">
                        {/* Background Image */}
                            <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[330px] object-cover"
                            />

                        {/* Overlay Text */}
                            <div className="absolute inset-0 bg-black/30 flex items-center p-6">
                                <div className={`relative bg-black/20 p-6 xl:max-w-[60%] h-[320px] xl:text-left text-white transition-all duration-300${activeIndex === index ? "scale-105" : "border-2 border-transparent"}`}>       {/* Corner Borders */}
                                    <span className={`absolute top-0 right-0 w-3 h-3 border-t-4 border-r-4 transition-all duration-300 ${activeIndex === index ? "border-orange-400 w-9 h-9" : "border-white"}`}></span>
                                    <span className={`absolute bottom-0 left-0 w-3 h-3 border-b-4 border-l-4 transition-all duration-300 ${activeIndex === index ? "border-orange-400 w-9 h-9" : "border-white"}`}></span>
                                    <p className="mb-4 text-lg leading-relaxed">{item.text}</p>
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-sm">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute bottom-4 right-4 flex gap-1 z-10">
                <button onClick={() => swiperRef.current?.slidePrev()} className="bg-white text-gray-700 shadow-md p-2 rounded-md hover:bg-black hover:text-white transition">
                    <ChevronLeft size={18} />
                </button>
                <button onClick={() => swiperRef.current?.slideNext()} className="bg-white text-gray-700 shadow-md p-2 rounded-md hover:bg-black hover:text-white transition">
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    </div>
  );
};

export default TestimonialSlider;
