import Button from './Button';
import { images } from '../constants';

const Boost = () => {
  return (
    <div className="flex flex-col items-center bg-darkViolet relative">
      <img
        src={images.bgBoostDektop}
        alt="boost"
        className="lg:flex hidden w-full h-[200px]"
      />
      <img
        src={images.bgBoostMobile}
        alt="boost"
        className="lg:hidden flex w-full h-[170px]"
      />
      <div className="absolute flex flex-col justify-center items-center gap-4 top-1/2 -translate-y-1/2">
        <h2 className="text-white lg:text-[36px] md:text-[30px] text-[26px] font-semibold">Boost your links today</h2>
        <Button
          label="Get Started"
          rounded
          classes="w-[140px]"
        />
      </div>
    </div>
  );
};

export default Boost;
