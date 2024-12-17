import React from 'react'
import { Header } from '../component/Header'
import { Hero } from '../component/Hero'
import { Services } from '../component/Services'
import { About } from '../component/About'
import { Faqs } from '../component/Faqs'
import { Education } from '../component/Education'
import { Projects } from '../component/Projects'
import { PriceTable } from '../component/PriceTable'
import { Testimonial } from '../component/Testimonial'
import { Contact } from '../component/Contact'
import { Footer } from '../component/Footer'
import { WhatsAppIcon } from '../component/WhatsAppIcon'
import { ToastContainer, toast } from 'react-toastify';

export const LandingPage = () => {
  return (
    <div>
       <ToastContainer />
        <Header/>
        <Hero/>
        <Services/>
        <About/>
        <Faqs/>
        <Education/>
        <Projects/>
        <PriceTable/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <WhatsAppIcon/>
    </div>
  )
}
