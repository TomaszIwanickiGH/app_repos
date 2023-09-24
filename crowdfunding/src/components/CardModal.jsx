import useCardModal from '../hooks/useCardModal';
import Modal from './Modal';
import { data } from '../constants';

const CardModal = () => {
  const cardModal = useCardModal();

  return (
    <Modal
      isOpen={cardModal.isOpen}
      initialSelect={cardModal.intialValue}
      onClose={cardModal.onClose}
      title="Back this project"
      subtitle="Want to support us in bringing Mastercraft Bamboo Monitor Riser in the world?"
      cards={data.cardInfos}
    />
  );
};

export default CardModal;
