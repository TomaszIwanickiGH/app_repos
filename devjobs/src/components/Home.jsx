import SearchBar from './SearchBar';
import JobsContainer from './JobsContainer';

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <SearchBar />
      <JobsContainer />
    </div>
  );
};

export default Home;
