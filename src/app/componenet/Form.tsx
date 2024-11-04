import Link from "next/link";


export default function Form(){
    return(
        <>
       

        <div>

        <h1 className="flex justify-center bg-slate-100 text-2xl text-black font-extrabold pt-10 pb-6">Enter Your Details</h1>

                <form className="flex flex-col bg-slate-100 h-auto justify-center items-center gap-6 border pb-10 pt-6">

                    <input type="name" className="border  text-black w-1/5 py-1 px-2 rounded-md" placeholder="Enter Your Name" />
                
                    <input type="email" className="border  text-black w-1/5 py-1 px-2 rounded-md" placeholder="Enter Your Email"/>
                    
                    <input type="card" className="border text-black  w-1/5 py-1 px-2 rounded-md" placeholder="Enter your card Number"/>
                    
                    <input type="address" className="border text-black  w-1/5 py-1 px-2 rounded-md" placeholder="Enter your Address"/>

                    <button className="bg-blue-400 text-white rounded-md py-4 px-5">Place Your Order</button>

                </form>
            </div></>
    )
} 