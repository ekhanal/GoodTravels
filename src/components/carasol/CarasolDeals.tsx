import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/swiper-bundle.css";
import { getValue } from "../../utils/object";
import { checkIfEmpty } from "../../utils/validation";
import PackageCartList from "../cart/PackageCartList";
import { DealsProps } from "../../interface/package/package";

interface Props {
  data: DealsProps[];
  title?: string;
  handleMoveViewDetails: (id: string) => void;
}

const CarouselDeals: React.FC<Props> = ({
  data: packagesData,
  title,
  handleMoveViewDetails,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, [packagesData]);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return !checkIfEmpty(packagesData) ? (
    <div className="mb-10 overflow-hidden flex flex-col px-5 md:px-10 lg:px-28 rounded-lg">
      <div className="flex justify-between mb-8 mt-3 rounded-lg">
        <div className="text-start text-2xl md:text-3xl font-sans font-bold text-primary">
          {`${title ? title : "All Packages"}`}
        </div>
        <div className="next-prev-button flex items-center gap-4">
          <button
            disabled={isBeginning}
            className={`w-8 h-8 rounded-full flex items-center justify-center border bg-gray-400 ${
              isBeginning ? "bg-blue-50 opacity-40" : ""
            }`}
            onClick={goPrev}
          >
            <MdKeyboardArrowLeft className="text-lg text-white" />
          </button>
          <button
            disabled={isEnd}
            className={`w-8 h-8 rounded-full flex items-center justify-center border bg-gray-400 ${
              isEnd ? "bg-gray-50 opacity-40" : ""
            }`}
            onClick={goNext}
          >
            <MdKeyboardArrowRight className="text-lg text-white" />
          </button>
        </div>
      </div>
      <SwiperComponent
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={false}
        className="mySwiper rounded-lg"
        onInit={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        style={{ width: "100%", overflow: "hidden" }}
      >
        {packagesData?.map((item) => (
          <SwiperSlide key={getValue(item, "id")}>
            <PackageCartList
              handleMoveViewDetails={handleMoveViewDetails}
              data={[item]}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  ) : (
    ""
  );
};

export default CarouselDeals;
