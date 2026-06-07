import bg_image from '../assets/hero-bg-02.png'
import one from '../assets/parole-01.png'
import two from '../assets/parole-02.png'
import three from '../assets/photo-013.png'
import four from '../assets/photo-014.png'
import five from '../assets/pharm.png'
import FooterSection from '../components/Footer'

function Card(props) {
    return(
        <div className="flex flex-col gap-2 items-stretch justify-center">
            <p className="text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C]">{props.number}</p>
            <h1 className="text-[28px] md:text-[32px] lg:text-[38px] leading-tight lg:leading-10 font-semibold text-[#151C28] font-playfair">{props.title}</h1>
            <p className="text-[15px] lg:text-[17px] leading-6 font-normal italic text-[#B18230]">{props.subtitle}</p>
            <p className="text-[15px] md:text-[16px] lg:text-[18px] leading-7 lg:leading-7.5 font-normal text-[#676F7E]">{props.details}</p>
        </div>
    )
}


function HospitalSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6)), url(${bg_image})` }}
        className='w-full py-20 pt-24 md:py-24 md:pt-28 lg:py-30 lg:pt-32 flex justify-center bg-cover bg-center bg-no-repeat'
      >
        <div className="flex flex-col justify-center items-center text-center gap-3 px-5">
          <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-4 tracking-[4.8px] font-medium text-[#DDA23C] uppercase">
            Virtual Tour
          </p>
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-tight lg:leading-18 font-semibold text-[#FFFFFF] font-playfair">
            A Place Like <br/><span className='italic'>No Other</span>
          </h1>
          <p className="text-[15px] md:text-[17px] lg:text-[20px] leading-6 lg:leading-7 font-normal text-[#B3B3B3]">
            Every space at Elysium is designed to inspire calm, confidence, and hope.
          </p>
        </div>
      </section>

      {/* TOUR SECTIONS */}
      <section className='w-full py-16 lg:py-30 flex justify-center'>
        <div className="w-[93%] flex flex-col gap-12 md:gap-16 lg:gap-20">

          {/* Row 1 — Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <img src={one} alt="The Grand Entrance" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm" />
            <Card
              number="01"
              title="The Grand Entrance"
              subtitle="First impressions that calm and reassure"
              details="Arriving at Elysium, guests are welcomed by soaring ceilings, natural light, and an atmosphere more akin to a five-star hotel than a hospital. Our concierge team greets every patient by name."
            />
          </div>

          {/* Row 2 — Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            {/* On mobile: card first, then image. On desktop: card left, image right */}
            <Card
              number="02"
              title="Patient Suites"
              subtitle="Rooms designed for recovery and dignity"
              details="Each private suite features floor-to-ceiling windows, custom bedding, an in-room kitchen, and a dedicated family lounge area — because healing happens best in comfort."
            />
            <img src={two} alt="Patient Suites" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last" />
          </div>

          {/* Row 3 — Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <img src={three} alt="The Surgical Center" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm" />
            <Card
              number="03"
              title="The Surgical Center"
              subtitle="Precision in every procedure"
              details="Our state-of-the-art surgical suites are equipped with the da Vinci robotic system, integrated imaging, and laminar airflow filtration — the gold standard in operative care."
            />
          </div>

          {/* Row 4 — Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <Card
              number="04"
              title="Diagnostic Imaging Center"
              subtitle="Answers with unprecedented clarity"
              details="A 3T MRI, 256-slice CT scanner, and AI-assisted diagnostic tools allow our radiologists to detect what others miss — providing faster, more accurate diagnoses."
            />
            <img src={four} alt="Diagnostic Imaging" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last" />
          </div>

          {/* Row 5 — Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <img src={five} alt="Pharmacy" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm" />
            <Card
              number="05"
              title="Pharmacy & Compounding"
              subtitle="Precision medicine, dispensed with care"
              details="Our in-house pharmacy provides personalized compounding, medication counseling, and same-day delivery to your suite — ensuring seamless continuity of care."
            />
          </div>

          {/* Row 6 — Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <Card
              number="06"
              title="Wellness & Rehabilitation"
              subtitle="Where recovery becomes transformation"
              details="A 10,000 sq ft wellness pavilion featuring hydrotherapy pools, physiotherapy studios, nutritional counseling, and a rooftop meditation garden."
            />
            <img src={two} alt="Wellness" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last" />
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url(${bg_image})` }}
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

export default HospitalSection