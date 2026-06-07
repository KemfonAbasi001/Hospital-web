import bg_image from '../assets/hero-bg.png'
import bg_image_two from '../assets/hero-bg-02.png'

import one from '../assets/img-01.png'
import two from '../assets/img-02.png'

import seven from '../assets/photo-01.png'
import eight from '../assets/photo-02.png'
import three from '../assets/photo-03.png'
import four from '../assets/photo-04.png'
import five from '../assets/photo-05.png'
import six from '../assets/photo-06.png'
import FooterSection from '../components/Footer'

function Card(props) {
    return(
        <div className="w-full relative overflow-hidden group rounded-2xl h-64 md:h-80 lg:h-92.5">
            <img src={props.imgSrc} alt="" className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40"></div>
            <div className="absolute bottom-4 left-4 lg:bottom-7 lg:left-5 flex flex-col gap-0">
                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-normal text-[#FFFFFF] font-playfair">{props.title}</h1>
                <p className="text-[12px] lg:text-[14px] leading-5 tracking-[.35px] font-normal text-[#FFFFFF] font-inter">{props.details}</p>
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


function HomeSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6)), url(${bg_image})` }}
        className='w-full py-20 pt-24 lg:py-30 lg:pt-32 flex pl-5 md:pl-8 lg:pl-12 bg-cover bg-center bg-no-repeat'
      >
        <div className="flex flex-col gap-3 lg:gap-4 w-[90%] md:w-[80%] lg:w-auto">
          <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-4 tracking-[4.8px] font-medium text-[#DDA23C] uppercase">
            World-Class Private Healthcare
          </p>
          <h1 className="text-[36px] md:text-[52px] lg:text-[72px] leading-tight lg:leading-18 font-semibold text-[#FFFFFF] font-playfair">
            Where Healing <br/><span className='italic text-[#DDA23C]'>Becomes</span> an Art
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-7.5 font-normal text-[#faf6f6]">
            Experience medicine reimagined — where cutting-edge technology, world-renowned physicians, and unparalleled comfort converge to create a sanctuary of healing.
          </p>

          {/* Buttons: stack on mobile, row on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 mt-2 lg:mt-3">
            <a href="/emergency" className="flex gap-0 items-center justify-center text-[13px] lg:text-[14px] py-3.5 px-8 lg:px-12 rounded-3xl w-full sm:w-fit leading-5 font-medium text-[#151C28] tracking-[.35px] bg-[#DDA23C]">
              Book a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-4 h-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="/emergency" className="flex gap-0 items-center justify-center text-[13px] lg:text-[18px] py-3 px-8 lg:px-12 rounded-3xl w-full sm:w-fit leading-7 font-medium text-[#FFFFFF] border-[.3px] border-solid border-[white] tracking-[.45px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-3 w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Emergency Care
            </a>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className='w-full py-16 lg:py-30 flex justify-center items-center'>
        <div className="w-[93%] flex gap-10 lg:gap-15 flex-col">

          {/* Story Text */}
          <div className="flex flex-col gap-3 lg:gap-5 w-full">
            <p className="text-[11px] lg:text-[13px] leading-5 font-normal tracking-[4.2px] text-[#DDA23C] uppercase">
              Our Story
            </p>
            <h1 className="text-[32px] md:text-[46px] lg:text-[65px] leading-tight lg:leading-17.5 text-[#151C28] font-medium font-playfair">
              A Legacy of <span className='italic text-[#DDA23C]'>Compassion</span>, a Future of Innovation
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-7.25 font-normal text-[#676F7E]">
              For over two decades, Meridian Medical Center has been a beacon of hope — where every patient is family, every treatment is a promise, and every outcome is a testament to our unwavering commitment to excellence.
            </p>
          </div>

          {/* Two Image Cards: stack on mobile, row on tablet+ */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
            <div className="w-full relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-auto">
              <img src={one} alt="" className="h-full w-full block object-cover"/>
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20"></div>
              <div className="absolute bottom-5 left-5 lg:bottom-7 lg:left-7">
                <h1 className="text-[18px] md:text-[20px] lg:text-[25px] leading-7 lg:leading-8 font-medium italic text-[#FFFFFF] font-playfair">
                  "Every patient deserves to be heard."
                </h1>
              </div>
            </div>
            <div className="w-full relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-auto">
              <img src={two} alt="" className="h-full w-full block object-cover"/>
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20"></div>
              <div className="absolute bottom-5 left-5 lg:bottom-7 lg:left-7">
                <h1 className="text-[18px] md:text-[20px] lg:text-[24px] leading-7 lg:leading-8 font-medium italic text-[#FFFFFF] font-playfair">
                  "Healing begins the moment you walk in."
                </h1>
              </div>
            </div>
          </div>

          {/* Stats: 1 col mobile, 3 col tablet+ */}
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5 lg:gap-15">
            <div className="flex items-center justify-center text-center py-8 lg:py-9 bg-[#f2eee980] gap-0 rounded-3xl px-5 flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mb-4' viewBox="0 0 24 24" fill="none" stroke="#d19f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <div className="flex flex-col gap-1.5">
                <p className="text-[40px] md:text-[44px] lg:text-[48px] leading-12 font-semibold text-[#000000] font-playfair">50,000+</p>
                <p className="text-[13px] lg:text-[14px] leading-5 text-[#676F7E] font-normal tracking-[.35px]">Lives Touched Annually</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-center py-8 lg:py-9 bg-[#f2eee980] gap-0 rounded-3xl px-5 flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mb-4' viewBox="0 0 24 24" fill="none" stroke="#d19f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              <div className="flex flex-col gap-1.5">
                <p className="text-[40px] md:text-[44px] lg:text-[48px] leading-12 font-semibold text-[#000000] font-playfair">25+</p>
                <p className="text-[13px] lg:text-[14px] leading-5 text-[#676F7E] font-normal tracking-[.35px]">Years of Excellence</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-center py-8 lg:py-9 bg-[#f2eee980] gap-0 rounded-3xl px-5 flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d19f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mb-4">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div className="flex flex-col gap-1.5">
                <p className="text-[40px] md:text-[44px] lg:text-[48px] leading-12 font-semibold text-[#000000] font-playfair">200+</p>
                <p className="text-[13px] lg:text-[14px] leading-5 text-[#676F7E] font-normal tracking-[.35px]">World-Class Specialists</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className='w-full pt-0 pb-16 lg:pb-20 flex justify-center'>
        <div className="w-[93%] flex flex-col gap-10 lg:gap-15">

          {/* Header */}
          <div className="text-center flex flex-col gap-2 lg:gap-3">
            <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase">
              Our Service
            </p>
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] leading-tight lg:leading-12 font-semibold text-[#151C28] font-playfair">
              Comprehensive Care, Exceptional Results
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-6.5 font-normal text-[#676F7E]">
              From preventive care to complex surgeries, our 20+ specialized departments deliver world-class treatment.
            </p>
          </div>

          {/* Cards Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <Card imgSrc={seven} title='Cardiology'               details='Advanced cardiac diagnostics, interventional procedures, and heart surgery.' />
            <Card imgSrc={eight} title='Neurology & Neurosurgery' details='Comprehensive brain and nervous system care with cutting-edge imaging.' />
            <Card imgSrc={three} title='Pediatrics & Neonatology' details='Gentle, expert care for your little ones from birth through adolescence.' />
            <Card imgSrc={four}  title='Womens Health & Gynecology' details='Compassionate maternity care and womens health services.' />
            <Card imgSrc={five}  title='Orthopedics'              details='Joint replacement, sports medicine, and musculoskeletal expertise.' />
            <Card imgSrc={six}   title='Emergency & Trauma'       details='24/7 emergency response with rapid triage and life-saving protocols.' />
          </div>

          <a href="/services" className="w-full sm:w-fit py-3 self-center px-10 lg:px-17 rounded-4xl border border-solid border-[#151c2833] text-[14px] lg:text-[16px] text-black font-normal text-center">
            View all Specialties
          </a>

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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 w-full sm:w-auto">
            <a href="/emergency" className="bg-[#DDA23C] text-black py-3.5 px-7 lg:py-3.75 lg:px-10 text-[13px] lg:text-[14px] leading-5 font-medium tracking-[.35px] rounded-3xl flex gap-1 items-center justify-center">
              Schedule a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform">
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

export default HomeSection