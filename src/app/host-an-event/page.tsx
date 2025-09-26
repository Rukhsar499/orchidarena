'use client';
 import Bghost from "../components/Bghost"
 import Hostarena from "../components/Hostarena"

export default function Host() {
  return (
    <>
     <Bghost/>
     <Hostarena/>
     <section className="future">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-full lg:w-1/2 h-64">
              <h2 className="text-3xl md:text-[55px] font-semibold">Future Events</h2>
            </div>
            <div className="w-full lg:w-1/2 h-64">
              <p className="text-[18px] text-[#656565]">Get ready for a thrilling lineup at Orchid Arena! From high-energy football clashes and intense cricket tournaments to fast-paced pickleball matches and dynamic corporate games, we have something exciting planned for every sports enthusiast. Stay tuned and mark your calendars — the action is just getting started!

              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
