import Button from './Button';
import { images } from '../constants';

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse paddings gap-8 lg:mt-8">
      <div className="flex lg:items-start items-center flex-col gap-8 lg:max-w-[50%]">
        <div className="flex flex-col gap-2">
          <h2 className="lg:text-[60px] md:text-[45px] text-[30px] text-veryDarkViolet font-bold lg:text-start text-center">More than just shorter links</h2>
          <p className="text-[15px] text-grayishViolet lg:max-w-[70%] w-full lg:text-start text-center">Build your brand's recognition and get detailed insights on how your links are performing.</p>
        </div>
        <Button
          label="Get Started"
          rounded
          classes="w-[150px]"
        />
      </div>
      <img
        className="lg:max-w-[50%]"
        src={images.illustraionWorking}
        alt="hero"
      />
    </div>
  );
};

export default Hero;
