import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeSlider = () => {
  return (
    <div className="home_slider_container">
      <div className="homescrolltopanel">
        <div className="div-block">
          <Link href="#Community" className="linkscrolldown w-inline-block">
            <h4 className="textitalic">Community</h4>
            <div className="spacer10"></div>
            <Image src="/images/ArrowDownMid.svg" width={12} height={8} loading="lazy" alt="" className="image" />
          </Link>
          <div className="spacer20"></div>
          <Link href="#Knowledge" className="linkscrolldown w-inline-block">
            <h4 className="textitalic">Knowledge</h4>
            <div className="spacer10"></div>
            <Image src="/images/ArrowDownMid.svg" width={12} height={8} loading="lazy" alt="" className="image" />
          </Link>
          <div className="spacer20"></div>
          <Link href="#Representation" className="linkscrolldown w-inline-block">
            <h4 className="textitalic">Representation</h4>
            <div className="spacer10"></div>
            <Image src="/images/ArrowDownMid.svg" width={12} height={8} loading="lazy" alt="" className="image" />
          </Link>
        </div>
      </div>
      <div
        data-delay="4000"
        data-animation="slide"
        className="home_slider w-slider"
        data-autoplay="true"
        data-easing="ease"
        data-hide-arrows="false"
        data-disable-swipe="false"
        data-autoplay-limit="0"
        data-nav-spacing="3"
        data-duration="500"
        data-infinite="true"
      >
        <div className="w-slider-mask">
          <div className="home_slide w-slide">
            <div className="home_slide_wrapper blue-bg">
              <div className="w-layout-grid home-c_s-grid">
                <div className="home_cs_image_left">
                  <Image
                    src="/images/WPL_HOMEPAGE_2024_BG-LEFT.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    alt=""
                    className="cover_image_home-left"
                  />
                </div>
                <div className="home_slider_image christmas">
                  <Image
                    src="/images/WPL_HOMEPAGE_2024_MOB.png"
                    loading="lazy"
                    sizes="100vw"
                    alt=""
                    className="cover_image bottom"
                  />
                </div>
                <div className="home_cs_image_right">
                  <Image
                    src="/images/WPL_HOMEPAGE_2024_BG-RIGHT.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    alt=""
                    className="cover_image_home-right"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Additional slides can be added here */}
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
