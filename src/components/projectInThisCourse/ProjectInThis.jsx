const ProjectInThis = () => {
  return (
    <div className="mt-[7.5rem]">
      <div className="">
        <h1 className=" text-5xl font-darker-grotesque lg:text-[5rem] text-[#EDF1E4] text-center font-extrabold">
          Projects in this course
        </h1>
        <p className="text-xs mt-14 text-center auto text-[#D7CEA5] leading-10 lg:text-2xl">
          Dive into captivating stories, uncover industry trends, and push the
          boundaries of your coding prowess. <br /> Join us now to unlock coding
          mastery and be amazed, inspired, and transformed!
        </p>
      </div>
      <div className="flex lg:justify-center gap-8 mt-12 overflow-x-scroll w-full forScroll">
        <Card heading="Kelvin Weather" />
        <Card heading="Dog Years" />
        <Card heading="Magic Eight Ball" />
      </div>
    </div>
  );
};

export default ProjectInThis;

const Card = ({ heading }) => {
  return (
    <div className="forBorderPadding bg-gradient-to-b from-[#D7CEA5] to-[#3D8361] min-w-full sm:min-w-[80%] md:min-w-[70%]   lg:min-w-0  rounded-xl  ">
      <div className=" rounded-xl p-4 w-full bg-gradient-to-b from-[#013229] to-[#011F1A]">
        <div className="h-64 w-full bg-[#D9D9D9] rounded-xl"></div>
        <h1 className="mt-6 font-dm-sans text-2xl font-bold text-[#EDF1E4] mb-3">
          {heading}
        </h1>
        <div className="flex flex-col justify-center">
          <Points text="Build core programming concepts" />
          <Points text="Learn object-oriented concepts" />
          <Points text="Read and write JavaScript" />
        </div>
        <button className="py-4 w-full bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] rounded-lg mt-12 font-bold text-base font-inter text-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

const Points = ({ text }) => {
  return (
    <div className="flex items-center my-3 ">
      <img src="/tickIcon.svg" alt="" width={32} height={32} />
      <h3 className="text-2xl font-normal bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] bg-clip-text text-transparent ml-4">
        {text}
      </h3>
    </div>
  );
};
