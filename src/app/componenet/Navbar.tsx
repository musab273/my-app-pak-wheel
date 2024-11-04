import Link from "next/link"
import Image from "next/image"
import logo from "./public/logo.png"
export default function Navbar(){
    return(
        
        <div>
            

            
            <div className="grid grid-flow-col h-10">


                <ul className="flex justify-start text-justify font-bold h-10 gap-6 py-2 px-2 pt- pr-8 ml-10 ">
                    <li>Download App via Sms</li>
                </ul>
                
                <ul className="flex justify-end bg-black text-balance text-white gap-6 h-12 py-2 px-2 pb-6 mr-10 ">  
                <li><Link href="/urdu">اردو</Link></li>
                <li className=""><Link href="/signup">Sign Up</Link></li>
                <li><Link href="/signin">Sign In</Link></li>
                </ul>

            </div>
            <div className="flex h-10 items-baseline pt-8 ml-10 mr-10">
                <ul className="flex justify-center items-end gap-12 bg-black text-white h-8 py-2 px-2 ">
                <img src="logo.png" className="flix justify-start h-8  "></img>
                <li><Link href="/usedcars">Used Cars</Link></li>
                <li><Link href="/newcars">New Cars</Link></li>
                <li><Link href="/bikes">Bikes</Link></li>
                <li><Link href="/autostore">AutoStors</Link></li>
                <li><Link href="/videos">Videos</Link></li>
                <li><Link href="/forums">Forums</Link></li>
                <li><Link href="/blog">Blogs</Link></li>
                <li><Link href="/more">Mores</Link></li>
                <ul className="grid grid-flow-col justify-items-end  font-extrabold ">
               <li> <button className="justify-end bg-red-600 py-2 px-5  gap-1 rounded-lg ">Post Your Add</button></li>
                </ul>
        </ul>
        </div>
        </div>
    )
}
    