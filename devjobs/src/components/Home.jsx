import { useState } from 'react';

import JobsContainer from './JobsContainer';
import Button from './Button';

import { data } from '../constants';

const Home = ({ mode }) => {
  const [limit, setLimit] = useState(9);
  const amountOfJobs = data.length;

  return (
    <div className="flex flex-col gap-20">
      <JobsContainer
        limit={limit}
        mode={mode}
      />
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
