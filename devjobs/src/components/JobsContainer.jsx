import JobCard from './JobCard';

import { data } from '../constants';

const JobsContainer = ({ limit = 9, mode }) => {
  return (
    <div className="flex justify-between items-center gap-y-16 flex-wrap relative">
      {data.map((job) => {
        if (job.id <= limit)
          return (
            <JobCard
              id={job.id}
              key={job.id}
              logo={job.logo}
              logoBg={job.logoBackground}
              company={job.company}
              position={job.position}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              mode={mode}
            />
          );
      })}
    </div>
  );
};

export default JobsContainer;
