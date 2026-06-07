import { useState } from 'react'

import bg_image from '../assets/photo-013.png'
import bg_image_two from '../assets/hero-bg-02.png'

import one from '../assets/photo-01.png'
import two from '../assets/photo-02.png'
import three from '../assets/photo-03.png'
import four from '../assets/photo-04.png'
import five from '../assets/photo-05.png'
import six from '../assets/photo-06.png'
import seven from '../assets/photo-07.png'
import eight from '../assets/photo-08.png'
import nine from '../assets/photo-09.png'
import ten from '../assets/photo-010.png'
import eleven from '../assets/photo-011.png'
import twelve from '../assets/photo-012.png'
import thirteen from '../assets/photo-013.png'
import fourteen from '../assets/photo-014.png'
import fifteen from '../assets/photo-015.png'
import sixteen from '../assets/photo-016.png'
import seventeen from '../assets/photo-017.png'
import eighteen from '../assets/photo-018.png'
import ninteen from '../assets/photo-019.png'
import FooterSection from '../components/Footer'

function Card(props) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <div onClick={scrollToTop} className="w-full relative h-95 overflow-hidden group rounded-2xl md:h-80 lg:h-92.5 cursor-pointer">
            <img src={props.imgSrc} alt="" className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40"></div>
            <div className="absolute bottom-4 left-4 lg:bottom-7 lg:left-5 flex flex-col gap-0">
                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-normal text-[#FFFFFF] font-playfair">{props.title}</h1>
                <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-5 tracking-[.35px] font-normal text-[#FFFFFF] font-inter">{props.details}</p>
                <a href="" className="text-[12px] lg:text-[14px] font-normal mt-2 text-[#D19F47] flex gap-1 items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="#D19F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>   
    )
}


function ServiceSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6)), url(${bg_image})` }}
        className='relative w-full py-32 pt-20 lg:py-50 lg:pt-32 bg-cover bg-center bg-no-repeat'
      >
        <div className="flex flex-col bottom-8 left-4 md:bottom-10 md:left-6 lg:bottom-13 lg:left-8 gap-2 lg:gap-3 absolute">
          <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase">
            Centers of Excellence
          </p>
          <h1 className="text-[32px] md:text-[44px] lg:text-[60px] leading-tight lg:leading-15 font-semibold text-[#FFFFFF] font-playfair">
            <span className='italic'>25+ Specialties, </span> One Standard
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] leading-6 lg:leading-7 font-normal text-[#B3B3B3]">
            Every department at Elysium operates at the highest level of clinical excellence.
          </p>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className='w-full py-16 lg:py-30 flex justify-center'>
        <div className="w-[93%] flex flex-col gap-10 lg:gap-15">

          {/* Section Header */}
          <div className="text-center flex flex-col gap-2 lg:gap-3">
            <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase">
              200+ Physicians
            </p>
            <h1 className="text-[30px] md:text-[38px] lg:text-[48px] leading-tight lg:leading-12 font-semibold text-[#151C28] font-playfair">
              Experts Who Define Excellence
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-6.5 font-normal text-[#676F7E]">
              Each physician at Elysium is a leader in their specialty — trained at the world's most prestigious institutions.
            </p>
          </div>

          {/* Grid: 1 col mobile, 2 col tablet (770–1020px), 3 col desktop */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
            <Card imgSrc={one}      title='Cardiology'                details='Advanced cardiac diagnostics, interventional procedures, and heart surgery.' />
            <Card imgSrc={two}      title='Neurology & Neurosurgery'  details='Comprehensive brain and nervous system care with cutting-edge imaging.' />
            <Card imgSrc={three}    title='Pediatrics & Neonatology'  details='Gentle, expert care for your little ones from birth through adolescence.' />
            <Card imgSrc={four}     title='Womens Health & Gynecology' details='Compassionate maternity care and womens health services.' />
            <Card imgSrc={five}     title='Orthopedics'               details='Joint replacement, sports medicine, and musculoskeletal expertise.' />
            <Card imgSrc={six}      title='Emergency & Trauma'        details='24/7 emergency response with rapid triage and life-saving protocols.' />
            <Card imgSrc={seven}    title='Oncology & Cancer Center'  details='Personalized cancer treatment with chemotherapy, immunotherapy, and support.' />
            <Card imgSrc={eight}    title='General & Robotic surgery' details='State-of-the-art surgical suites with robotic-assisted procedures for faster recovery.' />
            <Card imgSrc={nine}     title='Ophthalmology'             details='From laser vision correction to retinal surgery — advanced care for your eyes.' />
            <Card imgSrc={ten}      title='ENT & Head / Neck Surgery' details='Expert ear, nose, and throat care with advanced endoscopic and microsurgical techniques.' />
            <Card imgSrc={eleven}   title='Dermatology & Aesthetics'  details='Medical and cosmetic dermatology with cutting-edge laser and skincare treatments.' />
            <Card imgSrc={twelve}   title='Physical Rehabilitation'   details='Comprehensive recovery programs with advanced physiotherapy and wellness coaching.' />
            <Card imgSrc={thirteen} title='Physiotherapy'             details='Rehabilitation programs to restore movement, strength, and independence.' />
            <Card imgSrc={fourteen} title='Radiology'                 details='State-of-the-art MRI, CT, and diagnostic imaging services.' />
            <Card imgSrc={fifteen}  title='Pathology & Lab Medicine'  details='CAPS-accredited laboratory with molecular diagnostics and genomic testing.' />
            <Card imgSrc={sixteen}  title='Anesthesiology & Pain'     details='Expert anesthesia and pain management for safe, comfortable surgical experiences.' />
            <Card imgSrc={seventeen} title='Nephrology'               details='Kidney care from diagnostics to dialysis and transplant preparation.' />
            <Card imgSrc={eighteen} title='Endocrinology'             details='Diabetes management, thyroid care, and hormonal disorder treatment by specialists.' />
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url(${bg_image_two})` }}
        className='w-full py-20 lg:py-35 flex justify-center bg-cover bg-center bg-no-repeat'
      >
        <div className="flex flex-col justify-center items-center text-center gap-4 lg:gap-5 px-5">
          <p className="text-[11px] lg:text-[13px] leading-4 tracking-[5.3px] font-medium text-[#DDA23C] uppercase">
            Begin Your Journey
          </p>
          <h1 className="text-[30px] md:text-[38px] lg:text-[48px] leading-tight lg:leading-12 font-semibold text-[#FFFFFF] font-playfair">
            Your Health Deserves{' '}
            <span className='italic text-[#DDA23C]'>Nothing Less<br/></span> Than the Best
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-7 font-normal text-[#AEACA9]">
            Whether you need a second opinion, a specialized consultation, or emergency care — our doors are always open.
          </p>

          {/* Buttons: stack on mobile, row on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 w-full sm:w-auto">
            <a href="/emergency" className="bg-[#DDA23C] text-black py-3.5 px-7 lg:py-3.75 lg:px-10 text-[13px] lg:text-[14px] leading-5 font-medium tracking-[.35px] rounded-3xl flex gap-1 items-center justify-center">
              Schedule a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="/emergency" className="flex gap-1 bg-[#ffffff26] border border-solid border-[#F8F6F2] text-[#F8F6F2] py-3.5 px-7 lg:py-3.75 lg:px-10 text-[13px] lg:text-[14px] leading-5 font-medium tracking-[.35px] rounded-3xl items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call 1-800-UUTH
            </a>    
          </div>
        </div>
      </section>

      <FooterSection/>
    </>
  )
}

export default ServiceSection