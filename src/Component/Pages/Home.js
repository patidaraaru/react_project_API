import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BannerData from "../Data/BannerData";
import Footer from "../Footer/Footer";
import Category from "../Category/Category";
import ProductLimit from "../Data/ProductLimit";

const Home = () => {
  return (
    <>
      <div style={{ minHeight: "50vh", margin: "0 auto" }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {BannerData.map((item, key) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "90vh",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <h2
                style={{
                  position: "absolute",
                  top: "30%",
                  textAlign: "center",
                  fontSize: "60px",
                  color: "#fff",
                  width: "100%",
                }}
              >
                {item.title}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Category />
      <ProductLimit />
      <Footer />
    </>
  );
};

export default Home;
