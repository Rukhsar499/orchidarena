"use client"

import ContactForm from "../components/ContactForm"

const page = () => {
  return (
    <div className="pt-50">
      <div className="bg-[#F3F8F9]">
        <div className="container mx-auto px-4 py-16">
          <h2 className="md:text-[50px] text-[40px] uppercase font-bold text-center md:mb-10 mb-8">
            Contact Us
          </h2>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full lg:w-[48%]">
              <h2>Have a questions? Get in touch!</h2>
              <p>Have questions about booking at Orchid Arena? Reach out to us—were here to help with all your outdoor game court needs!</p>
              <div>
                <h3>Office Address</h3>
                <p>11A, 1J, E Topsia Rd, Mirania Gardens, East Topsia, Topsia, Kolkata, West Bengal 700105</p>
                <h3>Phone</h3>
                <p>+91 98315 57613</p>
                <h3>Email</h3>
                <p>calboat@gmail.com</p>
              </div>
            </div>
            <div className="w-full lg:w-[48%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page