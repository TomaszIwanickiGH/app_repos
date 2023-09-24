import useCompletedModal from '../hooks/useCompletedModal';
import Modal from './Modal';

import { images } from '../constants';
import Button from './Button';

const CompletedModal = () => {
  const completedModal = useCompletedModal();

  const bodyContent = (
    <div className="md:w-[30%] w-full mx-auto flex flex-col gap-4 rounded-lg bg-white p-6 max-h-[600px]`">
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src={images.iconCheck}
          alt="check"
        />
        <div className="flex flex-col gap-2 mt-4 mb-2">
          <h2 className="font-bold text-center text-[20px]">Thanks for your support!</h2>
          <p className="text-[15px] text-neutral-500 text-center">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        </div>
        <Button
          label="Got it!"
          handleClick={() => completedModal.onClose()}
        />
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={completedModal.isOpen}
      onClose={completedModal.onClose}
      body={bodyContent}
    />
  );
};

export default CompletedModal;
