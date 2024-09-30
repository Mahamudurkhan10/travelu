import ContactSection from '@/Components/ui/MainLayout/ContactUs/ContactSection'
import ContactUsBanner from '@/Components/ui/MainLayout/ContactUs/ContactUsBanner'
import LatestArticle from '@/Components/ui/MainLayout/ContactUs/LatestArticle'
import React from 'react'

export default function AboutUs() {
     return (
          <div>
              <ContactUsBanner></ContactUsBanner>
              <ContactSection></ContactSection>
               <LatestArticle></LatestArticle>
          </div>
     )
}

