import DestinationBanner from '@/Components/ui/MainLayout/Destination/DestinationBanner'
import DestinationGallery from '@/Components/ui/MainLayout/Destination/DestinationGallery'
import Partner from '@/Components/ui/MainLayout/Home/Partner'

import React from 'react'

export default function Destination() {
  return (
    <div className=''>
         <DestinationBanner></DestinationBanner>
          <DestinationGallery></DestinationGallery>
          <Partner></Partner>
    </div>
  )
}
