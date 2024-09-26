import Banner from "@/Components/ui/Home/Banner";
import Gallery from "@/Components/ui/Home/Gallery";




export default function Home() {
  return (
  <div className="h-screen">
    
     <Banner></Banner>

    <div className="mt-5">
    <Gallery></Gallery>
    </div>
  </div>
  );
}
