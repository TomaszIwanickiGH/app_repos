import { useState } from 'react';
import Button from '../components/Button';
import { images } from '../constants';
import useCardModal from '../hooks/useCardModal';

const Header = () => {
  const cardModal = useCardModal();

  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="w-full bg-white rounded-lg relative py-8 px-12">
      <img
        src={images.logoMasterCraft}
        alt="logo"
        className="absolute -top-8 bottom-0 right-0 left-0 mx-auto"
      />
      <div className="flex flex-col justify-center items-center gap-8 mt-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-[900] text-center text-[28px]">Mastercraft Bamboo Monitor Riser</h2>
          <p className="text-neutral-500 text-[15px] text-center">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <Button
            handleClick={() => {
              cardModal.setValue('Pledge with no reward');
              cardModal.onOpen();
            }}
            label="Back this project"
          />
          <div
            className="flex items-center gap-4 sm:pr-4 pr-0 bg-neutral-200 rounded-full hover:cursor-pointer"
            onClick={() => setIsBookmarked((prev) => !prev)}
          >
            <img
              src={isBookmarked ? images.iconBookmarked : images.iconBookmark}
              alt="bookmark"
            />
            <p className={`${isBookmarked ? 'text-darkCyan' : 'text-neutral-700'} font-semibold hover:text-white sm:flex hidden`}>{!isBookmarked ? 'Bookmark' : 'Bookmarked'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
