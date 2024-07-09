
import featured1 from "../assets/featured/featured1.webp";
import featured2 from "../assets/featured/featured2.webp";
import featured3 from "../assets/featured/f3.webp";
import featured4 from "../assets/featured/featured4.webp";

import KNewsCard from "./custom/KNewsCard";


const FeaturedImages = [
  featured1,
  featured2,
  featured3,
  featured4,
  
];

const NewsText = [
    "Anime \"Demon Slayer: Kimetsu no Yaiba\" Kamado Tanjiro Birthday Celebration 2024 to be held on July 14th",
    "Anime \"Demon Slayer: Kimetsu no Yaiba\" 5th Anniversary Commemoration Festival ~After Party~ Event to be held",
    "Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Castle Trilogy to be produced",
    "To celebrate the broadcast of the final episode of the Pillar Training Arc, a reprint of the WEBSHOP lottery will be on sale"
]

function NewsSlider() {
    
  return (
   <div className="">
        <div className=" flex gap-4 pe-4">
            {FeaturedImages.map((pic, id)=> <KNewsCard key={id} image={pic} text={NewsText[id]} />)}
        </div>
   </div>
  );
}

export default NewsSlider;
