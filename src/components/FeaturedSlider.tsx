import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Autoplay from 'embla-carousel-autoplay';
import featured1 from "../assets/featured/featured1.webp";
import featured2 from "../assets/featured/featured2.webp";
import featured3 from "../assets/featured/featured3.webp";
import featured4 from "../assets/featured/featured4.webp";
import featured5 from "../assets/featured/featured5.webp";
import featured6 from "../assets/featured/featured6.jpg";
import featured7 from "../assets/featured/featured7.webp";
import { useRef } from "react";

const FeaturedImages = [
  featured1,
  featured2,
  featured3,
  featured4,
  featured5,
  featured6,
  featured7,
];

function FeaturedSlider() {
    const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <Carousel
      withIndicators
      height={150}
      slideSize={{ base: "100%", sm: "50%", md: "28%" }}
      slideGap={{ base: "xl", sm: 4 }}
      align="start"
      includeGapInSize
      dragFree
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      draggable
    >
      {FeaturedImages.map((image, id) => (
        <Carousel.Slide key={id} className="mx-2">
          <img
            src={image}
            height={100}
            width={100}
            className="w-[100%] h-[100%] bg-cover rounded-xl "
          />
        </Carousel.Slide>
      ))}

      {/* ...other slides */}
    </Carousel>
  );
}

export default FeaturedSlider;
