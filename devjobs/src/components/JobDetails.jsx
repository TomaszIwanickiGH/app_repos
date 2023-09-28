import { useParams } from 'react-router-dom';
import Button from './Button';

import { data } from '../constants';

const JobDetails = ({ mode }) => {
  const { id } = useParams();
  const chosenJob = data.filter((job) => job.id === parseInt(id));

  return (
    <>
      <div className="flex flex-col gap-12 lg:w-3/5 w-full mx-auto mb-12">
        {chosenJob.map((job) => (
          <div
            className={`relative flex sm:flex-row flex-col rounded-sm w-full ${mode === 'light' ? 'bg-white' : 'bg-veryDarkBlue'}`}
            key={job.id}
          >
            <div
              style={{ backgroundColor: job.logoBackground }}
              className="flex justify-center items-center sm:w-[140px] sm:min-w-[140px] min-w-[40px] sm:min-h-auto min-h-[40px] px-4 sm:relative absolute  sm:rounded-none rounded-2xl sm:left-0 sm:top-0 left-[42%] -top-4"
            >
              <img
                className="w-full"
                src={job.logo}
                alt="logo"
              />
            </div>
            <div className="flex sm:flex-row flex-col justify-between items-center w-full p-6 sm:mt-0 mt-4 sm:gap-0 gap-4">
              <div className="flex flex-col sm:gap-4 gap-2">
                <h3
                  className={`text-[20px] font-bold sm:text-start text-center 
                  ${mode === 'light' ? 'text-black' : 'text-white'}`}
                >
                  {job.company}
                </h3>
                <p className="text-[15px] text-gray sm:text-start text-center">{job.company.toLowerCase()}.com</p>
              </div>
              <Button
                label="Company Site"
                mode={mode}
              />
            </div>
          </div>
        ))}
        {chosenJob.map((job) => (
          <div
            className={`flex flex-col rounded-lg gap-8 p-8 
            ${mode === 'light' ? 'bg-white' : 'bg-veryDarkBlue'}`}
            key={job.id}
          >
            <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-6">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-2 text-neutral-500 text-[14px]">
                  <p>{job.postedAt}</p>
                  <p>•</p>
                  <p>{job.contract}</p>
                </div>
                <h2 className={`font-bold text-[28px] ${mode === 'light' ? 'text-black' : 'text-white'}`}>{job.position}</h2>
                <p className="text-violet font-bold text-[15px]">{job.location}</p>
              </div>
              <Button label="Apply Now" />
            </div>

            <p className="leading-6 text-neutral-500">{job.description}</p>

            <div className="flex flex-col gap-6">
              <h3 className={`font-bold text-[20px] ${mode === 'light' ? 'text-black' : 'text-white'}`}>Requirements</h3>
              <p className="leading-6 text-neutral-500">{job.requirements.content}</p>
              <div className="flex flex-col gap-4">
                {job.requirements.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 justify-start items-center"
                  >
                    <p className="text-[30px] text-violet">•</p>
                    <p className="text-neutral-500">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className={`font-bold text-[20px] ${mode === 'light' ? 'text-black' : 'text-white'}`}>What You Will do</h3>
              <p className="leading-6 text-neutral-500">{job.role.content}</p>
              <div className="flex flex-col gap-4">
                {job.role.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 justify-start"
                  >
                    <p className="text-[16px] font-bold text-violet">{index + 1}</p>
                    <p className="text-neutral-500">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobDetails;
