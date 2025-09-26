"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Software Engineer",
    message:
      "This platform has completely changed the way I learn. The resources and support are amazing!",
    photo: "/assets/img/sourabh.jpeg",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "UI/UX Designer",
    message:
      "The best learning experience I’ve ever had. Very intuitive and easy to use.",
    photo: "/assets/img/user2.jpeg",
  },
  {
    id: 3,
    name: "Rahul Singh",
    role: "Product Manager",
    message:
      "Highly recommend! The courses are practical and directly applicable to my work.",
    photo: "/assets/img/user3.jpeg",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-[55px] font-semibold text-center">
        What Our Players Say
      </h2>

      <Splide
        options={{
          type: "loop",
          perPage: 2,
          gap: "2rem",
          autoplay: true,
          arrows:true,
          pauseOnHover: true,
          resetProgress: false,
          breakpoints: {
            768: {
              perPage: 1,
            },
          },
        }}
        aria-label="Testimonials"
      >
        {testimonials.map((t) => (
          <SplideSlide key={t.id}>
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center h-full mt-6">
              <Image
                src={t.photo}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">“{t.message}”</p>
              <h4 className="text-lg font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
