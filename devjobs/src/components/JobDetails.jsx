import { useParams } from 'react-router-dom';
import Button from './Button';

import { data } from '../constants';

const JobDetails = () => {
  const { id } = useParams();
  const chosenJob = data.filter((job) => job.id === parseInt(id));

  return (
    <>
      <div className="flex flex-col gap-12 lg:w-3/5 w-full mx-auto mb-20">
        {chosenJob.map((job) => (
          <div
            className="flex rounded-sm bg-white w-full"
            key={job.id}
          >
            <div
              style={{ backgroundColor: job.logoBackground }}
              className="flex justify-center items-center w-[140px] px-4"
            >
              <img
                className="w-full"
                src={job.logo}
                alt=""
              />
            </div>
            <div className="flex justify-between items-center w-full p-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold">{job.company}</h3>
                <p className="text-[15px] text-neutral-500">{job.company.toLowerCase()}.com</p>
              </div>
              <Button
                label="Company Site"
                light
              />
            </div>
          </div>
        ))}
        {chosenJob.map((job) => (
          <div
            className="flex flex-col bg-white rounded-lg gap-8 p-8"
            key={job.id}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-2 text-neutral-500 text-[14px]">
                  <p>{job.postedAt}</p>
                  <p>•</p>
                  <p>{job.contract}</p>
                </div>
                <h2 className="font-bold text-[28px]">{job.position}</h2>
                <p className="text-violet font-bold text-[15px]">{job.location}</p>
              </div>
              <Button label="Apply Now" />
            </div>

            <p className="leading-6 text-neutral-500">{job.description}</p>

            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-[20px]">Requirements</h3>
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
              <h3 className="font-bold text-[20px]">What You Will do</h3>
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
      <div className="">sdddd</div>
    </>
  );
};

export default JobDetails;
