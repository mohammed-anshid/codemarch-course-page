import style from "./LearnJS.module.css";

const LearnJS = () => {
  return (
    <div
      className={style.learnJsContainer}
    >
      <div className={style.learnJsLeft}>
        <h1 className={`${style.learnJsHeading} forHeadingBigScreen`}>
          Learn JavaScript
        </h1>
        <p className={style.learnJsParagaph}>
          Learn how to use JavaScript — a powerful and flexible
          programminglanguage for adding website interactivity.
        </p>
        <div className={style.learnJsPointContainer} >
          <Points text="Build core programming concepts" />
          <Points text="Learn object-oriented concepts" />
          <Points text="Read and write JavaScript" />
        </div>

        <button className="text-base bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] w-full py-4 rounded font-bold">
          Enroll Now  <span><img src="" alt="" /></span>
        </button>
      </div>
      <div className="w-full h-[206px] md:h-[430px] bg-slate-500 rounded"></div>
      <h1 className={`${style.learnJsHeadingSmall} forHeadingSmallScreen`}>Learn JavaScript</h1>
    </div>
  );
};

export default LearnJS;

const Points = ({ text }) => {
  return (
    <div className="flex items-center my-3 ">
      <img src="/tickIcon.svg" alt="" className="w-5 h-5 lg:w-8 lg:h-8"  width={32} height={32} />
      <h3 className="text-sm font-bold  lg:text-2xl  bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5] bg-clip-text text-transparent ml-4">
        {text}
      </h3>
    </div>
  );
};
