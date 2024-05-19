import React from "react";
import { Wrap } from "./style";
import { SliderJs, SwiperSlideJs } from "../Home/style";
import userImg from "../../assets/images/user.jpg";
import whyUs1 from "../../assets/images/whyUs1.jpg";
import whyUs2 from "../../assets/images/whyUs2.jpg";
export default function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrap>
      <div className="backText">Teachers</div>
      <SliderJs {...settings} className="mySwiper">
        <SwiperSlideJs height="600px">
          <div className="test_wrap">
            <img src={userImg} alt="userImg" />
            <p>
            Hi, I am Kevin and I work as a web developer. 
            I am a software engineer who loves to create websites as well as apps for people. 
            I think that people should look at the bigger picture when they are building something.
            </p>
            <h3>Kevin</h3>
            <span>Web Designer</span>
          </div>
        </SwiperSlideJs>
        <SwiperSlideJs height="600px">
          <div className="test_wrap">
            <img src={whyUs2} alt="whyUs2" />
            <p>
            I'm Leyla Hello, all native English language enthusiasts with the zeal to learn English grammar, 
            use punctuation marks for writing, and become the best at speaking English.
            </p>
            <h3>Leyla</h3>
            <span>English Teacher</span>
          </div>
        </SwiperSlideJs>
        <SwiperSlideJs height="600px">
          <div className="test_wrap">
            <img src={whyUs1} alt="whyUs1" />
            <p>
            I'm a graphic designer who specializes in book cover design, logo design, and brand identity. 
            I know what it takes to create a cover that will catch someone's eye and compel them to pick up your book or click on your logo.
            </p>
            <h3>Mari</h3>
            <span>Designer</span>
          </div>
        </SwiperSlideJs>
      </SliderJs>
    </Wrap>
  );
}
