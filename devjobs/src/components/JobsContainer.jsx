import { useEffect, useState } from 'react';
import JobCard from './JobCard';

import { data } from '../constants';
import { useSearchParams } from 'react-router-dom';

const JobsContainer = ({ limit = 9, mode }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    position: '',
    location: '',
    isFullTime: '',
  });

  const filteredPosition = searchParams.get('position');
  const filteredLocation = searchParams.get('location');
  const fileredIsFullTime = searchParams.get('fullTime');

  useEffect(() => {
    setFilters({
      position: filteredPosition ? filteredPosition : '',
      location: filteredLocation ? filteredLocation : '',
      isFullTime: fileredIsFullTime === 'true' ? 'Full Time' : '',
    });
  }, [filteredPosition, filteredLocation, fileredIsFullTime]);

  return (
    <div className="flex justify-between items-center gap-y-16 flex-wrap relative">
      {data.map((job) => {
        if (job.id <= limit && job.position.toLowerCase().includes(filters.position) && job.location.toLowerCase().includes(filters.location) && job.contract.includes(filters.isFullTime)) {
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
        } //if
      })}
    </div>
  );
};

export default JobsContainer;
