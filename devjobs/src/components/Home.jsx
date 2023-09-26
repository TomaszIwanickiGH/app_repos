import { useState } from 'react';

import SearchBar from './SearchBar';
import JobsContainer from './JobsContainer';
import Button from './Button';

import { data } from '../constants';

const Home = () => {
  const [limit, setLimit] = useState(9);
  const amountOfJobs = data.length;

  return (
    <div className="flex flex-col gap-20">
      <SearchBar />
      <JobsContainer limit={limit} />
      <div className={`mx-auto ${limit < amountOfJobs ? 'mb-20' : 'mb-4'}`}>
        {limit < amountOfJobs && (
          <Button
            label="Load More"
            handleClick={() => setLimit(limit + 3)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
