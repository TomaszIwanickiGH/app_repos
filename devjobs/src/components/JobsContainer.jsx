import { useEffect, useState } from 'react';
import JobCard from './JobCard';

import { data } from '../constants';
import { useSearchParams } from 'react-router-dom';
import Button from './Button';

const JobsContainer = ({ mode }) => {
  const [limit, setLimit] = useState(9);
  const amountOfJobs = data.length;

  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    position: '',
    location: '',
    isFullTime: '',
  });

  const filteredPosition = searchParams.get('position');
  const filteredLocation = searchParams.get('location');
  const fileredIsFullTime = searchParams.get('fullTime');

  const filteredArray = data.filter((job) => job.position.toLowerCase().includes(filters.position) && job.location.toLowerCase().includes(filters.location) && job.contract.includes(filters.isFullTime));

  useEffect(() => {
    setFilters({
      position: filteredPosition ? filteredPosition : '',
      location: filteredLocation ? filteredLocation : '',
      isFullTime: fileredIsFullTime === 'true' ? 'Full Time' : '',
    });
    if (searchParams.size !== 0) {
      setLimit(amountOfJobs);
    } else {
      setLimit(9);
    }
  }, [filteredPosition, filteredLocation, fileredIsFullTime, filteredArray.length]);

  return (
    <>
      <div className={`w-full grid ${filteredArray.length === 0 ? 'grid-cols-1' : 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1'} gap-y-16 gap-x-8`}>
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
          }
        })}
        {filteredArray.length === 0 && (
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h2 className="font-bold text-[24px]">No Jobs Found</h2>
            <p className="text-gray">Try using different filters.</p>
          </div>
        )}
      </div>
      <div className={`mx-auto ${limit < amountOfJobs ? 'mb-20' : 'mb-4'}`}>
        {limit < amountOfJobs && (
          <Button
            label="Load More"
            handleClick={() => setLimit(limit + 3)}
          />
        )}
      </div>
    </>
  );
};

export default JobsContainer;
