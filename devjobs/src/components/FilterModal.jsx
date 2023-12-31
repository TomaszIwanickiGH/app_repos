import { useState } from 'react';

import useFilterModal from '../hooks/useFilterModal';

import { images } from '../constants';
import CustomInput from './CustomInput';
import Button from './Button';

import { useSearchParams } from 'react-router-dom';

const FilterModal = ({ mode }) => {
  const filterModal = useFilterModal();

  const [positionParam, setPositionParam] = useState('');
  const [locationParam, setLocationParam] = useState('');
  const [fullTimeParam, setFullTimeParam] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const initialPosition = searchParams.get('position');
  const initialLocation = searchParams.get('location');

  if (!filterModal.isOpen) {
    return null;
  }

  return (
    <div className="w-full h-screen bg-neutral-800/70 z-50 flex justify-center items-center">
      <div className="lg:px-40 md:px-20 px-8 absolute top-0 bottom-0 right-0 left-0 m-auto max-h-[350px]">
        <div className={`${mode === 'light' ? 'bg-white' : 'bg-veryDarkBlue'}  h-full rounded-xl flex flex-col py-6`}>
          <div className="flex justify-end px-6">
            <img
              src={images.iconClose}
              alt="close"
              onClick={filterModal.onClose}
            />
          </div>
          <div className="px-6">
            <CustomInput
              value={positionParam}
              setValue={(e) => setPositionParam(e.target.value)}
              mode={mode}
              image={images.iconSearch}
              placeholder={initialPosition ? initialPosition : 'Search by position...'}
            />
          </div>

          <div className="h-[1px] bg-violet" />

          <div className="px-6">
            <CustomInput
              value={locationParam}
              setValue={(e) => setLocationParam(e.target.value)}
              mode={mode}
              image={images.iconLocation}
              placeholder={initialLocation ? initialLocation : 'Filter by location...'}
            />
          </div>

          <div className="h-[1px] bg-violet" />

          <div className="flex flex-col gap-6 px-6 w-full mt-6">
            <div className="flex items-center gap-4">
              <input
                onClick={() => setFullTimeParam((prev) => !prev)}
                style={{ backgroundColor: mode === 'light' ? '#F4F6F8' : '#9DAEC2' }}
                type="checkbox"
                className={`w-[1.15rem] h-[1.15rem] `}
              />
              <p className={`font-bold text-[18px] ${mode === 'light' ? 'text-black' : 'text-white'}`}>Full Time Only</p>
            </div>
            <Button
              label="Search"
              handleClick={() => {
                setSearchParams({ position: positionParam ? positionParam : initialPosition, location: locationParam, fullTime: fullTimeParam });
                filterModal.onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
