import Banner from "@/Components/ui/Home/Banner";
import Gallery from "@/Components/ui/Home/Gallery";
import PopularTour from "@/Components/ui/Home/PopularTour";




export default function Home() {
  return (
  <div className="">
    
     <Banner></Banner>

    <div className="">
    <Gallery></Gallery>
    </div>
    <PopularTour></PopularTour>
  </div>
  );
}
