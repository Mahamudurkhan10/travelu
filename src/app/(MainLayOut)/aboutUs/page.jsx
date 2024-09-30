import AboutSection from '@/Components/ui/MainLayout/AboutUs/AboutSection'
import AboutUs from '@/Components/ui/MainLayout/AboutUs/AboutUs'
import AboutUsBanner from '@/Components/ui/MainLayout/AboutUs/AboutUsBanner'
import AskQuestion from '@/Components/ui/MainLayout/AboutUs/AskQuestion'
import MeetGuides from '@/Components/ui/MainLayout/AboutUs/MeetGuides'
import NextTravel from '@/Components/ui/MainLayout/AboutUs/NextTravel'
import Partner from '@/Components/ui/MainLayout/Home/Partner'


export default function AboutPage() {
  return (
    <div className=''>
       <AboutUsBanner></AboutUsBanner>
       <AboutSection></AboutSection>
        <NextTravel></NextTravel>
        <MeetGuides></MeetGuides>
         <AboutUs></AboutUs>
         <AskQuestion></AskQuestion>
         <Partner></Partner>
    </div>
  )
}
