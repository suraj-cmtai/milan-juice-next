import DownloadApp from '@/components/menu/downloadApp'
import MenuHero from '@/components/menu/hero'
import MenuPDFViewer from '@/components/menu/pdf'
import TasteTheBest from '@/components/menu/tasteTheBest'
import React from 'react'

const page = () => {
  return (
    <>
    <MenuHero />
    <TasteTheBest />
    <MenuPDFViewer />
    <DownloadApp />
    </>
  )
}

export default page