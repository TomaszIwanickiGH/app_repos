import { Link } from 'react-router-dom';

const JobCard = ({ id, logo, logoBg, company, position, postedAt, contract, location, mode }) => {
  return (
    <Link
      to={`/details/${id}`}
      className={`hover:cursor-pointer rounded-md px-4 py-8 flex flex-col gap-4 w-full relative
      ${mode === 'light' ? 'bg-white hover:bg-neutral-50' : 'bg-veryDarkBlue hover:bg-veryDarkBlue/80'} `}
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
      <h3
        className={`font-bold text-[18px] hover:text-gray
        ${mode === 'light' ? 'text-black' : 'text-white'} `}
      >
        {position}
      </h3>
      <p className={`${mode === 'light' ? 'text-neutral-500' : 'text-neutral-500'} `}>{company}</p>
      <p className="mt-4 text-violet">{location}</p>
    </Link>
  );
};

export default JobCard;
