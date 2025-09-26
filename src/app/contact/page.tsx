'use client';
import Mail from "../contact/Mail"
import ContactForm from "../components/ContactForm"

export default function Host() {
    return (
        <>
            <Mail />
            <section className="map md:mb-[100px] mb-[50px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9147.816564036888!2d88.36216300000001!3d22.504043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027125f0b85a61%3A0xe9d5ef4252915a51!2sDigital%20Wolf!5e1!3m2!1sen!2sin!4v1758882951439!5m2!1sen!2sin" width="100%" height="500"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <ContactForm />
        </>
    );
}
