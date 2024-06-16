import React from "react";
import Dubai from "../../assets/images/Dubai.jpg";
import Bali from "../../assets/images/Bali.jpg";
import Hongkong from "../../assets/images/Hongkong.jpg";
import Sydney from "../../assets/images/sydney.webp";
import Singapore from "../../assets/images/Singapore.jpg";
import Seoul from "../../assets/images/Seoul.jpg";
import Istanbul from "../../assets/images/istanabul.webp";
import Varanasi from "../../assets/images/Varanasi.jpg";

interface SlideProps {
  name: string;
  image: string;
}

const Slide: React.FC<SlideProps> = ({ name, image }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-4 py-4 bg-white">
        <h3 className="text-lg font-medium">{name}</h3>
      </div>
    </div>
  );
};

const Slider = () => {
  const slidesData: SlideProps[] = [
    { image: Dubai, name: "Dubai" },
    { image: Bali, name: "Bali" },
    { image: Hongkong, name: "Hongkong" },
    { image: Sydney, name: "Sydney" },
    { image: Singapore, name: "Singapore" },
    { image: Seoul, name: "Seoul" },
    { image: Istanbul, name: "Istanbul" },
    { image: Varanasi, name: "Varanasi" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Best Travel Deals For You</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {slidesData.map((slide, index) => (
          <Slide key={index} name={slide.name} image={slide.image} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
