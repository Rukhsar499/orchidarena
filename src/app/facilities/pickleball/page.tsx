"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const facilities = [
    {
        title: "Premium Quality Surface",
        desc: "Engineered for optimal bounce, traction, and player safety.",
        icon: (
            <Image
                src="/assets/img/tennis-court.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        ),
    },
    {
        title: "All-Age Accessibility",
        desc: "Designed for kids, adults, and seniors to enjoy and stay active.",
        icon: (
            <Image
                src="/assets/img/people.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        ),
    },
    {
        title: "Lighting & Amenities",
        desc: "Play day or night with professional lighting and convenient rest areas.",
        icon: (
            <Image
                src="/assets/img/view.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        ),
    },
    {
        title: "Free parking spots",
        desc: "parking available for 100+ cars",
        icon: (
            <Image
                src="/assets/img/parking.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        ),
    },
];

const Page = () => {

    return (
        <>
            <section className="relative md:h-screen h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        src="/assets/video/pickleball.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute md:left-20 md:bottom-20 left-4 bottom-10 flex items-center justify-center">
                    <div className="text-left text-white uppercase">
                        <h1 className="text-4xl md:text-[100px] leading-tight font-semibold mb-6">Pickleball has a new <br />destination</h1>
                        <button className="bg-transparent hover:bg-white hover:text-black transition-all duration-300 border border-white tracking-wide  text-white cursor-pointer font-semibold py-3 px-8 rounded-lg uppercase">
                            Book your court
                        </button>
                    </div>
                </div>
            </section>
            <section className="md:py-20 py-10">
                <div className="container mx-auto md:px-10 px-4">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full lg:w-[48%]">
                            <h2 className="text-[25px] md:text-[60px] mb-5 md:mb-0 font-semibold md:leading-[55px] leading-tight uppercase md:max-w-[80%] w-full">PICKLEBALL IS A POWERFUL WAY TO STAY ACTIVE AND COMPETITIVE AT ANY AGE!</h2>
                        </div>
                        <div className="w-full lg:w-[48%]">
                            <p className="text-[18px] text-[#656565] md:max-w-[80%] w-full">Pickleball is one of the fastest-growing sports in the world, blending the excitement of tennis, badminton, and table tennis into one accessible and fun activity. Whether you’re a beginner or an experienced player, our courts provide the perfect setting for competitive matches and social play.</p>
                        </div>
                    </div>
                    <div className="pt-20">
                        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-2">
                            {facilities.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="group flex flex-col items-center justify-center text-center cursor-pointer"
                                >
                                    <div className="text-green-600">{item.icon}</div>
                                    <h3 className="mt-4 text-[24px] font-semibold">{item.title}</h3>
                                    <p className="text-gray-600 mt-2 text-[16px]">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:py-20 py-10 px-4 md:px-0">
                <div className="w-full flex flex-col lg:flex-row min-h-[90vh] gap-y-6">
                    <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                        <Image
                            src="/assets/img/tenis-bat.jpg"
                            alt="Event"
                            className="w-full h-full object-cover"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-start justify-center md:px-35 md:bg-[#F3F8F9] bg-[#fff]">

                        <p className="text-[15px] font-semibold text-[#000] uppercase mb-5">Pickleball, Perfected at Orchid Arena</p>
                        <h2 className="md:text-[60px] text-[30px] font-semibold leading-[55px] uppercase md:mb-5 mb-2">Smash. Serve. <br className="md:block hidden" />Celebrate.</h2>
                        <p className="text-[18px] text-[#656565] mb-5">Discover the fastest-growing sport in the city — right here at Orchid Arena. Whether you’re a beginner or a seasoned player, our professional courts and vibrant community make every match memorable.</p>

                        <h3 className="text-[25px] uppercase tracking-tight font-semibold text-[#000] mb-5"><span className="text-gray-600 pr-6">01.</span> International-Standard Courts</h3>
                        <hr className="w-[80%] bg-black my-2" />
                        <h3 className="text-[25px] uppercase tracking-tight font-semibold text-[#000] mb-5"><span className="text-gray-600 pr-6">02.</span> Day & Night Play</h3>
                        <hr className="w-[80%] bg-black my-2" />
                        <h3 className="text-[25px] uppercase tracking-tight font-semibold text-[#000] md:mb-5 mb-10"><span className="text-gray-600 pr-6">03.</span> COACHING & TRAINING SESSIONS</h3>

                        <button className="bg-[#2EAC6D] hover:bg-[#84ffa3] hover:text-black transition-all duration-300 border border-white tracking-wide  text-white cursor-pointer font-semibold py-3 md:px-8 px-10 rounded-lg uppercase">
                            Book Now
                        </button>

                    </div>
                </div>
            </section>

            <section className="md:py-20 py-10">
                <div className="container mx-auto md:px-10 px-4">
                    <div className="flex flex-wrap justify-between gap-y-6">
                        <div className="w-full md:w-[48%] flex justify-center">
                            <Image
                                src="/assets/img/white-tenis.webp"
                                alt="Event"
                                className="md:w-auto w-full h-auto"
                                width={400}
                                height={600}
                            />
                        </div>
                        <div className="w-full md:w-[48%]">
                            <p className="text-[15px] font-semibold text-[#000] mb-5 uppercase tracking-wide">Train, compete, and connect on high-performance courts designed for champions and first-timers alike.</p>
                            <h2 className="md:text-[60px] text-[30px] font-semibold md:leading-[55px] leading-tight uppercase md:mb-5 mb-8">Game On: Pickleball Like Never<br/> Before</h2>
                            <p className="text-[18px] text-[#656565] mb-5">Our pickleball court is more than a playing space — its a place where friendships are forged and energy is shared. From beginners to pros, everyone is welcome to join in the fun and spirit of the game.</p>

                            <Image
                                src="/assets/img/red-tenis.webp"
                                alt="Event"
                                className="w-auto h-auto"
                                width={600}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page