import CustomInput from './CustomInput';
import Button from './Button';

import { images } from '../constants';

const SearchBar = () => {
  return (
    <>
      <div className="lg:flex hidden justify-between items-center bg-white rounded-md">
        <CustomInput
          image={images.iconSearch}
          placeholder="Search by title..."
        />
        <CustomInput
          image={images.iconLocation}
          border
          placeholder="Filter by location..."
        />
        <div className="flex justify-center items-center gap-4 px-6">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <p className="font-bold xl:hidden flex">Full Time</p>
            <p className="font-bold xl:flex hidden">Full Time Only</p>
          </div>
          <Button label="Search" />
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex justify-between items-center bg-white rounded-lg px-2">
        <CustomInput placeholder="Search by title..." />
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <img
              src={images.iconFilter}
              alt="filter"
            />
          </div>
          <div className="bg-violet p-3 rounded-md">
            <img
              src={images.iconSearchWhite}
              alt="search"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
