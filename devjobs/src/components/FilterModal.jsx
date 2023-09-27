import useFilterModal from '../hooks/useFilterModal';

import { images } from '../constants';
import CustomInput from './CustomInput';
import Button from './Button';

const FilterModal = ({ mode }) => {
  const filterModal = useFilterModal();

  if (!filterModal.isOpen) {
    return null;
  }

  return (
    <div className="w-full h-screen bg-neutral-800/70 z-50 flex justify-center items-center">
      <div className="lg:px-40 md:px-20 px-8 absolute top-0 bottom-0 right-0 left-0 m-auto max-h-[250px]">
        <div className=" bg-white h-full rounded-xl flex flex-col py-6">
          <div className="flex justify-end px-6">
            <img
              src={images.iconClose}
              alt="close"
              onClick={filterModal.onClose}
            />
          </div>
          <div className="px-6">
            <CustomInput
              image={images.iconLocation}
              placeholder="Filterby location..."
            />
          </div>

          <div className="h-[1px] bg-violet" />

          <div className="flex flex-col gap-4 px-6 w-full mt-6">
            <div className="flex items-center gap-4">
              <input
                style={{ backgroundColor: mode === 'light' ? '#F4F6F8' : '#9DAEC2' }}
                type="checkbox"
                className={`w-[1.15rem] h-[1.15rem] `}
              />
              <p className={`font-bold text-[18px] ${mode === 'light' ? 'text-black' : 'text-white'}`}>Full Time Only</p>
            </div>
            <Button label="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
