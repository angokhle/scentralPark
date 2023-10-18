import React from 'react'
import HeaderSection from '../header/HeaderSection'
import AboutSection from '../about/AboutSection'
import Service from '../service/Service'
import PortfolioSection from '../portfolio/PortfolioSection'
import FaqSection from '../faq/FaqSection'
import GallerySection from '../gallery/GallerySection'
import BlogSection from '../blog/BlogSection'
import ContactSection from '../contact/ContactSection'
import LoginSection from '../login/LoginSection'
import PricingModal from '../modal/PricingModal'
import BlogModal from '../modal/BlogModal'
import SettingsSidebar from '../sidebar/SettingsSidebar'
import LightboxModal from '../modal/LightboxModal'
import PetSection from '../pet/petSection'

const Layout = ({children}) => {
  return (
    <div className='root-layout'>
    <HeaderSection/>
    {children}
    <AboutSection/>
    <Service/>
    <PortfolioSection/>
    <FaqSection/>
    <GallerySection/>
    <BlogSection/>
    <ContactSection/>
    <LoginSection/>
    <PetSection/>
    <PricingModal/>
    <BlogModal/>
    <SettingsSidebar/>
    <LightboxModal/>
    </div>
  )
}

export default Layout