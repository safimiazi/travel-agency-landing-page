import Banner from "@/components/Banner";
import BestHotels from "@/components/BestHotels";
import Destinations from "@/components/Destinations";
import DomesticRoutes from "@/components/DomesticRoutes";
import ExclusiveOffer from "@/components/ExclusiveOffers";
import ExploreBd from "@/components/ExploreBd";
import FindHoliday from "@/components/FindHoliday";
import Navbar from "@/components/Navbar";
import SearchTopAirlines from "@/components/SearchTopAirlines";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div>
    {/* Navbar */}
    <div>
      <Navbar/>
      <Banner/>
      <ExclusiveOffer/>
      <ExploreBd/>
      <SearchTopAirlines/>
      <Destinations/>
      <BestHotels/>
      <FindHoliday/>
      <DomesticRoutes/>
      <Footer/>
    </div>
   </div>
  );
}
