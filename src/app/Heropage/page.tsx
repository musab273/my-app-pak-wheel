import Link from "next/link";

export default function Heropage(){
    return(
        
    <div className="bg-white h-1/2 w-screen py-24 px-18">    

      <div className="flex justify-center  text-black py-6 ">
        <h1 className="text-center font-extrabold">Sell Your Car On Pakweels And Get The Best Price</h1>
        <br/>
   </div>

    <div className="flex justify-center border p-16 pt-8 pb-8 pr-10 pl-10 mt-4">

      <ul className="text-black">
        <h1>Post Your Add On Pakweels</h1>
       
        <li>✔️ Post Your Add For Free In 3 Easy Steps</li>
        <li>✔️ Get Geniun Offer From Verified Buyers</li>
        <li>✔️ Sell Your Car At The Best Price</li>
        <br/>
        <button className="bg-red-600 border rounded-lg py-3 px-7"> Post Your Add </button>
      </ul><br/>
      <h1 className="text-black font-extrabold flex justify-center  px-16 py-12 "> OR </h1>
      
      <ul className="text-black justify-end mr-20">
          <h1>✔️ Try Pakweels Sell It For Me</h1>
          <li>✔️ Dedicate Sell Export To Sell Your Car</li>
          <li>✔️ We Bargain You And Share Best Offer</li>
          <li>✔️ We Ensure Save And Secure Transication</li>
          <br/>
          <button className="bg-blue-600 border rounded-lg py-3 px-7"> Register Your Car </button>
        </ul>
    </div>


    </div>
    

  )
}