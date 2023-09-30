import JobsContainer from './JobsContainer';
import Button from './Button';

const Home = ({ mode }) => {
  return (
    <div className="flex flex-col gap-20">
      <JobsContainer mode={mode} />
    </div>
  );
};

export default Home;
