import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();

  return <div className="flex flex-col gap-20 lg:w-1/2 w-full mx-auto">JobDetails {id}</div>;
};

export default JobDetails;
