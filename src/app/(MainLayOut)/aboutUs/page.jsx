import AboutSection from '@/Components/ui/AboutUs/AboutSection'
import AboutUsBanner from '@/Components/ui/AboutUs/AboutUsBanner'
import MeetGuides from '@/Components/ui/AboutUs/MeetGuides'
import NextTravel from '@/Components/ui/AboutUs/NextTravel'
import React from 'react'

export default function AboutPage() {
  return (
    <div className=''>
       <AboutUsBanner></AboutUsBanner>
       <AboutSection></AboutSection>
        <NextTravel></NextTravel>
        <MeetGuides></MeetGuides>
    </div>
  )
}
