import { images } from '../constants';

import SupportCard from './SupportCard';
import useCardModal from '../hooks/useCardModal';

const Modal = ({ isOpen, onClose, title, subtitle, cards = [], body = '' }) => {
  const cardModal = useCardModal();

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="min-h-[4000px] bg-neutral-800/70 w-full">
        <div className={`w-full lg:px-0 md:px-20 px-8 fixed md:right-0 md:left-0 mx-auto md:mt-12 mt-20`}>
          {!body ? (
            <div className={`lg:w-1/2 w-full mx-auto flex flex-col gap-4 rounded-lg bg-white p-6 max-h-[600px] overflow-y-scroll`}>
              <div className="flex justify-end">
                <img
                  onClick={onClose}
                  src={images.iconCloseModal}
                  alt="close"
                  className="hover:cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="font-bold text-[20px]">{title}</h2>
                <p className="text-[15px] text-neutral-500">{subtitle}</p>
              </div>
              <SupportCard
                selectedCard={cardModal.initialValue}
                handleClick={() => cardModal.setValue('Pledge with no reward')}
                title="Pledge with no reward"
                description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
              />
              {cards.map((card) => (
                <SupportCard
                  key={card.title}
                  selectedCard={cardModal.initialValue}
                  handleClick={() => {
                    if (card.left !== 0) cardModal.setValue(card.title);
                  }}
                  {...card}
                />
              ))}
            </div>
          ) : (
            body
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
