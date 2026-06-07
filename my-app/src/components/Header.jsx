import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header id='nav-header' className={`w-full flex justify-center items-center fixed top-0 z-3000 transition-all duration-300 ${isScrolled ? 'bg-[#FFFFFF] shadow-md' : 'bg-transparent'}`}>
      <nav className='mx-auto my-0 w-[93%] py-3.5 px-0 flex flex-row justify-between items-center'>

        <a href="/" className="">
          <h1 className={`text-[20px] leading-7 tracking-[.5px] font-playfair font-semibold transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Medical Center</h1>
        </a>  

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='w-5 h-5'>
        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
        </svg>

        <ul className="flex gap-4 hidden">
          <li className="">
            <a href="/" className={`text-[16px] leading-5 ${isActive('/') ? 'font-semibold' : 'font-normal'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Home</a>
          </li>
          <li className="">
            <a href="/services" className={`text-[16px] leading-5 ${isActive('/services') ? 'font-semibold' : 'font-normal'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Services</a>
          </li>
          <li className="">
            <a href="/doctor" className={`text-[16px] leading-5 ${isActive('/doctor') ? 'font-semibold' : 'font-normal'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Our Doctors</a>
          </li>
          <li className="">
            <a href="/hospital" className={`text-[16px] leading-5 ${isActive('/hospital') ? 'font-semibold' : 'font-normal'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Hospital Tour</a>
          </li>
          
          <li className="">
            <a href="/emergency" className={`text-[16px] leading-5 ${isActive('/emergency') ? 'font-semibold' : 'font-normal'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Emergency</a>
          </li>
        </ul>

        <div className="flex gap-3 hidden">
          <a href="/emergency" className="flex gap justify-center items-center text-[.8rem] py-2.5 px-5 rounded-3xl leading-5 font-medium text-[#151C28] bg-[#DDA23C]">
            Book a Consultation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
          <a href="/emergency" className={`flex gap justify-center items-center text-[.8rem] py-2.5 px-5 rounded-3xl leading-5 font-medium border-[.3px] border-solid transition-colors duration-300 ${isScrolled ? 'text-[#151C28] border-[#151C28]' : 'text-[#FFFFFF] border-[white]'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-3 w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Emergency Care
          </a>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
