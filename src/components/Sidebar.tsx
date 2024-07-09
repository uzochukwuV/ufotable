import React from 'react'
import svg from "../assets/ufotable.svg"
import KSidebarLink from './custom/KSidebarLink'
import social1 from "../assets/social1.svg"
import social2 from "../assets/social2.svg"
import social3 from "../assets/social3.svg"
import social4 from "../assets/social4.svg"
import social5 from "../assets/social5.svg"


const Socials = [social1, social2, social3, social4,social5]
const Links = [
    {
        title: "News",
        subtitle: "Latest Information"
    },
    {
        title: "Works",
        subtitle: "Information"
    },
    {
        title: "Shops",
        subtitle: "Store Information"
    },
    {
        title: "News",
        subtitle: "Information"
    },
    {
        title: "About",
        subtitle: "About ufotable"
    },
    {
        title: "Recruit",
        subtitle: "Recruitment Information"
    },
    {
        title: "WEBSHOP",
        subtitle: "Official Online Shop"
    },
]

function Sidebar() {
  return (
    <div className=' h-[100vh]  w-[350px]  py-4 shadow-md'>
        <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col *:px-4">
                <div className=" pb-4">
                    <div className="logo-wrappper flex justify-between items-start *:font-medium text-black">
                        <div className="logo py-2">
                            <div ><img src={svg} width={150} /></div>
                            <div className="logo-text text-xs text-gray-400 pt-2">Official Website</div>
                        </div>
                        <div className="language text-xs text-gray-400 cursor-pointer">
                            English
                        </div>
                    </div>
                    
                </div>
                {
                    Links.map((link, id)=> <KSidebarLink key={id} title={link.title} subtitle={link.subtitle} ></KSidebarLink>)
                }
            </div>
            <div className="flex px-4 justify-between">
                {Socials.map((social)=> <a key={social}>
                    <img src={social} width={25} />
                </a>)}
            </div>
        </div>
    </div>
  )
}

export default Sidebar