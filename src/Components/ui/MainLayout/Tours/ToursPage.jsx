import React from 'react'
import ToursBanner from './ToursBanner'
import LatestArticle from '../ContactUs/LatestArticle'
import AllTours from './AllTours'


export default function ToursPage() {
  return (
    <div>
      <ToursBanner></ToursBanner>
       <AllTours></AllTours>
      <LatestArticle></LatestArticle>
    </div>
  )
}
