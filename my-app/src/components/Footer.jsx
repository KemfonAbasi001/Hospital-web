function FooterSection() {
    return(
        <footer className="w-full py-10 lg:py-13 bg-[#1e293e] flex justify-center items-center">
            <div className="w-[93%] flex flex-col gap-10 lg:gap-12">

                {/* Footer Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:flex lg:flex-row lg:justify-between">

                    {/* Brand */}
                    <div className="flex flex-col gap-4 lg:w-[23%]">
                        <a href="/">
                            <h1 className="text-[30px] leading-9 font-light text-[#FFFFFF] font-cormorant">EDEN</h1>
                        </a>
                        <p className="text-[14px] font-normal leading-5 text-[#FFFFFF80]">
                            Providing world-class healthcare with compassion, innovation, and excellence for over 25 years.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4 lg:w-[23%]">
                        <h4 className="text-[14px] leading-5 tracking-[.35px] text-[#DDDCD6] font-semibold">Quick Links</h4>
                        <a href="/"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">About Us</p></a>
                        <a href="/services"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Our Services</p></a>
                        <a href="/doctor"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Find a Doctor</p></a>
                        <a href="/hospital"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Hospital Tour</p></a>
                        <a href="/emergency"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Patient Portal</p></a>
                    </div>

                    {/* Departments */}
                    <div className="flex flex-col gap-4 lg:w-[23%]">
                        <h4 className="text-[14px] leading-5 tracking-[.35px] text-[#DDDCD6] font-semibold">Departments</h4>
                        <a href="/services"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Cardiology</p></a>
                        <a href="/services"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Neurology</p></a>
                        <a href="/services"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Pediatrics</p></a>
                        <a href="/services"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Orthopedics</p></a>
                        <a href="/services"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Oncology</p></a>
                        <a href="/services"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Surgery</p></a>
                    </div>

                    {/* Patient Resources */}
                    <div className="flex flex-col gap-4 lg:w-[23%]">
                        <h4 className="text-[14px] leading-5 tracking-[.35px] text-[#DDDCD6] font-semibold">Patient Resources</h4>
                        <a href="/emergency"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Book Appointment</p></a>
                        <a href="/emergency"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Emergency Services</p></a>
                        <a href="/emergency"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Insurance Partners</p></a>
                        <a href="/emergency"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Medical Records</p></a>
                        <a href="/emergency"><p className="text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Visitor Information</p></a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="w-full border-t border-b-0 border-r-0 border-l-0 border-solid border-[#FFFFFF80] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 py-4">
                    <p className="text-[13px] lg:text-[14px] font-normal leading-5 text-[#FFFFFF80]">
                        © 2026 Medical Center. All rights reserved.
                    </p>
                    <div className="flex gap-5 lg:gap-7">
                        <a href="/"><p className="text-[13px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Privacy</p></a>
                        <a href="/"><p className="text-[13px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Terms</p></a>
                        <a href="/"><p className="text-[13px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Cookies Policy</p></a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default FooterSection