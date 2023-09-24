import Card from './Card';

import { data } from '../constants';
import useCardModal from '../hooks/useCardModal';

const About = () => {
  const cardModal = useCardModal();

  return (
    <div
      id="about"
      className="w-full bg-white rounded-lg py-8 px-12"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-[20px]">About this project</h3>
          <p className="text-neutral-500 font-[500]">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the
            task at hand.
          </p>
          <p className="text-neutral-500 font-[500]">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        </div>
        <div className="flex flex-col gap-6">
          {data.cardInfos.map((card) => (
            <Card
              handleClick={() => {
                cardModal.setValue(card.title);
                console.log(cardModal.initialValue);
                cardModal.onOpen();
              }}
              key={card.title}
              title={card.title}
              pledge={card.pledge}
              description={card.description}
              left={card.left}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
