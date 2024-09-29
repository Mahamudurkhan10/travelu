import AboutSection from '@/Components/ui/AboutUs/AboutSection'
import AboutUs from '@/Components/ui/AboutUs/AboutUs'
import AboutUsBanner from '@/Components/ui/AboutUs/AboutUsBanner'
import MeetGuides from '@/Components/ui/AboutUs/MeetGuides'
import NextTravel from '@/Components/ui/AboutUs/NextTravel'
import Partner from '@/Components/ui/Home/Partner'


export default function AboutPage() {
  return (
    <div className=''>
       <AboutUsBanner></AboutUsBanner>
       <AboutSection></AboutSection>
        <NextTravel></NextTravel>
        <MeetGuides></MeetGuides>
         <AboutUs></AboutUs>
         <Partner></Partner>
    </div>
  )
}
