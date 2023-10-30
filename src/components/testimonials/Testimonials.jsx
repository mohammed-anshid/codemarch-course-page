const Testimonials = () => {
  return (
    <div className="mt-[7rem]">
      <h1 className="font-darker-grotesque font-bold text-5xl text-[#EDF1E4] text-center">
        Transforming Careers Everywhere
      </h1>

      <div className="mt-28 flex gap-3 lg:gap-8 overflow-x-scroll forScroll pb-4">
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
        <SingleTestimonials />
      </div>
      <div className="mt-11 flex justify-center ">
        <div className="forBorderPaddingSmall bg-gradient-to-b from-[#D7CEA5] to-[#3D8361] rounded-md">
          <button className="py-4 px-6 text-xs  rounded-lg bg-gradient-to-b from-[#013229] to-[#011F1A] text-[#D7CEA5]  font-dm-sans font-bold lg:text-2xl">
            Drag to view more testimonials -&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const SingleTestimonials = () => {
  return (
    <div className="forBorderPadding bg-gradient-to-b from-[#D7CEA5] to-[#3D8361] min-w-[80%] md:min-w-[485px]  rounded-xl w-full ">
      <div className="pt-12 px-4 lg:px-10 py-12 min-w-full  md:min-w-[480px] rounded-lg bg-gradient-to-b from-[#013229] to-[#011F1A]">
        <img src="/ratingStars.svg" alt="" />
        <p className="font-dm-sans font-normal text-[#D7CEA5] mt-8 leading-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex justify-between mt-11">
          <div className="flex gap-4">
            <img src="/Rectangle 20.svg" alt="" />
            <div className="flex flex-col justify-center">
              <h2 className="font-dm-sans text-[#EDF1E4]">John Doe</h2>
              <p className="font-dm-sans text-[#3D8361]">@johndoe</p>
            </div>
          </div>
          <img src="/twitter.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
