import Menu from '@/components/home/menu'
import LocationHero from '@/components/location/hero'
import Locations from '@/components/location/locations'
import React from 'react'

const page = () => {
  return (
    <>
    <LocationHero />
    <Locations />
    <Menu />
    </>
  )
}

export default page