import React from "react";
import { useHover } from '@mantine/hooks';
import arrowUpRight from  "../../assets/arrow-upright.svg"

function KSidebarLink(props:{title:string, subtitle: string}) {
    const { hovered, ref } = useHover();
    const {title, subtitle} = props;
    

  return (
    <div className={!hovered ? "py-2 w-full text-black transition-all duration-300 cursor-pointer": "py-2 w-full cursor-pointer text-black transition-all duration-300 bg-an-red"}  ref={ref}>
      <div className={hovered? "ps-3 transition-all duration-300 flex justify-between items-center": "flex justify-between items-center"} >
       <div>
       <h2 className={hovered? "text-xl  font-medium text-an-red transition-all duration-300 ": " text-xl transition-all duration-300 text-gray-600 font-medium  "}>{title}</h2>
       <p className=" text-sm pt-1  text-gray-400">{subtitle}</p>
       </div>
        <div className=" float-right">
        {
            title== "Recruit" || title=="WEBSHOP" ? <svg className="fill-black group-hover:fill-red-800 w-3 h-3" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.99957 20.4807L0.963013 18.4441L16.1066 3.27443H4.40949L4.4356 0.45459H20.963V17.0081H18.1171L18.1432 5.31099L2.99957 20.4807Z"></path></svg>
            :""
        }
        </div>
     </div>
    </div>
  );
}

export default KSidebarLink;
