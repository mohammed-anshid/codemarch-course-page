const MeetYourMentor = () => {
  return (
    <div className="forBorderPadding bg-gradient-to-b from-[#D7CEA5] to-[#3D8361]  rounded-xl w-full mt-[7.5rem]">
      <div className="flex flex-col-reverse lg:flex-row  w-full bg-gradient-to-b from-[#013229] to-[#011F1A] rounded-xl ">
        <div className=" p-2 lg:w-3/5 lg:p-20 ">
          <h3 className="font-darker-grotesque font-extrabold text-4xl text-[#3D8361]">
            Meet your Mentor
          </h3>
          <h1 className="font-darker-grotesque text-7xl text-[#EDF1E4]">
            John Deo
          </h1>
          <div className="mt-8 forHeadingSmallScreen ">
            <img src="/mentoIcons.svg" alt=""  />
            {/* <h1>SDE, Google </h1> */}
          </div>
          <p className="mt-9 text-[#D7CEA5] leading-10 font-normal text-base font-dm-sans">
            You interact with JavaScript code all the time — you just might not
            realize it. It powers dynamic behavior on websites (like this one)
            and plays an important role in many fields, like front- and back-end
            engineering, game and mobile development, virtual reality, and more.
            In this course, you’ll learn JavaScript fundamentals that will be
            helpful as you dive deeper into more advanced topics.
          </p>
          <div className="mt-8 forHeadingBigScreen">
            <img src="/mentoIcons.svg" alt="" />
          </div>
        </div>

        <div className=" lg:w-2/5  h-[192px] lg:h-[565px] rounded  flex justify-center lg:items-center py-2">
          <div className="bg-slate-300 w-full  mx-2 lg:w-[80%] lg:h-[80%] lg:m-auto rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default MeetYourMentor;
