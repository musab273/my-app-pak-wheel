import Link from "next/link"
import Image from "next/image"
import img1 from "./public/img1.jpg"
import img2 from "./public/img2.jpg"
import img3 from "./public/img3.jpg"
import img4 from "./public/img4.png"

export default function FeaturedNewCars(){
    return (
        <div className="bg-gray-200 h-3/4 w-screen pt-6 pl-12 ">

        <div className="grid grid-flow-col bg-gray-200 ml-32">
            <ul className="flex justify-start">
              <li>
                <h1 className="text-black font-extrabold">Feature New Cars</h1>
              </li>
            </ul>

            <ul className="grid justify-end text-black mr-32">
            <li>View All New Cars</li>
            </ul>
        
        </div>

        <div>
            <ul className="flex justify-normal text-black font-bold gap-6 pt-8 ml-32 mr-32 ">
                <li><Link href="">Popular</Link></li>
                <li><Link href="">Upcoming</Link></li>
                <li><Link href="">Newly Launched</Link></li>
            </ul>
        </div>

        <div className="grid grid-flow-col pt-8 gap-6 ml-32 mr-32">

           
            <ul className="flex justify-normal">
                
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter bg-white">
                
                <img src="img1.jpg" className="pb-24"></img>
                 <figcaption className="absolute px-4 text-lg text-blue-500 bottom-2">
                 <p className="pl-12  text-blue-500 font-bold">Toyota Corolla</p>
                 <p className="pl-16  text-black text-sm font-bold">PKR 50,00000</p>
                 <p className="pl-16  text-yellow-300 cursor-pointer filter grayscale hover:grayscale-0 ">★★★★★</p>
                 </figcaption>
                </figure>
                </ul>
                
                 <ul>
                 <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter bg-white">
                 <img src="img2.jpg" className="pb-24"></img>
                 <figcaption className="absolute px-4 text-lg text-blue-500 bottom-2">
                 <p className="pl-12  text-blue-500 font-bold">Toyota Corolla</p>
                 <p className="pl-16  text-black text-sm font-bold">PKR 50,00000</p>
                 <p className="pl-16 text-yellow-300 cursor-pointer filter grayscale hover:grayscale-0">★★★★★</p>
                 </figcaption>
                </figure>

                </ul>
                
                
                <ul>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter bg-white">
                <img src="img3.jpg" className="pb-24"></img>
                <figcaption className="absolute px-4 text-lg text-blue-500 bottom-2">
                 <p className="pl-12  text-blue-500 font-bold">Toyota Corolla</p>
                 <p className="pl-16  text-black text-sm font-bold">PKR 50,00000</p>
                 <p className="pl-16 text-yellow-300 cursor-pointer filter grayscale hover:grayscale-0">★★★★★</p>
                 </figcaption>
                </figure>
               
                </ul>
                
                
                <ul>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter bg-white">
                <img src="img4.png" className="pb-24"></img>
                <figcaption className="absolute px-4 text-lg text-blue-500 bottom-2">
                 <p className="pl-12  text-blue-500 font-bold">Toyota Corolla</p>
                 <p className="pl-16  text-black text-sm font-bold">PKR 50,00000</p>
                 <p className="pl-16 text-yellow-300 cursor-pointer filter grayscale hover:grayscale-0">★★★★★</p>
                 </figcaption>
                </figure>
            
            </ul>
        
         </div>
         

        </div>
    )
}
