import Blog from '@/Components/ui/MainLayout/Blog/Blog'
import LatestArticle from '@/Components/ui/MainLayout/ContactUs/LatestArticle'
import Partner from '@/Components/ui/MainLayout/Home/Partner'
import React from 'react'

export default function page() {
  return (
    <div className=''>
          <Blog></Blog>
          <LatestArticle></LatestArticle>
          <Partner></Partner>
    </div>
  )
}
