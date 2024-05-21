import { data } from '../constants';

const Stat = ({ icon, title, description, margin }) => (
  <div className={`relative flex lg:items-start items-center bg-white rounded-md flex-col gap-3 p-6 ${margin}`}>
    <div className="absolute -top-[40px] flex justify-start items-center bg-darkViolet rounded-full p-4">
      <img
        src={icon}
        alt="img"
      />
    </div>
    <h3 className="text-veryDarkBlue font-bold text-[18px] mt-8">{title}</h3>
    <p className="text-grayishViolet text-[15px]">{description}</p>
  </div>
);

const Statistics = () => {
  return (
    <div className="flex flex-col gap-12 mt-6 paddings">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-veryDarkBlue lg:text-[40px] text-[26px] font-bold">Advanced Statistics</h2>
        <p className="text-grayishViolet font-medium text-center">
          Track how your links are performing across the web with <br className="lg:flex hidden" /> out advanced statistics dashboard.
        </p>
      </div>
      <div className="relative lg:flex-row flex-col flex lg:gap-4 gap-12 mt-8 z-0">
        {data.statistics.map((stat, index) => (
          <div className={`mt-${stat.id * 8}`}>
            <Stat
              key={index}
              {...stat}
            />
          </div>
        ))}
        <div className="lg:flex hidden absolute bottom-[120px] bg-cyan h-[8px] w-full z-[-1]" />
        <div className="lg:hidden flex absolute left-1/2 -translate-x-1/2 bg-cyan w-[8px] h-full z-[-1]" />
      </div>
    </div>
  );
};

export default Statistics;
