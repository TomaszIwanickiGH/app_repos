import { Link } from 'react-router-dom';

const JobCard = ({ id, logo, logoBg, company, position, postedAt, contract, location }) => {
  return (
    <Link
      to={`/details/${id}`}
      className="bg-white hover:bg-neutral-50 hover:cursor-pointer rounded-md px-4 py-8 flex flex-col gap-4 lg:w-[30%] md:w-[40%] w-full relative"
    >
      <div
        style={{ backgroundColor: logoBg }}
        className="p-4 absolute -top-8 rounded-2xl flex justify-center items-center min-h-[50px]"
      >
        <img
          src={logo}
          alt="logo"
          className="w-full"
        />
      </div>
      <div className="flex items-center gap-2 text-neutral-400 text-[14px]">
        <p>{postedAt}</p>
        <p>•</p>
        <p>{contract}</p>
      </div>
      <h3 className="font-bold text-[18px] hover:text-gray">{position}</h3>
      <p>{company}</p>
      <p className="mt-4 text-violet">{location}</p>
    </Link>
  );
};

export default JobCard;
