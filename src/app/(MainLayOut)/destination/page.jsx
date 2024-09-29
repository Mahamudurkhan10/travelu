import DestinationBanner from '@/Components/ui/Destination/DestinationBanner'
import DestinationGallery from '@/Components/ui/Destination/DestinationGallery'
import Partner from '@/Components/ui/Home/Partner'

import React from 'react'

export default function Destination() {
  return (
    <div className='  '>
         <DestinationBanner></DestinationBanner>
          <DestinationGallery></DestinationGallery>
          <Partner></Partner>
    </div>
  )
}
