import CustomInput from './CustomInput';
import Button from './Button';

import { images } from '../constants';

import useFilterModal from '../hooks/useFilterModal';

const SearchBar = ({ mode }) => {
  const filterModal = useFilterModal();

  return (
    <>
      <div
        className={`lg:flex hidden justify-between items-center rounded-md
        ${mode === 'light' ? 'bg-white' : 'bg-veryDarkBlue'}`}
      >
        <CustomInput
          mode={mode}
          image={images.iconSearch}
          placeholder="Search by position..."
        />
        <CustomInput
          mode={mode}
          image={images.iconLocation}
          border
          placeholder="Filter by location..."
        />
        <div className="flex justify-center items-center gap-4 px-6">
          <div className="flex justify-center items-center gap-2">
            <input
              style={{ backgroundColor: mode === 'light' ? '#F4F6F8' : '#9DAEC2' }}
              type="checkbox"
              className={`w-[1.15rem] h-[1.15rem] `}
            />
            <p className={`font-bold xl:hidden flex ${mode === 'light' ? 'text-black' : 'text-white'}`}>Full Time</p>
            <p className={`font-bold xl:flex hidden ${mode === 'light' ? 'text-black' : 'text-white'}`}>Full Time Only</p>
          </div>
          <Button label="Search" />
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden flex justify-between items-center rounded-lg px-2
       ${mode === 'light' ? 'bg-white' : 'bg-veryDarkBlue'} `}
      >
        <CustomInput placeholder="Search by position..." />
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <img
              src={images.iconFilter}
              alt="filter"
              onClick={filterModal.onOpen}
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
