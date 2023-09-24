import Button from './Button';

const Card = ({ title, pledge, description, left, handleClick }) => {
  return (
    <div className={`w-full border-[1px] border-neutral-300 rounded-lg p-6 ${left === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div className="flex flex-col gap-6">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
          <h4 className="font-bold">{title}</h4>
          <p className="text-[15px] text-cyan">Pledge ${pledge} or more</p>
        </div>
        <p className="md:text-[15px] text-neutral-500">{description}</p>
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-4">
          <div className="flex gap-2 items-center md:justify-center">
            <span className="font-bold text-[28px]">{left}</span>
            <p className="text-neutral-500">left</p>
          </div>
          {left !== 0 ? (
            <Button
              handleClick={handleClick}
              disabled={left === 0}
              label="Select Reward"
            />
          ) : (
            <button
              disabled
              onClick={() => console.log('d')}
              className="bg-cyan rounded-full py-3 sm:px-8 px-4 text-white hover:cursor-not-allowed"
            >
              Select Reward
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
