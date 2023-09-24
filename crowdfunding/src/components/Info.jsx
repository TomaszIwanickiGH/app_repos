const EachInfo = ({ title, subtitle, border, classes }) => (
  <div className={`flex flex-col gap-[1px] md:pr-12 md:pb-0 pb-4  ${border ? 'md:border-r-[1px] md:border-b-[0px] border-b-[1px] md:border-r-neutral-300 ' : ''} ${classes} md:w-[200px]`}>
    <h3 className="font-extrabold text-[28px] md:text-start text-center">{title}</h3>
    <p className="text-[15px] text-neutral-500 md:text-start text-center">{subtitle}</p>
  </div>
);

const Info = () => {
  return (
    <div className="w-full bg-white rounded-lg py-8 px-12">
      <div className="flex flex-col md:gap-8 gap-4">
        <div className="flex md:flex-row flex-col items-center gap-4">
          <EachInfo
            border
            title="$89,914"
            subtitle="of $100,000 backed"
          />
          <EachInfo
            classes="md:pl-12"
            border
            title="5,007"
            subtitle="total backers"
          />
          <EachInfo
            classes="md:pl-12"
            title="56"
            subtitle="days left"
          />
        </div>
        <div className="w-full bg-neutral-200 h-[15px] rounded-full">
          <div className="w-4/5 bg-cyan h-[15px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
