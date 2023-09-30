import { useState } from 'react';

import CustomInput from './CustomInput';
import Button from './Button';

import { images } from '../constants';

import useFilterModal from '../hooks/useFilterModal';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ mode }) => {
  const filterModal = useFilterModal();

  const [positionParam, setPositionParam] = useState('');
  const [locationParam, setLocationParam] = useState('');
  const [fullTimeParam, setFullTimeParam] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const filteredPosition = searchParams.get('position');
  const filteredLocation = searchParams.get('location');
  const fileredIsFullTime = searchParams.get('fullTime');

  return (
    <>
      <div
        className={`lg:flex hidden justify-between items-center rounded-md
        ${mode === 'light' ? 'bg-white' : 'bg-veryDarkBlue'}`}
      >
        <CustomInput
          value={positionParam}
          setValue={(e) => setPositionParam(e.target.value)}
          mode={mode}
          image={images.iconSearch}
          placeholder={filteredPosition ? filteredPosition : 'Search by position...'}
        />
        <CustomInput
          value={locationParam}
          setValue={(e) => setLocationParam(e.target.value)}
          mode={mode}
          image={images.iconLocation}
          border
          placeholder={filteredLocation ? filteredLocation : 'Filter by location...'}
        />
        <div className="flex justify-center items-center gap-4 px-6">
          <div className="flex justify-center items-center gap-2">
            <input
              onClick={() => setFullTimeParam((prev) => !prev)}
              style={{ backgroundColor: mode === 'light' ? '#F4F6F8' : '#9DAEC2' }}
              type="checkbox"
              className={`w-[1.15rem] h-[1.15rem] `}
            />
            <p className={`font-bold xl:hidden flex ${mode === 'light' ? 'text-black' : 'text-white'}`}>Full Time</p>
            <p className={`font-bold xl:flex hidden ${mode === 'light' ? 'text-black' : 'text-white'}`}>Full Time Only</p>
          </div>
          <Button
            label="Search"
            handleClick={() => setSearchParams({ position: positionParam, location: locationParam, fullTime: fullTimeParam })}
          />
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden flex justify-between items-center rounded-lg px-2
       ${mode === 'light' ? 'bg-white' : 'bg-veryDarkBlue'} `}
      >
        <CustomInput
          value={positionParam}
          setValue={(e) => setPositionParam(e.target.value)}
          mode={mode}
          placeholder={filteredPosition ? filteredPosition : 'Search by position...'}
        />
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
              onClick={() => setSearchParams({ position: positionParam })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
