import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Thumbs, FreeMode } from "swiper";
import styled from "@emotion/styled";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css";
import { Grid } from "@mui/material";
import { COLORS } from "../../constants/COLORS";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/930390/pexels-photo-930390.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/6259/space-camera-desk-laptop.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout>
      <StyledProduct className="product">
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <div className="product__contents">
              <div className="back"></div>
              <h2 className="sub-title">
                <span>Chair</span>/ Meryl Lounge Chair
              </h2>
              <h2 className="title">Meryl Lounge Chair</h2>
              <div className="price"></div>
              <h2 className="description">
                The gently curved lines accentuated by sewn details are kind to
                your body and pleasant to look at. Also, there’s a tilt and
                height-adjusting mechanism that’s built to outlast years of ups
                and downs.
              </h2>
              <div className="colors"></div>
              <div className="quantity-section">
                <div className="quantity-section__counter"></div>
                <div className="quantity-section__add-to-cart"></div>
              </div>
              <ul className="shipping-text">
                <li>Free 2-5 day shipping</li>
                <li>Tool-free assembly </li>
                <li>30-day trial</li>
              </ul>
              <div className="wishlist-section">
                <div className="wishlist-section__add-to-wishlist">
                  Add to Wishlist
                </div>
                <div className="wishlist-section__social-media"></div>
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="product__images">
              <div className="product-image">
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Pagination, FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {images.map((image) => {
                    return (
                      <SwiperSlide key={image.id}>
                        <img src={image.url} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="product-image-selection">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {images.map((image) => {
                    return (
                      <SwiperSlide key={image.id}>
                        <img src={image.url} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </Grid>
        </Grid>
      </StyledProduct>
    </Layout>
  );
}

const StyledProduct = styled.div`
  margin-bottom: 50px;
  .product__images {
    display: flex;
    flex-direction: column;
    row-gap: 66px;

    .product-image-selection {
      height: 104px;

      .swiper-wrapper {
        display: flex;
        column-gap: 24px;

        .swiper-slide-thumb-active {
          border: 2px solid ${COLORS.green};
        }

        .swiper-slide {
          width: 100%;
          height: 104px;
          cursor: pointer;
          transition: 1px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export default Product;
