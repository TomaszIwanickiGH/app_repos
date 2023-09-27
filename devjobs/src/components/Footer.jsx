import { useLocation } from 'react-router-dom';
import { data } from '../constants';
import Button from './Button';

const Footer = ({ mode }) => {
  const location = useLocation();
  const id = location.pathname[location.pathname.length - 1];
  const chosenJob = data.filter((job) => job.id === parseInt(id));

  return (
    <div
      className={`w-full lg:px-40 md:px-20 px-8 py-6 
      ${mode === 'light' ? 'bg-white' : 'bg-veryDarkBlue'}`}
    >
      <div className="flex sm:flex-row flex-col gap-6 justify-between items-center lg:w-3/5 w-full mx-auto">
        {chosenJob.map((job) => (
          <div
            key={job.id}
            className="flex flex-col gap-4"
          >
            <h3
              className={`font-bold text-[18px] sm:text-start text-center
              ${mode === 'light' ? 'text-black' : 'text-white'}`}
            >
              {job.position}
            </h3>
            <p className="text-[15px] text-gray sm:text-start text-center">So Digital Inc.</p>
          </div>
        ))}
        <Button label="Apply Now" />
      </div>
    </div>
  );
};

export default Footer;
