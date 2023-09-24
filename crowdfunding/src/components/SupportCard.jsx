import Button from './Button';
import useCompletedModal from '../hooks/useCompletedModal';
import useCardModal from '../hooks/useCardModal';

const SupportCard = ({ title, pledge, description, left, handleClick, selectedCard }) => {
  const completedModal = useCompletedModal();
  const cardModal = useCardModal();

  return (
    <div
      className={`w-full border-neutral-300 rounded-lg
      ${left === 0 ? 'opacity-50 hover:cursor-not-allowed' : ''}
      ${selectedCard === title ? 'border-[2px] border-cyan' : 'border-[1px] border-neutral-300'}`}
    >
      <div className={`${selectedCard === title ? 'border-b-[1px] border-b-neutral-300' : 'border-b-[0px]'} `}>
        <div
          onClick={handleClick}
          className={`flex md:flex-row flex-col items-start gap-6 p-6 
          ${left === 0 ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'} `}
        >
          <div className={`md:flex hidden justify-center items-center w-[21px] h-[21px] rounded-full border-[1px] border-neutral-400 hover:border-cyan ${left !== 0 ? 'hover:cursor-pointer' : 'hover:cursor-not-allowed'}`}>
            <div className={`w-[8px] h-[8px] ${selectedCard === title && left !== 0 ? 'bg-cyan' : 'bg-transparent'} rounded-full`} />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex md:justify-between md:items-start items-center md:gap-0 gap-4">
              <div className={`md:hidden flex justify-center items-center w-[21px] h-[21px] rounded-full border-[1px] border-neutral-400 hover:border-cyan ${left !== 0 ? 'hover:cursor-pointer' : 'hover:cursor-not-allowed'}`}>
                <div className={`w-[8px] h-[8px] ${selectedCard === title && left !== 0 ? 'bg-cyan' : 'bg-transparent'} rounded-full`} />
              </div>
              <div className="flex md:flex-row flex-col md:gap-4 gap-2">
                <h4 className={`font-bold ${left !== 0 ? 'hover:text-cyan' : ''}`}>{title}</h4>
                {pledge && <p className="text-[15px] text-cyan">Pledge ${pledge} or more</p>}
              </div>
              <div className="md:flex hidden gap-2 items-center md:justify-center">
                <span className="font-bold text-[20px]">{left}</span>
                {(left || left === 0) && <p className="text-neutral-500 text-[15px]">left</p>}
              </div>
            </div>
            <p className="md:text-[15px] text-neutral-500">{description}</p>
            <div className="md:hidden flex gap-2 items-center md:justify-center">
              <span className="font-bold text-[20px]">{left}</span>
              {(left || left === 0) && <p className="text-neutral-500">left</p>}
            </div>
          </div>
        </div>
      </div>
      {selectedCard === title && pledge && (
        <div className="flex md:flex-row flex-col justify-between items-center p-6 md:gap-0 gap-4">
          <p className="text-neutral-500">Your pledge</p>
          <div className="flex gap-4">
            <div className="flex justify-center items-center border-neutral-300 border-2 hover:border-cyan rounded-full py-3 sm:px-8 px-4 text-black hover:font-bold hover:cursor-pointer md:w-[120px] w-[100px]">
              <p className="font-bold text-neutral-400">
                $ <span className="text-black">{pledge}</span>
              </p>
            </div>
            <Button
              handleClick={() => {
                completedModal.onOpen();
                window.scrollTo(0, 0);
                cardModal.onClose();
              }}
              label="Continue"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportCard;
