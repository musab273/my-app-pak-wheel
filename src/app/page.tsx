import Image from "next/image";
import Navbar from "./componenet/Navbar";
import Heropage from "./Heropage/page";
import FeaturedNewCars from "./FeaturedNewCars/page";
import Footer from "./Footer/page";
import Thankyou from "./componenet/Thankyou";
import Form from "./componenet/Form";
export default function Home() {
  return (
    <div>
      
      <Heropage />
      <FeaturedNewCars/>
      <Form/>
      <Thankyou/>
      
      
      
      

    </div>
  );
}
